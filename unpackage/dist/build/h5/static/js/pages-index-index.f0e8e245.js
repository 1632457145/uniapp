(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"257a":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"home"},[e("v-uni-swiper",{attrs:{"indicator-dots":!0,circular:!0}},t._l(t.swipers,(function(t){return e("v-uni-swiper-item",{key:t.id},[e("v-uni-image",{attrs:{src:t.img}})],1)})),1),e("v-uni-view",{staticClass:"nav"},t._l(t.navs,(function(n,i){return e("v-uni-view",{key:i,staticClass:"nav_item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navItemClick(n.path)}}},[e("v-uni-view",{class:n.icon}),e("v-uni-text",[t._v(t._s(n.title))])],1)})),1),e("v-uni-view",{staticClass:"hot_goods"},[e("v-uni-view",{staticClass:"tit"},[t._v("推荐商品")]),e("goods-list",{attrs:{goods:t.goods},on:{goodsItemClick:function(n){arguments[0]=n=t.$handleEvent(n),t.goGoodsDetail.apply(void 0,arguments)}}})],1)],1)},o=[]},"31a5":function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("96cf");var a=i(e("1da1")),o=i(e("96d5")),r={data:function(){return{swipers:[],goods:[],navs:[{icon:"iconfont icon-ziyuan",title:"黑马超市",path:"/pages/goods/goods"},{icon:"iconfont icon-guanyuwomen",title:"联系我们",path:"/pages/contact/contact"},{icon:"iconfont icon-tupian",title:"社区图片",path:"/pages/pics/pics"},{icon:"iconfont icon-shipin",title:"学习视频",path:"/pages/videos/videos"}]}},onLoad:function(){this.getSwipers(),this.getHotGoods()},components:{"goods-list":o.default},methods:{getSwipers:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$myRequest({url:"/api/getlunbo"});case 2:e=n.sent,t.swipers=e.data.message;case 4:case"end":return n.stop()}}),n)})))()},getHotGoods:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$myRequest({url:"/api/getgoods?pageindex=1"});case 2:e=n.sent,t.goods=e.data.message;case 4:case"end":return n.stop()}}),n)})))()},navItemClick:function(t){uni.navigateTo({url:t})},goGoodsDetail:function(t){uni.navigateTo({url:"/pages/goods-detail/goods-detail?id="+t})}}};n.default=r},"361e":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.home uni-swiper[data-v-779fa61c]{width:%?750?%;height:%?380?%}.home uni-swiper uni-image[data-v-779fa61c]{width:100%;height:100%}.home .nav[data-v-779fa61c]{display:flex}.home .nav .nav_item[data-v-779fa61c]{flex:1;text-align:center}.home .nav .nav_item uni-view[data-v-779fa61c]{width:%?120?%;height:%?120?%;background-color:#b50e03;border-radius:50%;margin:10px auto;line-height:%?120?%;color:#fff;font-size:%?50?%}.home .nav .nav_item .icon-tupian[data-v-779fa61c]{font-size:%?45?%}.home .nav .nav_item uni-text[data-v-779fa61c]{font-size:%?30?%}.home .hot_goods[data-v-779fa61c]{background-color:#eee;overflow:hidden;margin-top:10px}.home .hot_goods .tit[data-v-779fa61c]{height:50px;line-height:50px;color:#b50e03;text-align:center;letter-spacing:20px;background-color:#fff;margin:%?7?% 0}',""]),t.exports=n},"3eb4":function(t,n,e){"use strict";e.r(n);var i=e("31a5"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"6c01":function(t,n,e){"use strict";var i=e("ec8f"),a=e.n(i);a.a},d6dd:function(t,n,e){"use strict";e.r(n);var i=e("257a"),a=e("3eb4");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("6c01");var r,s=e("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"779fa61c",null,!1,i["a"],r);n["default"]=c.exports},ec8f:function(t,n,e){var i=e("361e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("1e3d2321",i,!0,{sourceMap:!1,shadowMode:!1})}}]);