(window.webpackJsonp=window.webpackJsonp||[]).push([[22,10],{303:function(t,e,r){var content=r(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(44).default)("71df0ac2",content,!0,{sourceMap:!1})},306:function(t,e,r){"use strict";r(303)},307:function(t,e,r){var n=r(43)(!1);n.push([t.i,".post-preview[data-v-ad8ff888]{border:1px solid #ccc;box-shadow:0 2px 2px #ccc;background-color:#fff;width:90%}a[data-v-ad8ff888]{text-decoration:none;color:#000}@media (min-width:850px){.post-preview[data-v-ad8ff888]{width:400px;margin:10px}}.post-thumbnail[data-v-ad8ff888]{width:100%;height:200px;background-position:50%;background-size:cover}.post-content[data-v-ad8ff888]{padding:10px;text-align:center}a:active .post-content[data-v-ad8ff888],a:hover .post-content[data-v-ad8ff888]{background-color:#ccc}",""]),t.exports=n},308:function(t,e,r){var content=r(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(44).default)("b27dbbc2",content,!0,{sourceMap:!1})},311:function(t,e,r){"use strict";r.r(e);var n={name:"Postprev",props:{id:{type:String,required:!0},isAdmin:{type:Boolean,required:!0},title:{type:String,required:!0},PreviewText:{type:String,required:!0},thumbnail:{type:String,required:!0}},computed:{postLink:function(){return this.isAdmin?"/admin/"+this.id:"/posts/"+this.id}}},o=(r(306),r(16)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Nuxt-link",{staticClass:"post-preview",attrs:{to:t.postLink}},[r("article",[r("div",{staticClass:"post-thumbnail",style:{backgroundImage:"url("+t.thumbnail+")"}}),t._v(" "),r("div",{staticClass:"post-content"},[r("h1",[t._v(t._s(t.title))]),t._v(" "),r("p",[t._v(t._s(t.PreviewText))])])])])}),[],!1,null,"ad8ff888",null);e.default=component.exports},316:function(t,e,r){"use strict";r(308)},317:function(t,e,r){var n=r(43)(!1);n.push([t.i,".posts-list[data-v-f04b957c]{display:flex;padding:20px;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center}",""]),t.exports=n},318:function(t,e,r){"use strict";var n={name:"PostList",components:{Postprev:r(311).default},props:{isAdmin:{type:Boolean,default:!1},posts:{type:Array,required:!0}}},o=(r(316),r(16)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"posts-list"},t._l(t.posts,(function(e){return r("Postprev",{key:e.id,attrs:{title:e.title,PreviewText:e.PreviewText,id:e.id,thumbnail:e.thumbnail,"is-admin":t.isAdmin}})})),1)}),[],!1,null,"f04b957c",null);e.a=component.exports},368:function(t,e,r){"use strict";r.r(e);r(37),r(28),r(36),r(12),r(57),r(34),r(58);var n=r(24),o=r(55),c=r.n(o);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{PostList:r(318).a},data:function(){return{loadedPosts:[]}},created:function(){var t=this;c.a.get("https://nuxt-blogs-c16de-default-rtdb.firebaseio.com/posts.json").then((function(e){for(var r in e.data)t.loadedPosts.push(l(l({},e.data[r]),{},{id:r}))})).catch((function(t){return context.error(t)}))}},v=r(16),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("PostList",{attrs:{posts:t.loadedPosts}})}),[],!1,null,null,null);e.default=component.exports}}]);