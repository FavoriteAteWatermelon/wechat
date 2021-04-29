<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import {cameraTakePicture} from '../static/cordovaplugin'
export default {
  name: 'App',
  data () {
    return {
      user: '',
      password: '',
      isBack: false,
      timer: null,
      isLogin: false
    }
  },
  methods: {
    camera () {
      // console.log(this.$refs.hello)
      // cameraTakePicture()
    },
    /* eslint-disable */ 
    doLogin () {
      this.isLogin = localStorage.getItem('login') ? true : false
      // this.$refs.hello.eventBackButton()
      
    },
    toHome () {
      if (this.user === 'msi' && this.password === '123') {
        localStorage.setItem('login',true);
        // this.
        this.doLogin()
        // this.$router.back = false
        //  this.$router.push('/home')
      } else {
        this.toastMsg = '账号或密码不正确!'
        this.toast = true
        setTimeout(() => {
          this.toast = false
        }, 1500)
      }
      console.log(this.user)
      // this.$cookies.set('login', true)
      // this.$emit('userLogin')
    },
  },
  created () {
    this.doLogin()
    // this.doLogin()
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}
.btn:active{
  background: #0e80d2;
  color: hsla(0, 0%, 100%,0.3);
}
.btn {
      color: #fff;
    background-color: #108ee9;
    border: 1PX solid #108ee9;
    border-radius: 5px;
      display: block;
    outline: 0 none;
    -webkit-appearance: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
    text-align: center;
    font-size: 18px;
    height: 47px;
    line-height: 47px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    white-space: nowrap;
}
.username {
  display: block;
  margin-bottom: 20px;
  height: 40px;
  margin-left: 10px;
  width: calc(100% - 20px);
  border: none;
  outline: none;
  font-size: 16px;
  border-bottom: 1px solid #eee;

}
.BMapLabel{
  display: none !important;
}
</style>
