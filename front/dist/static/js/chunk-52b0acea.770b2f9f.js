(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52b0acea"],{"129e":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"v-widget"}},[r("v-card",[t.enableHeader?r("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[r("v-toolbar-title",[r("h4",[t._v(t._s(t.title))])]),r("v-spacer"),t._t("widget-header-action")],2):t._e(),t.enableHeader?r("v-divider"):t._e(),r("v-card-text",{class:t.contentBg},[t._t("widget-content")],2)],1)],1)},a=[],o={name:"VWidget",props:{title:{type:String},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"}},data:function(){return{}},computed:{}},u=o,s=r("2877"),i=r("6544"),c=r.n(i),l=r("b0af"),p=r("99d9"),d=r("ce7e"),h=r("9910"),f=r("71d9"),v=r("2a7f"),m=Object(s["a"])(u,n,a,!1,null,null,null);e["a"]=m.exports;c()(m,{VCard:l["a"],VCardText:p["b"],VDivider:d["a"],VSpacer:h["a"],VToolbar:f["a"],VToolbarTitle:v["b"]})},2677:function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r("8654"),a=r("a844"),o=r("7cf7"),u=r("ab6d"),s=r("d9bd"),i={functional:!0,$_wrapperFor:n["a"],props:{textarea:Boolean,multiLine:Boolean},render:function(t,e){var r=e.props,c=e.data,l=e.slots,p=e.parent;Object(u["a"])(c);var d=Object(o["a"])(l(),t);return r.textarea&&Object(s["d"])("<v-text-field textarea>","<v-textarea outline>",i,p),r.multiLine&&Object(s["d"])("<v-text-field multi-line>","<v-textarea>",i,p),r.textarea||r.multiLine?(c.attrs.outline=r.textarea,t(a["a"],c,d)):t(n["a"],c,d)}}},"358a":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"page-text-fields"}},[r("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{sm12:""}},[r("v-widget",{attrs:{title:"Cadastrar Produto"}},[r("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs4:""}},[r("v-subheader",[t._v("Produto")])],1),r("v-flex",{attrs:{xs8:""}},[r("v-text-field",{attrs:{name:"input-1",label:"Nome do produto",color:"primary",id:"name"},model:{value:t.product.name,callback:function(e){t.$set(t.product,"name",e)},expression:"product.name"}})],1)],1),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs4:""}},[r("v-subheader",[t._v("Cor")])],1),r("v-flex",{attrs:{xs8:""}},[r("v-text-field",{attrs:{name:"input-1",label:"Cor",color:"primary",id:"color"},model:{value:t.product.color,callback:function(e){t.$set(t.product,"color",e)},expression:"product.color"}})],1)],1),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs4:""}},[r("v-subheader",[t._v("Descrição")])],1),r("v-flex",{attrs:{xs8:""}},[r("v-textarea",{attrs:{name:"input-5",label:"Descrição do produto",value:"Input text",color:"teal","multi-line":""},model:{value:t.product.description,callback:function(e){t.$set(t.product,"description",e)},expression:"product.description"}})],1)],1),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs4:""}},[r("v-subheader",[t._v("Preço")])],1),r("v-flex",{attrs:{xs8:""}},[r("v-text-field",{attrs:{label:"Valor",value:t.product.preco,prefix:"R$"},model:{value:t.product.price,callback:function(e){t.$set(t.product,"price",e)},expression:"product.price"}})],1)],1),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs4:""}},[r("v-subheader",[t._v("Peso")])],1),r("v-flex",{attrs:{xs8:""}},[r("v-text-field",{attrs:{label:"Peso",suffix:"gramas"},model:{value:t.product.weight,callback:function(e){t.$set(t.product,"weight",e)},expression:"product.weight"}})],1)],1),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs5:""}},[r("v-btn",{attrs:{block:"",color:"error"},on:{click:t.cancel}},[t._v("Cancelar")])],1),r("v-flex",{attrs:{xs8:""}},[r("v-btn",{attrs:{block:"",color:"success",loading:t.loadingCreate},on:{click:t.update}},[t._v("Atualizar")])],1)],1)],1)],1)])],1)],1)],1)],1)},a=[],o=(r("96cf"),r("3b8d")),u=r("129e"),s=r("c653"),i={components:{VWidget:u["a"]},data:function(){return{loadingCreate:!1,id:null,product:{name:"",description:"",color:"",price:"",weight:""}}},created:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.id=this.$route.params.id,t.next=3,Object(s["g"])(this.id);case 3:this.product=t.sent;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{update:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["l"])(this.id,this.product);case 2:e=t.sent,200===e.status&&this.$router.push("/products/all");case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),cancel:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$router.push("/products/all");case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},c=i,l=r("2877"),p=r("6544"),d=r.n(p),h=r("8336"),f=r("a523"),v=r("0e8f"),m=r("a722"),g=r("e0c7"),w=r("2677"),x=r("a844"),b=Object(l["a"])(c,n,a,!1,null,null,null);e["default"]=b.exports;d()(b,{VBtn:h["a"],VContainer:f["a"],VFlex:v["a"],VLayout:m["a"],VSubheader:g["a"],VTextField:w["a"],VTextarea:x["a"]})},"7e63":function(t,e,r){},a844:function(t,e,r){"use strict";r("7e63");var n=r("8654"),a=r("d9bd"),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};e["a"]={name:"v-textarea",extends:n["a"],props:{autoGrow:Boolean,noResize:Boolean,outline:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return o({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},n["a"].options.computed.classes.call(this,null))},dynamicHeight:function(){return this.autoGrow?this.inputHeight:"auto"},isEnclosed:function(){return this.textarea||n["a"].options.computed.isEnclosed.call(this)},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){!this.internalChange&&this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout(function(){t.autoGrow&&t.calculateInputHeight()},0),this.autoGrow&&this.noResize&&Object(a["b"])('"no-resize" is now implied when using "auto-grow", and can be removed',this)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height=0;var e=t.scrollHeight,r=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(r,e)+"px"}},genInput:function(){var t=n["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){n["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.internalChange=!0,this.$emit("keydown",t)}}}},c653:function(t,e,r){"use strict";r("a481"),r("96cf");var n=r("3b8d"),a=r("bc3a"),o=r.n(a),u=o.a.create({baseURL:"http://localhost:3000",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlbmlzIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTY2MzIzMDEyLCJleHAiOjE1NjYzMjY2MTJ9.C_UHuojartqU4srX659RQbsy7dHcqCO8R3_hIqljYFQ"}}),s=r("c0d6");function i(){var t=s["a"].state.accessToken;if(!t)throw"Token not found";return{validateStatus:!1,headers:{Authorization:"Bearer ".concat(t)}}}function c(t){return l.apply(this,arguments)}function l(){return l=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get("products/".concat(e),i());case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0.response.data.message);case 10:case"end":return t.stop()}},t,null,[[0,7]])})),l.apply(this,arguments)}function p(t,e){return d.apply(this,arguments)}function d(){return d=Object(n["a"])(regeneratorRuntime.mark(function t(e,r){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r.price=parseFloat(r.price),r.weight=parseFloat(r.weight),t.next=5,u.put("products/".concat(e),r,i());case 5:return n=t.sent,t.abrupt("return",n);case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}},t,null,[[0,9]])})),d.apply(this,arguments)}function h(t){return f.apply(this,arguments)}function f(){return f=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.delete("products/".concat(e),i());case 3:return r=t.sent,t.abrupt("return",r);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0.response.data.message);case 10:case"end":return t.stop()}},t,null,[[0,7]])})),f.apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return m=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.patch("products/".concat(e),{},i());case 3:return r=t.sent,t.abrupt("return",r);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0.response.data.message);case 10:case"end":return t.stop()}},t,null,[[0,7]])})),m.apply(this,arguments)}function g(){return w.apply(this,arguments)}function w(){return w=Object(n["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,k("products");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)})),w.apply(this,arguments)}function x(){return b.apply(this,arguments)}function b(){return b=Object(n["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,k("products/active");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)})),b.apply(this,arguments)}function y(){return R.apply(this,arguments)}function R(){return R=Object(n["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,k("products/removed");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)})),R.apply(this,arguments)}function k(t){return j.apply(this,arguments)}function j(){return j=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.get(e,i());case 2:if(r=t.sent,200!==r.status){t.next=5;break}return t.abrupt("return",r.data);case 5:case"end":return t.stop()}},t)})),j.apply(this,arguments)}function O(t){return I.apply(this,arguments)}function I(){return I=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.price=e.price.replace(",","."),e.price=parseFloat(e.price),e.weight=parseFloat(e.weight),t.next=6,u.post("products",e,i());case 6:return r=t.sent,t.abrupt("return",r);case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0.response.data.message);case 13:case"end":return t.stop()}},t,null,[[0,10]])})),I.apply(this,arguments)}function _(){return V.apply(this,arguments)}function V(){return V=Object(n["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get("history",i());case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0.response.data.message);case 10:case"end":return t.stop()}},t,null,[[0,7]])})),V.apply(this,arguments)}function H(){return C.apply(this,arguments)}function C(){return C=Object(n["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get("auth/users",i());case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0.response.data.message);case 10:case"end":return t.stop()}},t,null,[[0,7]])})),C.apply(this,arguments)}function z(t){return $.apply(this,arguments)}function $(){return $=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isadmin=!0,t.next=4,u.post("auth/signup",e);case 4:return r=t.sent,t.abrupt("return",r);case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}},t,null,[[0,8]])})),$.apply(this,arguments)}function F(){return B.apply(this,arguments)}function B(){return B=Object(n["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get("products/resume",i());case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0.response.data.message);case 10:case"end":return t.stop()}},t,null,[[0,7]])})),B.apply(this,arguments)}r.d(e,"g",function(){return c}),r.d(e,"l",function(){return p}),r.d(e,"k",function(){return h}),r.d(e,"j",function(){return v}),r.d(e,"d",function(){return g}),r.d(e,"c",function(){return x}),r.d(e,"h",function(){return y}),r.d(e,"a",function(){return O}),r.d(e,"f",function(){return _}),r.d(e,"e",function(){return H}),r.d(e,"b",function(){return z}),r.d(e,"i",function(){return F})}}]);
//# sourceMappingURL=chunk-52b0acea.770b2f9f.js.map