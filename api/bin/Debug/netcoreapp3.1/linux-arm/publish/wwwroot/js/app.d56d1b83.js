(function(t){function n(n){for(var o,l,i=n[0],c=n[1],a=n[2],s=0,f=[];s<i.length;s++)l=i[s],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&f.push(r[l][0]),r[l]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(n);while(f.length)f.shift()();return u.push.apply(u,a||[]),e()}function e(){for(var t,n=0;n<u.length;n++){for(var e=u[n],o=!0,i=1;i<e.length;i++){var c=e[i];0!==r[c]&&(o=!1)}o&&(u.splice(n--,1),t=l(l.s=e[0]))}return t}var o={},r={app:0},u=[];function l(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=t,l.c=o,l.d=function(t,n,e){l.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,n){if(1&n&&(t=l(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)l.d(e,o,function(n){return t[n]}.bind(null,o));return e},l.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(n,"a",n),n},l.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=n,i=i.slice();for(var a=0;a<i.length;a++)n(i[a]);var p=c;u.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";e("85ec")},"566c":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),r=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{attrs:{id:"app"}},[o("img",{attrs:{alt:"Vue logo",src:e("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},u=[],l=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("Endpoints")],1)},i=[],c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",t._l(t.endpoints,(function(t){return e("endpoint",{key:t.Id,attrs:{value:t}})})),1)},a=[],p=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[t._v(t._s(t.value.Name))]),e("div",[t._v(t._s(t.value.Number))]),e("div",[e("button",{attrs:{type:"button"},on:{click:t.toggleOn}},[t._v("On")]),e("button",{attrs:{type:"button"},on:{click:t.toggleOff}},[t._v("Off")])])])},s=[],f={name:"Endpoint",props:{value:Object},methods:{toggleOn:function(){this.toggle(!0)},toggleOff:function(){this.toggle(!1)},toggle:function(t){var n="/endpoints/"+this.value.Id+"/";n+=t?"On":"Off",this.$http.get(n)}}},d=f,v=e("2877"),g=Object(v["a"])(d,p,s,!1,null,null,null),b=g.exports,h={name:"Endpoints",components:{Endpoint:b},data:function(){return{endpoints:[]}},created:function(){var t=this;this.$http.get("/Endpoints").then((function(n){t.endpoints=n.data}))}},m=h,O=Object(v["a"])(m,c,a,!1,null,null,null),y=O.exports,_={name:"HelloWorld",components:{Endpoints:y},props:{msg:String}},j=_,w=(e("5d55"),Object(v["a"])(j,l,i,!1,null,"666ba5fc",null)),x=w.exports,E={name:"App",components:{HelloWorld:x}},$=E,P=(e("034f"),Object(v["a"])($,r,u,!1,null,null,null)),k=P.exports,S=e("bc3a"),M=e.n(S);o["a"].config.productionTip=!1,o["a"].prototype.$http=M.a,new o["a"]({render:function(t){return t(k)}}).$mount("#app")},"5d55":function(t,n,e){"use strict";e("566c")},"85ec":function(t,n,e){},cf05:function(t,n,e){t.exports=e.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.d56d1b83.js.map