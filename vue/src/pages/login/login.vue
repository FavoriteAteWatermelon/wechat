<template>
  <div class="login">
    <TitleBar class="titleBar" :title='titleBarInfo.title' :backgroundColor='titleBarInfo.backgroundColor' :rightBtn='titleBarInfo.rightBtn' :backBtn='titleBarInfo.backBtn' />
    <div v-if="isTel">
      <div class="title">手机号登录</div>
      <div class="area" @click="toTelCode">国家/地区 <span>中国大陆 (+86)</span></div>
      <div class="tel"><span>手机号</span><input v-model="tel" type="number" placeholder="请填写手机号"></div>
      <div class="otherWay" @click="switchLogin"><a href="#">用微信号/手机号/邮箱登录</a></div>
      <div class="next" @click="next"  :class="[tel?'nextActive':'']">下一步</div>
    </div>
    <div v-else>
      <div class="title">微信号/QQ号/邮箱登录</div>
      <div class="tel" style="margin-top:40px"><span>账号</span><input placeholder="请填写微信号/QQ号/邮箱" type="text"></div>
      <div class="tel"><span>密码</span><input type="number" placeholder="请填写密码"></div>
      <div class="otherWay" @click="switchLogin"><a href="#">手机号登录</a></div>
      <div class="next" >登录</div>
    </div>
    <div class="helper"><span>找回密码</span><span class="line">|</span> <span>紧急冻结</span><span class="line">|</span><span @click="showMoreSelect">更多</span></div>
    <!-- <AactionSheet></AactionSheet> -->
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import TitleBar from '../../components/ui/titleBar'
import AactionSheet from '../../components/ui/android/aactionSheet'
export default {
  data () {
    return {
      tel: '',
      isTel: true,
      titleBarInfo: {
        title: '',
        rightBtn: false,
        backBtn: 'icon-close',
        backgroundColor: '#ffffff'
      }
    }
  },
  methods: {
    showMoreSelect () {
    },
    switchLogin () {
      this.isTel = !this.isTel
    },
    toTelCode () {
      this.$router.push('/post/login/code')
    },
    next () {
      if (this.tel) {
        this.$router.push('/tabbar')
      }
    }
  },
  components: {
    TitleBar,
    AactionSheet
  }
}
</script>

<style lang="scss" scoped>
.slide-enter-active, .slide-leave-active{
  /* opacity: 1; */
  transform: translateX(100%);
}
.slide-enter, .slide-leave-to{
  transform: translateX(100%);
}
.login {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  transition: all 0.3s;
  font-size: 14px;
  letter-spacing: 1px;
  color: #333;
  .title {
    margin: 30px 0 0 10px;
    font-size: 24px;
  }
  .area {
    margin: 30px 5px 0 5px;
    height: 40px;
    line-height: 40px;
    padding-left: 5px;
    font-size: 14px;
    letter-spacing: 1px;
    &:active {
      background: #eee;
    }
    span {
      margin-left: 20px;
      color:#07be6a;
    }
  }
  .tel {
    margin:25px 10px 0 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    span{
      margin-right: 40px;
    }
    input{
      border: none;
      outline: none;
    }
  }
  .otherWay {
    margin: 25px 10px;
    a{
      color: #676d96;
    }
  }
  .next {
    margin: 30px 10px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #999;
    background: #eee;
    border-radius: 5px;
  }
  .nextActive{
    background: #07be6a;
    color: #fff;
  }
  .helper {
    position: absolute;
    height: 40px;
    line-height: 40px;
    bottom: 0;
    left: 60px;
    right: 60px;
    display: flex;
    justify-content: space-around;
    color: #676d96;
    .line {
      font-size: 16px;
      color: #eee;
    }
  }

}
</style>
