webpackJsonp([1],{"An/j":function(t,e){},LicG:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("+VlJ"),o=n("DVuL"),i=n.n(o),s=(n("LicG"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]});var r=n("C7Lr")({name:"App",data:function(){return{}},created:function(){},methods:{login:function(){}}},s,!1,function(t){n("euOJ")},null,null).exports,l=n("KGCO"),c=n("3cXf"),u=n.n(c),p=n("rVsN"),d=n.n(p),m="admin",f="123456",v={name:"App",data:function(){return{dialogVisible:!1,loading:!1,ipt:"",pas:""}},created:function(){console.log("用户名: "+m),console.log("密码: "+f)},methods:{closeFn:function(){this.dialogVisible=!1,this.loading=!1},timeStr:function(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1,a=t.getDate(),o=t.getHours(),i=t.getMinutes(),s=t.getSeconds();return e+"年"+n+"月"+a+"日"+o+"时"+i+"分"+s+"秒"},login:function(){var t,e,n=this;this.loading=!0,(t=this.ipt,e=this.pas,new d.a(function(n,a){var o=2e3*Math.random();setTimeout(function(){console.log("本次异步请求耗时："+o+"ms"),t===m&&e===f?n():a()},o)})).then(function(){var t={time:n.timeStr(),account:{name:n.ipt}},e=window.localStorage,a=u()(t);e.setItem("dataStr",a),n.loading=!1,n.$router.push({name:"home",path:"/home"})}).catch(function(){n.dialogVisible=!0})}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"wrap-box"},[n("div",{staticClass:"title"},[t._v("登录框")]),t._v(" "),n("el-row",[n("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:t.ipt,callback:function(e){t.ipt=e},expression:"ipt"}}),t._v(" "),n("el-input",{staticClass:"mg-10",attrs:{placeholder:"请输入密码",type:"password"},model:{value:t.pas,callback:function(e){t.pas=e},expression:"pas"}})],1),t._v(" "),n("el-row",{staticClass:"button-wrap"},[n("el-button",{attrs:{type:"success"},on:{click:t.login}},[t._v("登录")])],1),t._v(" "),n("el-dialog",{attrs:{title:"登录失败",visible:t.dialogVisible,width:"30%","before-close":t.closeFn},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("span",[t._v("用户名或密码不正确")]),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:t.closeFn}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var h=n("C7Lr")(v,g,!1,function(t){n("UUSC")},null,null).exports,_={name:"Home",data:function(){return{name:"",time:""}},created:function(){var t=window.localStorage,e=JSON.parse(t.getItem("dataStr"));this.name=e.account.name,this.time=e.time},methods:{exitFn:function(){window.localStorage.removeItem("dataStr"),this.$router.push({path:"/",name:"Login"})}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-wrap11"},[n("p",[t._v("欢迎登录，"+t._s(t.name)+" "),n("span",{staticClass:"exit-btn",on:{click:t.exitFn}},[t._v("退出")])]),t._v(" "),n("p",[t._v("上次登录时间为："+t._s(t.time))])])},staticRenderFns:[]};var b=n("C7Lr")(_,w,!1,function(t){n("An/j")},"data-v-4b682e0f",null).exports;a.default.use(l.a);var C=new l.a({mode:"history",routes:[{path:"/",name:"Login",component:h},{path:"/home",name:"home",component:b}]});a.default.use(i.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:C,components:{App:r},template:"<App/>"})},UUSC:function(t,e){},euOJ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a47fe28631f8eb985d6c.js.map