<template>
    <div class="login-tel-code" >
     <TitleBar class="titleBar" @search="search" :title="TitleBarInfo.title" :backgroundColor="TitleBarInfo.backgroundColor" :rightIconBtn="TitleBarInfo.rightIconBtn" />
     <div v-show="showFixedTitle" ref="fixedTitle" class="fixed-title">{{this.list[this.activeIndex]['title']}}</div>
     <Scroll ref="scroll" class="scroll" :probeType="scrollInfo.probeType" :listenScroll="scrollInfo.listenScroll" @scroll="scroll">
       <ul>
         <li ref="listGroup" v-for="(item, index) in normalizeList" :key="index">
           <div class="title">{{item.title}}</div>
           <ul>
             <li @click="selectItem(area)" class="item" v-for="(area, i) in item.items" :key="i" >
               <span>{{area.cn}}</span> <span class="code">{{area.code}}</span>
               </li>
           </ul>
         </li>
       </ul>
     </Scroll>
     <div class="alphabetNavBar">
       <ul  @touchstart="onShortcutTouchStart" @touchmove.stop.prevent="onShortcutTouchStart">
        <li><i class="iconfont icon-shangjiantou"></i></li>
        <li><i class="iconfont icon-wujiaoxing"></i></li>
        <li v-for="(alphabet, index) in list" :class="[activeIndex === index ? 'activeAlphabetStyle' : '']" :key="index">
          {{alphabet.title}}
        </li>
        <li>#</li>
       </ul>
     </div>
    </div>
</template>

