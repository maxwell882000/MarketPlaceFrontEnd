(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71084175"],{"22b2":function(e,t,o){"use strict";o("3240")},2363:function(e,t,o){"use strict";var n=o("7a23");function c(e,t,o,c,r,a){var l=Object(n["resolveComponent"])("category"),s=Object(n["resolveComponent"])("b-col"),i=Object(n["resolveComponent"])("b-row");return Object(n["openBlock"])(),Object(n["createBlock"])(i,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(s,{cols:"0",class:"col-xl-3 col-lg-3 col-md-3 d-none d-sm-none d-md-block ml-r bg-white rounded-st p-4"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(l,{column:12,item:r.category},null,8,["item"])]})),_:1}),Object(n["createVNode"])(s,{cols:"12",class:"col-xl-9 col-lg-9 col-md-9"},{default:Object(n["withCtx"])((function(){return[Object(n["renderSlot"])(e.$slots,"default")]})),_:3})]})),_:3})}var r=o("5530"),a=(o("4de4"),o("d3b7"),o("5502")),l=o("4cb2"),s={name:"categoryView",props:["name"],data:function(){return{category:{}}},components:{Category:l["a"]},computed:Object(r["a"])({},Object(a["c"])(["drop_bar"])),watch:{drop_bar:function(){this.setCategory()}},methods:{setCategory:function(){var e=this.$route.params.slug,t=this.drop_bar.filter((function(t){return t.slug===e||0!==t.children.filter((function(t){return t.slug===e})).length}));0===t.length?this.category=[]:this.category=t[0]}},created:function(){var e=this;this.setCategory(),this.$watch((function(){return e.$route.params.slug}),(function(){e.setCategory()}),{immediate:!0})}},i=o("6b0d"),u=o.n(i);const b=u()(s,[["render",c]]);t["a"]=b},3240:function(e,t,o){},3775:function(e,t,o){},"5fdf":function(e,t,o){"use strict";o.r(t);o("b0c0");var n=o("7a23");function c(e,t,o,c,r,a){var l=Object(n["resolveComponent"])("category-sub-tabs"),s=Object(n["resolveComponent"])("CategoryView");return Object(n["openBlock"])(),Object(n["createBlock"])(s,{name:e.parent.name},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.parent.product_in_categories,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:"parent_sub_categories_"+e.id,category:e},null,8,["category"])})),128))]})),_:1},8,["name"])}var r=o("5530"),a=o("2363"),l={class:"mt-2"};function s(e,t,o,c,r,a){var s=Object(n["resolveComponent"])("b-tab"),i=Object(n["resolveComponent"])("b-tabs"),u=Object(n["resolveComponent"])("SalesRoll"),b=Object(n["resolveComponent"])("loader"),d=Object(n["resolveComponent"])("category-base-tabs");return Object(n["openBlock"])(),Object(n["createBlock"])(d,{name:o.category.name,link:"/category/sub/".concat(o.category.slug)},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",null,[Object(n["createVNode"])(i,{"nav-class":"overflow flex-nowrap","nav-wrapper-class":" custom-tabs w-100 category-tabs",pills:""},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.category.children,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(s,{onClick:function(t){return a.setCategory(e.slug)},key:"category_of_sub"+e.slug,title:e.name,active:r.chosenCategory===e.slug},null,8,["onClick","title","active"])})),128))]})),_:1}),Object(n["createElementVNode"])("div",l,[Object(n["createVNode"])(b,{"div-style":{height:"10vh"},waiting:"category_product"+r.chosenCategory},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(u,{breakpoints:r.breakpoints,"per-page":4,products:a.currentProducts},null,8,["breakpoints","products"])]})),_:1},8,["waiting"])])])]})),_:1},8,["name","link"])}var i=o("b2bf"),u=o("5502"),b=o("8fc4"),d=o("adfb"),p={components:{CategoryBaseTabs:d["a"],Loader:b["a"],SalesRoll:i["a"]},props:{category:{type:Object,default:function(){return{id:4,name:"Смартфоны и гаджеты",slug:"sub",children:[{id:5,name:"This",slug:"this"}]}}}},data:function(){return{breakpoints:{1400:{perPage:3,perMove:2,padding:"1rem"},1200:{perPage:2,perMove:2,padding:"2rem"},768:{perPage:2,perMove:1,padding:"0.5rem"},500:{perPage:1,perMove:1,gap:"10px",padding:"0.5rem"},375:{perPage:2,perMove:1,gap:"10px",padding:"0.5rem",arrows:!1}},chosenCategory:this.category.children&&0!==this.category.children.length&&this.category.children[0].slug||""}},computed:Object(r["a"])({currentProducts:function(){return this.product[this.chosenCategory]||[]}},Object(u["c"])({product:"categoryModule/productInCategory"})),methods:Object(r["a"])(Object(r["a"])({},Object(u["b"])({getProductInCategory:"categoryModule/getProductCategory"})),{},{setCategory:function(e){this.chosenCategory=e,e in this.product||this.getProductInCategory(e)}})},g=(o("22b2"),o("fe45"),o("6b0d")),j=o.n(g);const m=j()(p,[["render",s]]);var O=m,f={components:{CategorySubTabs:O,CategoryView:a["a"]},computed:Object(r["a"])({},Object(u["c"])({parent:"categoryModule/parent"})),created:function(){}};const h=j()(f,[["render",c]]);t["default"]=h},adfb:function(e,t,o){"use strict";o("b0c0"),o("9911");var n=o("7a23"),c={class:"mb-4"},r={class:"d-flex justify-content-between align-items-center mb-3"},a=Object(n["createTextVNode"])(" Смотреть все ");function l(e,t,o,l,s,i){var u=Object(n["resolveComponent"])("b-icon"),b=Object(n["resolveComponent"])("b-button"),d=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",c,[Object(n["createElementVNode"])("div",r,[Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("h5",null,Object(n["toDisplayString"])(o.name),1)]),Object(n["createElementVNode"])("div",null,[Object(n["createVNode"])(d,{to:o.link,class:"remove-link"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(b,{variant:"link",class:"text-nowrap decoration-none text-sm"},{default:Object(n["withCtx"])((function(){return[a,Object(n["createVNode"])(u,{icon:"arrow-right"})]})),_:1})]})),_:1},8,["to"])])]),Object(n["renderSlot"])(e.$slots,"default")])}var s={props:["name","link"]},i=o("6b0d"),u=o.n(i);const b=u()(s,[["render",l]]);t["a"]=b},fe45:function(e,t,o){"use strict";o("3775")}}]);
//# sourceMappingURL=chunk-71084175.af3b7101.js.map