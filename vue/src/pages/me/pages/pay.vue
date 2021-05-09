<template>
  <div class="pay">
    <SimpleNavBar  :title="'支付'"></SimpleNavBar>
    <div class="money-container">
      <div class="money">
        <div class="payCode">
          <img src="../../../assets/me/pay/pay.png" alt="">
          <span>收付款</span>
        </div>
        <div class="wallet">
          <img src="../../../assets/me/pay/wallet.png" alt="">
          <span>钱包
            <span class="sub">￥20.57</span>
          </span>
        </div>
      </div>
    </div>
    <Category :title="moneyCategory.title" :list="moneyCategory.list"></Category>
    <Category :title="livingCategory.title" :list="livingCategory.list"></Category>
    <Category :title="trafficCategory.title" :list="trafficCategory.list"></Category>
    <Category :title="buyCategory.title" :list="buyCategory.list"></Category>
  </div>
</template>

<script>
import SimpleNavBar from '../../../components/ui/simpleNavBar'
import Category from '../../../components/ui/category'
export default {
  data () {
    return {
      moneyCategory: {
        title: '金融理财',
        list: [
          {txt: '信用卡还款', src: require('../../../assets/me/pay/creditCard.png')},
          {txt: '微粒贷借钱', src: require('../../../assets/me/pay/rentMoney.png')},
          {txt: '理财通', src: require('../../../assets/me/pay/financing.png')},
          {txt: '保险服务', src: require('../../../assets/me/pay/insurances.png')}
        ]
      },
      livingCategory: {
        title: '生活服务',
        list: [
          {txt: '手机充值', src: require('../../../assets/me/pay/phone.png')},
          {txt: '生活缴费', src: require('../../../assets/me/pay/living.png')},
          {txt: 'Q币充值', src: require('../../../assets/me/pay/Qcoin.png')},
          {txt: '城市服务', src: require('../../../assets/me/pay/cityService.png')},
          {txt: '腾讯公益', src: require('../../../assets/me/pay/txWelfare.png')},
          {txt: '医疗健康', src: require('../../../assets/me/pay/health.png')},
          {txt: '防疫健康码', src: require('../../../assets/me/pay/healthyCode.png')}
        ]
      },
      trafficCategory: {
        title: '交通出行',
        list: [
          {txt: '出行服务', src: require('../../../assets/me/pay/goOut.png')},
          {txt: '火车票机票', src: require('../../../assets/me/pay/trainAndFly.png')},
          {txt: '滴滴出行', src: require('../../../assets/me/pay/DiDi.png')},
          {txt: '酒店', src: require('../../../assets/me/pay/hotel.png')}
        ]
      },
      buyCategory: {
        title: '购物消费',
        list: [
          {txt: '腾讯聚惠', src: require('../../../assets/me/pay/discount.png')},
          {txt: '京东购物', src: require('../../../assets/me/pay/trainAndFly.png')},
          {txt: '美团外卖', src: require('../../../assets/me/pay/meituan.png')},
          {txt: '电影演出赛事', src: require('../../../assets/me/pay/catMovie.png')},
          {txt: '美团团购', src: require('../../../assets/me/pay/teamBuy.png')},
          {txt: '拼多多', src: require('../../../assets/me/pay/ping.png')},
          {txt: '蘑菇街女装', src: require('../../../assets/me/pay/mushroomStreet.png')},
          {txt: '唯品会特卖', src: require('../../../assets/me/pay/weipinghui.png')},
          {txt: '转转二手', src: require('../../../assets/me/pay/secondHand.png')},
          {txt: '贝壳找房', src: require('../../../assets/me/pay/beike.png')}
        ]
      }
    }
  },
  components: {
    SimpleNavBar,
    Category
  }
}
</script>

<style lang="scss" scoped>
.pay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: scroll;
  background: #fff;
  transition: all 0.3s;
  z-index: 100;
  background: #eee;
  .money-container {
    background: #fff;
  }
  .money {
    display: flex;
    align-items: center;
    margin:0 10px 10px 10px ;
    padding: 0 60px;
    height: 120px;
    font-size: 14px;
    border-radius: 5px;
    background: #07be6a;
    color: #fff;
    .payCode,.wallet{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      box-sizing: border-box;
      padding: 10px 40px;
      width: 120px;
      height: 90px;
      font-size: 14px;
      img{
        width: 30px;
        height: 30px;
      }
      span {
        position: relative;
        text-align: center;
        display: inline-block;
        width: 100px;
        .sub {
          position: absolute;
          top: 22px;
          right: 0;
          left: 0;
          font-size: 10px;
          font-weight: bold;
          color: #eee;
        }
      }
    }
  }
}
</style>
