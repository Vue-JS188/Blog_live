(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(t,e,n){var content=n(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("7eaec706",content,!0,{sourceMap:!1})},179:function(t,e,n){var content=n(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("22728463",content,!0,{sourceMap:!1})},180:function(t,e,n){var content=n(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("04273c56",content,!0,{sourceMap:!1})},181:function(t,e,n){var content=n(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("56b15182",content,!0,{sourceMap:!1})},196:function(t,e,n){"use strict";var o=n(197),l=n(199),d={components:{TheHeader:o.default,TheSidenav:l.default},data:function(){return{displaySidenav:!1}}},r=(n(273),n(21)),component=Object(r.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TheHeader",{on:{sidenavToggle:function(e){t.displaySidenav=!t.displaySidenav}}}),t._v(" "),n("TheSidenav",{attrs:{show:t.displaySidenav},on:{close:function(e){t.displaySidenav=!1}}}),t._v(" "),n("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},197:function(t,e,n){"use strict";n.r(e);var o={name:"TheHeader",components:{TheSideNavToggle:n(198).default}},l=(n(269),n(21)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-container"},[n("header",{staticClass:"the-header"},[n("TheSideNavToggle",{on:{toggle:function(e){return t.$emit("sidenavToggle")}}}),t._v(" "),n("div",{staticClass:"logo"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("BPP Shops")])],1),t._v(" "),n("div",{staticClass:"spacer"}),t._v(" "),n("div",{staticClass:"navigation-items"},[n("ul",{staticClass:"nav-list"},[n("li",{staticClass:"nav-item"},[n("nuxt-link",{attrs:{to:"/posts"}},[t._v("Blog")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("nuxt-link",{attrs:{to:"/admin"}},[t._v("Admin")])],1)])])],1)])}),[],!1,null,"59173504",null);e.default=component.exports},198:function(t,e,n){"use strict";n.r(e);var o={},l=(n(267),n(21)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"drawer-toggle",attrs:{role:"button"},on:{click:function(e){return t.$emit("toggle")}}},[n("div",{staticClass:"bar"}),t._v(" "),n("div",{staticClass:"bar"}),t._v(" "),n("div",{staticClass:"bar"})])}),[],!1,null,"96a14cc8",null);e.default=component.exports},199:function(t,e,n){"use strict";n.r(e);var o={name:"TheSidenav",props:{show:{type:Boolean,default:!1}}},l=(n(271),n(21)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidenav-container"},[t.show?n("div",{staticClass:"sidenav-backdrop",on:{click:function(e){return t.$emit("close")}}}):t._e(),t._v(" "),n("transition",{attrs:{name:"slide-side"}},[t.show?n("div",{staticClass:"sidenav"},[n("ul",{staticClass:"nav-list",on:{click:function(e){return t.$emit("close")}}},[n("li",{staticClass:"nav-item"},[n("nuxt-link",{attrs:{to:"/posts"}},[t._v("Blog")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("nuxt-link",{attrs:{to:"/admin"}},[t._v("Admin")])],1)])]):t._e()])],1)}),[],!1,null,"a5ac8858",null);e.default=component.exports},200:function(t,e,n){n(201),t.exports=n(202)},267:function(t,e,n){"use strict";n(178)},268:function(t,e,n){var o=n(52)(!1);o.push([t.i,".drawer-toggle[data-v-96a14cc8]{display:flex;flex-direction:column;justify-content:space-around;height:50%;width:35px;cursor:pointer}@media (min-width:768px){.drawer-toggle[data-v-96a14cc8]{display:none}}.drawer-toggle .bar[data-v-96a14cc8]{width:90%;height:3.5px;border-radius:25%;background-color:#777}",""]),t.exports=o},269:function(t,e,n){"use strict";n(179)},270:function(t,e,n){var o=n(52)(!1);o.push([t.i,".header-container[data-v-59173504]{height:60px}.the-header[data-v-59173504]{width:100%;position:fixed;height:60px;display:flex;justify-content:space-around;align-items:center;background-color:#ef8341;z-index:100;box-sizing:border-box;padding:0 20px}.logo[data-v-59173504]{margin:0 10px;font-size:1.3rem}.logo a[data-v-59173504]{text-decoration:none;color:#fff}.spacer[data-v-59173504]{flex:1}.navigation-items[data-v-59173504]{display:none}@media (min-width:768px){.navigation-items[data-v-59173504]{display:block}}.nav-list[data-v-59173504]{list-style:none;padding:0;margin:0;display:flex}.nav-item[data-v-59173504]{margin:0 10px}.nav-item a[data-v-59173504]{text-decoration:none;color:#fff}.nav-item a.nuxt-link-active[data-v-59173504],.nav-item a[data-v-59173504]:active,.nav-item a[data-v-59173504]:hover{color:#000}",""]),t.exports=o},271:function(t,e,n){"use strict";n(180)},272:function(t,e,n){var o=n(52)(!1);o.push([t.i,".sidenav-container[data-v-a5ac8858]{height:100%;width:100%}.sidenav-backdrop[data-v-a5ac8858]{width:100%;background-color:rgba(0,0,0,.7);z-index:1000}.sidenav[data-v-a5ac8858],.sidenav-backdrop[data-v-a5ac8858]{height:100%;position:fixed;top:0;left:0}.sidenav[data-v-a5ac8858]{width:300px;background-color:#fff;z-index:10000;box-sizing:border-box;padding:30px}.slide-side-enter-active[data-v-a5ac8858],.slide-side-leave-active[data-v-a5ac8858]{transition:all .3s ease-out}.slide-side-enter[data-v-a5ac8858],.slide-side-leave-to[data-v-a5ac8858]{transform:translateX(-100%)}.nav-list[data-v-a5ac8858]{list-style:none;padding:0;margin:0}.nav-item[data-v-a5ac8858]{margin:20px 0}.nav-item a[data-v-a5ac8858]{text-decoration:none;color:#000;font-size:1.5rem}.nav-item a[data-v-a5ac8858]:active,.nav-item a[data-v-a5ac8858]:hover{color:red}",""]),t.exports=o},273:function(t,e,n){"use strict";n(181)},274:function(t,e,n){var o=n(52)(!1);o.push([t.i,'html{font-family:"Open Sans",sans-serif}body{margin:0}',""]),t.exports=o}},[[200,18,1,19]]]);