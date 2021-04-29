<template>

    <div class="test">
      <button @click="back">返回</button>
      <button @click="toM">dianw</button>
      <button @click="openImage">打开图片</button>
      <button @click="test">26256</button>
      <button @click="scan">扫码</button>
      <button @click="baiduMap">百度地图</button>
      <div>{{JSON.stringify(maplist)}}</div>
      test页面
    </div>

</template>

<script>
// const cordova

export default {
  data () {
    return {
      ob: null,
      maplist: null
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    toM () {
      this.$router.push('/m')
    },
    test () {
      /* eslint-disable */
      plugins.toast.show('hello','long', 'center', () => {
        console.log(1)
      })
    },
    scan1 () {
      QRScanner.scan((data) => {
        alert(data)
      })
    },
    openImage () {
      navigator.camera.getPicture((url) => {
        alert(url)
      }, (err) =>{

      }, { 
          quality: 50
      });

    },
    baiduMap () {
      // alert(plugins.baidumap_location)
      // alert(cordova.baidumap_location)
      // alert(navigator.baidumap_location)
      // alert(baidu_location)
      // alert(baidumap_location)
      // alert(baidumap_location[0])
      // alert(typeOf(baidumap_location))
      // alert(baidumap_location)
      baidu_location.getCurrentPosition(function (result) {
         alert(result.longitude)
      }, function (error) {

      });
    },
    scan () {
      cordova.plugins.barcodeScanner.scan(function(result) {
        alert(result)
      },
      function(err) {

      })
    }
  },
  mounted () {
    /* eslint-disable */
    // this.ob = navigator
    // navigator = null
    // document.addEventListener('backbutton', this.test(), false)
  },
  beforeDestroy () {
    // console.log(1)
    // document.removeEventListener('backbutton', this.test())
  },
  created () {
  }
}
</script>

<style  scoped>
.test {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ff00ff;
  transition: all 0.5s;
  /* z-index: 100; */
  /* transform: translateX(0); */
  
}


</style>
