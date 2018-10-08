(function(t){function e(e){for(var a,i,r=e[0],c=e[1],u=e[2],l=0,d=[];l<r.length;l++)i=r[l],s[i]&&d.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return n.push.apply(n,u||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],a=!0,r=1;r<o.length;r++){var c=o[r];0!==s[c]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=o[0]))}return t}var a={},s={app:0},n=[];function i(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=a,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(o,a,function(e){return t[e]}.bind(null,a));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var p=c;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var a=o("c21b"),s=o.n(a);s.a},"0706":function(t,e,o){t.exports=o.p+"img/Shop.6a260f33.svg"},"0c74":function(t,e,o){},"270e":function(t,e,o){},"2c98":function(t,e,o){"use strict";var a=o("9ca0"),s=o.n(a);s.a},"34aa":function(t,e,o){t.exports=o.p+"img/HornedDragon.4b25d959.svg"},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("097d");var a=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("app-game")],1)},n=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("app-header"),o("div",{staticClass:"game-grid"},[t.mobileShop||!t.mobileView?o("div",{class:[{"mobile-shop":t.mobileView},"desktop-shop"]},[o("app-shop")],1):t._e(),o("app-questlist",{staticClass:"game-quests-column"})],1),t.popup?o("app-popup",[o("app-notify",{attrs:{slot:"content"},slot:"content"})],1):t._e()],1)},r=[],c=o("c93e"),u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"shop"},t._l(t.shop,function(e){return o("div",{key:e.Id,staticClass:"shop-item"},[o("p",{staticClass:"shop-item-text"},[t._v(t._s(e.name))]),o("button",{staticClass:"shop-button",class:t.buttonState(e)?"disabled":"enabled",on:{click:function(o){t.buyItem(e)}}},[t._v(t._s(e.cost))])])}))},p=[],l=o("2f62"),d={computed:Object(l["b"])(["shop","game"]),methods:{buyItem:function(t){if(!this.buttonState(t)){var e=this.game,o={game:e,item:t};this.$store.dispatch("makePurchase",o)}},buttonState:function(t){return t.cost>this.game.gold}}},m=d,f=(o("bed8"),o("2877")),h=Object(f["a"])(m,u,p,!1,null,null,null);h.options.__file="Shop.vue";var g=h.exports,b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"quest-list"},[o("transition-group",{attrs:{name:t.transition,mode:"out-in"}},t._l(t.messageboard,function(t){return o("app-quest",{key:t.adId,attrs:{quest:t}})}))],1)},v=[],_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"quest"},[o("p",{staticClass:"message-text"},[t._v(t._s(t.quest.message))]),o("div",{staticClass:"game-bar"},[o("p",{staticClass:"difficulty"},[t._v(t._s(t.quest.probability)+" ")]),o("p",{staticClass:"reward"},[t._v(t._s(t.quest.reward))]),o("div",{staticClass:"button-wrapper"},[o("button",{staticClass:"take-quest",on:{click:function(e){t.takeQuest(t.quest)}}},[t._v("\n                Take Quest\n            ")])]),o("b-progress",{staticClass:"game-progress-bar",attrs:{variant:1===t.quest.expiresIn?"danger":"secondary",value:t.quest.expiresIn,max:7}})],1)])},w=[],S={computed:Object(l["b"])(["game","mobileShop"]),props:["quest"],methods:{takeQuest:function(t){var e=this.game,o={game:e,quest:t};this.$store.dispatch("doQuest",o)}}},y=S,C=(o("7e3b"),Object(f["a"])(y,_,w,!1,null,null,null));C.options.__file="Quest.vue";var x=C.exports,k={computed:Object(c["a"])({},Object(l["b"])(["messageboard","questResult","doingShopping"]),{transition:function(){return this.doingShopping?"quest":!0===this.questResult?"quest-success":!1===this.questResult?"quest-failure":"quest"}}),components:{appQuest:x}},O=k,q=(o("80c6"),Object(f["a"])(O,b,v,!1,null,null,null));q.options.__file="Questlist.vue";var j=q.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"game-header fixed-top"},[a("img",{staticClass:"dragon-head",attrs:{src:o("34aa")}}),t.mobileView?a("img",{staticClass:"shop-icon",attrs:{src:o("0706")},on:{click:function(e){t.toggleShop()}}}):t._e(),t.mobileView?t._e():a("p",{staticClass:"game-title"},[t._v("Dragons of Mugloar")]),a("div",{class:t.mobileView?"game-footer fixed-bottom":"info-tab"},[a("p",{staticClass:"game-text"},[t._v("Level "),a("span",{staticClass:"game-info"},[t._v(t._s(t.game.level))])]),a("p",{staticClass:"game-text"},[t._v("Lives "),a("span",{class:[{"game-warning":t.game.lives<=1},"game-info"]},[t._v(t._s(t.game.lives))])]),a("p",{staticClass:"game-text"},[t._v("Gold "),a("span",{staticClass:"game-info"},[t._v(t._s(t.game.gold))])]),a("p",{staticClass:"game-text"},[t._v("Score "),a("span",{staticClass:"game-info"},[t._v(t._s(t.game.score))])])]),a("button",{staticClass:"header-button",on:{click:t.newGame}},[t._v("New Game")])])])},M=[],P={computed:Object(c["a"])({},Object(l["b"])(["game","mobileView","mobileShop"]),{buttonState:function(){return this.game.gold>=50}}),methods:{toggleShop:function(){this.$store.dispatch("toggleMobileShop",!this.mobileShop)},newGame:function(){this.$store.dispatch("deleteQuestResult"),this.$store.dispatch("toggleMobileShop",!1),this.$store.dispatch("startGame")}},components:{appShop:g}},G=P,I=(o("2c98"),Object(f["a"])(G,$,M,!1,null,"2103154e",null));I.options.__file="Header.vue";var Q=I.exports,R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"modal"}},[o("div",{staticClass:"modal-mask"},[o("div",{staticClass:"modal-wrapper"},[o("div",{staticClass:"modal-container"},[o("div",{staticClass:"modal-content"},[t._t("content")],2)])])])])},V=[],E=(o("88c8"),{}),T=Object(f["a"])(E,R,V,!1,null,null,null);T.options.__file="Popup.vue";var D=T.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"popup-box"},["start"===t.popup?a("div",[a("p",[t._v("Welcome to Dragons of Mugloar game!")]),a("p",[t._v("You are a courageous dragon trainer but it is expensive profession.\n                Luckily citizens of Mugloar offer quests rewarded with gold.\n                Try not to take harder ones unless you have improved your chances with various items from Dragon Upgrade Shop.\n            ")]),a("div",[a("div",{staticClass:"info-button",on:{click:function(e){t.showInfo=!t.showInfo}}},[a("p",{staticClass:"info-button-text"},[t._v("i")])]),a("button",{staticClass:"modal-button",on:{click:function(e){t.$store.dispatch("closePopup")}}},[t._v("Start Game")])])]):t._e(),"death"===t.popup?a("div",[a("p",[t._v("You Died!")]),a("p",[t._v("Your score: "+t._s(t.game.score))]),a("p",[t._v("High Score: "+t._s(t.game.highScore))]),a("p",[t._v("Turn: "+t._s(t.game.turn))]),a("p",[t._v("Want to try again?")]),a("div",[a("div",{staticClass:"info-button",on:{click:function(e){t.showInfo=!t.showInfo}}},[a("p",{staticClass:"info-button-text"},[t._v("i")])]),a("button",{staticClass:"modal-button",on:{click:t.newGame}},[t._v("Go Again")])])]):t._e(),a("div",{staticStyle:{"margin-top":"10px"}},[a("transition",{attrs:{name:"slide"}},[t.showInfo?a("img",{attrs:{width:"300px",src:o("d473")}}):t._e()])],1)])])},N=[],L={data:function(){return{showInfo:!1}},computed:Object(l["b"])(["notifications","game","popup"]),methods:{newGame:function(){this.$store.dispatch("deleteQuestResult"),this.$store.dispatch("startGame"),this.$store.dispatch("closePopup")}}},A=L,W=(o("6b18"),Object(f["a"])(A,H,N,!1,null,null,null));W.options.__file="Notify.vue";var Y=W.exports,U={components:{AppShop:g,appQuestlist:j,appHeader:Q,appQuest:x,appPopup:D,appNotify:Y},computed:Object(c["a"])({},Object(l["b"])(["game","messageboard","shop","reputation","mobileView","mobileShop","popup"])),created:function(){this.$store.dispatch("startGame"),this.$store.dispatch("showStartPopup"),window.innerWidth<=768?(this.$store.dispatch("changeViewport",!0),this.$store.dispatch("toggleMobileShop",!1)):(this.$store.dispatch("changeViewport",!1),this.$store.dispatch("toggleMobileShop",!1))},mounted:function(){var t=this;this.$nextTick(function(){window.addEventListener("resize",function(){window.innerWidth<=768?t.$store.dispatch("changeViewport",!0):t.$store.dispatch("changeViewport",!1)})})}},z=U,J=(o("68e4"),Object(f["a"])(z,i,r,!1,null,null,null));J.options.__file="Game.vue";var B=J.exports,F={name:"app",components:{appGame:B}},K=F,X=(o("034f"),Object(f["a"])(K,s,n,!1,null,null,null));X.options.__file="App.vue";var Z=X.exports,tt=o("9f7b"),et=o("bc3a"),ot=o.n(et),at=o("a322");o("f751"),o("28a5");function st(t){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),o="NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".split(""),a=e.reduce(function(t,e,a){return Object.assign(t,Object(at["a"])({},e,o[a]))},{});return t.split("").map(function(t){return a[t]||t}).join("")}var nt=o("1e5c"),it=new nt["Howl"]({src:["./../../coin.mp3"]}),rt=new nt["Howl"]({src:["./../../damage.mp3"]}),ct={messageboard:{},reputation:{}},ut={setMessageboardState:function(t,e){t.messageboard=e},setReputationState:function(t,e){t.reputation=e}},pt={makeMessageboard:function(t,e){var o=t.commit,a=t.dispatch;ot.a.get("https://www.dragonsofmugloar.com/api/v2/".concat(e.gameId,"/messages")).then(function(t){for(var e in t.data)t.data[e].hasOwnProperty("encrypted")&&(1===t.data[e].encrypted?(t.data[e].message=atob(t.data[e].message),t.data[e].adId=atob(t.data[e].adId),t.data[e].probability=atob(t.data[e].probability)):2===t.data[e].encrypted&&(t.data[e].message=st(t.data[e].message),t.data[e].adId=st(t.data[e].adId),t.data[e].probability=st(t.data[e].probability)));return t.data}).then(function(t){return o("setMessageboardState",t)}).catch(function(){return console.log("Unable to fetch quests")}),setTimeout(function(){a("toggleShopping",!1)},50)},doQuest:function(t,e){var o=t.dispatch,a=e.game,s=e.quest;ot.a.post("https://www.dragonsofmugloar.com/api/v2/".concat(a.gameId,"/solve/").concat(s.adId)).then(function(t){return!0===t.data.success?it.play():rt.play(),t.data}).then(function(t){return t.lives>=1&&o("makeMessageboard",a),o("updateGameState",t)}).catch(function(){return console.log("Too tired to take that quest")}),o("deleteQuestResult")}},lt={messageboard:function(t){return t.messageboard},reputation:function(t){return t.reputation}},dt={state:ct,mutations:ut,actions:pt,getters:lt},mt=new nt["Howl"]({src:["./../../click.mp3"]}),ft={shop:{},mobileShop:!1,doingShopping:!1},ht={setShopState:function(t,e){t.shop=e},setMobileShop:function(t,e){t.mobileShop=e},shopping:function(t,e){t.doingShopping=e}},gt={makeShop:function(t,e){var o=t.commit;ot.a.get("https://www.dragonsofmugloar.com/api/v2/".concat(e.gameId,"/shop")).then(function(t){return t.data}).then(function(t){return o("setShopState",t)}).catch(function(){return console.log("Shop is closed today")})},makePurchase:function(t,e){var o=t.commit,a=t.dispatch,s=e.game,n=e.item;ot.a.post("https://www.dragonsofmugloar.com/api/v2/".concat(s.gameId,"/shop/buy/").concat(n.id)).then(function(t){return t.data}).then(function(t){o("shopping",!0),o("updateGameState",t),a("makeMessageboard",s),a("makeShop",s)}).catch(function(){return console.log("You are too poor, sorry")}),mt.play()},toggleMobileShop:function(t,e){var o=t.commit;o("setMobileShop",e)},toggleShopping:function(t,e){var o=t.commit;o("shopping",e)}},bt={shop:function(t){return t.shop},mobileShop:function(t){return t.mobileShop},doingShopping:function(t){return t.doingShopping}},vt={state:ft,mutations:ht,actions:gt,getters:bt},_t={game:{},mobileView:!0,questResult:""},wt={setGameState:function(t,e){t.game=e},updateGameState:function(t,e){t.game=Object(c["a"])({},t.game,e)},setMobileView:function(t,e){t.mobileView=e},setQuestResult:function(t,e){t.questResult=e},resetQuestResult:function(t){t.questResult=""}},St={startGame:function(t){var e=t.commit,o=t.dispatch;ot.a.post("https://www.dragonsofmugloar.com/api/v2/game/start").then(function(t){return t.data}).then(function(t){e("setGameState",t),o("makeMessageboard",t),o("makeShop",t)}).catch(function(){return console.log("The knights broke the internets")})},updateGameState:function(t,e){var o=t.commit,a=t.dispatch;o("updateGameState",e),1==e.success?o("setQuestResult",!0):o("setQuestResult",!1),e.lives<=0&&a("showDeathPopup",!0)},changeViewport:function(t,e){var o=t.commit;o("setMobileView",e)},deleteQuestResult:function(t){var e=t.commit;e("resetQuestResult")}},yt={game:function(t){return t.game},mobileView:function(t){return t.mobileView},questResult:function(t){return t.questResult}},Ct={state:_t,mutations:wt,actions:St,getters:yt},xt={notifications:[],popup:!1},kt={addNotification:function(t,e){t.notifications=e},removeNotification:function(t){t.notifications.shift()},setPopup:function(t,e){t.popup=e}},Ot={showStartPopup:function(t){var e=t.commit;e("setPopup","start")},showDeathPopup:function(t){var e=t.commit;e("setPopup","death")},closePopup:function(t){var e=t.commit;e("setPopup",!1)}},qt={notifications:function(t){return t.notifications},popup:function(t){return t.popup}},jt={state:xt,mutations:kt,actions:Ot,getters:qt};a["a"].use(l["a"]);var $t=new l["a"].Store({modules:[dt,vt,Ct,jt]});a["a"].use(tt["a"]),new a["a"]({store:$t,render:function(t){return t(Z)}}).$mount("#app"),console.log(Object({NODE_ENV:"production",BASE_URL:""}))},"68e4":function(t,e,o){"use strict";var a=o("0c74"),s=o.n(a);s.a},"6b18":function(t,e,o){"use strict";var a=o("bd2f"),s=o.n(a);s.a},"7da5":function(t,e,o){},"7e3b":function(t,e,o){"use strict";var a=o("7da5"),s=o.n(a);s.a},"80c6":function(t,e,o){"use strict";var a=o("270e"),s=o.n(a);s.a},"88c8":function(t,e,o){"use strict";var a=o("b776"),s=o.n(a);s.a},"9ca0":function(t,e,o){},b776:function(t,e,o){},bd2f:function(t,e,o){},bed8:function(t,e,o){"use strict";var a=o("c82e"),s=o.n(a);s.a},c21b:function(t,e,o){},c82e:function(t,e,o){},d473:function(t,e,o){t.exports=o.p+"img/Example.b5e9237a.png"}});
//# sourceMappingURL=app.f780ae1c.js.map