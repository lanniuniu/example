webpackJsonp([1],{0:function(t,e,n){t.exports=n("msSN")},"1HF7":function(t,e){},"45Ns":function(t,e){},"5e9e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return r}),n.d(e,"mutations",function(){return a});var r=function(){return{enable:!0,type:"none",effect:"none"}},a={setType:function(t,e){t.type=e},setEffect:function(t,e){t.effect=e}}},CJsk:function(t,e){},LOWA:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"SET_PAGE_SCROLL_POSITION",function(){return i}),n.d(e,"state",function(){return c}),n.d(e,"mutations",function(){return u}),n.d(e,"actions",function(){return l});var r=n("bOdI"),a=n.n(r),o=n("Dd8w"),s=n.n(o),i="SET_PAGE_SCROLL_POSITION",c=function(){return{scrollPostionMap:{}}},u=a()({},i,function(t,e){var n=e.pageId,r=e.scrollPosition;t.scrollPostionMap=s()({},t.scrollPostionMap,a()({},n,r))}),l={savePageScrollPosition:function(t,e){var n=t.commit,r=e.pageId,a=e.scrollPosition;n(i,{pageId:r,scrollPosition:a})}}},Uz7q:function(t,e){t.exports={buildVersion:1545880047319,build:{ssr:!1,publicPath:"/",compress:!0,cssExtract:!0},middleware:{all:[],server:[],client:[]},router:{mode:"hash",pageTransition:{type:"fade",transitionClass:"fade"}},errorHandler:{defaultErrorMessage:"Internal Server Error",showRealErrorMessage:!1,errorPath:"/error"},serviceWorker:{enable:!0,swDest:"/work/pwa-example/dist/service-worker.js"},skeleton:{enable:!0,asyncCSS:!0}}},VfP6:function(t,e,n){var r={"./pageTransition.js":"5e9e","./scrollBehavior.js":"LOWA"};function a(t){return n(o(t))}function o(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id="VfP6"},ZFl9:function(t,e){},gHRC:function(t,e){},jJhu:function(t,e){},msSN:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("//Fk"),a=n.n(r),o=n("Gu7T"),s=n.n(o),i=n("Xxa5"),c=n.n(i),u=n("exGp"),l=n.n(u),p=n("/5sW"),f=n("1nuA"),h=function(){var t=l()(c.a.mark(function t(e){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();function d(t,e){var n={isClient:!0,app:e,store:t.store,route:t.to,from:t.from},r=t.next;return n.params=n.route.params||{},n.query=n.route.query||{},n.redirect=function(t){var e=t.status,a=void 0===e?302:e,o=t.path,s=void 0===o?"":o,i=t.query,c=void 0===i?{}:i,u=t.external,l=void 0!==u&&u;n._redirected=!0,r({path:s,query:c,status:a,external:l})},n}var v=function(){var t=l()(c.a.mark(function t(e,n){var r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=0;case 1:if(!(r<e.length)){t.next=9;break}if(!n._redirected){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,m(e[r],n);case 6:r++,t.next=1;break;case 9:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}();function m(t,e){var n=void 0;return 2===t.length?n=new a.a(function(n,r){t(e,function(t,a){t?(e.error(t),r(t)):n(a)})}):(n=t(e))&&(n instanceof a.a||"function"==typeof n.then)||(n=a.a.resolve(n)),n}var w=n("Uz7q"),_=n.n(w),y=n("Dd8w"),b=n.n(y),g=n("p3jY"),x=n.n(g),P=n("/ocq"),T={name:"appshell",metaInfo:{title:"Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}],bodyAttrs:{"empty-appshell":void 0}}},C=n("XyMi"),k=Object(C.a)(T,function(){var t=this.$createElement;return(this._self._c||t)("div")},[],!1,null,null,null).exports,E=n("fZjL"),S=n.n(E),A={name:"error",computed:{message:function(){return this.$route.params.error||"您访问的路径不存在"}},created:function(){var t=this.$route.query;0!==S()(t).length&&this.$router.replace({name:"error",params:t})}};var O=function(t){n("45Ns")},$=Object(C.a)(A,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-error"},[e("p",[this._v(this._s(this.message))])])},[],!1,O,"data-v-b5544618",null).exports;var I={name:"index",metaInfo:{title:"Home",titleTemplate:"%s - Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}]},data:function(){return{navVisible:!1,communication:[{name:"陈华龙",phone:"18696728764"},{name:"揭兴波",phone:"17782013639"},{name:"唐波",phone:"15922585040"}]}},methods:{toggle:function(){this.navVisible=!this.navVisible}},asyncData:function(){var t=l()(c.a.mark(function t(e){e.store,e.route;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()};var j=function(t){n("qhxU")},M=[{path:"/appshell",component:k,meta:{},name:"appshell"},{path:"/",component:Object(C.a)(I,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-page"},[n("header",{staticClass:"app-header"},[n("div",{staticClass:"app-header-left",on:{click:t.toggle}},[n("span",{staticClass:"icon-menu"})]),t._v(" "),n("div",{staticClass:"app-header-right"},[t._v("\n            崇天\n        ")])]),t._v(" "),n("section",{staticClass:"app-content"},[n("table",{attrs:{border:"2"}},[t._m(0),t._v(" "),t._l(t.communication,function(e){return n("tr",{staticClass:"app-content-unit"},[n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.phone))])])})],2)]),t._v(" "),n("section",{directives:[{name:"show",rawName:"v-show",value:t.navVisible,expression:"navVisible"}],staticClass:"nav"},[n("section",{staticClass:"app-nav"},[n("div",{staticClass:"app-nav-header"},[n("div",{staticClass:"app-nav-left",on:{click:t.toggle}},[n("span",{staticClass:"icon-home"})]),t._v(" "),n("div",{staticClass:"app-nav-right"},[t._v("\n                    Home\n                ")])]),t._v(" "),t._m(1)]),t._v(" "),n("section",{directives:[{name:"show",rawName:"v-show",value:t.navVisible,expression:"navVisible"}],staticClass:"app-nav-over"})])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"app-content-title"},[e("th",[this._v("姓名")]),this._v(" "),e("th",[this._v("电话")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-nav-content"},[e("h3",[this._v("技术部")]),this._v(" "),e("h3",[this._v("催收部")]),this._v(" "),e("h3",[this._v("产品部")])])}],!1,j,"data-v-3204c7b2",null).exports,meta:{},name:"index"},{path:"/error",component:$,meta:{},name:"error",alias:"*"}];p.a.use(P.a);var L=function(t,e,n){if(n)return n;var r={};return t.hash&&(r.selector=t.hash),t.matched.some(function(t){return t.meta.scrollToTop})&&(r.x=0,r.y=0),r},V=M.filter(function(t){return t.keepAlive||t.meta.keepAlive}).map(function(t){return t.name});var q=n("woOf"),R=n.n(q),N=n("BO1k"),W=n.n(N),B=n("NYxO");p.a.use(B.a);var D=n("VfP6"),U=D.keys(),F={},H=!0,G=!1,J=void 0;try{for(var X,Y=W()(U);!(H=(X=Y.next()).done);H=!0){var Z=X.value;if("./index.js"===Z){F=it(Z);break}}}catch(t){G=!0,J=t}finally{try{!H&&Y.return&&Y.return()}finally{if(G)throw J}}if("function"!=typeof F){F.modules=F.modules||{};var z=!0,K=!1,Q=void 0;try{for(var tt,et=W()(U);!(z=(tt=et.next()).done);z=!0){var nt=tt.value;if("./index.js"!==nt){var rt=nt.replace(/^\.\//,"").replace(/\.js$/,""),at=rt.split("/"),ot=ct(F,at);ot[rt=at.pop()]=it(nt),ot[rt].namespaced=!0}}}catch(t){K=!0,Q=t}finally{try{!z&&et.return&&et.return()}finally{if(K)throw Q}}}var st=F instanceof Function?F:function(){return new B.a.Store(R()({},F,{state:F.state instanceof Function?F.state():{}}))};function it(t){var e=D(t),n=e.default||e;if(n.commit)throw new Error("[lavas] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[lavas] state should be a function in store/"+t.replace("./",""));return n}function ct(t,e){if(1===e.length)return t.modules;var n=e.shift(),r=t.modules[n]=t.modules[n]||{};return r.namespaced=!0,r.modules=r.modules||{},ct(r,e)}var ut={name:"updateToast",props:{text:{type:String,default:"站点发生更新，请手动刷新"}},data:function(){return{show:!1}},mounted:function(){window.addEventListener("sw.update",this.handleUpdate)},beforeDestroy:function(){window.removeEventListener("sw.update",this.handleUpdate)},methods:{handleUpdate:function(t){this.show=!0},handleRefresh:function(){window.location.reload()}}};var lt=function(t){n("1HF7")},pt={name:"app",components:{UpdateToast:Object(C.a)(ut,function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"popup"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"update-toast"},[e("span",[this._v(this._s(this.text))]),this._v(" "),e("span",{staticClass:"update-toast-close-btn",on:{click:this.handleRefresh}},[e("i",{staticClass:"iconfont icon-refresh"})])])])},[],!1,lt,"data-v-4364d9fc",null).exports},computed:b()({},Object(B.c)("pageTransition",{pageTransitionType:function(t){return t.type},pageTransitionEffect:function(t){return t.effect}}),Object(B.c)("scrollBehavior",{scrollPostionMap:function(t){return t.scrollPostionMap}}),{pageTransitionClass:function(){return"transition-"+this.pageTransitionType},routerViewKey:function(){var t=this.$route,e=t.name,n=t.params,r=S()(n);return r.length?e+r.reduce(function(t,e){return t+n[e]},""):null}}),data:function(){return{keepAlivePages:V}},methods:b()({},Object(B.b)("scrollBehavior",["savePageScrollPosition"]),{restoreContainerScrollPosition:function(t,e){t.classList.add("app-view-scroll-enabled"),t.scrollTop=e},restoreBodyScrollPosition:function(t,e){t.classList.remove("app-view-scroll-enabled"),document.body.scrollTop=document.documentElement.scrollTop=e},handleBeforeEnter:function(t){var e=this,n=t.dataset.pageId,r=(this.scrollPostionMap[n]||{}).y,a=void 0===r?0:r;p.a.nextTick(function(){e.restoreContainerScrollPosition(t,a)})},handleAfterEnter:function(t){var e=t.dataset.pageId,n=(this.scrollPostionMap[e]||{}).y,r=void 0===n?0:n;this.restoreBodyScrollPosition(t,r)},handleBeforeLeave:function(t){var e=t.dataset.pageId,n=document.body.scrollTop||document.documentElement.scrollTop;this.restoreContainerScrollPosition(t,n),this.savePageScrollPosition({pageId:e,scrollPosition:{y:n}})}})};var ft=function(t){n("gHRC")},ht=Object(C.a)(pt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:t.pageTransitionEffect},on:{"before-enter":t.handleBeforeEnter,"after-enter":t.handleAfterEnter,"before-leave":t.handleBeforeLeave}},[n("keep-alive",{attrs:{include:[].concat(t.keepAlivePages)}},[n("router-view",{key:t.routerViewKey,class:["app-view",t.pageTransitionClass],attrs:{"data-page-id":t.$route.fullPath}})],1)],1),t._v(" "),n("update-toast")],1)},[],!1,ft,null,null).exports,dt=n("jJhu"),vt=n.n(dt);p.a.use(x.a),p.a.use(vt.a),p.a.config.productionTip=!1;var mt={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#ffca2b",failedColor:"#ff0000"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,t.$nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}};var wt=function(t){n("ZFl9")},_t=Object(C.a)(mt,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})},[],!1,wt,"data-v-2e9576fc",null).exports,yt=n("p5k0"),bt=n.n(yt),gt=n("XGXE"),xt=n.n(gt);n("MU8w"),n("CJsk");bt.a.shim(),xt.a.shim();var Pt=p.a.prototype.$loading=new p.a(_t).$mount(),Tt=function(){var t=function(){var t=new P.a({mode:"hash",base:"/",scrollBehavior:L,routes:M});return t.beforeEach(function(e,n,r){t.app.$store&&t.app.$store.state.pageTransition.enable&&(t.app.$store.commit("pageTransition/setType","fade"),t.app.$store.commit("pageTransition/setEffect","fade")),r()}),t}(),e=st();return{App:p.a.extend(b()({router:t,store:e},ht)),router:t,store:e}}(),Ct=Tt.App,kt=Tt.router,Et=Tt.store,St=_.a.build,At=St.ssr,Ot=St.cssExtract,$t=_.a.middleware,It=void 0===$t?{}:$t,jt=_.a.skeleton,Mt=jt.enable,Lt=jt.asyncCSS,Vt=void 0;window.__INITIAL_STATE__&&Et.replaceState(window.__INITIAL_STATE__),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),document.body.appendChild(Pt.$el),p.a.mixin({beforeRouteUpdate:function(){var t=l()(c.a.mark(function t(e,n,r){var a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(a=this.$options.asyncData)?(Pt.start(),a.call(this,{store:this.$store,route:e}).then(function(){Pt.finish(),r()}).catch(r)):r();case 2:case"end":return t.stop()}},t,this)}));return function(e,n,r){return t.apply(this,arguments)}}()});var qt=!0;if(function(){var t=this;kt.beforeEach(function(){var e=l()(c.a.mark(function e(n,r,a){var o,i,u,l,p,m,w;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(qt||n.path!==r.path){t.next=2;break}return t.abrupt("return",a());case 2:return qt=!1,o=kt.getMatchedComponents(n),i=[].concat(s()(It.all||[]),s()(It.client||[]),s()(o.filter(function(t){var e=t.middleware;return!!e}).reduce(function(t,e){var n=e.middleware;return t.concat(n)},[]))),t.next=7,h(i);case 7:if(u=t.sent,!(l=i.find(function(t){return"function"!=typeof u[t]}))){t.next=11;break}throw new Error("Unknown middleware "+l);case 11:return p=!1,m=d({to:n,from:r,store:Et,next:function(t){if(Pt.finish&&Pt.finish(),!p){if(p=!0,t.external)return t.query=Object(f.stringify)(t.query),t.path=t.path+(t.query?"?"+t.query:""),window.location.replace(t.path),a();a(t)}}},Vt),w=i.map(function(t){return u[t]}),t.next=17,v(w,m);case 17:p||a();case 18:case"end":return t.stop()}},e,t)}));return function(t,n,r){return e.apply(this,arguments)}}())}(),!document.body.hasAttribute("empty-appshell")&&At)Vt=new Ct,kt.onReady(function(){Nt(),Vt.$mount("#app")});else{var Rt=Mt&&Lt&&Ot;window.mountLavas=function(){setTimeout(function(){var t=document.querySelector("#app");t&&(t.innerHTML=""),Vt.$mount("#app")},0)},Nt(),Vt=new Ct,(At||!Rt||Rt&&window.STYLE_READY)&&window.mountLavas()}function Nt(){var t=this;kt.beforeResolve(function(e,n,r){var o=kt.getMatchedComponents(e),s=kt.getMatchedComponents(n),i=!1,u=o.filter(function(t,e){return i||(i=s[e]!==t)});if(!u.length)return r();Pt.start(),a.a.all(u.filter(function(t){return t.asyncData&&(!t.asyncDataFetched||!e.meta.keepAlive)}).map(function(){var n=l()(c.a.mark(function n(r){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.asyncData({store:Et,route:e});case 2:r.asyncDataFetched=!0;case 3:case"end":return t.stop()}},n,t)}));return function(t){return n.apply(this,arguments)}}())).then(function(){Pt.finish(),r()}).catch(r)})}},qhxU:function(t,e){}},[0]);
//# sourceMappingURL=index.50157641.js.map