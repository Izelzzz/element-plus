import{_ as p,r as f,o as g,c as m,b as c,a as s,w as o,j as h,F as b,d as u,f as k}from"./app.f71a985e.js";const x={data(){return{data:(e=>{const a=[];for(let t=1;t<=15;t++)a.push({key:t,label:`Option ${t}`,disabled:t%4==0});return a})(),rightValue:[1],leftValue:[1],renderFunc(e,a){return e("span",null,a.key," - ",a.label)}}},methods:{handleChange(d,e,a){console.log(d,e,a)}}},V=c("p",{style:{"text-align":"center",margin:"0 0 20px"}}," Customize data items using render-content ",-1),y={style:{"text-align":"center"}},v=u("Operation"),C=u("Operation"),T=c("p",{style:{"text-align":"center",margin:"50px 0 20px"}}," Customize data items using scoped slot ",-1),z={style:{"text-align":"center"}},O=u("Operation"),S=u("Operation");function $(d,e,a,t,l,_){const n=f("el-button"),i=f("el-transfer");return g(),m(b,null,[V,c("div",y,[s(i,{modelValue:l.leftValue,"onUpdate:modelValue":e[0]||(e[0]=r=>l.leftValue=r),style:{"text-align":"left",display:"inline-block"},filterable:"","left-default-checked":[2,3],"right-default-checked":[1],"render-content":l.renderFunc,titles:["Source","Target"],"button-texts":["To left","To right"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:l.data,onChange:_.handleChange},{"left-footer":o(()=>[s(n,{class:"transfer-footer",size:"small"},{default:o(()=>[v]),_:1})]),"right-footer":o(()=>[s(n,{class:"transfer-footer",size:"small"},{default:o(()=>[C]),_:1})]),_:1},8,["modelValue","render-content","data","onChange"]),T,c("div",z,[s(i,{modelValue:l.rightValue,"onUpdate:modelValue":e[1]||(e[1]=r=>l.rightValue=r),style:{"text-align":"left",display:"inline-block"},filterable:"","left-default-checked":[2,3],"right-default-checked":[1],titles:["Source","Target"],"button-texts":["To left","To right"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:l.data,onChange:_.handleChange},{default:o(({option:r})=>[c("span",null,h(r.key)+" - "+h(r.label),1)]),"left-footer":o(()=>[s(n,{class:"transfer-footer",size:"small"},{default:o(()=>[O]),_:1})]),"right-footer":o(()=>[s(n,{class:"transfer-footer",size:"small"},{default:o(()=>[S]),_:1})]),_:1},8,["modelValue","data","onChange"])])])],64)}var D=p(x,[["render",$]]),U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:D});const j={data(){return{data:(e=>{const a=[];for(let t=1;t<=15;t++)a.push({value:t,desc:`Option ${t}`,disabled:t%4==0});return a})(),value:[]}}};function B(d,e,a,t,l,_){const n=f("el-transfer");return g(),k(n,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=i=>l.value=i),props:{key:"value",label:"desc"},data:l.data},null,8,["modelValue","data"])}var F=p(j,[["render",B]]),w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F});export{U as _,w as a};
