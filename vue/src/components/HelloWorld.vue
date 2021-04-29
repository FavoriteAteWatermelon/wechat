<template>
<div>
  <div>
  <div ref="home">
    <swiper  ref="mySwiper"  class="sliderCon" :options="swiperOptions">
      <swiper-slide class="sliderPage" >
        <div class="chatHeader" @click="testNotication">聊天</div>
        <chatItem @chatRoom="chatRoom"  :imgSrc="require('@/assets/cat.jpg')" :name="'Cat'"/>
        <!-- <chatItem @chatRoom="chatRoom"   :imgSrc="require('@/assets/user2.jpg')" :name="'大香蕉'"/> -->
      </swiper-slide>
      <swiper-slide class="sliderPage">
        <div class="chatHeader">个人</div>
        <img class="person-avatar" src="../assets/user2.jpg" alt="">
        <div class="person-name">大香蕉</div>
        <div class="btn"  @click="toExit"  style="margin:100px 40px 0 40px">退出</div>
      </swiper-slide>
    </swiper>
    <div class="navTabBar">
      <div class="nav" @click="toNext(0)">
         <img v-if="activeIndex === 0" src="../assets/Home.png" alt="">
         <img v-else src="../assets/Home1.png" alt="">
         <div :style="{color: activeIndex === 0? '#108ee9': '#bbb'} ">主页</div>
      </div>
      <div class="nav"  @click="toNext(1)">
         <img v-if="activeIndex === 1" src="../assets/my.png" alt="">
         <img v-else src="../assets/my1.png" alt="">
         <div :style="{color: activeIndex === 1? '#108ee9': '#bbb'} ">我的</div>
        </div>
    </div>
      <div class="toast" v-if="toast">{{toastMsg}}</div>
  <transition name="slide">
    <router-view></router-view>
  </transition>

  </div>
  </div>
     <div class="toast" v-if="toast">{{toastMsg}}</div>
</div>
</template>

<script>
/* eslint-disable */ 
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import chatItem from '@/components/chatItem'
import chatRoom from '@/components/chatRoom'
// import slider from '@/base/slider'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      input1: '',
      activeIndex: 0,
      toast: false,
      toastMsg: '',
      swiperOptions: {
        autoPlay: false,
        onSlideChangeEnd: (swiper)=>{
          this.activeIndex = swiper.activeIndex
      // alert(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
        }
      }
    }
  },
  mounted () {
    document.addEventListener('deviceready', this.onDeviceReady, false)
  },
  methods: {
    toExit () {

    },
    testNotication () {
      console.log(this.$route)
      // cordova.plugins.notification.local.schedule({
      //   title: "标题",
      //   text: "内容",
      //   foreground: true
      // });
    },
    chatRoom (name,img) {
      // console.log(name,img)
      this.$router.push({
        name: 'room',
        params:{
          name: name,
          img: img
        }
      })
    },
    slider (swiper) {
      console.log(swiper)
    },
    toNext (index) {
      this.activeIndex = index
      this.$refs.mySwiper.swiper.slideTo(index,0, false)
      // this.$refs.swiperDom.$swiper.slideTo(1,1000,false)
    },
    onDeviceReady () {
      document.addEventListener('backbutton', this.eventBackButton, false)
    },
    eventBackButton () {
      this.toast = true
      this.toastMsg = '再按一次退出!'
      // window.plugin.toast.showLongCenter('再点一次退去')
      let that = this
      if (this.$route.name === 'HelloWorld') {
        document.removeEventListener('backbutton', that.eventBackButton, false)
        let intervalID = window.setInterval(() => {
          this.toast = false
          window.clearInterval(intervalID)
          document.addEventListener('backbutton', that.eventBackButton, false)
        }, 3000)
      } else {
        // document.removeEventListener('backbutton', that.eventBackButton, false)
        this.toast = false
        this.$router.back()
      }
    },
    toTest () {
      this.$router.push('/hello/test')
    }
  },
  components: {
    swiper,
    swiperSlide,
    chatItem,
    chatRoom
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chatHeader{
  height: 60px;
  line-height: 60px;
  text-align: left;
  padding-left: 20px;
  background: #eee;
}
.person-name{
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #999;
}
.navTabBar{
  position: absolute;
  height: 60px;
  bottom: 0;
  left: 0;
  right: 0;
  background:#f7f7f7 ;
  display: flex;
}
.person-avatar{
  margin-top: 20px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.nav{
  flex: 1;
}
.sliderCon{
  position: absolute;
  top:0;
  right: 0;
  left: 0;
  bottom: 60px;
}
.sliderPage{
  position: relative;
  width: 100%!important;
  height: 100%;
  /* background: red; */
  text-align: center;
}


.toast{
  position:fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  text-align: center;
}

.login {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: red;
}
.hello {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #42b983;
}
.slide-enter-active, .slide-leave-active{
  /* opacity: 1; */
  transform: translateX(100%);
}
.slide-enter, .slide-leave-to{
  transform: translateX(100%);
}
</style>
