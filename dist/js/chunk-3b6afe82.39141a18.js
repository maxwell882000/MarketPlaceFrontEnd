(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b6afe82"],{2363:function(e,t,o){"use strict";var c=o("7a23");function n(e,t,o,n,r,a){var l=Object(c["resolveComponent"])("category"),i=Object(c["resolveComponent"])("b-col"),s=Object(c["resolveComponent"])("b-row");return Object(c["openBlock"])(),Object(c["createBlock"])(s,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(i,{cols:"0",class:"col-xl-3 col-lg-3 col-md-3 d-none d-sm-none d-md-block ml-r bg-white rounded-st p-4"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(l,{column:12,item:r.category},null,8,["item"])]})),_:1}),Object(c["createVNode"])(i,{cols:"12",class:"col-xl-9 col-lg-9 col-md-9"},{default:Object(c["withCtx"])((function(){return[Object(c["renderSlot"])(e.$slots,"default")]})),_:3})]})),_:3})}var r=o("5530"),a=(o("4de4"),o("d3b7"),o("5502")),l=o("4cb2"),i={name:"categoryView",props:["name"],data:function(){return{category:{}}},components:{Category:l["a"]},computed:Object(r["a"])({},Object(a["c"])(["drop_bar"])),watch:{drop_bar:function(){this.setCategory()}},methods:{setCategory:function(){var e=this.$route.params.slug,t=this.drop_bar.filter((function(t){return t.slug===e||0!==t.children.filter((function(t){return t.slug===e})).length}));0===t.length?this.category=[]:this.category=t[0]}},created:function(){var e=this;this.setCategory(),this.$watch((function(){return e.$route.params.slug}),(function(){e.setCategory()}),{immediate:!0})}},s=o("6b0d"),u=o.n(s);const b=u()(i,[["render",n]]);t["a"]=b},"25c5":function(e,t,o){"use strict";o("550c")},"550c":function(e,t,o){},"5fdf":function(e,t,o){"use strict";o.r(t);o("b0c0");var c=o("7a23");function n(e,t,o,n,r,a){var l=Object(c["resolveComponent"])("category-sub-tabs"),i=Object(c["resolveComponent"])("CategoryView");return Object(c["openBlock"])(),Object(c["createBlock"])(i,{name:e.parent.name},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.parent.product_in_categories,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(l,{key:"parent_sub_categories_"+e.id,category:e},null,8,["category"])})),128))]})),_:1},8,["name"])}var r=o("5530"),a=o("2363");function l(e,t,o,n,r,a){var l=Object(c["resolveComponent"])("b-tab"),i=Object(c["resolveComponent"])("b-tabs"),s=Object(c["resolveComponent"])("SalesRoll"),u=Object(c["resolveComponent"])("loader"),b=Object(c["resolveComponent"])("category-base-tabs");return Object(c["openBlock"])(),Object(c["createBlock"])(b,{name:o.category.name,link:"/category/sub/".concat(o.category.slug)},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",null,[Object(c["createVNode"])(i,{"nav-class":"overflow flex-nowrap","nav-wrapper-class":" custom-tabs w-100 category-tabs",pills:""},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(o.category.children,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(l,{onClick:function(t){return a.setCategory(e.slug)},key:"category_of_sub"+e.slug,title:e.name,active:r.chosenCategory===e.slug},null,8,["onClick","title","active"])})),128))]})),_:1}),Object(c["createElementVNode"])("div",null,[Object(c["createVNode"])(u,{"div-style":{height:"10vh"},waiting:"category_product"+r.chosenCategory},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(s,{breakpoints:r.breakpoints,"per-page":4,products:a.currentProducts},null,8,["breakpoints","products"])]})),_:1},8,["waiting"])])])]})),_:1},8,["name","link"])}var i=o("b2bf"),s=o("5502"),u=o("8fc4"),b=o("adfb"),d={components:{CategoryBaseTabs:b["a"],Loader:u["a"],SalesRoll:i["a"]},props:{category:{type:Object,default:function(){return{id:4,name:"Смартфоны и гаджеты",slug:"sub",children:[{id:5,name:"This",slug:"this"}]}}}},data:function(){return{breakpoints:{1400:{perPage:3,perMove:2,padding:"1rem"},1200:{perPage:2,perMove:2,padding:"2rem"},768:{perPage:2,perMove:1,padding:"0.5rem"},500:{perPage:1,perMove:1,gap:"10px",padding:"0.5rem"},375:{perPage:2,perMove:1,gap:"10px",padding:"0.5rem",arrows:!1}},chosenCategory:this.category.children&&0!==this.category.children.length&&this.category.children[0].slug||""}},computed:Object(r["a"])({currentProducts:function(){return this.product[this.chosenCategory]||[]}},Object(s["c"])({product:"categoryModule/productInCategory"})),methods:Object(r["a"])(Object(r["a"])({},Object(s["b"])({getProductInCategory:"categoryModule/getProductCategory"})),{},{setCategory:function(e){this.chosenCategory=e,e in this.product||this.getProductInCategory(e)}})},p=(o("e369"),o("25c5"),o("6b0d")),g=o.n(p);const j=g()(d,[["render",l]]);var O=j,m={components:{CategorySubTabs:O,CategoryView:a["a"]},computed:Object(r["a"])({},Object(s["c"])({parent:"categoryModule/parent"})),created:function(){}};const f=g()(m,[["render",n]]);t["default"]=f},"720c":function(e,t,o){},adfb:function(e,t,o){"use strict";o("b0c0"),o("9911");var c=o("7a23"),n={class:"mb-4"},r={class:"d-flex justify-content-between align-items-center mb-3"},a=Object(c["createTextVNode"])(" Смотреть все ");function l(e,t,o,l,i,s){var u=Object(c["resolveComponent"])("b-icon"),b=Object(c["resolveComponent"])("b-button"),d=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",n,[Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("h5",null,Object(c["toDisplayString"])(o.name),1)]),Object(c["createElementVNode"])("div",null,[Object(c["createVNode"])(d,{to:o.link,class:"remove-link"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(b,{variant:"link",class:"text-nowrap decoration-none text-sm"},{default:Object(c["withCtx"])((function(){return[a,Object(c["createVNode"])(u,{icon:"arrow-right"})]})),_:1})]})),_:1},8,["to"])])]),Object(c["renderSlot"])(e.$slots,"default")])}var i={props:["name","link"]},s=o("6b0d"),u=o.n(s);const b=u()(i,[["render",l]]);t["a"]=b},e369:function(e,t,o){"use strict";o("720c")}}]);
//# sourceMappingURL=chunk-3b6afe82.39141a18.js.map