<script>
import TitleBar from '../../../components/ui/titleBar'
import Scroll from '../../../components/base/scroll'
import CountryCodeAndPhoneCodePinyin from '../../../data/coutryCodeAndPhoneCodePinyin'
const ALPHABET_ITEM_HEIGHT = 18
export default {
  data () {
    return {
      normalizeList: [],
      showFixedTitle: true,
      activeIndex: 0,
      scrollInfo: {
        probeType: 3,
        listenScroll: true
      },
      TitleBarInfo: {
        title: '选择国家和地区代码',
        backgroundColor: '#fff',
        rightIconBtn: true,
        rightBtnIcon: 'icon-search'
      }
    }
  },
  created () {
    this.list = [
      {title: 'A', items: []},
      {title: 'B', items: []},
      {title: 'C', items: []},
      {title: 'D', items: []},
      {title: 'E', items: []},
      {title: 'F', items: []},
      {title: 'G', items: []},
      {title: 'H', items: []},
      {title: 'J', items: []},
      {title: 'K', items: []},
      {title: 'L', items: []},
      {title: 'M', items: []},
      {title: 'N', items: []},
      {title: 'P', items: []},
      {title: 'R', items: []},
      {title: 'S', items: []},
      {title: 'T', items: []},
      {title: 'W', items: []},
      {title: 'X', items: []},
      {title: 'Y', items: []},
      {title: 'Z', items: []}
    ]
    this.alphabetStartY = 0
    this.scrollItemHeightList = [0]
    this._initData()
  },
  mounted () {
    this.initRenderedInfo()
  },
  methods: {
    selectItem (area) {
      this.$emit('selectCode', area)
      this.$router.back()
    },
    search () {
      console.log(this.scrollY)
    },
    initRenderedInfo () {
      // 计算初始化alphabet的Y顶点的值
      this.alphabetStartY = (document.documentElement.clientHeight - (this.list.length + 3) * ALPHABET_ITEM_HEIGHT) / 2
      // 计算scroll 子元素高度list得到scrollItemHeightList 高度
      let initHeight = 0
      this.list.forEach((item, index) => {
        initHeight += this.$refs.listGroup[index].clientHeight
        this.scrollItemHeightList.push(initHeight)
      })
    },
    onShortcutTouchStart (e) {
      // 计算初始的位置
      let scrollIndex = Math.ceil((e.changedTouches[0]['clientY'] - this.alphabetStartY) / ALPHABET_ITEM_HEIGHT)
      this._scrollToIndex(scrollIndex)
    },
    scroll (position) {
      if (position.y > 0) {
        this.showFixedTitle = false
      } else {
        this.showFixedTitle = true
      }
      for (let i = 0; i <= this.scrollItemHeightList.length; i++) {
        if (-position.y >= this.scrollItemHeightList[i] - 30 && -position.y < this.scrollItemHeightList[i]) {
          let diffY = -position.y - this.scrollItemHeightList[i] + 30
          this.$refs.fixedTitle.style.transform = `translate3d(0,${-diffY}px,0)`
        } else if (-position.y >= (this.scrollItemHeightList[i]) && -position.y < this.scrollItemHeightList[i + 1]) {
          this.activeIndex = i
          this.$refs.fixedTitle.style.transform = `translate3d(0,0,0)`
        }
      }
    },
    _initData () {
      CountryCodeAndPhoneCodePinyin.forEach((item) => {
        if (item.pinYinInitial === 'A') {
          this.list[0]['items'].push(item)
        } else if (item.pinYinInitial === 'B') {
          this.list[1]['items'].push(item)
        } else if (item.pinYinInitial === 'C') {
          this.list[2]['items'].push(item)
        } else if (item.pinYinInitial === 'D') {
          this.list[3]['items'].push(item)
        } else if (item.pinYinInitial === 'E') {
          this.list[4]['items'].push(item)
        } else if (item.pinYinInitial === 'F') {
          this.list[5]['items'].push(item)
        } else if (item.pinYinInitial === 'G') {
          this.list[6]['items'].push(item)
        } else if (item.pinYinInitial === 'H') {
          this.list[7]['items'].push(item)
        } else if (item.pinYinInitial === 'J') {
          this.list[8]['items'].push(item)
        } else if (item.pinYinInitial === 'K') {
          this.list[9]['items'].push(item)
        } else if (item.pinYinInitial === 'L') {
          this.list[10]['items'].push(item)
        } else if (item.pinYinInitial === 'M') {
          this.list[11]['items'].push(item)
        } else if (item.pinYinInitial === 'N') {
          this.list[12]['items'].push(item)
        } else if (item.pinYinInitial === 'P') {
          this.list[13]['items'].push(item)
        } else if (item.pinYinInitial === 'R') {
          this.list[14]['items'].push(item)
        } else if (item.pinYinInitial === 'S') {
          this.list[15]['items'].push(item)
        } else if (item.pinYinInitial === 'T') {
          this.list[16]['items'].push(item)
        } else if (item.pinYinInitial === 'W') {
          this.list[17]['items'].push(item)
        } else if (item.pinYinInitial === 'X') {
          this.list[18]['items'].push(item)
        } else if (item.pinYinInitial === 'Y') {
          this.list[19]['items'].push(item)
        } else if (item.pinYinInitial === 'Z') {
          this.list[20]['items'].push(item)
        }
      })
      this.normalizeList = this.list
    },
    _scrollToIndex (index) {
      if (index - 3 <= 0) {
        index = 0
      } else if (index - 3 >= this.list.length) {
        index = this.list.length - 1
      } else {
        index = index - 3
      }
      this.activeIndex = index
      this.$refs.scroll.scrollToElement(this.$refs.listGroup[index], 0)
    }
  },
  components: {
    TitleBar,
    Scroll
  }
}
</script>

<style lang="scss" scoped>
.login-tel-code{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  transition: all 0.3s;
  .titleBar {
    z-index: 200;
  }
  .fixed-title {
    position: absolute;
    z-index: 1;
    top: 50px;
    left: 0;
    right: 0;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    background-color: #eee;
  }
  .scroll{
    position: absolute;
    top: 50px;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    .title {
      padding: 0 10px;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      background-color: #eee;
    }
    .item {
      display: flex;
      justify-content: space-between;
      margin-left: 8px;
      padding: 0 16px 0 8px;
      height: 60px;
      line-height: 60px;
      font-size: 16px;
      .code {
        margin-right: 20px;
        font-size: 13px;
        color: #999;
      }
    }
  }
  .alphabetNavBar {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 20px;
    text-align: center;
    font-size: 11px;
    ul {
      position: absolute;
      top: 50%;
      width: 20px;
      transform:  translateY( -50%);
      .activeAlphabetStyle {
        border-radius: 50%;
        background: #07be6a;
        color: #fff;
      }
      li {
        position: relative;
        padding: 3px 5px;
        i {
          font-size: 10px!important;
        }
      }
    }
  }
}
</style>
