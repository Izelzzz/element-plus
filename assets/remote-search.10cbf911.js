import{g as u,K as t,_ as p,r as d,o as m,c as v,a as c,F as $,f as _,w as b,b as f,j as g}from"./app.f71a985e.js";const h=["a","b","c","d","e","f","g","h","i","j"],V=u({setup(){return{options:t(Array.from({length:1e3}).map((l,e)=>({value:`Option ${e+1}`,label:`${h[e%10]}${e}`}))),value1:t([]),value2:t("")}}});function y(l,e,n,r,s,i){const a=d("el-select-v2");return m(),v($,null,[c(a,{modelValue:l.value1,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value1=o),options:l.options,placeholder:"Please select",style:{width:"240px","margin-right":"16px","vertical-align":"middle"},"allow-create":"",filterable:"",multiple:"",clearable:""},null,8,["modelValue","options"]),c(a,{modelValue:l.value2,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value2=o),options:l.options,placeholder:"Please select",style:{width:"240px","vertical-align":"middle"},"allow-create":"",filterable:"",clearable:""},null,8,["modelValue","options"])],64)}var w=p(V,[["render",y]]),ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w});const O=["a","b","c","d","e","f","g","h","i","j"],S=u({setup(){return{options:t(Array.from({length:1e3}).map((l,e)=>({value:`Option ${e+1}`,label:`${O[e%10]}${e}`}))),value:t("")}}});function M(l,e,n,r,s,i){const a=d("el-select-v2");return m(),_(a,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value=o),options:l.options,placeholder:"Please select",style:{width:"240px"}},null,8,["modelValue","options"])}var j=p(S,[["render",M]]),ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:j});const U=["a","b","c","d","e","f","g","h","i","j"],z=u({setup(){return{options:t(Array.from({length:1e3}).map((l,e)=>({value:`Option ${e+1}`,label:`${U[e%10]}${e}`}))),value1:t([]),value2:t("")}}});function A(l,e,n,r,s,i){const a=d("el-select-v2");return m(),v($,null,[c(a,{modelValue:l.value1,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value1=o),options:l.options,placeholder:"Please select",style:{width:"240px","margin-right":"16px","vertical-align":"middle"},multiple:"",clearable:""},null,8,["modelValue","options"]),c(a,{modelValue:l.value2,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value2=o),options:l.options,placeholder:"Please select",style:{width:"240px","vertical-align":"middle"},clearable:""},null,8,["modelValue","options"])],64)}var P=p(z,[["render",A]]),pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});const T=["a","b","c","d","e","f","g","h","i","j"],k=u({setup(){return{options:t(Array.from({length:1e3}).map((l,e)=>({value:`Option${e+1}`,label:`${T[e%10]}${e}`}))),value:t([])}}}),C={style:{"margin-right":"8px"}},N={style:{color:"var(--el-text-color-secondary)","font-size":"13px"}};function I(l,e,n,r,s,i){const a=d("el-select-v2");return m(),_(a,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value=o),filterable:"",options:l.options,placeholder:"Please select",style:{width:"240px"},multiple:""},{default:b(({item:o})=>[f("span",C,g(o.label),1),f("span",N,g(o.value),1)]),_:1},8,["modelValue","options"])}var B=p(k,[["render",I]]),de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B});const D=["a","b","c","d","e","f","g","h","i","j"],W=u({setup(){return{options:t(Array.from({length:1e3}).map((l,e)=>({value:`Option${e+1}`,label:`${D[e%10]}${e}`,disabled:e%10==0}))),value:t([])}}});function F(l,e,n,r,s,i){const a=d("el-select-v2");return m(),v($,null,[c(a,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value=o),filterable:"",options:l.options,placeholder:"Please select",style:{width:"240px","margin-right":"16px","vertical-align":"middle"},multiple:""},null,8,["modelValue","options"]),c(a,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value=o),disabled:"",filterable:"",options:l.options,placeholder:"Please select",style:{width:"240px","vertical-align":"middle"},multiple:""},null,8,["modelValue","options"])],64)}var G=p(W,[["render",F]]),me=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:G});const K=["a","b","c","d","e","f","g","h","i","j"],L=u({setup(){return{options:t(Array.from({length:1e3}).map((l,e)=>({value:`Option${e+1}`,label:`${K[e%10]}${e}`}))),value:t([])}}});function E(l,e,n,r,s,i){const a=d("el-select-v2");return m(),_(a,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value=o),filterable:"",options:l.options,placeholder:"Please select",style:{width:"240px"},multiple:""},null,8,["modelValue","options"])}var H=p(L,[["render",E]]),_e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:H});const J=["a","b","c","d","e","f","g","h","i","j"],R=u({setup(){return{options:t(Array.from({length:10}).map((l,e)=>{const n=e+1;return{value:`Group ${n}`,label:`Group ${n}`,options:Array.from({length:10}).map((r,s)=>({value:`Option ${s+1+10*n}`,label:`${J[s%10]}${s+1+10*n}`}))}})),value:t([])}}});function Y(l,e,n,r,s,i){const a=d("el-select-v2");return m(),_(a,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value=o),filterable:"",options:l.options,placeholder:"Please select",style:{width:"240px"},multiple:""},null,8,["modelValue","options"])}var Q=p(R,[["render",Y]]),ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Q});const X=["a","b","c","d","e","f","g","h","i","j"],Z=u({setup(){return{options:t(Array.from({length:1e3}).map((l,e)=>({value:`Option ${e+1}`,label:`${X[e%10]}${e}`}))),value:t([])}}});function q(l,e,n,r,s,i){const a=d("el-select-v2");return m(),_(a,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value=o),options:l.options,placeholder:"Please select",style:{width:"240px"},multiple:"","collapse-tags":""},null,8,["modelValue","options"])}var x=p(Z,[["render",q]]),ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:x});const ee=["a","b","c","d","e","f","g","h","i","j"],le=u({setup(){return{options:t(Array.from({length:1e3}).map((l,e)=>({value:`Option ${e+1}`,label:`${ee[e%10]}${e}`}))),value:t([])}}});function oe(l,e,n,r,s,i){const a=d("el-select-v2");return m(),_(a,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value=o),options:l.options,placeholder:"Please select",style:{width:"240px"},multiple:""},null,8,["modelValue","options"])}var ae=p(le,[["render",oe]]),$e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ae});const te=u({setup(){const e=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"].map(a=>({value:`value:${a}`,label:`label:${a}`})),n=t([]),r=t([]),s=t(!1);return{loading:s,options:n,value:r,remoteMethod:a=>{a!==""?(s.value=!0,setTimeout(()=>{s.value=!1,n.value=e.filter(o=>o.label.toLowerCase().indexOf(a.toLowerCase())>-1)},200)):n.value=[]}}}});function ne(l,e,n,r,s,i){const a=d("el-select-v2");return m(),_(a,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value=o),style:{width:"240px"},multiple:"",size:"medium",filterable:"",remote:"","remote-method":l.remoteMethod,clearable:"",options:l.options,loading:l.loading,placeholder:"Please enter a keyword"},null,8,["modelValue","remote-method","options","loading"])}var se=p(te,[["render",ne]]),fe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:se});export{ie as _,ue as a,pe as b,de as c,me as d,_e as e,ce as f,ve as g,$e as h,fe as i};
