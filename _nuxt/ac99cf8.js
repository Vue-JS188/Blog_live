(window.webpackJsonp=window.webpackJsonp||[]).push([[21,10],{304:function(t,e,o){var content=o(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("71df0ac2",content,!0,{sourceMap:!1})},309:function(t,e,o){"use strict";o(304)},310:function(t,e,o){var n=o(43)(!1);n.push([t.i,".post-preview[data-v-ad8ff888]{border:1px solid #ccc;box-shadow:0 2px 2px #ccc;background-color:#fff;width:90%}a[data-v-ad8ff888]{text-decoration:none;color:#000}@media (min-width:850px){.post-preview[data-v-ad8ff888]{width:400px;margin:10px}}.post-thumbnail[data-v-ad8ff888]{width:100%;height:200px;background-position:50%;background-size:cover}.post-content[data-v-ad8ff888]{padding:10px;text-align:center}a:active .post-content[data-v-ad8ff888],a:hover .post-content[data-v-ad8ff888]{background-color:#ccc}",""]),t.exports=n},313:function(t,e,o){var content=o(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("b27dbbc2",content,!0,{sourceMap:!1})},314:function(t,e,o){"use strict";o.r(e);var n={name:"Postprev",props:{id:{type:String,required:!0},isAdmin:{type:Boolean,required:!0},title:{type:String,required:!0},PreviewText:{type:String,required:!0},thumbnail:{type:String,required:!0}},computed:{postLink:function(){return this.isAdmin?"/admin/"+this.id:"/posts/"+this.id}}},r=(o(309),o(16)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Nuxt-link",{staticClass:"post-preview",attrs:{to:t.postLink}},[o("article",[o("div",{staticClass:"post-thumbnail",style:{backgroundImage:"url("+t.thumbnail+")"}}),t._v(" "),o("div",{staticClass:"post-content"},[o("h1",[t._v(t._s(t.title))]),t._v(" "),o("p",[t._v(t._s(t.PreviewText))])])])])}),[],!1,null,"ad8ff888",null);e.default=component.exports},317:function(t,e,o){"use strict";o(313)},318:function(t,e,o){var n=o(43)(!1);n.push([t.i,".posts-list[data-v-f04b957c]{display:flex;padding:20px;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center}",""]),t.exports=n},320:function(t,e,o){"use strict";var n={name:"PostList",components:{Postprev:o(314).default},props:{isAdmin:{type:Boolean,default:!1},posts:{type:Array,required:!0}}},r=(o(317),o(16)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"posts-list"},t._l(t.posts,(function(e){return o("Postprev",{key:e.id,attrs:{title:e.title,PreviewText:e.PreviewText,id:e.id,thumbnail:e.thumbnail,"is-admin":t.isAdmin}})})),1)}),[],!1,null,"f04b957c",null);e.a=component.exports},330:function(t,e,o){var content=o(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("bd6b8980",content,!0,{sourceMap:!1})},349:function(t,e,o){"use strict";o(330)},350:function(t,e,o){var n=o(43)(!1);n.push([t.i,".post-page[data-v-2525d121]{display:flex;justify-content:center;align-items:center}",""]),t.exports=n},367:function(t,e,o){"use strict";o.r(e);var n={components:{PostList:o(320).a},computed:{loadedPosts:function(){return this.$store.getters.loadedPosts}}},r=(o(349),o(16)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"post-page"},[o("PostList",{attrs:{posts:t.loadedPosts}})],1)}),[],!1,null,"2525d121",null);e.default=component.exports}}]);