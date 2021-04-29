<template>
  <div class="item" @click="toRoom">
     <img class="avatar"  :src="imgSrc" alt="">
     <div class="msgInfo">
      <div class="title">
        {{name}}
       </div>
     </div>
  </div>
</template>

<script>
/* eslint-disable */ 
  export default {
    props:{
      imgSrc:{
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      }
    },
    methods: {
      toRoom () {
        this.$emit('chatRoom',this.imgSrc,this.name)
      }
    },
    
  }
</script>

<style scoped>
.item {
  display: flex;
  padding: 10px;
  height: 40px;
}
.item:active{
  background: #f7f7f7;
}
.avatar{
  width:40px ;
  height: 40px;
  border-radius: 4px;
  /* background: red; */
}
.msgInfo{
  position: relative;
  margin-left: 10px;
  flex: 1;
  border-bottom: 1px solid #eee;
}
.title{
  position: absolute;
  top: 4px;
  font-weight: bold;
  font-size: 13px;
  color: #666;
}
</style>