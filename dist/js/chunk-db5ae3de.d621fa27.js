(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-db5ae3de","chunk-043c668d","chunk-37b8dd0e"],{"032e":function(e,t,c){"use strict";c("26e4")},"0fa2":function(e,t,c){},"18d9":function(e,t,c){"use strict";var n=c("7a23"),r=function(e){return Object(n["pushScopeId"])("data-v-24147ea3"),e=e(),Object(n["popScopeId"])(),e},o={class:"toggle-btn",id:"_3rd-toggle-btn"},a=r((function(){return Object(n["createElementVNode"])("span",null,null,-1)}));function l(e,t,c,r,l,s){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.model=e}),onClick:t[1]||(t[1]=function(){return s.clicked&&s.clicked.apply(s,arguments)}),type:"checkbox"},null,512),[[n["vModelCheckbox"],l.model]]),a])}var s={props:["helperText","initial","toggled"],components:{},data:function(){return{model:this.initial||!1}},methods:{clicked:function(e){this.$emit("toggled",e.target.checked)}}},u=(c("032e"),c("6b0d")),i=c.n(u);const d=i()(s,[["render",l],["__scopeId","data-v-24147ea3"]]);t["a"]=d},1924:function(e,t,c){},"26e4":function(e,t,c){},3970:function(e,t,c){"use strict";c("9911");var n=c("7a23");function r(e,t,c,r,o,a){var l=Object(n["resolveComponent"])("router-link"),s=Object(n["resolveComponent"])("empty-base");return Object(n["openBlock"])(),Object(n["createBlock"])(s,{image:c.image,title:c.title,desc:c.desc},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(l,{to:c.link,class:"mt-2 goto-catalogue btn btn-primary"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(c.buttonText),1)]})),_:1},8,["to"])]})),_:1},8,["image","title","desc"])}var o=c("d6ac"),a={components:{EmptyBase:o["a"]},inheritAttrs:!1,props:["image","title","desc","buttonText","link"]},l=c("6b0d"),s=c.n(l);const u=s()(a,[["render",r]]);t["a"]=u},"3f32":function(e,t,c){"use strict";c("0fa2")},"479f":function(e,t,c){},5090:function(e,t,c){},"50ed":function(e,t,c){"use strict";c("99bf")},"543a":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),r=c("5502"),o=c("8fc4"),a=function(e){return Object(n["pushScopeId"])("data-v-6ea05cd0"),e=e(),Object(n["popScopeId"])(),e},l={class:"w-100 remove-button d-flex justify-content-between p-0"},s={class:"m-0"},u=a((function(){return Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("span",{class:"bi bi-chevron-down"})],-1)})),i={class:"text-gray"},d={setup:function(e){var t=Object(r["f"])(),c=Object(n["computed"])((function(){return t.getters["questionModule/questions"]}));return function(e,t){var r=Object(n["resolveComponent"])("b-collapse"),a=Object(n["resolveDirective"])("b-toggle");return Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["unref"])(o["a"]),{waiting:"question_loaded"},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(Object(n["unref"])(c),(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("section",{class:"section-container",key:"question_id"+e.id},[Object(n["withDirectives"])((Object(n["openBlock"])(),Object(n["createElementBlock"])("button",l,[Object(n["createElementVNode"])("h6",s,Object(n["toDisplayString"])(e.question),1),u])),[[a,void 0,void 0,{question:!0}]]),Object(n["createVNode"])(r,{id:"question",class:"mt-2"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("span",i,Object(n["toDisplayString"])(e.answer),1)]})),_:2},1024)])})),128))]})),_:1})}}},b=(c("7478"),c("6b0d")),p=c.n(b);const j=p()(d,[["__scopeId","data-v-6ea05cd0"]]);t["default"]=j},6148:function(e,t,c){"use strict";c("5090")},7149:function(e,t,c){"use strict";c("1924")},7478:function(e,t,c){"use strict";c("479f")},9419:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),r={class:"container pt-3 pb-5"},o={class:"pr-2",style:{"font-size":"1.2rem"}};function a(e,t,c,a,l,s){var u=Object(n["resolveComponent"])("badge"),i=Object(n["resolveComponent"])("router-view"),d=Object(n["resolveComponent"])("b-tab"),b=Object(n["resolveComponent"])("b-tabs");return Object(n["openBlock"])(),Object(n["createElementBlock"])("section",r,[Object(n["createVNode"])(u,{path:e.path},null,8,["path"]),Object(n["createVNode"])(b,{pills:"",card:"",vertical:"","nav-class":"user-sheet",modelValue:e.currentTab,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.currentTab=t}),"nav-wrapper-class":"bg-transparent border-0 w-max","active-nav-item-class":"bg-white transparent-nav-active text-nowrap",class:"user-tabs"},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.tabs,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(d,{lazy:"",key:"user_item_tab_"+t,"title-link-class":"transparent-tab-passive"},{title:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("span",o,[(Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(e.icon)))]),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.title),1)])]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(i)]})),_:2},1024)})),128))]})),_:1},8,["modelValue"])])}var l=c("5530"),s=(c("ac1f"),c("5319"),c("d3b7"),c("159b"),c("b0c0"),c("9bd1")),u=c("cc4b"),i=c("31482"),d=c("fd47"),b=c("d75c"),p=c("ba58"),j=c("543a"),O=c("5502"),f=c("bc3f"),m=c("9225"),v=c("f1fb"),h=m["a"].global.t,g={data:function(){return{path:[{name:h("Главная"),path:"/"},{name:h("Профиль"),path:"/user"}],currentTab:3,tabs:Object(v["a"])()}},components:{UserPayment:f["a"],Questions:j["default"],Notification:p["default"],Documents:b["default"],ChooseCard:d["default"],OrderUser:i["default"],Badge:s["a"],UserSettings:u["default"]},computed:Object(l["a"])({},Object(O["c"])({isAuthenticated:"isAuthenticated"})),watch:{isAuthenticated:function(e){e||this.$router.replace("/")},$route:function(){var e=this;this.tabs.forEach((function(t,c){e.check(t)&&(e.currentTab=c)}))},currentTab:function(e){var t=this;this.tabs.forEach((function(c,n){n===e&&c.secondName!==t.$route.name&&t.$router.push({name:c.pathName})}))}},methods:Object(l["a"])(Object(l["a"])(Object(l["a"])({},Object(O["b"])({getPurchases:"purchaseModule/getPurchases",getCard:"plasticCardModule/getCards",getQuestions:"questionModule/getQuestions"})),Object(O["d"])({cleanCard:"purchaseModule/clean"})),{},{check:function(e){return e.secondName===this.$route.name||e.pathName===this.$route.name},setCorrectTab:function(){var e=this;this.tabs.forEach((function(t,c){e.check(t)&&(e.currentTab=c)}))}}),created:function(){this.setCorrectTab(),this.isAuthenticated||this.$router.replace("/"),this.getPurchases(),this.getCard(),this.getQuestions()},unmounted:function(){this.cleanCard()}},w=(c("50ed"),c("a18f"),c("6b0d")),V=c.n(w);const N=V()(g,[["render",a],["__scopeId","data-v-b44f2ece"]]);t["default"]=N},"99bf":function(e,t,c){},"9bd1":function(e,t,c){"use strict";c("b0c0");var n=c("7a23"),r=function(e){return Object(n["pushScopeId"])("data-v-3d42a0f7"),e=e(),Object(n["popScopeId"])(),e},o=r((function(){return Object(n["createElementVNode"])("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Object(n["createElementVNode"])("path",{d:"M1.5 1L6.5 6L1.5 11",stroke:"#9499A5","stroke-width":"1.25","stroke-linecap":"round","stroke-linejoin":"round"})],-1)}));function a(e,t,c,r,a,l){var s=Object(n["resolveComponent"])("router-link"),u=Object(n["resolveComponent"])("ResponsiveLayout");return Object(n["openBlock"])(),Object(n["createBlock"])(u,null,{desktop:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",Object(n["mergeProps"])(e.$attrs,{class:"d-flex flex-nowrap badge p-0"}),[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.path,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:e.name,class:"link"},[o,Object(n["createVNode"])(s,{to:e.path},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.name),1)]})),_:2},1032,["to"])])})),128))],16)]})),_:1})}var l=c("b5e1"),s={components:{ResponsiveLayout:l["a"]},inheritAttrs:!1,props:{path:Array}},u=(c("6148"),c("6b0d")),i=c.n(u);const d=i()(s,[["render",a],["__scopeId","data-v-3d42a0f7"]]);t["a"]=d},a18f:function(e,t,c){"use strict";c("f6a6")},ba58:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),r={class:"section-container"},o={class:"d-flex justify-content-between"},a={class:"text-header-32"},l=Object(n["createElementVNode"])("hr",null,null,-1),s={class:"bold block mb-2"},u={class:"block mb-2"},i=Object(n["createElementVNode"])("span",{class:"text-gray mb-2"},"20 ноября 2021",-1);function d(e,t,c,d,b,p){var j=Object(n["resolveComponent"])("input-toggle");return Object(n["openBlock"])(),Object(n["createElementBlock"])("section",r,[Object(n["createElementVNode"])("div",o,[Object(n["createElementVNode"])("h5",a,Object(n["toDisplayString"])(e.$t("Уведомления")),1),Object(n["createVNode"])(j)]),l,Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("span",s,Object(n["toDisplayString"])(e.$t("Возвращайтесь за рассрочкой!")),1),Object(n["createElementVNode"])("span",u,Object(n["toDisplayString"])(e.$t("Заполните анкету и купите все, что давно хотели, уже через несколько минут")),1),i])])}var b=c("18d9"),p={components:{InputToggle:b["a"]}},j=c("6b0d"),O=c.n(j);const f=O()(p,[["render",d]]);t["default"]=f},cc4b:function(e,t,c){"use strict";c.r(t);c("b0c0");var n=c("7a23"),r=c("1cf3"),o=c("0fc5"),a=c("2a49"),l=c("3ce3"),s=c("8fc4"),u=c("5502"),i=c("5f51"),d={class:"text-green text-sm ml-2"},b=["innerHTML"],p={props:{success:String},setup:function(e){return function(t,c){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",d,[Object(n["withDirectives"])(Object(n["createElementVNode"])("span",{innerHTML:e.success},null,8,b),[[n["vShow"],e.success]])])}}};const j=p;var O=j,f=c("f8ac"),m={style:{color:"white"}},v={props:{title:String},setup:function(e){return function(t,c){return Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["unref"])(f["a"]),{class:"bg-red"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("span",m,Object(n["toDisplayString"])(e.title),1)]})),_:1})}}};const h=v;var g=h,w=c("b5e1"),V=c("04dc"),N=function(e){return Object(n["pushScopeId"])("data-v-c99b213a"),e=e(),Object(n["popScopeId"])(),e},k={class:"buyshop-card d-flex justify-content-between w-100 align-items-center flex-wrap flex-sm-wrap flex-md-nowrap"},y={class:"d-flex align-items-start mb-3"},E={style:{"margin-right":"1.286rem"}},_=N((function(){return Object(n["createElementVNode"])("div",{style:{"padding-top":"0.857rem"}},null,-1)})),C={class:"text-600 p-0 m-0",style:{"font-size":"1.143rem"}},x={class:"pr-2"},B=N((function(){return Object(n["createElementVNode"])("span",{class:"bi-chevron-right"},null,-1)})),$={props:{user:Object},setup:function(e){return function(t,c){var r=Object(n["resolveComponent"])("b-avatar"),o=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",k,[Object(n["createElementVNode"])("div",y,[Object(n["createElementVNode"])("div",E,[Object(n["createVNode"])(r,{src:e.user.avatar,size:"72"},null,8,["src"])]),Object(n["createElementVNode"])("div",null,[_,Object(n["createElementVNode"])("h6",C,Object(n["toDisplayString"])(e.user.name),1),Object(n["createElementVNode"])("span",{class:Object(n["normalizeClass"])(e.user.user_credit?"text-green":"text-red")},Object(n["toDisplayString"])(e.user.user_credit?t.$t("Верифицирован"):t.$t("Не верефицированный")),3),Object(n["createVNode"])(o,{to:"/verification/account/1",style:{all:"unset"}},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(Object(n["unref"])(V["a"]),{title:"Верифицировать"})]})),_:1})])]),Object(n["createElementVNode"])("button",{class:"button-clear d-flex justify-content-between btn-link-new",onClick:c[0]||(c[0]=function(e){return t.$emit("edit-profile")})},[Object(n["createElementVNode"])("span",x,Object(n["toDisplayString"])(t.$t("Редактировать профиль")),1),B])])}}},S=(c("7149"),c("6b0d")),D=c.n(S);const T=D()($,[["__scopeId","data-v-c99b213a"]]);var I=T,M={key:1},U={class:"buyshop-card mb-3"},P={class:"d-flex flex-column justify-content-start align-items-start"},A={class:"buyshop-card mb-3"},L={class:""},q={class:"mt-3"},z={class:"password"},G={setup:function(e){var t=Object(n["computed"])((function(){return c.getters["user"]})),c=Object(u["f"])(),d=Object(n["ref"])(t.value.name),b=Object(n["ref"])(t.value.phone),p=Object(n["computed"])((function(){return c.getters["passwordModule/passwordChange"]})),j=function(){return c.dispatch("passwordModule/changePassword")},f=function(){return c.commit("passwordModule/cleanPassword")},m=function(){return c.commit("passwordModule/setSuccessPassword","")},v=Object(n["computed"])((function(){return c.getters["passwordModule/error"]})),h=Object(n["computed"])((function(){return c.getters["passwordModule/success"]})),V=function(e){return c.dispatch("changeAvatar",e)},N=function(e){return c.dispatch("changeUserData",e)},k=function(){return c.dispatch("logout")},y=Object(n["ref"])(!1);function E(){return d.value&&b.value&&13===b.value.length}function _(){return p.value.password_rep.length&&p.value.password_new.length&&p.value.password.length}function C(e){console.log(e.target.files[0]),V(e.target.files[0])}function x(){p.value.password_new!==p.value.password_rep?p.value.password_new_error="Пароли не совпадают":p.value.password_new_error="",p.value.password_new_error.length||j()}return f(),Object(n["watch"])(t,(function(){d.value=t.value.name,b.value=t.value.phone})),Object(n["onBeforeUnmount"])((function(){m()})),function(e,c){var u=Object(n["resolveComponent"])("b-avatar"),j=Object(n["resolveComponent"])("b-button"),f=Object(n["resolveComponent"])("b-col"),m=Object(n["resolveComponent"])("b-row");return Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["unref"])(s["a"]),{waiting:"user"},{default:Object(n["withCtx"])((function(){return[Object(n["unref"])(t).user_credit||y.value?Object(n["unref"])(t).user_credit||y.value?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",M,[Object(n["createElementVNode"])("div",U,[Object(n["createVNode"])(Object(n["unref"])(s["a"]),{"div-style":{height:"20vh"},waiting:"avatar"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("h6",null,Object(n["toDisplayString"])(e.$t("Фото профиля")),1),Object(n["createElementVNode"])("div",P,[Object(n["createVNode"])(u,{src:Object(n["unref"])(t).avatar,size:"5rem"},null,8,["src"]),Object(n["createElementVNode"])("input",{onChange:C,type:"file",ref:"file",style:{display:"none"}},null,544),Object(n["createVNode"])(j,{size:"sm",onClick:c[1]||(c[1]=function(t){return e.$refs.file.click()}),variant:"link",style:{"text-decoration":"none"}},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$t("Изменить")),1)]})),_:1})])]})),_:1})]),Object(n["createElementVNode"])("div",A,[Object(n["createVNode"])(m,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{cols:"12",class:"col-xl-4 col-lg-6 col-md-8 col-sm-12"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("h6",null,Object(n["toDisplayString"])(e.$t("Персональные данные")),1),Object(n["createVNode"])(Object(n["unref"])(s["a"]),{"div-style":{height:"20vh"},waiting:"user_data_loaded"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",L,[Object(n["createVNode"])(Object(n["unref"])(r["a"]),{class:"input",modelValue:d.value,"onUpdate:modelValue":c[2]||(c[2]=function(e){return d.value=e}),placeholder:e.$t("Имя и Фамилия*")},null,8,["modelValue","placeholder"]),Object(n["createElementVNode"])("div",q,[Object(n["createVNode"])(Object(n["unref"])(o["a"]),{class:"input",modelValue:b.value,"onUpdate:modelValue":c[3]||(c[3]=function(e){return b.value=e}),placeholder:e.$t("Телефон*")},null,8,["modelValue","placeholder"])]),Object(n["createVNode"])(Object(n["unref"])(l["a"]),{"is-entered":E(),onSubmit:c[4]||(c[4]=function(e){return N({name:d.value,phone:b.value})}),title:e.$t("Изменить"),class:"p-2"},null,8,["is-entered","title"])])]})),_:1})]})),_:1})]})),_:1})]),Object(n["createElementVNode"])("form",{onSubmit:c[8]||(c[8]=Object(n["withModifiers"])((function(){}),["prevent"])),class:"buyshop-card"},[Object(n["createVNode"])(m,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{cols:"12",class:"col-xl-4 col-lg-6 col-md-8 col-sm-12"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("h6",null,Object(n["toDisplayString"])(e.$t("Аккаунт")),1),Object(n["createElementVNode"])("div",z,[Object(n["createVNode"])(Object(n["unref"])(s["a"]),{waiting:"password_loaded"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(Object(n["unref"])(i["a"]),{error:Object(n["unref"])(v)},null,8,["error"]),Object(n["createVNode"])(Object(n["unref"])(O),{success:Object(n["unref"])(h)},null,8,["success"]),Object(n["createVNode"])(Object(n["unref"])(a["a"]),{autocomplete:"password",modelValue:Object(n["unref"])(p).password,"onUpdate:modelValue":c[5]||(c[5]=function(e){return Object(n["unref"])(p).password=e}),placeholder:e.$t("Старый пароль")},null,8,["modelValue","placeholder"]),Object(n["createVNode"])(Object(n["unref"])(a["a"]),{autocomplete:"password_new",error:Object(n["unref"])(p).password_new_error,modelValue:Object(n["unref"])(p).password_new,"onUpdate:modelValue":c[6]||(c[6]=function(e){return Object(n["unref"])(p).password_new=e}),placeholder:e.$t("Новый пароль")},null,8,["error","modelValue","placeholder"]),Object(n["createVNode"])(Object(n["unref"])(a["a"]),{autocomplete:"password_rep",error:Object(n["unref"])(p).password_new_error,modelValue:Object(n["unref"])(p).password_rep,"onUpdate:modelValue":c[7]||(c[7]=function(e){return Object(n["unref"])(p).password_rep=e}),placeholder:e.$t("Подтвердите пароль")},null,8,["error","modelValue","placeholder"]),Object(n["createVNode"])(Object(n["unref"])(l["a"]),{onSubmit:x,"is-entered":_(),title:e.$t("Изменение пароля"),class:"p-2"},null,8,["is-entered","title"])]})),_:1})])]})),_:1})]})),_:1})],32),Object(n["createVNode"])(Object(n["unref"])(w["a"]),null,{mobile:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(Object(n["unref"])(g),{onClick:k,title:e.$t("Выйти")},null,8,["title"])]})),_:1})])):Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["unref"])(I),{key:0,onEditProfile:c[0]||(c[0]=function(e){return y.value=!0}),user:Object(n["unref"])(t)},null,8,["user"]))]})),_:1})}}};c("3f32");const F=D()(G,[["__scopeId","data-v-21b29f15"]]);t["default"]=F},d75c:function(e,t,c){"use strict";c.r(t);var n=c("7a23");function r(e,t,c,r,o,a){var l=Object(n["resolveComponent"])("empty-document"),s=Object(n["resolveComponent"])("document-item");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(l),Object(n["createElementVNode"])("section",null,[Object(n["createVNode"])(s)])],64)}function o(e,t,c,r,o,a){var l=Object(n["resolveComponent"])("empty-page");return Object(n["openBlock"])(),Object(n["createBlock"])(l,{image:"document.png",title:e.$t("Нет документов"),link:"/verification/1",buttonText:e.$t("Добавить документы"),desc:e.$t("Добавьте документы чтобы брать товары в рассрочку")},null,8,["title","buttonText","desc"])}var a=c("3970"),l={components:{EmptyPage:a["a"]}},s=c("6b0d"),u=c.n(s);const i=u()(l,[["render",o]]);var d=i,b=c("c920"),p=c.n(b),j={class:"bg-white p-3 rounded-st mb-3"},O={class:"d-flex w-70 align-items-center"},f=Object(n["createElementVNode"])("div",{style:{flex:"1",height:"13rem !important"},class:"rounded-st p-3 mx-2 back-gray"},[Object(n["createElementVNode"])("img",{class:"img-res",src:p.a})],-1),m={class:"w-50"},v={type:"file",style:{display:"none"},ref:"inputGetGallery"};function h(e,t,c,r,o,a){var l=Object(n["resolveComponent"])("ButtonGray");return Object(n["openBlock"])(),Object(n["createElementBlock"])("section",j,[Object(n["createElementVNode"])("h6",null,[Object(n["renderSlot"])(e.$slots,"title")]),Object(n["createElementVNode"])("div",O,[f,Object(n["createElementVNode"])("div",m,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("Сделайте фото паспорта. Фотография должна быть четкая, а символы на документе различимые")),1),Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("input",v,null,512),Object(n["createVNode"])(l,{onClick:t[0]||(t[0]=function(t){return e.$refs.inputGetGallery.click()}),class:"p-2","title-style":{color:"var(--dark)"},title:e.$t("Загрузить из галереи")},null,8,["title-style","title"])]),Object(n["createElementVNode"])("div",null,[Object(n["createVNode"])(l,{"title-style":{color:"var(--red)"},title:e.$t("Удалить текущее фото")},null,8,["title-style","title"])])])])])}var g=c("2917"),w={components:{ButtonGray:g["a"]}};const V=u()(w,[["render",h]]);var N=V,k={components:{DocumentItem:N,EmptyDocument:d}};const y=u()(k,[["render",r]]);t["default"]=y},f6a6:function(e,t,c){}}]);
//# sourceMappingURL=chunk-db5ae3de.d621fa27.js.map