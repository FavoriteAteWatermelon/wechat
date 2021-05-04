<template>
  <div class="tabtar">
    <ul class="bottom-nav">
      <li @click="changNav(index)" v-for="(item, index) in tabbarItems" :key="item.name">
        <img :src="activeIndex === index ?item.imgUrl :item.imgUrlDefault" alt />
        <span :style="{'color': activeIndex === index ? '#07be6a':''}">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 0,
      tabbarItems: [
        {name: '微信', imgUrl: require('../../assets/tabbar/wechat.png'), imgUrlDefault: require('../../assets/tabbar/wechat1.png')},
        {name: '通信录', imgUrl: require('../../assets/tabbar/contact.png'), imgUrlDefault: require('../../assets/tabbar/contact1.png')},
        {name: '发现', imgUrl: require('../../assets/tabbar/discover.png'), imgUrlDefault: require('../../assets/tabbar/discover1.png')},
        {name: '我', imgUrl: require('../../assets/tabbar/me.png'), imgUrlDefault: require('../../assets/tabbar/me1.png')}
      ]
    }
  },
  methods: {
    changNav (i) {
      this.activeIndex = i
    }
  }
}
</script>

<style lang="scss" scoped>
.tabtar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  .bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    height: 56px;
    background: #f7f7f7;
    li{
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      font-size: 14px;
      img {
        width: 26px;
        height: 26px;
      }
    }
  }
}
</style>
