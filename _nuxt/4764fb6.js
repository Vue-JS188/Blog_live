(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{383:function(t,e,r){"use strict";r.r(e);r(40),r(32),r(39),r(13),r(57),r(37),r(58);var n=r(25),o=r(36),c=r.n(o);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={components:{},data:function(){return{loadedPosts:[]}},created:function(){var t=this;c.a.get("https://nuxt-blogs-c16de-default-rtdb.firebaseio.com/posts.json").then((function(e){for(var r in e.data)t.loadedPosts.push(f(f({},e.data[r]),{},{id:r}))})).catch((function(t){return context.error(t)}))},head:{title:"nuxt client side rendering"}},O=r(10),component=Object(O.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("PostList",{attrs:{posts:t.loadedPosts}})}),[],!1,null,null,null);e.default=component.exports}}]);