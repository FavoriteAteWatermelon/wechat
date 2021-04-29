<template>
  <div class="chatRoom">
    <div class="topBar">
      <img @click="backBtn" src="../assets/back.png" alt="">
      <div class="name">{{this.name}}</div>
    </div>
    <scroll  ref="BSscroll" class="scrollContent">
      <div>
        <chatMsgItem :myName="name" :itemName="item.name" @loadImg="loadImg" :name="item.name" :msg="item.msg" :logo="item.name !== '大香蕉'? require('@/assets/user2.jpg'):require('@/assets/cat.jpg')" v-for="(item,index) in chatList" :key="index" />
      </div>
    </scroll>
    <div class="chatBottom">
      <div class="add" @click="openImage">
        <img src="../assets/img.png" alt="">
      </div>
      <input v-model="inputMsg" type="text">
      <div @click="sendMsg" :class="['send', sendStatus ? 'sendDo': '']">发送</div>
    </div>
  </div>
</template>

<script>
import scroll from '@/base/scroll'

// import chatMsgItem from '@/components/chatMsgItem'
/* eslint-disable */ 
import chatMsgItem from '@/components/chatMsgItem'
  export default {
  data () {
    return {
      name: '',
      img: '',
      inputMsg: '',
      sendStatus: false,
      chatList:[]
    }
  },
    created() {
      // console.log(this.$route.params.name)
      this.img = this.$route.params.name
      this.name = this.$route.params.img
      this.sockets.subscribe('sendMsg', (data) => {
        console.log(data)
        this.chatList.push(data)
        this.$nextTick(() =>{
          setTimeout(() => {
            this.scrollBottom()
          },500)
        })
      }
    )
    },
    methods: {
      loadImg () {
      this.$nextTick(()=>{
        // console.log(this.$refs.BSscroll.scroll)
         this.$refs.BSscroll.scroll.scrollTo(0, this.$refs.BSscroll.scroll.maxScrollY)    
      })
      },
     openImage () {
      navigator.camera.getPicture((url) => {
        // alert(url)
        let success = (r) => {
          // alert('suu')
                //上传成功， 如果通过相册选择上传，且同事有多张图片，会多次调用此方法
                //...
        };

        let fail = (error) => {
          // alert('dd')
                //上传失败
                //...
        };

        let options = new FileUploadOptions();
        // alert(options)
        options.fileKey = "file";
        options.fileName = url.substr(url.lastIndexOf('/') + 1);
        // alert(url)
        options.chunkedMode = false;
        //options.mimeType = "text/plain";

        //上传参数
        let params = {name: '大香蕉'};
        params.type = 'TEST_IMAGE';

        options.params = params;
        let ft = new FileTransfer();
        // alert(ft)
        //上传地址
        let SERVER = 'http://msicnd.club:3000/upload';
        ft.upload(url, encodeURI(SERVER), success, fail, options);
      }, (err) =>{
        alert('err')

      }, { 
          quality: 50,
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY
          
      });

    },
      scrollBottom () {
        // console.log(51545)
        if(this.$refs.BSscroll) {
this.$refs.BSscroll.scroll.scrollTo(0, this.$refs.BSscroll.scroll.maxScrollY)    
        }
          
      },
      sendMsg () {
        if (!this.sendStatus){
          return
        }
    //         this.sockets.subscribe(
    //   'sendMsg', (data) => {
    //     console.log(data)
    //   }
    // )
      this.$socket.emit('send', {msg:this.inputMsg,name: this.name})
      this.inputMsg = ''
      this.$nextTick(()=>{
        // console.log(this.$refs.BSscroll.scroll)
         this.$refs.BSscroll.scroll.scrollTo(0, this.$refs.BSscroll.scroll.maxScrollY)    
      })
      },

      backBtn( ){
        this.$router.back()
        // this.$router.back()
      }
    },
    watch: {
      inputMsg(newMsg,old) {
      
         newMsg !== "" ? this.sendStatus = true :this.sendStatus = false
 
      }
    },
    components:{
      scroll,
      chatMsgItem
    }
  }
</script>

<style  scoped>

.chatRoom{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background: #fff;
  transition: all 0.5s;
  /* display: flex; */
}
.scrollContent{
  position: absolute;
  top:50px;
  left: 0;
  right: 0;
  bottom: 50px;
  /* background: red; */
}
.chatRoom input{
  height: 30px;
  flex: 1;
  border: 1px solid #eee;
  outline: none;
  border-radius: 3px;
  
}
.chatBottom .add{
  width: 40px;
  height: 40px;
  
  margin: 0 5px;
}
.add img{
  margin-top: 5px;
  width: 30px;
  height: 30px;
}
.chatBottom .send {
  width:50px;
  height:30px;
  line-height: 30px;
  margin: 5px 10px 5px 10px;
  border-radius: 4px;
  
}
.sendDo{
  width:50px;
  height:30px;
  line-height: 30px;
  margin: 5px 10px 5px 10px;
  border-radius: 4px;
  background: green;
  color: #fff;
  font-weight: bold;
}
.chatBottom{
  position: absolute;
  bottom: 0;
  height: 50px;
  left: 0;
  right: 0;
  background: #f7f7f7;
  display: flex;
  align-items: center;

}
.topBar{
  position: absolute;
  top:0;
  right: 0;
  left: 0;
  height: 50px;
  align-items: center;
  display: flex;
  background: #f7f7f7;
  z-index: 100;
}
.topBar img{
  margin-left: 10px;
  width: 30px;
  height: 30px;
}
.topBar .name{
  font-size: 16px;
  font-weight: bold;
  color: #333;
}
</style>