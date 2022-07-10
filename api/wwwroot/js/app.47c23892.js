(function(t){function e(e){for(var o,a,s=e[0],u=e[1],l=e[2],d=0,c=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&c.push(i[a][0]),i[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);p&&p(e);while(c.length)c.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[t._m(0),n("Camera"),n("Endpoints")],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"w-3/12"},[t._v("a")]),n("div",{staticClass:"w-9/12"},[t._v("b")])])}],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.endpoints,(function(e){return n("div",{key:e.Id},[n("endpoint",{attrs:{value:e},on:{input:t.endpointInput}})],1)})),n("div",[n("button",{attrs:{type:"button"},on:{click:t.addNewEndpoint}},[t._v("+")])])],2)},l=[],p=(n("c740"),n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("EndpointDetail",{attrs:{value:t.endpoint},on:{input:t.updated}}),n("div",[n("button",{attrs:{type:"button"},on:{click:t.toggleOn}},[t._v("On")]),n("button",{attrs:{type:"button"},on:{click:t.toggleOff}},[t._v("Off")])])],1)}),d=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{attrs:{type:"number",disabled:""},domProps:{value:t.endpoint.Id}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.endpoint.Code,expression:"endpoint.Code"}],attrs:{type:"text",disabled:t.disabled},domProps:{value:t.endpoint.Code},on:{input:function(e){e.target.composing||t.$set(t.endpoint,"Code",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.endpoint.Name,expression:"endpoint.Name"}],attrs:{type:"text",disabled:t.disabled},domProps:{value:t.endpoint.Name},on:{input:function(e){e.target.composing||t.$set(t.endpoint,"Name",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.endpoint.Number,expression:"endpoint.Number",modifiers:{number:!0}}],attrs:{type:"number",disabled:t.disabled},domProps:{value:t.endpoint.Number},on:{input:function(e){e.target.composing||t.$set(t.endpoint,"Number",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t.showYesNo?t._e():n("button",{attrs:{type:"button"},on:{click:t.toggle}},[t._v("pencil")]),t.disabled||t.showYesNo?t._e():n("button",{attrs:{type:"button"},on:{click:t.save}},[t._v("save")]),t.disabled?t._e():n("button",{attrs:{type:"button"},on:{click:function(e){t.showYesNo=!t.showYesNo}}},[t._v(" "+t._s(t.showYesNo?"No":"Delete")+" ")]),t.showYesNo?n("button",{attrs:{type:"button"},on:{click:t.doDelete}},[t._v("Yes")]):t._e()])},f=[],h={name:"EndpointDetail",props:{value:Object},data:function(){return{endpoint:Object.assign({},this.value),disabled:0!==this.value.Id,showYesNo:!1}},computed:{isDisabled:function(){return this.disabled?"disabled":""}},methods:{toggle:function(){this.disabled=!this.disabled},save:function(){var t=this;this.endpoint.Id?this.$http.put("/Endpoints",this.endpoint).then((function(e){t.$emit("input",e.data)})):this.$http.post("/Endpoints",this.endpoint).then((function(e){t.$emit("input",e.data)}))},create:function(){},update:function(){},doDelete:function(){this.$http.delete("/Endpoints?id="+this.endpoint.Id),this.$emit("input",void 0)}}},m=h,v=n("2877"),b=Object(v["a"])(m,c,f,!1,null,null,null),g=b.exports,_={name:"Endpoint",components:{EndpointDetail:g},props:{value:Object},data:function(){return{endpoint:Object.assign({},this.value)}},methods:{toggleOn:function(){this.toggle(!0)},toggleOff:function(){this.toggle(!1)},toggle:function(t){var e=this.$apiUrl+"/endpoints/"+this.value.Id+"/";e+=t?"On":"Off",this.$http.get(e)},updated:function(t){this.$emit("input",t)}}},O=_,y=Object(v["a"])(O,p,d,!1,null,null,null),$=y.exports,w={name:"Endpoints",components:{Endpoint:$},data:function(){return{endpoints:[]}},created:function(){var t=this;this.$http.get(this.$apiUrl+"/Endpoints").then((function(e){t.endpoints=e.data}))},methods:{endpointInput:function(t){var e=this.findIndex(t.Id);e<0&&(e=this.findIndex(0)),e>=0&&this.endpoints.splice(e,1,t)},addNewEndpoint:function(){this.endpoints.push({Id:0})},findIndex:function(t){return this.endpoints.findIndex((function(e){return e.Id==t}))}}},x=w,N=Object(v["a"])(x,u,l,!1,null,null,null),E=N.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{attrs:{type:"button"},on:{click:t.takePicture}},[t._v("Foto")]),n("button",{attrs:{type:"button"},on:{click:t.cameraOn}},[t._v("Camera On")]),n("button",{attrs:{type:"button"},on:{click:t.cameraOff}},[t._v("Camera Off")]),t.pictureUrl?n("img",{attrs:{src:t.pictureUrl}}):t._e()])},k=[],I={name:"Camera",data:function(){return{pictureUrl:void 0}},methods:{takePicture:function(){var t=this,e=this.$apiUrl+"/camera/picture";this.$http.get(e).then((function(e){console.log(e),t.pictureUrl=t.$apiUrl+"/"+e.data.FileName}))},cameraOn:function(){var t=this.$apiUrl+"/camera/On";this.$http.get(t)},cameraOff:function(){var t=this.$apiUrl+"/camera/Off";this.$http.get(t)}}},C=I,P=Object(v["a"])(C,j,k,!1,null,null,null),U=P.exports,Y={name:"HelloWorld",components:{Endpoints:E,Camera:U},props:{msg:String}},D=Y,S=(n("7c85"),Object(v["a"])(D,a,s,!1,null,"64dae8f9",null)),M=S.exports,W={name:"App",components:{HelloWorld:M}},H=W,T=(n("034f"),Object(v["a"])(H,i,r,!1,null,null,null)),A=T.exports,F=n("bc3a"),J=n.n(F);o["a"].config.productionTip=!1,o["a"].prototype.$http=J.a,o["a"].prototype.$apiUrl="",new o["a"]({render:function(t){return t(A)}}).$mount("#app")},"7c85":function(t,e,n){"use strict";n("df65")},"85ec":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},df65:function(t,e,n){}});
//# sourceMappingURL=app.47c23892.js.map