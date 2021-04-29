<template>
  <div>

  </div>
</template>

<script>
/* eslint-disable */
  export default {
    created() {
      this.openImage()
    },
    methods: {
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
        let params = {};
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
    },
  }
</script>

<style  scoped>

</style>