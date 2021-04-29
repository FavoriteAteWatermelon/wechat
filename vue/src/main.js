// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueSocketIO from 'vue-socket.io'
import router from './router'
import VueCookies from 'vue-cookies'
import VueCorodva from 'vue-cordova'
import FastClick from 'fastclick'
import './assets/font/iconfont.css'
// import BaiduMap from 'vue-baidu-map'
// Vue.use(new VueSocketIO({

//   debug: true,

//   connection: 'http://msicnd.club:3000/'
//   // connection: 'http://localhost:3000/'

// }))
// Vue.use(BaiduMap, {
//   // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
//   ak: 'PuuYpSyXVGfH62N7s9ug7ZoxQLC0oywb'
// })

FastClick.attach(document.body)
Vue.use(VueCookies)
Vue.use(VueCorodva)

Vue.config.productionTip = false
/* eslint-disable */
// document.addEventListener('deviceready', function () {


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// }, false)
