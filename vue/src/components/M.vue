<template>
  <div>
  <label>关键词：<input v-model="keyword"></label>
  <label>地区：<input v-model="location"></label>
  <baidu-map>
    <bm-view class="map"></bm-view>
    <bm-circle :center="nearby.center" :radius="nearby.radius"></bm-circle>
    <bm-local-search :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search>
  </baidu-map>
  </div>

</template>

<script>
/* eslint-disable */
import maps from 'qqmap'
export default {
  data() {
    return {
      location: '北京',
      keyword: '百度',
      map: null,
      listener: [],
      markers: [],
      searchService: [],
      latlngBounds: [],
      pStart: {
        lng: 116.294625,
        lat: 39.961627
      },
      pEnd: {
        lng: 116.357474,
        lat: 39.988609
      },
      nearby: {
        center: {
          lng: 116.404, 
          lat: 39.915
        },
        radius: 1000
      }
    }
  },
  mounted() {
    // this.init()
  },
    computed: {
    bounds () {
      const {pStart, pEnd} = this
      return {
        sw: {lng: pStart.lng, lat: pStart.lat},
        ne:{lng: pEnd.lng, lat: pEnd.lat}
      }
    },
    polygonPath () {
      const {pStart, pEnd} = this
      return [
        {lng: pStart.lng, lat: pStart.lat},
        {lng: pEnd.lng, lat: pStart.lat},
        {lng: pEnd.lng, lat: pEnd.lat},
        {lng: pStart.lng, lat: pEnd.lat}
      ]
    }
  },
  methods: {
    searchR (res) {
      console.log(res)
    },
    clearOverlays(overlays) {
      let overlay
      while ((overlay = overlays.pop())) {
        overlay.setMap(null)
      }
    },
    // 设置搜索的范围和关键字等属性
    searchKeyword() {
      const keyword = document.getElementById('keyword').value
      // 清除地图上的marker
      this.clearOverlays(this.markers)
      // 根据输入的城市设置搜索范围
      // this.searchService.setLocation("北京");
      // 根据输入的关键字在搜索范围内检索
      this.searchService.search(keyword)
    },
    init() {
      maps.init('your key', () => {
        const myLatlng = new qq.maps.LatLng(22.5535438, 114.0594149)

        const myOptions = {
          zoom: 16,
          center: myLatlng,
          mapTypeId: qq.maps.MapTypeId.ROADMAP
        }
        this.map = new qq.maps.Map(document.getElementById('map'), myOptions)
        const infoWin = new qq.maps.InfoWindow({
          map: this.map
        })
        // eslint-disable-next-line new-cap
        this.listener = new qq.maps.event.addListener(
          this.map,
          'click',
          function(event) {
            console.log(
              '您点击的位置为:[' +
                  event.latLng.getLng() +
                  ',' +
                  event.latLng.getLat() +
                  ']'
            )
          }
        )
        // // 移除click时间
        this.listener = []

        this.latlngBounds = new qq.maps.LatLngBounds()

        // 设置Poi检索服务，用于本地检索、周边检索
        this.searchService = new qq.maps.SearchService({
          // 设置搜索范围为北京
          location: '深圳',
          // 设置搜索页码为0
          pageIndex: 0,
          // 设置每页的结果数为5
          pageCapacity: 5,
          // 设置动扩大检索区域。默认值true，会自动检索指定城市以外区域。
          // autoExtend: true,
          // 设置展现查询结构到infoDIV上
          // panel: document.getElementById('infoDiv'),
          // 检索成功的回调函数
          complete: results => {
            infoWin.close()

            // 设置回调函数参数
            const pois = results.detail.pois
            for (let i = 0, l = pois.length; i < l; i++) {
              const poi = pois[i]
              // 扩展边界范围，用来包含搜索到的Poi点
              this.latlngBounds.extend(poi.latLng)
              const marker = new qq.maps.Marker({
                map: this.map,
                position: poi.latLng,
                animation: qq.maps.MarkerAnimation.DROP
              })

              qq.maps.event.addListener(marker, 'mouseover', () => {
                infoWin.open()
                infoWin.setContent(`<div style="text-align:center;white-space:nowrap;' +
                'margin:10px;">${poi.address}</div>`)
                infoWin.setPosition(poi.latLng)
              })
              qq.maps.event.addListener(marker, 'click', () => { console.log('点击处理经纬度') })
              marker.setTitle(i + 1)

              this.markers.push(marker)
            }
            // 调整地图视野
            this.map.fitBounds(this.latlngBounds)
          },
          // 若服务请求失败，则运行以下函数
          error: () => {
            alert('出错了。')
          }
        })
      })
    }
  }
}
</script>
<style scoped >
.map {
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 200px;
  height: 300px;
  z-index: 200;
}
.map {
  width: 100%;
  height: 400px;
}

</style>
