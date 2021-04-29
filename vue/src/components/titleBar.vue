<template>
  <div class="title-bar" :style="{background: backgroundColor}" >
     {{title}}
     <i @click="back" :class="['iconfont','custom-font',backBtn? 'icon-back':'']"></i>
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
      type: Boolean,
      default: true
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
  font-size: 15px;
  font-weight: bold;
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
