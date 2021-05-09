<template>
  <div class="me">
    <div class="header">
      <div class="header-left">
        <img src="../../assets/avatar.jpg" alt="">
      </div>
      <div class="header-right">
        <div class="title">我最爱吃大西瓜</div>
        <div class="sub-title">微信号: love_big_watermelon</div>
      </div>
    </div>
    <div class="nav">
       <NavItem v-for="item in meNavList" :key="item.txt" :toRouter="item.toRouter" :icon="item.icon" :txt="item.txt" :spaceBetween="item.spaceBetween"></NavItem>
    </div>
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import NavItem from '../../components/ui/navItem'
export default {
  data () {
    return {
      meNavList: [
        {
          spaceBetween: true,
          icon: require('../../assets/me/pay.png'),
          toRouter: '/tabbar/me/pay',
          txt: '支付'
        },
        {
          spaceBetween: false,
          icon: require('../../assets/me/collection.png'),
          toRouter: '/tabbar/me/collection',
          txt: '收藏'
        },
        {
          spaceBetween: false,
          icon: require('../../assets/me/friends.png'),
          toRouter: '/tabbar/me/friends',
          txt: '朋友圈'
        },
        {
          spaceBetween: false,
          icon: require('../../assets/me/cards.png'),
          toRouter: '/tabbar/me/cards',
          txt: '卡包'
        },
        {
          spaceBetween: false,
          icon: require('../../assets/me/expression.png'),
          toRouter: '/tabbar/me/expression',
          txt: '表情'
        },
        {
          spaceBetween: true,
          icon: require('../../assets/me/setting.png'),
          toRouter: '/tabbar/me/setting',
          txt: '设置'
        }
      ]
    }
  },
  components: {
    NavItem
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
.me {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;

  // z-index: 200;
  // margin-bottom: 56px;
  background: #eee ;
  .header{
    display: flex;
    padding:  35px 0;
    background: #fff;
    .header-left{
      img {
        margin-left: 30px;
        width: 60px;
        height: 60px;
        border-radius: 5px;
      }
    }
    .header-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 15px;
      .title {
        font-weight: bold;
        font-size: 20px;
      }
      .sub-title {
        color: #555;
        width: 200px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>
