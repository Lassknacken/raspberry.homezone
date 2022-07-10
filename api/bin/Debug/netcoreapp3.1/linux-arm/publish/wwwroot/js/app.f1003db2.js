(function(t){function e(e){for(var o,s,a=e[0],u=e[1],d=e[2],l=0,c=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&c.push(i[s][0]),i[s]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);p&&p(e);while(c.length)c.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={app:0},r=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var d=0;d<a.length;d++)e(a[d]);var p=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},2468:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[t._m(0),n("Endpoints")],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"w-3/12"},[t._v("a")]),n("div",{staticClass:"w-9/12"},[t._v("b")])])}],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.endpoints,(function(e){return n("div",{key:e.Id},[n("endpoint",{attrs:{value:e},on:{input:t.endpointInput}})],1)})),n("div",[n("button",{attrs:{type:"button"},on:{click:t.addNewEndpoint}},[t._v("+")])])],2)},d=[],p=(n("c740"),n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("EndpointDetail",{attrs:{value:t.endpoint},on:{input:t.updated}}),n("div",[n("button",{attrs:{type:"button"},on:{click:t.toggleOn}},[t._v("On")]),n("button",{attrs:{type:"button"},on:{click:t.toggleOff}},[t._v("Off")])])],1)}),l=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{attrs:{type:"number",disabled:""},domProps:{value:t.endpoint.Id}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.endpoint.Code,expression:"endpoint.Code"}],attrs:{type:"text",disabled:t.disabled},domProps:{value:t.endpoint.Code},on:{input:function(e){e.target.composing||t.$set(t.endpoint,"Code",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.endpoint.Name,expression:"endpoint.Name"}],attrs:{type:"text",disabled:t.disabled},domProps:{value:t.endpoint.Name},on:{input:function(e){e.target.composing||t.$set(t.endpoint,"Name",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.endpoint.Number,expression:"endpoint.Number",modifiers:{number:!0}}],attrs:{type:"number",disabled:t.disabled},domProps:{value:t.endpoint.Number},on:{input:function(e){e.target.composing||t.$set(t.endpoint,"Number",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t.showYesNo?t._e():n("button",{attrs:{type:"button"},on:{click:t.toggle}},[t._v("pencil")]),t.disabled||t.showYesNo?t._e():n("button",{attrs:{type:"button"},on:{click:t.save}},[t._v("save")]),t.disabled?t._e():n("button",{attrs:{type:"button"},on:{click:function(e){t.showYesNo=!t.showYesNo}}},[t._v(" "+t._s(t.showYesNo?"No":"Delete")+" ")]),t.showYesNo?n("button",{attrs:{type:"button"},on:{click:t.doDelete}},[t._v("Yes")]):t._e()])},f=[],v={name:"EndpointDetail",props:{value:Object},data:function(){return{endpoint:Object.assign({},this.value),disabled:0!==this.value.Id,showYesNo:!1}},computed:{isDisabled:function(){return this.disabled?"disabled":""}},methods:{toggle:function(){this.disabled=!this.disabled},save:function(){var t=this;this.endpoint.Id?this.$http.put("/Endpoints",this.endpoint).then((function(e){t.$emit("input",e.data)})):this.$http.post("/Endpoints",this.endpoint).then((function(e){t.$emit("input",e.data)}))},create:function(){},update:function(){},doDelete:function(){this.$http.delete("/Endpoints?id="+this.endpoint.Id),this.$emit("input",void 0)}}},h=v,b=n("2877"),m=Object(b["a"])(h,c,f,!1,null,null,null),g=m.exports,_={name:"Endpoint",components:{EndpointDetail:g},props:{value:Object},data:function(){return{endpoint:Object.assign({},this.value)}},methods:{toggleOn:function(){this.toggle(!0)},toggleOff:function(){this.toggle(!1)},toggle:function(t){var e=this.$apiUrl+"/endpoints/"+this.value.Id+"/";e+=t?"On":"Off",this.$http.get(e)},updated:function(t){this.$emit("input",t)}}},y=_,O=Object(b["a"])(y,p,l,!1,null,null,null),w=O.exports,$={name:"Endpoints",components:{Endpoint:w},data:function(){return{endpoints:[]}},created:function(){var t=this;this.$http.get(this.$apiUrl+"/Endpoints").then((function(e){t.endpoints=e.data}))},methods:{endpointInput:function(t){var e=this.findIndex(t.Id);e<0&&(e=this.findIndex(0)),e>=0&&this.endpoints.splice(e,1,t)},addNewEndpoint:function(){this.endpoints.push({Id:0})},findIndex:function(t){return this.endpoints.findIndex((function(e){return e.Id==t}))}}},x=$,N=Object(b["a"])(x,u,d,!1,null,null,null),E=N.exports,j={name:"HelloWorld",components:{Endpoints:E},props:{msg:String}},I=j,k=(n("c07c"),Object(b["a"])(I,s,a,!1,null,"72a26590",null)),P=k.exports,Y={name:"App",components:{HelloWorld:P}},C=Y,D=(n("034f"),Object(b["a"])(C,i,r,!1,null,null,null)),S=D.exports,M=n("bc3a"),U=n.n(M);o["a"].config.productionTip=!1,o["a"].prototype.$http=U.a,o["a"].prototype.$apiUrl="",new o["a"]({render:function(t){return t(S)}}).$mount("#app")},"85ec":function(t,e,n){},c07c:function(t,e,n){"use strict";n("2468")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.f1003db2.js.map