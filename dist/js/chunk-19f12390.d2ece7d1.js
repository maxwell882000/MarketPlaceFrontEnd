(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19f12390"],{"4cf6":function(e,t,c){"use strict";c.r(t);c("ac1f"),c("1276"),c("fb6a"),c("a15b"),c("4fad");var r=c("7a23"),l=c("3ce3"),n=c("3d55"),o=c("5502"),u=c("38f0"),a=c("5a5f"),b=c("9008"),d=(c("4de4"),c("d3b7"),c("09da")),O=c("5f51"),f=["onClick"],j={props:{label:String,placeholder:String,styleDropDown:{type:Object},error:String,modelValue:{},items:{type:Array,default:function(){return[{key:"",label:""}]}}},emits:["update:modelValue"],setup:function(e,t){var c=t.emit,l=e,n=Object(r["ref"])("");function o(){return l.modelValue?l.items.filter((function(e){return e.key===l.modelValue}))[0].label:""}var u=Object(r["ref"])(o());function a(e){c("update:modelValue",e.key),u.value=e.label,n.value=""}return Object(r["watch"])((function(){return l.modelValue}),(function(){u.value=o()})),function(t,c){var l=Object(r["resolveComponent"])("b-icon");return Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["unref"])(d["a"]),{modelValue:n.value,"onUpdate:modelValue":c[0]||(c[0]=function(e){return n.value=e}),label:e.label,class:"pointer text-gray","style-drop-down":e.styleDropDown||{width:"100%"}},{button:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",{style:Object(r["normalizeStyle"])({"border-color":e.error&&"var(--red)"}),class:"border-only rounded-st bg-white p-2 d-flex justify-content-between align-items-center"},[Object(r["createElementVNode"])("span",{class:Object(r["normalizeClass"])(u.value&&"text-dark text-500")},Object(r["toDisplayString"])(u.value||e.placeholder),3),Object(r["createVNode"])(l,{class:"pt-1",icon:"chevron-down"})],4),Object(r["createVNode"])(Object(r["unref"])(O["a"]),{error:e.error},null,8,["error"])]})),items:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.items,(function(t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("button",{key:"chosen_element_"+e.placeholder+"__"+t.key,onClick:function(e){return a(t)},class:"button-clear text-start w-100 text-dark"},[Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(t.label),1)],8,f)})),128))]})),_:1},8,["modelValue","label","style-drop-down"])}}};const i=j;var s=i,m=[{key:1,label:"Мужской"},{key:2,label:"Женский"}],V=c("6c02"),p=function(e){return Object(r["pushScopeId"])("data-v-1de9808e"),e=e(),Object(r["popScopeId"])(),e},N={class:"bg-white p-3 rounded-st mb-3"},h=p((function(){return Object(r["createElementVNode"])("h6",null,"Общая информация",-1)})),v={class:"bg-white p-3 rounded-st"},E=p((function(){return Object(r["createElementVNode"])("h6",null,"У вас есть рассрочка в других местах в данный момент?",-1)})),_={class:"d-flex w-30"},w={setup:function(e){var t=Object(r["ref"])(!1),c=Object(r["ref"])(1),d=Object(o["f"])(),O=Object(r["computed"])((function(){return d.getters["verificationModule/userData"]})),f=Object(r["computed"])((function(){return d.getters["verificationModule/errorData"]})),j=function(){return d.dispatch("verificationModule/validation")},i=u["a"],p=m,w=Object(V["c"])();function S(){var e=w.path.split("/");return console.log(e.slice(-2)[0]),"surety"===e.slice(-2)[0]}function x(){var e=w.path.split("/");return console.log(e),e.slice(0,e.length-1).join("/")}function y(){j(),S()&&Object(b["a"])(O,f,i.PHONE,"Номер телефона"),t.value&&Object(b["a"])(O.value,f.value,i.DEPT_SUM,"Если вы выбрали 'ДА', то cумма рассрочки"),Object.entries(f.value).length||(c.value=2)}return function(e,o){var u=Object(r["resolveComponent"])("b-col"),b=Object(r["resolveComponent"])("b-row"),d=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createElementVNode"])("section",N,[h,Object(r["createVNode"])(b,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,{cols:"12",class:"col-xl-6 col-lg-6 col-md-12"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(Object(r["unref"])(a["a"]),{required:"",error:Object(r["unref"])(f)[Object(r["unref"])(i).FIRST_NAME],modelValue:Object(r["unref"])(O)[Object(r["unref"])(i).FIRST_NAME],"onUpdate:modelValue":o[0]||(o[0]=function(e){return Object(r["unref"])(O)[Object(r["unref"])(i).FIRST_NAME]=e}),placeholder:"Имя*"},null,8,["error","modelValue"])]})),_:1}),Object(r["createVNode"])(u,{cols:"12",class:"col-xl-6 col-lg-6 col-md-12"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(Object(r["unref"])(a["a"]),{error:Object(r["unref"])(f)[Object(r["unref"])(i).PNFL],modelValue:Object(r["unref"])(O)[Object(r["unref"])(i).PNFL],"onUpdate:modelValue":o[1]||(o[1]=function(e){return Object(r["unref"])(O)[Object(r["unref"])(i).PNFL]=e}),placeholder:"ПИНФЛ"},null,8,["error","modelValue"])]})),_:1}),Object(r["createVNode"])(u,{cols:"12",class:"col-xl-6 col-lg-6 col-md-12"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(Object(r["unref"])(a["a"]),{error:Object(r["unref"])(f)[Object(r["unref"])(i).LAST_NAME],modelValue:Object(r["unref"])(O)[Object(r["unref"])(i).LAST_NAME],"onUpdate:modelValue":o[2]||(o[2]=function(e){return Object(r["unref"])(O)[Object(r["unref"])(i).LAST_NAME]=e}),placeholder:"Фамилия*"},null,8,["error","modelValue"])]})),_:1}),Object(r["createVNode"])(u,{cols:"12",class:"col-xl-6 col-lg-6 col-md-12"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(Object(r["unref"])(a["a"]),{error:Object(r["unref"])(f)[Object(r["unref"])(i).FATHER_NAME],modelValue:Object(r["unref"])(O)[Object(r["unref"])(i).FATHER_NAME],"onUpdate:modelValue":o[3]||(o[3]=function(e){return Object(r["unref"])(O)[Object(r["unref"])(i).FATHER_NAME]=e}),placeholder:"Отчество*"},null,8,["error","modelValue"])]})),_:1}),Object(r["withDirectives"])(Object(r["createVNode"])(u,{cols:"12",class:"col-xl-6 col-lg-6 col-md-12"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(Object(r["unref"])(a["a"]),{error:Object(r["unref"])(f)[Object(r["unref"])(i).PHONE],modelValue:Object(r["unref"])(O)[Object(r["unref"])(i).PHONE],"onUpdate:modelValue":o[4]||(o[4]=function(e){return Object(r["unref"])(O)[Object(r["unref"])(i).PHONE]=e}),placeholder:"Номер телефона*"},null,8,["error","modelValue"])]})),_:1},512),[[r["vShow"],S()]]),Object(r["createVNode"])(u,{cols:"12",class:"col-xl-6 col-lg-6 col-md-12"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(Object(r["unref"])(a["a"]),{error:Object(r["unref"])(f)[Object(r["unref"])(i).ADDITIONAL_PHONE],modelValue:Object(r["unref"])(O)[Object(r["unref"])(i).ADDITIONAL_PHONE],"onUpdate:modelValue":o[5]||(o[5]=function(e){return Object(r["unref"])(O)[Object(r["unref"])(i).ADDITIONAL_PHONE]=e}),placeholder:"Доп. номер телефона*"},null,8,["error","modelValue"])]})),_:1}),Object(r["createVNode"])(u,{cols:"12",class:"col-xl-6 col-lg-6 col-md-12"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(Object(r["unref"])(a["a"]),{error:Object(r["unref"])(f)[Object(r["unref"])(i).SERIES],modelValue:Object(r["unref"])(O)[Object(r["unref"])(i).SERIES],"onUpdate:modelValue":o[6]||(o[6]=function(e){return Object(r["unref"])(O)[Object(r["unref"])(i).SERIES]=e}),placeholder:"Серия паспорта*"},null,8,["error","modelValue"])]})),_:1}),Object(r["createVNode"])(u,{cols:"12",class:"col-xl-6 col-lg-6 col-md-12"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(Object(r["unref"])(a["a"]),{type:"date",error:Object(r["unref"])(f)[Object(r["unref"])(i).DATE_OF_BIRTH],modelValue:Object(r["unref"])(O)[Object(r["unref"])(i).DATE_OF_BIRTH],"onUpdate:modelValue":o[7]||(o[7]=function(e){return Object(r["unref"])(O)[Object(r["unref"])(i).DATE_OF_BIRTH]=e}),placeholder:"Дата рождения*"},null,8,["error","modelValue"])]})),_:1}),Object(r["createVNode"])(u,{cols:"12",class:"col-xl-6 col-lg-6 col-md-12"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(Object(r["unref"])(s),{class:"input-validation",label:"Выберите пол",placeholder:"Пол*",error:Object(r["unref"])(f)[Object(r["unref"])(i).SEX],modelValue:Object(r["unref"])(O)[Object(r["unref"])(i).SEX],"onUpdate:modelValue":o[8]||(o[8]=function(e){return Object(r["unref"])(O)[Object(r["unref"])(i).SEX]=e}),items:Object(r["unref"])(p)},null,8,["error","modelValue","items"])]})),_:1})]})),_:1})]),Object(r["withDirectives"])(Object(r["createElementVNode"])("section",v,[E,Object(r["createElementVNode"])("div",_,[Object(r["createVNode"])(Object(r["unref"])(l["a"]),{onClick:o[9]||(o[9]=function(e){return t.value=!0}),class:"mr-2","is-entered":t.value||Object(r["unref"])(O)[Object(r["unref"])(i).DEPT_SUM],"title-style":{style:"var(--dark)"},title:"Да"},null,8,["is-entered","title-style"]),Object(r["createVNode"])(Object(r["unref"])(l["a"]),{onClick:o[10]||(o[10]=function(e){return t.value=!1}),"is-entered":!(t.value||Object(r["unref"])(O)[Object(r["unref"])(i).DEPT_SUM]),"title-style":{style:"var(--dark)"},title:"Нет"},null,8,["is-entered","title-style"])]),Object(r["createVNode"])(b,null,{default:Object(r["withCtx"])((function(){return[Object(r["withDirectives"])(Object(r["createVNode"])(u,{cols:"12",class:"col-xl-6 col-lg-6 col-md-12"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(Object(r["unref"])(a["a"]),{error:Object(r["unref"])(f)[Object(r["unref"])(i).DEPT_SUM],modelValue:Object(r["unref"])(O)[Object(r["unref"])(i).DEPT_SUM],"onUpdate:modelValue":o[11]||(o[11]=function(e){return Object(r["unref"])(O)[Object(r["unref"])(i).DEPT_SUM]=e}),placeholder:"Сумма рассрочки"},null,8,["error","modelValue"])]})),_:1},512),[[r["vShow"],t.value||Object(r["unref"])(O)[Object(r["unref"])(i).DEPT_SUM]]]),Object(r["createVNode"])(u)]})),_:1})],512),[[r["vShow"],!S()]]),Object(r["createVNode"])(d,{to:x()+"/"+c.value,replace:""},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(Object(r["unref"])(n["a"]),{onClick:y,class:"w-20 mb-3 py-2",title:"Далее"})]})),_:1},8,["to"])],64)}}},S=(c("df84"),c("6b0d")),x=c.n(S);const y=x()(w,[["__scopeId","data-v-1de9808e"]]);t["default"]=y},ddf2:function(e,t,c){},df84:function(e,t,c){"use strict";c("ddf2")}}]);
//# sourceMappingURL=chunk-19f12390.d2ece7d1.js.map