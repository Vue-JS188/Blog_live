(window.webpackJsonp=window.webpackJsonp||[]).push([[16,10,11],{303:function(t,e,o){var content=o(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("2385f9ca",content,!0,{sourceMap:!1})},304:function(t,e,o){var content=o(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("71df0ac2",content,!0,{sourceMap:!1})},306:function(t,e,o){"use strict";o(303)},307:function(t,e,o){var n=o(43)(!1);n.push([t.i,".button[data-v-5e3a1e16]{font:inherit;background-color:#000;color:#fff;padding:5px;cursor:pointer;border:1px solid #000}.button[data-v-5e3a1e16]:active,.button[data-v-5e3a1e16]:hover{background-color:#333;border:1px solid #000}.inverted[data-v-5e3a1e16]{color:#000}.inverted[data-v-5e3a1e16],.inverted[data-v-5e3a1e16]:active,.inverted[data-v-5e3a1e16]:hover{background-color:#fff;border:1px solid transparent}.inverted[data-v-5e3a1e16]:active,.inverted[data-v-5e3a1e16]:hover{color:#ccc}.cancel[data-v-5e3a1e16]{background-color:red}.cancel[data-v-5e3a1e16],.cancel[data-v-5e3a1e16]:active,.cancel[data-v-5e3a1e16]:hover{color:#fff;border:1px solid transparent}.cancel[data-v-5e3a1e16]:active,.cancel[data-v-5e3a1e16]:hover{background-color:salmon}",""]),t.exports=n},308:function(t,e,o){"use strict";o.r(e);var n={name:"AppButton",props:{btnStyle:{type:String,default:""}}},r=(o(306),o(16)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",t._g(t._b({staticClass:"button",class:t.btnStyle},"button",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,"5e3a1e16",null);e.default=component.exports},309:function(t,e,o){"use strict";o(304)},310:function(t,e,o){var n=o(43)(!1);n.push([t.i,".post-preview[data-v-ad8ff888]{border:1px solid #ccc;box-shadow:0 2px 2px #ccc;background-color:#fff;width:90%}a[data-v-ad8ff888]{text-decoration:none;color:#000}@media (min-width:850px){.post-preview[data-v-ad8ff888]{width:400px;margin:10px}}.post-thumbnail[data-v-ad8ff888]{width:100%;height:200px;background-position:50%;background-size:cover}.post-content[data-v-ad8ff888]{padding:10px;text-align:center}a:active .post-content[data-v-ad8ff888],a:hover .post-content[data-v-ad8ff888]{background-color:#ccc}",""]),t.exports=n},313:function(t,e,o){var content=o(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("b27dbbc2",content,!0,{sourceMap:!1})},314:function(t,e,o){"use strict";o.r(e);var n={name:"Postprev",props:{id:{type:String,required:!0},isAdmin:{type:Boolean,required:!0},title:{type:String,required:!0},PreviewText:{type:String,required:!0},thumbnail:{type:String,required:!0}},computed:{postLink:function(){return this.isAdmin?"/admin/"+this.id:"/posts/"+this.id}}},r=(o(309),o(16)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Nuxt-link",{staticClass:"post-preview",attrs:{to:t.postLink}},[o("article",[o("div",{staticClass:"post-thumbnail",style:{backgroundImage:"url("+t.thumbnail+")"}}),t._v(" "),o("div",{staticClass:"post-content"},[o("h1",[t._v(t._s(t.title))]),t._v(" "),o("p",[t._v(t._s(t.PreviewText))])])])])}),[],!1,null,"ad8ff888",null);e.default=component.exports},317:function(t,e,o){"use strict";o(313)},318:function(t,e,o){var n=o(43)(!1);n.push([t.i,".posts-list[data-v-f04b957c]{display:flex;padding:20px;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center}",""]),t.exports=n},320:function(t,e,o){"use strict";var n={name:"PostList",components:{Postprev:o(314).default},props:{isAdmin:{type:Boolean,default:!1},posts:{type:Array,required:!0}}},r=(o(317),o(16)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"posts-list"},t._l(t.posts,(function(e){return o("Postprev",{key:e.id,attrs:{title:e.title,PreviewText:e.PreviewText,id:e.id,thumbnail:e.thumbnail,"is-admin":t.isAdmin}})})),1)}),[],!1,null,"f04b957c",null);e.a=component.exports},324:function(t,e,o){var content=o(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("9b2015ae",content,!0,{sourceMap:!1})},343:function(t,e,o){"use strict";o(324)},344:function(t,e,o){var n=o(43)(!1);n.push([t.i,".admin-page[data-v-117a7480]{padding:80px}.new-post[data-v-117a7480]{border-bottom:2px solid #8b2828;padding-bottom:10px}.existing-posts h1[data-v-117a7480],.new-post[data-v-117a7480]{text-align:center}",""]),t.exports=n},365:function(t,e,o){"use strict";o.r(e);var n=o(320),r=o(308),c={layout:"admin",components:{PostList:n.a,AppButton:r.default}},d=(o(343),o(16)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"admin-page"},[o("section",{staticClass:"new-post"},[o("AppButton",{on:{click:function(e){return t.$router.push("/admin/new-post")}}},[t._v("Create Post")])],1),t._v(" "),o("section",{staticClass:"existing-posts"},[o("h1",[t._v("Existing Posts")]),t._v(" "),o("PostList",{attrs:{isAdmin:""}})],1)])}),[],!1,null,"117a7480",null);e.default=component.exports}}]);