webpackJsonp([5],{"/wAz":function(n,t){},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("+RKF"),i={name:"App",data:function(){return{user:"",password:"",isBack:!1,timer:null,isLogin:!1}},methods:{camera:function(){},doLogin:function(){this.isLogin=!!localStorage.getItem("login")},toHome:function(){var n=this;"msi"===this.user&&"123"===this.password?(localStorage.setItem("login",!0),this.doLogin()):(this.toastMsg="账号或密码不正确!",this.toast=!0,setTimeout(function(){n.toast=!1},1500)),console.log(this.user)}},created:function(){this.doLogin()}},a={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=e("C7Lr")(i,a,!1,function(n){e("WgVe")},null,null).exports,s=e("IhWa");o.a.use(s.a);var u=new s.a({routes:[{path:"/",redirect:"/post"},{path:"/post",name:"Post",component:function(){return e.e(3).then(e.bind(null,"jT7l"))},children:[{path:"login",name:"Login",component:function(){return e.e(2).then(e.bind(null,"QlWu"))}},{path:"language",name:"Language",component:function(){return e.e(0).then(e.bind(null,"liFM"))}},{path:"register",name:"Register",component:function(){return e.e(1).then(e.bind(null,"8zp9"))}}]}]}),c=e("rNZf"),l=e.n(c),p=e("NfSi"),d=e.n(p),h=e("iDdd"),g=e.n(h);e("/wAz");g.a.attach(document.body),o.a.use(l.a),o.a.use(d.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:u,components:{App:r},template:"<App/>"})},WgVe:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.1ebf63b671dece1e8fe8.js.map