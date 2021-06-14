<template>
  <div class="register">
    <SimpleNavBar :backBtn="SimpleNavBarConfig.backBtn" :show="SimpleNavBarConfig.show"/>
    <div class="title">手机号注册</div>
    <div class="nickName">
      <div class="nickLeft">
        <span>昵称</span>
        <input type="text" v-model="registerInfo.username" placeholder="例如: 陈晨" class="inputName">
      </div>
      <img class="avatar" :src="registerInfo.imgUrl" @click="selectAvatar">
    </div>
    <div class="area" @click="toLoginCode">
      <span class="area-name">国家/地区</span>
      <span  class="area-link">{{areaInfo.cn}} {{areaInfo.code}}</span>
    </div>
    <div class="phone-number">
      <span>手机号</span>
      <input type="number" v-model="registerInfo.tel" placeholder="请填写手机号">
    </div>
    <div class="password">
      <span>密码</span>
      <input type="password" v-model="registerInfo.password" placeholder="填写密码">
    </div>
    <div class="protocol">
      <img v-if="agree" @click="agreeProtocol" src="../../assets/login/un_selected.png" alt="">
      <img v-else @click="agreeProtocol" src="../../assets/login/selected.png" alt="">
      <span>已经阅读并同意</span>
      <span>微信软件许可及服务协议</span>
    </div>
    <div class="registerBtn" @click="register">注册</div>
    <transition name="slide">
      <router-view @selectCode="selectCode"></router-view>
    </transition>
  </div>
</template>
<script>
import SimpleNavBar from '../../components/ui/simpleNavBar'
import axios from 'axios'
export default {
  data () {
    return {
      agree: true,
      registerInfo: {
        username: '',
        tel: '',
        password: '',
        imgUrl: require('../../assets/login/camera.png')
      },
      areaInfo: {
        cn: '中国大陆',
        code: '+86',
        en: 'China',
        pinYinInitial: 'C'
      },
      SimpleNavBarConfig: {
        backBtn: 'icon-close',
        show: false
      }
    }
  },
  methods: {
    /* eslint-disable */
    selectAvatar () {
      let that = this
      navigator.camera.getPicture(
         function success(imageUrl) {
           plugins.crop(function success(src) {
             that.registerInfo.imgUrl = src.split('?')[0]
             that.uploadImage(src.split('?')[0])
           },
           function fail(msg) {
             navigator.notification.alert("操作失败")
           },
           imageUrl, {quality: 80}
          )
        },
        function fail(msg) {
          navigator.notification.alert("操作失败")
        },
        {
          //拍照
          destinationType: Camera.DestinationType.FILE_URI,
          //相册选图
  //         mediaType: Camera.MediaType.PICTURE,
          sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM
        }
      )
    },
//上传图片
// 'http://123.207.42.169:3030/image/upload'
 uploadImage(fileURL){
          var ft = new FileTransfer()
          var options = new FileUploadOptions()
　　　　　　//对应后台的字段
          options.fileKey = 'image'
          options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
          var uri = 'http://123.207.42.169:3030/image/upload'
          ft.upload(
              fileURL,
              encodeURI(uri),
              (msg)=>{
                    console.log('SUCCESS:')
                    console.log(msg)
              },
              (err)=>{
                    console.log('ERROR:')
                    console.log(err)
              },
              options
          )
      },   
    register () {
      if (!this.registerInfo.username || !this.registerInfo.tel || !this.registerInfo.password) {
        this.$message({
          duration: 3000,
          content: '请填写完整'
        });  
      } else {
        axios.post('http://123.207.42.169:3030/user/add', this.registerInfo).then(res=> {
          console.log(res)
        })
      }
    },
    agreeProtocol () {
      this.agree = !this.agree
    },
    toLoginCode () {
      this.$router.push('/post/register/code')
    },
    selectCode (areaInfo) {
      this.areaInfo = areaInfo
    }
  },
  components: {
    SimpleNavBar
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
.register {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 10px;
  background: #fff;
  transition: all 0.3s;
  .title {
    margin: 70px 0 0 20px;
    font-size: 23px;
    // font-weight: bold;
    color: #333;
    letter-spacing: 1px;
  }
  .nickName {
    display: flex;
    margin: 20px 0 0 0;
    .nickLeft{
      margin: 14px 20px 0 0;
      padding:  10px  10px 0 0;
      border-bottom: 1px solid #eee;
      span {
        margin-right: 20px;
      }
      input {
        padding-left: 40px;
        border: none;
        outline: none;
      }
    }
    .avatar {
      height: 60px;
      width: 60px;
      background-size: cover;
    }
  }
  .area {
    padding: 20px 0 10px 0;
    &:active{
      background: #eee;
    }
    .area-name {
      margin-right: 20px;
    }
    .area-link {
      color:#07be6a ;
    }
  }
  .phone-number, .password{
    padding: 10px 0;
    margin-top: 10px;
    border-bottom: 1px solid #eee;
    input {
      border:none;
      outline: none;
      padding-left: 40px;
    }
  }
  .password{
    input {
      padding-left: 56px;
    }
  }
  .protocol{
    display: flex;
    margin: 10px 0 10px 0;
    height: 38px;
    line-height: 38px;
    font-size: 13px;
    justify-content: center;
    align-items: center;
    img{
      padding: 10px;
      height: 20px;
      width: 20px;
    }
  }
  .registerBtn{
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #eee;
    color: #999;
  }
}
</style>
