<template>
  <div class="title-bar" :style="{background: backgroundColor}" >
     {{title}}
     <i @click="back" :class="['iconfont','custom-font',backBtn]"></i>
     <i @click="search" v-if="rightIconBtn" :class="['iconfont','right-font',rightBtnIcon]"></i>
     <div @click="saveBack" v-if="rightBtn" class="save-btn">保存</div>
  </div>
</template>

<script>
export default {
  props: {
    barHeight: {
      type: Number,
      default: 40
    },
    backgroundColor: {
      type: String,
      default: '#ededed'
    },
    title: {
      type: String,
      default: ''
    },
    backBtn: {
      type: String,
      default: 'icon-back'
    },
    rightIconBtn: {
      type: Boolean,
      default: false
    },
    rightBtnIcon: {
      type: String,
      default: 'icon-search'
    },
    rightBtn: {
      type: Boolean,
      default: false
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
    },
    saveBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.title-bar{
  position: relative;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  color: #333;
  letter-spacing: 1px;
  text-align: center;
  font-weight: bold;
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
