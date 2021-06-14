<template>
  <div class="title-bar" >
     {{title}}
     <i @click="back" :class="['iconfont','custom-font',backBtn]"></i>
     <i @click="search" v-if="show" class="right-font">...</i>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    backBtn: {
      type: String,
      default: 'icon-back'
    },
    rightBtn: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    search () {
      this.$emit('search')
    }
  }
}
</script>

<style lang="scss" scoped>
.title-bar{
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-weight: bold;
  background: #fff;
  color: #333;
  letter-spacing: 1px;
  text-align: center;
  .custom-font{
    position: absolute;
    left: 0;
    width: 50px;
    height: 50px;
    text-align: left;
    padding-left: 10px;
    line-height: 50px;
    font-size: 20px;
  }
  .right-font{
    position: absolute;
    right: 0;
    width: 50px;
    height: 50px;
    text-align: right;
    padding-right: 20px;
    line-height: 50px;
    font-size: 20px;
  }
  .save-btn{
    position: absolute;
    top: 10px;
    right: 10px;
    width: 60px;
    border-radius: 5px;
    height: 30px;
    font-weight: normal;
    color: #fff;
    line-height: 30px;
    background: #07c160;
    &:active{
      background: #009160;
    }
  }
}
</style>
