<template>
    <div @click="toRouterPage" :class="['nav-item',spaceBetween ? 'isSpace': '']">
      <div class="left">
        <img :src="icon" alt="">
      </div>
      <div v-show="toIcon" class="right">
        <span>{{txt}}</span>
        <img src="../../assets/to.png" alt="">
      </div>
    </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    txt: {
      type: String,
      default: ''
    },
    toIcon: {
      type: Boolean,
      default: true
    },
    spaceBetween: {
      type: Boolean,
      default: false
    },
    toRouter: {
      type: String,
      default: '/tabbar'
    }
  },
  methods: {
    toRouterPage () {
      this.$router.push(this.toRouter)
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-item {
  display: flex;
  justify-content: space-between;
  height: 56px;
  line-height: 56px;
  background: #fff;
  &:active {
    background:#eee;
  }
  .left {
    display: flex;
    align-items: center;
    padding: 0 16px;
    img {
      width: 30px;
      height: 30px;
    }
  }
  .right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 16px;
    height: 56px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
    img {
      height: 20px;
      height: 20px;
    }
  }
}
.isSpace {
  margin: 10px 0;
}
</style>
