var x=Object.defineProperty,U=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,oe=Reflect.get,te=Reflect.set;var g=(t,e,n)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))T.call(e,n)&&g(t,n,e[n]);if(f)for(var n of f(e))j.call(e,n)&&g(t,n,e[n]);return t},V=(t,e)=>U(t,h(e));import{_ as c,r as s,o as d,c as v,a as u,F as _,m as C,ao as M,b as p,f as $,w as z,h as b,t as w,a0 as y}from"./app.f71a985e.js";const O={data(){return{value1:!0,value2:!0}}};function P(t,e,n,r,l,i){const a=s("el-switch");return d(),v(_,null,[u(a,{modelValue:l.value1,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value1=o)},null,8,["modelValue"]),u(a,{modelValue:l.value2,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value2=o),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])],64)}var k=c(O,[["render",P]]),ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:k});const B={data(){return{value1:!0,value2:!0,active:C,inactive:M}}},E=p("br",null,null,-1);function F(t,e,n,r,l,i){const a=s("el-switch");return d(),v(_,null,[u(a,{modelValue:l.value1,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value1=o),"active-icon":l.active,"inactive-icon":l.inactive},null,8,["modelValue","active-icon","inactive-icon"]),E,u(a,{modelValue:l.value2,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value2=o),style:{"margin-left":"24px"},"inline-prompt":"","active-icon":l.active,"inactive-icon":l.inactive},null,8,["modelValue","active-icon","inactive-icon"])],64)}var N=c(B,[["render",F]]),re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:N});const D={data(){return{value1:!0,value2:!0}}};function I(t,e,n,r,l,i){const a=s("el-switch");return d(),v(_,null,[u(a,{modelValue:l.value1,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value1=o),disabled:""},null,8,["modelValue"]),u(a,{modelValue:l.value2,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value2=o)},null,8,["modelValue"])],64)}var R=c(D,[["render",I]]),ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:R});const Y={data(){return{value:"100"}}};function q(t,e,n,r,l,i){const a=s("el-switch"),o=s("el-tooltip");return d(),$(o,{content:"Switch value: "+l.value,placement:"top"},{default:z(()=>[u(a,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=S=>l.value=S),"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"100","inactive-value":"0"},null,8,["modelValue"])]),_:1},8,["content"])}var A=c(Y,[["render",q]]),se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A});const G={data(){return{value1:!0,value2:!1}}};function H(t,e,n,r,l,i){const a=s("el-switch");return d(),v(_,null,[u(a,{modelValue:l.value1,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value1=o),loading:""},null,8,["modelValue"]),u(a,{modelValue:l.value2,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value2=o),loading:""},null,8,["modelValue"])],64)}var J=c(G,[["render",H]]),ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:J});const K={setup(){const t=b({value1:!1,loading1:!1}),e=()=>(t.loading1=!0,new Promise(l=>{setTimeout(()=>(t.loading1=!1,y.success("Switch success"),l(!0)),1e3)})),n=b({value2:!1,loading2:!1}),r=()=>(n.loading2=!0,new Promise((l,i)=>{setTimeout(()=>(n.loading2=!1,y.error("Switch failed"),i(new Error("Error"))),1e3)}));return V(m(m({},w(t)),w(n)),{beforeChange1:e,beforeChange2:r})}};function L(t,e,n,r,l,i){const a=s("el-switch");return d(),v(_,null,[u(a,{modelValue:t.value1,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value1=o),loading:t.loading1,"before-change":r.beforeChange1},null,8,["modelValue","loading","before-change"]),u(a,{modelValue:t.value2,"onUpdate:modelValue":e[1]||(e[1]=o=>t.value2=o),loading:t.loading2,"before-change":r.beforeChange2},null,8,["modelValue","loading","before-change"])],64)}var Q=c(K,[["render",L]]),de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Q});const W={data(){return{value1:!0,value2:!0,value3:!0,value4:!0}}},X=p("br",null,null,-1),Z=p("br",null,null,-1);function ee(t,e,n,r,l,i){const a=s("el-switch");return d(),v(_,null,[u(a,{modelValue:l.value1,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value1=o),"active-text":"Pay by month","inactive-text":"Pay by year"},null,8,["modelValue"]),X,u(a,{modelValue:l.value2,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value2=o),"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"Pay by month","inactive-text":"Pay by year"},null,8,["modelValue"]),Z,u(a,{modelValue:l.value3,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value3=o),"inline-prompt":"","active-text":"\u662F","inactive-text":"\u5426"},null,8,["modelValue"]),u(a,{modelValue:l.value4,"onUpdate:modelValue":e[3]||(e[3]=o=>l.value4=o),"inline-prompt":"","active-color":"#13ce66","inactive-color":"#ff4949","active-text":"Y","inactive-text":"N"},null,8,["modelValue"])],64)}var le=c(W,[["render",ee]]),ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:le});export{ue as _,re as a,ie as b,se as c,ce as d,de as e,ve as f};
