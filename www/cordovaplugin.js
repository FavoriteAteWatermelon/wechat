// function cameraTakePicture () {
//   navigator.camera.getPicture(onSuccess, onFail, {
//     quality: 50,
//     destinationType: Camera.DestinationType.DATA_URL
//   })
//   function onSuccess (imageData) {
//     let image = document.getElementById('myImage')
//     image.src = "data:image/jpeg;base64," +imageData
//   }
//   function onFail (message) {
//     alert('Failed bacause' + message)
//   }
// }
// function showToast () {
//   corodova.plugins.toast.show('再按一次退出','long','center', () => {})
// }
// export default{
//   cameraTakePicture,
//   showToast
// }