(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e4180b6c"],{6253:function(e,t,n){},"6e27":function(e,t,n){"use strict";n.r(t);n("b0c0");var c=n("7a23"),a={class:"container my-4"},o={class:"py-2 mb-3"};function r(e,t,n,r,i,u){var l=Object(c["resolveComponent"])("Badge"),s=Object(c["resolveComponent"])("router-view"),d=Object(c["resolveComponent"])("loader");return Object(c["openBlock"])(),Object(c["createBlock"])(d,{waiting:"category_view"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("section",a,[Object(c["createVNode"])(l,{path:i.info.path},null,8,["path"]),Object(c["createElementVNode"])("h5",o,Object(c["toDisplayString"])(i.info.name),1),Object(c["createVNode"])(s)])]})),_:1})}var i=n("5530"),u=(n("d3b7"),n("159b"),n("4de4"),n("5502")),l=n("8fc4"),s=n("9bd1"),d={components:{Badge:s["a"],Loader:l["a"]},data:function(){return{unwatch:void 0,info:{path:[],name:""}}},computed:Object(i["a"])({},Object(u["c"])({drop_bar:"drop_bar"})),watch:{drop_bar:function(){this.setPath()}},methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(u["b"])({getCategory:"categoryModule/getCategory"})),Object(u["d"])(["closeCategoryOpened"])),{},{setPath:function(e){this.info.path=[{name:"Главная",path:"/"}];var t=e||this.$route.params.slug,n=this.info;this.drop_bar.filter((function(e){return e.slug===t||0!==e.children.filter((function(e){return e.slug===t||0!==e.children.filter((function(e){return e.slug===t})).length})).length})).forEach((function(e){n.name=e.name,n.path.push({name:e.name,path:"/category/parent/"+e.slug}),e.children.filter((function(e){return e.slug===t||0!==e.children.filter((function(e){return e.slug===t})).length})).forEach((function(e){n.path.push({name:e.name,path:"/category/sub/"+e.slug}),n.name=e.name,e.children.filter((function(e){return e.slug===t})).forEach((function(e){n.path.push({name:e.name,path:"/category/child/"+e.slug}),n.name=e.name}))}))}))}}),created:function(){var e=this;this.unwatch=this.$watch((function(){return e.$route.params}),(function(t){t.slug&&(e.getCategory(t.slug),e.closeCategoryOpened(),e.setPath(t.slug))}),{immediate:!0})},beforeUnmount:function(){this.unwatch()}},h=n("6b0d"),p=n.n(h);const b=p()(d,[["render",r]]);t["default"]=b},"8efa":function(e,t,n){"use strict";n("6253")},"9bd1":function(e,t,n){"use strict";n("b0c0");var c=n("7a23"),a=function(e){return Object(c["pushScopeId"])("data-v-4dbadcef"),e=e(),Object(c["popScopeId"])(),e},o={class:"d-flex flex-nowrap badge p-0"},r=a((function(){return Object(c["createElementVNode"])("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Object(c["createElementVNode"])("path",{d:"M1.5 1L6.5 6L1.5 11",stroke:"#9499A5","stroke-width":"1.25","stroke-linecap":"round","stroke-linejoin":"round"})],-1)}));function i(e,t,n,a,i,u){var l=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(n.path,(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:e.name,class:"link"},[r,Object(c["createVNode"])(l,{to:e.path},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.name),1)]})),_:2},1032,["to"])])})),128))])}var u={props:{path:Array}},l=(n("8efa"),n("6b0d")),s=n.n(l);const d=s()(u,[["render",i],["__scopeId","data-v-4dbadcef"]]);t["a"]=d}}]);
//# sourceMappingURL=chunk-e4180b6c.83fe5273.js.map