<template>
  <div>
    <div class="login">
      <div class="language" @click="toLanguage">简体中文</div>
      <div class="operate">
        <div @click="toLogin" class="login-btn">登陆</div>
        <div @click="toRegister" class="register-btn">注册</div>
      </div>
    </div>
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    toLogin () {
      this.$router.push('/post/login')
    },
    toLanguage () {
      this.$router.push('/post/language')
    },
    toRegister () {
      this.$router.push('/post/register')
    }
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
.login{
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background:url('../../assets/login/loginBackground.png') center center no-repeat ;
  background-size: cover;
  .language{
    position: absolute;
    padding: 10px;
    top: 20px;
    right: 10px;
    font-size: 13px;
    color: #eee;
    letter-spacing: 1px;
    user-select: none;
    &:active{
      color: #aaa;
    }
  }
  .operate{
    position: absolute;
    height: 60px;
    right: 0;
    left: 0;
    bottom: 10px;
    display: flex;
    user-select: none;
    align-items: center;
    justify-content:space-around;
    padding: 0 10px;
    text-align: center;
    .login-btn{
      flex: 1;
      margin-right: 10px;
      border-radius: 4px;
      height: 40px;
      line-height: 40px;
      user-select: none;
      color: #57be6a;
      background: #f2f2f2;
      &:active{
        background: #aaa;
      }
    }
    .register-btn{
      flex: 1;
      border-radius: 4px;
      height: 40px;
      line-height: 40px;
      color: #f2f2f2;
      background: #57be6a;
      &:active{
        background: #07be6a;
      }
    }
  }
}
</style>
