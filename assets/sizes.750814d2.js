import{g as s,K as n,_ as t,r as d,o as u,f,c as V,b as c,a,F as $}from"./app.f71a985e.js";const b=s({setup(){return{color:n("rgba(19, 206, 102, 0.8)")}}});function v(o,e,_,p,i,m){const r=d("el-color-picker");return u(),f(r,{modelValue:o.color,"onUpdate:modelValue":e[0]||(e[0]=l=>o.color=l),"show-alpha":""},null,8,["modelValue"])}var g=t(b,[["render",v]]),N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:g});const k=s({setup(){const o=n("#409EFF"),e=n(null);return{color1:o,color2:e}}}),z={class:"demo-color-block"},y=c("span",{class:"demonstration"},"With default value",-1),S={class:"demo-color-block"},U=c("span",{class:"demonstration"},"With no default value",-1);function F(o,e,_,p,i,m){const r=d("el-color-picker");return u(),V($,null,[c("div",z,[y,a(r,{modelValue:o.color1,"onUpdate:modelValue":e[0]||(e[0]=l=>o.color1=l)},null,8,["modelValue"])]),c("div",S,[U,a(r,{modelValue:o.color2,"onUpdate:modelValue":e[1]||(e[1]=l=>o.color2=l)},null,8,["modelValue"])])],64)}var j=t(k,[["render",F]]),W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:j});const C=s({setup(){const o=n("rgba(255, 69, 0, 0.68)"),e=n(["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsv(51, 100, 98)","hsva(120, 40, 94, 0.5)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)","#c7158577"]);return{color:o,predefineColors:e}}});function h(o,e,_,p,i,m){const r=d("el-color-picker");return u(),f(r,{modelValue:o.color,"onUpdate:modelValue":e[0]||(e[0]=l=>o.color=l),"show-alpha":"",predefine:o.predefineColors},null,8,["modelValue","predefine"])}var B=t(C,[["render",h]]),K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B});const M=s({setup(){return{color:n("409EFF")}}}),O={class:"demo-color-sizes"};function T(o,e,_,p,i,m){const r=d("el-color-picker");return u(),V("div",O,[a(r,{modelValue:o.color,"onUpdate:modelValue":e[0]||(e[0]=l=>o.color=l)},null,8,["modelValue"]),a(r,{modelValue:o.color,"onUpdate:modelValue":e[1]||(e[1]=l=>o.color=l),size:"medium"},null,8,["modelValue"]),a(r,{modelValue:o.color,"onUpdate:modelValue":e[2]||(e[2]=l=>o.color=l),size:"small"},null,8,["modelValue"]),a(r,{modelValue:o.color,"onUpdate:modelValue":e[3]||(e[3]=l=>o.color=l),size:"mini"},null,8,["modelValue"])])}var E=t(M,[["render",T]]),q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:E});export{N as _,W as a,K as b,q as c};
