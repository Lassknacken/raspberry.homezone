(function(t){function e(e){for(var o,a,u=e[0],s=e[1],d=e[2],p=0,c=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&c.push(i[a][0]),i[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(c.length)c.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,u=1;u<n.length;u++){var s=n[u];0!==i[s]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},2468:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[t._m(0),n("Endpoints")],1)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"w-3/12"},[t._v("a")]),n("div",{staticClass:"w-9/12"},[t._v("b")])])}],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.endpoints,(function(e){return n("div",{key:e.Id},[n("endpoint",{attrs:{value:e},on:{input:t.endpointInput}})],1)})),n("div",[n("button",{attrs:{type:"button"},on:{click:t.addNewEndpoint}},[t._v("+")])])],2)},d=[],l=(n("c740"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("EndpointDetail",{attrs:{value:t.endpoint},on:{input:t.updated}}),n("div",[n("button",{attrs:{type:"button"},on:{click:t.toggleOn}},[t._v("On")]),n("button",{attrs:{type:"button"},on:{click:t.toggleOff}},[t._v("Off")])])],1)}),p=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{attrs:{type:"number",disabled:t.disabled},domProps:{value:t.endpoint.Id}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.endpoint.Code,expression:"endpoint.Code"}],attrs:{type:"text",disabled:t.disabled},domProps:{value:t.endpoint.Code},on:{input:function(e){e.target.composing||t.$set(t.endpoint,"Code",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.endpoint.Name,expression:"endpoint.Name"}],attrs:{type:"text",disabled:t.disabled},domProps:{value:t.endpoint.Name},on:{input:function(e){e.target.composing||t.$set(t.endpoint,"Name",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.endpoint.Number,expression:"endpoint.Number"}],attrs:{type:"number",disabled:t.disabled},domProps:{value:t.endpoint.Number},on:{input:function(e){e.target.composing||t.$set(t.endpoint,"Number",e.target.value)}}}),n("button",{attrs:{type:"button"},on:{click:t.toggle}},[t._v("pencil")]),t.disabled?t._e():n("button",{attrs:{type:"button"},on:{click:t.save}},[t._v("save")]),t.disabled?t._e():n("button",{attrs:{type:"button"}},[t._v("delete")])])},f=[],v={name:"EndpointDetail",props:{value:Object},data:function(){return{endpoint:Object.assign({},this.value),disabled:!0}},computed:{isDisabled:function(){return this.disabled?"disabled":""}},methods:{toggle:function(){this.disabled=!this.disabled},save:function(){this.$emit("input",this.endpoint)},create:function(){},update:function(){},delete:function(){}}},b=v,m=n("2877"),h=Object(m["a"])(b,c,f,!1,null,null,null),g=h.exports,y={name:"Endpoint",components:{EndpointDetail:g},props:{value:Object},data:function(){return{endpoint:Object.assign({},this.value)}},methods:{toggleOn:function(){this.toggle(!0)},toggleOff:function(){this.toggle(!1)},toggle:function(t){var e=this.$apiUrl+"/endpoints/"+this.value.Id+"/";e+=t?"On":"Off",this.$http.get(e)},updated:function(t){this.$emit("input",t)}}},_=y,O=Object(m["a"])(_,l,p,!1,null,null,null),x=O.exports,j={name:"Endpoints",components:{Endpoint:x},data:function(){return{endpoints:[]}},created:function(){var t=this;this.$http.get(this.$apiUrl+"/Endpoints").then((function(e){t.endpoints=e.data}))},methods:{endpointInput:function(t){var e=this.findIndex(t.Id);e<0&&(e=this.findIndex(0)),e>=0&&o["a"].set(this.endpoints,e,t)},addNewEndpoint:function(){this.endpoints.push({})},findIndex:function(t){return this.endpoints.findIndex((function(e){return e.Id==t}))}}},w=j,$=Object(m["a"])(w,s,d,!1,null,null,null),E=$.exports,N={name:"HelloWorld",components:{Endpoints:E},props:{msg:String}},I=N,P=(n("c07c"),Object(m["a"])(I,a,u,!1,null,"72a26590",null)),k=P.exports,C={name:"App",components:{HelloWorld:k}},S=C,D=(n("034f"),Object(m["a"])(S,i,r,!1,null,null,null)),M=D.exports,W=n("bc3a"),H=n.n(W);o["a"].config.productionTip=!1,o["a"].prototype.$http=H.a,o["a"].prototype.$apiUrl="",new o["a"]({render:function(t){return t(M)}}).$mount("#app")},"85ec":function(t,e,n){},c07c:function(t,e,n){"use strict";n("2468")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.aa5f1705.js.map