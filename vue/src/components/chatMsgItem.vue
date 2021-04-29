<template>
  <div class="chatMsgItem">
    <div :style="{display:'flex',float: myName === itemName ? 'right': 'left'}">
      <img v-if=" myName !== itemName "   class="avatar" :src="logo" alt="">
      <div v-if=" myName !== itemName " class="msg" :style="{  background:'#fff'}">
        <div v-if="myName === itemName">
            <div v-if="msg" class="triangle"></div>
            <div class="msgTxt" v-if="msg">{{msg}}</div>
            <img class="msgImg" @load="sendImgLoad" v-else :src="'http://msicnd.club:3000/files/'+name +'.png'" alt="">
        </div>
        <div v-else>
          <img class="msgImgL" v-if="!msg" @load="sendImgLoad"  :src="'http://msicnd.club:3000/files/'+name +'.png'" alt="">
          <div class="msgTxt"   v-else>{{msg}}</div>
        </div>
      </div>
      <div v-if=" myName === itemName " class="msg" :style="{  background:msg? 'greenyellow':'#fff'}">
        <div v-if="myName === itemName">
            <div v-if="msg" class="triangle"></div>
            <div class="msgTxt" style="color:#fff" v-if="msg">{{msg}}</div>
            <img class="msgImg"  @load="sendImgLoad" v-else :src="'http://msicnd.club:3000/files/'+name +'.png'" alt="">
        </div>
        <div v-else>
          <img class="msgImgL" v-if="!msg" @load="sendImgLoad"  :src="'http://msicnd.club:3000/files/'+name +'.png'" alt="">
          <div class="msgTxt" style="color:#fff"  v-else>{{msg}}</div>
        </div>
        </div>
        <img v-if=" myName === itemName "  class="avatar" :src="logo" alt="">
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 
  export default {
    props:{
      logo: {
        type: String,
        default: ''
      },
      msg:{
        type:String,
        default: ''
      },
      name:{
        type:String,
        default: ''
      },
      type: {
        type:String,
        defalut: ''
      },
      myName:{
        type:String,
        default:''
      },
      itemName:{
        type:String,
        default: ''
      }
    },
    mounted() {
     
    },
    methods: {
      sendImgLoad() {
        this.$emit('loadImg')
      }
    },
  }
</script>

<style  scoped>
.chatMsgItem{
  /* background: yellow; */
  overflow: hidden;
  margin: 10px 0;
}
.avatar{
  height: 30px;
  width: 30px;
  margin: 10px;
  
}
.msg{
  position: relative;
  padding: 4px;
  margin: 10px 5px;
  min-height: 30px;
  max-width: 200px;

  line-height: 30px;
}
.msgImgL{
  position: relative;
  padding: 4px;
  margin: 10px 5px;
  min-height: 30px;
  max-width: 200px;

  line-height: 30px;
}
.msgImg{
  width: 100px;
}
.triangle{
  position: absolute;
  top: 10px;
  right: -10px;
  border-top: 5px solid #fff;
  border-right: 5px solid #fff;
  border-bottom: 5px solid #fff;
  border-left: 5px solid greenyellow;
}
</style>