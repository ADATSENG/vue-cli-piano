(function(t){function e(e){for(var i,a,s=e[0],u=e[1],c=e[2],m=0,p=[];m<s.length;m++)a=s[m],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Paino ")])],1),n("router-view")],1)},r=[],a=(n("5c0b"),n("2877")),s={},u=Object(a["a"])(s,o,r,!1,null,null,null),c=u.exports,l=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("PainoContainer",[t._v("/")])],1)},p=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._l(t.soundData,(function(t){return n("div",{staticClass:"audioplayer"},[n("audio",{ref:"audio",refInFor:!0,attrs:{"data-num":t.number}},[n("source",{attrs:{src:t.url,type:"audio/ogg"}})])])})),n("div",{staticClass:"center_box"},[n("h2",[t._v("Vue.js Project")]),n("div",{staticClass:"keyboard"},t._l(t.display_keys,(function(e,i){return n("div",{staticClass:"pianokey"},["white"===e.type?n("div",{staticClass:"white",class:t.get_current_hightlight(e.num,e.key)?"playing":"",on:{click:function(n){return t.addSounds(e.num)}}},[n("div",{staticClass:"label"},[t._v(t._s(String.fromCharCode(e.key)))])]):t._e(),"black"===e.type?n("div",{staticClass:"black",class:t.get_current_hightlight(e.num)?"playing":"",on:{click:function(n){return t.addSounds(e.num)}}},[n("div",{staticClass:"label"},[t._v(t._s(String.fromCharCode(e.key)))])]):t._e()])})),0),n("br"),n("div",{staticClass:"controls"},[t.notes.length>0?n("ul",{staticClass:"notes_list"},t._l(t.notes,(function(e,i){return n("li",{class:t.now_note_id-1===i?"playing":""},[n("div",{staticClass:"num"},[t._v(t._s(e.num))]),n("div",{staticClass:"time"},[t._v(t._s(e.time))])])})),0):t._e(),n("button",{on:{click:t.loadSample}},[t._v("Sample")]),n("button",{on:{click:function(e){return t.playNext(1)}}},[t._v("PlayNext")]),t.playing_time<=0?n("button",{on:{click:t.startPlay}},[t._v("StartPlay"),n("font-awesome-icon",{attrs:{icon:["fas","play"]}})],1):t._e(),t.playing_time>=1?n("button",{on:{click:t.stopPlay}},[t._v("StopPlay"),n("font-awesome-icon",{attrs:{icon:["fas","pause"]}})],1):t._e(),t.record_time<=0?n("button",{on:{click:t.startRecord}},[t._v("Record"),n("font-awesome-icon",{attrs:{icon:["fas","circle"]}})],1):t._e(),t.record_time>=1?n("button",{on:{click:t.stopRecord}},[t._v("StopRecord"),n("font-awesome-icon",{attrs:{icon:["fas","stop"]}})],1):t._e(),n("button",{on:{click:function(e){t.notes=[]}}},[t._v("Clear")]),n("h4",[t._v(t._s(t.playing_time+t.record_time))])])])],2)},y=[],_=(n("4de4"),n("a9e3"),n("96cf"),n("1da1")),h=[1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,8,8.5,9,9.5,10,11,11.5,12,12.5,13,13.5,14,15],f=[{num:1,key:90,type:"white"},{num:1.5,key:83,type:"black"},{num:2,key:88,type:"white"},{num:2.5,key:68,type:"black"},{num:3,key:67,type:"white"},{num:4,key:86,type:"white"},{num:4.5,key:71,type:"black"},{num:5,key:66,type:"white"},{num:5.5,key:72,type:"black"},{num:6,key:78,type:"white"},{num:6.5,key:74,type:"black"},{num:7,key:77,type:"white"},{num:8,key:81,type:"white"},{num:8.5,key:50,type:"black"},{num:9,key:87,type:"white"},{num:9.5,key:51,type:"black"},{num:10,key:69,type:"white"},{num:11,key:82,type:"white"},{num:11.5,key:53,type:"black"},{num:12,key:84,type:"white"},{num:12.5,key:54,type:"black"},{num:13,key:89,type:"white"},{num:13.5,key:55,type:"black"},{num:14,key:85,type:"white"},{num:15,key:73,type:"white"}],v=[{num:1,time:150},{num:1,time:265},{num:5,time:380},{num:5,time:501},{num:6,time:625},{num:6,time:748},{num:5,time:871},{num:4,time:1126},{num:4,time:1247},{num:3,time:1365},{num:3,time:1477},{num:2,time:1597},{num:2,time:1714},{num:1,time:1837}],b=[],k=n("bc3a"),w={name:"PainoContainer",props:{msg:String},data:function(){return{soundData:b,notes:v,now_note_id:0,playing_time:0,next_note_id:0,record_time:0,player:null,recorder:null,display_keys:f,now_press_key:-1,audioObj:null}},mounted:function(){for(var t=0;t<h.length;t++)b.push({number:h[t],url:"https://awiclass.monoame.com/pianosound/set/"+h[t]+".wav"})},methods:{playSound:function(t,e){var n=this;this.$nextTick((function(){if(n.$refs.audio){var i,o=n.$refs.audio.filter((function(e){return Number(e.getAttribute("data-num"))===t}));i=o[0],i.volume=e,i.currentTime=0,i.play()}}))},startRecord:function(){var t=this;this.record_time=0,this.recorder=setInterval((function(){t.record_time++}))},stopRecord:function(){clearInterval(this.recorder),this.record_time=0},get_current_hightlight:function(t,e){if(this.now_press_key===e)return!0;if(0===this.notes.length)return!1;var n=this.now_note_id-1;n<0&&(n=0);var i=this.notes[n].num;return i===t||void 0},addSounds:function(t){this.record_time>0&&this.notes.push({num:t,time:this.record_time}),this.playSound(t,1)},loadSample:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.get("http://awiclass.monoame.com/api/command.php?type=get&name=music_dodoro");case 3:n=e.sent,t.notes=n.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},playNext:function(t){var e=this.playSound,n=this.notes[this.now_note_id].num;e(n,t),this.now_note_id+=1,this.now_note_id>=this.notes.length&&this.stopPlay()},startPlay:function(){this.now_note_id=0,this.playing_time=0,this.next_note_id=0;var t=this;this.player=setInterval((function(){t.playing_time>=t.notes[t.next_note_id].time&&(t.playNext(1),t.next_note_id++),t.playing_time++}),2)},stopPlay:function(){clearInterval(this.player),this.now_note_id=0,this.playing_time=0,this.next_note_id=0}}},g=w,x=(n("b370"),Object(a["a"])(g,d,y,!1,null,"3463e886",null)),P=x.exports,S={name:"Paion",components:{PainoContainer:P}},C=S,j=Object(a["a"])(C,m,p,!1,null,null,null),O=j.exports;i["a"].use(l["a"]);var R=[{path:"/",name:"Paino",component:O}],$=new l["a"]({mode:"hash",base:"",routes:R}),I=$,N=n("2f62");i["a"].use(N["a"]);var T=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}}),M=n("ecee"),E=n("c074"),D=n("ad3d");M["c"].add(E["c"],E["b"],E["a"],E["d"]),i["a"].component("font-awesome-icon",D["a"]),i["a"].config.productionTip=!1,new i["a"]({router:I,store:T,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},b370:function(t,e,n){"use strict";n("fbce")},fbce:function(t,e,n){}});
//# sourceMappingURL=app.3c240213.js.map