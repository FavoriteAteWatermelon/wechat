<template>
  <div class="language">
    <TitleBar :title='titleBarInfo.title' :rightBtn='titleBarInfo.rightBtn'/>
    <BScroll class="scroll">
      <div>
       <div @click="select(index)" class="select-item" v-for="(item,index) in LanguageSelectList" :key="item">
         <span>{{item}}</span>
         <i v-if="selectIndex === index" class="iconfont icon-select"></i>
         </div>
      </div>
    </BScroll>
  </div>
</template>

<script>
import TitleBar from '../../components/titleBar'
import BScroll from '../../components/base/scroll'
import LanguageSelectList from '../../data/languageSelectList'
export default {
  data () {
    return {
      selectIndex: 0,
      LanguageSelectList: LanguageSelectList,
      titleBarInfo: {
        title: '多语言',
        rightBtn: true
      }
    }
  },
  methods: {
    select (i) {
      this.selectIndex = i
    }
  },
  components: {
    TitleBar,
    BScroll
  }
}
</script>

<style lang="scss" scoped>
.language {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  transition: all 0.3s;
  .scroll{
    position: absolute;
      top: 50px;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
  }
  .select-item{
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    margin-left: 20px;
    border-bottom: 1px solid #eee;
    i{
      margin-right: 20px;
      color: #07be6a;
      font-size: 20px;
    }
  }
}
</style>
