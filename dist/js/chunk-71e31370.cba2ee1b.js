(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71e31370"],{"2c6d":function(t,e,n){"use strict";n.r(e);var c=n("7a23");function r(t,e,n,r,o,u){var i=Object(c["resolveComponent"])("filter-with-products");return Object(c["openBlock"])(),Object(c["createBlock"])(i)}var o=n("5def"),u=n("a959"),i=n("c260"),a=n("6c02"),d={components:{FilterWithProducts:o["a"]},setup:function(){var t=Object(a["c"])();return Object(u["a"])(Object(i["a"])({key:"category_slug",item:t.params.slug}))}},f=n("6b0d"),l=n.n(f);const s=l()(d,[["render",r]]);e["default"]=s},a959:function(t,e,n){"use strict";var c=n("5502"),r=n("7a23");e["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=Object(c["f"])(),n=function(){return e.commit("productFilterByModule/partialClean")},o=function(){return e.commit("productFilterByModule/clean")},u=function(t){return e.dispatch("productFilterByModule/getProducts",t)};Object(r["onMounted"])((function(){n(),t(),u(1)})),Object(r["onBeforeUnmount"])((function(){o()}))}},c260:function(t,e,n){"use strict";var c=n("5502");e["a"]=function(t){var e=t.key,n=t.item,r=Object(c["f"])(),o=function(t){return r.commit("productFilterByModule/addFilterBy",t)};return function(){return o({key:e,item:n})}}}}]);
//# sourceMappingURL=chunk-71e31370.cba2ee1b.js.map