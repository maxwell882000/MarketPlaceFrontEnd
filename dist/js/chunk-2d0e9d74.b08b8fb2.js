(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9d74"],{"8ef7":function(t,e,n){"use strict";n.r(e);n("ac1f"),n("1276"),n("fb6a");var c=n("7a23"),i=n("2794"),r=n("cf42"),o=n("38f0"),u=n("5502"),a=n("6c02"),s=(n("5319"),n("a4d3"),n("e01a"),n("26ca")),l=n.n(s),f=n("213d"),b=n("3d55"),p=Object(c["createElementVNode"])("img",{src:l.a,alt:"check sign"},null,-1),d={props:{description:String,buttonTitle:String,pathName:String,successShow:String},setup:function(t){var e=t,n=Object(a["d"])(),i=Object(u["f"])(),r=Object(c["computed"])((function(){return i.getters["verificationModule/"+e.successShow]})),o=function(){return i.commit("verificationModule/clean")};function s(){o(),n.replace({name:e.pathName})}return function(e,n){return Object(c["openBlock"])(),Object(c["createBlock"])(Object(c["unref"])(f["a"]),{modelValue:Object(c["unref"])(r),"onUpdate:modelValue":n[0]||(n[0]=function(t){return Object(c["isRef"])(r)?r.value=t:null}),onCloseModal:s,title:e.$t("Отправленно"),description:t.description},{prefix:Object(c["withCtx"])((function(){return[p]})),buttons:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(Object(c["unref"])(b["a"]),{onClick:s,class:"w-60",title:t.buttonTitle},null,8,["title"])]})),_:1},8,["modelValue","title","description"])}}};const O=d;var j=O,m={setup:function(t){return function(t,e){return Object(c["openBlock"])(),Object(c["createBlock"])(Object(c["unref"])(j),{description:t.$t("Ваши данные успешно отправленны"),"button-title":t.$t("Вернуться в мои заказы"),"path-name":"orders","success-show":"successToProfile"},null,8,["description","button-title"])}}};const g=m;var h=g,k=n("ff38"),v={setup:function(t){var e=Object(u["f"])(),n=Object(c["computed"])((function(){return e.getters["registrationOrderModule/wayOfPayment"].type===k["a"].INSTALLMENT?"plasticCard":"basket"}));return function(t,e){return Object(c["openBlock"])(),Object(c["createBlock"])(Object(c["unref"])(j),{description:t.$t("Ваши данные успешно отправленны"),"button-title":t.$t("Продолжить"),"path-name":Object(c["unref"])(n),"success-show":"successToBasket"},null,8,["description","button-title","path-name"])}}};const w=v;var N=w,S={setup:function(t){var e=Object(r["a"])(o["a"].USER_PASSPORT),n=e.getImage,s=e.isNext,l=e.initialImage,f=Object(u["f"])(),b=function(){return f.dispatch("verificationModule/submitData")},p=function(){return f.dispatch("verificationModule/suretySubmitData")};function d(){s.value&&(j()?p():b())}var O=Object(a["c"])();function j(){var t=O.path.split("/");return console.log(t.slice(-2)[0]),"surety"===t.slice(-2)[0]}return function(t,e){return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(Object(c["unref"])(h)),Object(c["createVNode"])(Object(c["unref"])(N)),Object(c["createVNode"])(Object(c["unref"])(i["a"]),{onImageUpload:Object(c["unref"])(n),"initial-image":Object(c["unref"])(l),title:t.$t("Селфи с паспортом"),decs:t.$t("Разместите главный разворот вашего паспорта рядом с лицом и сделайте селфи. Фотография должна быть четкая, а символы на документе различимые"),"asset-image":"self_passport.svg",waiting:"self_passport",back:"/3",onNextPage:d,"is-full-next-path":Object(c["unref"])(s),next:Object(c["unref"])(s)?"":"/4"},null,8,["onImageUpload","initial-image","title","decs","is-full-next-path","next"])],64)}}};const x=S;e["default"]=x}}]);
//# sourceMappingURL=chunk-2d0e9d74.b08b8fb2.js.map