import"./style-CWPg30Uh.js";import"./EntryFile-BS4wfFeh.js";const i="POST",u={Accept:"application/json","Content-Type":"application/json"},d="",n={method:i,headers:u,body:d};let m=()=>{let t=document.getElementById("FormId"),e=L(t);return n.body=JSON.stringify(F({inBodyData:e})),n},F=({inBodyData:t})=>(console.log("aaaaaaaaaa : ",t),document.getElementById("FormId").querySelectorAll(".mobileTwilioClass").forEach(l=>{if(l.name in t){const o=l,s=window.intlTelInputGlobals.getInstance(o).getNumber();t[l.name]=s}}),t);function L(t){var e=new FormData(t),a={};for(var[l,o]of e)a[l]?(Array.isArray(a[l])||(a[l]=[a[l]]),a[l].push(o)):a[l]=o;return a}const j="bin",f={PostUrl:j};let w=async()=>{let t=f.PostUrl,e=jVarGlobalTableName,a=m(),l=`/${t}/${e}`;return await await fetch(l,a)},h=()=>{let e=document.getElementById("FormId").querySelectorAll("[required]"),a=!0;return e.forEach(l=>{if(l.value.trim().length===0){l.classList.add("is-invalid"),a=!1;return}if(l.classList.contains("mobileTwilioClass")&&V(l)===!1){a=!1;return}}),a},V=t=>{const e=t,a=window.intlTelInputGlobals.getInstance(e);return a.getNumber(),!!a.isValidNumber()};const p="Show.html",I="CreateWithMobile.html",r={RedirectToUrl:p,PresentUrl:I};let b=({inRowPk:t})=>{let e=t;y({inRowPk:e})===!1&&S({inRowPk:e})};const y=({inRowPk:t})=>{let e=t;return window.location.pathname.endsWith(`/${r.PresentUrl}`)?(window.location.href=`${r.RedirectToUrl}?inRowPk=${e}`,!0):!1},S=({inRowPk:t})=>{let e=t;window.location.href=`${jVarGlobalTableName}${r.RedirectToUrl}?inRowPk=${e}`};let T=async()=>{if(h()){let e=await w();if(e.status===200){let a=await e.text();b({inRowPk:a})}}},$=()=>{let t=document.getElementById("SaveButtonId");t!==null&&t.addEventListener("click",T)},g=()=>{$()};const c=()=>{"AllMastersData"in localStorage&&document.getElementById("HeaderToDataListId").click()},P=()=>{"AllMastersData"in localStorage||(document.getElementById("AllMastersHeaderId").click(),c())},R="bin",U={PostUrl:R};let E=async()=>{let t=U.PostUrl,e=jVarGlobalTableName,a=`/${t}/${e}/BodyCheck`;return await await fetch(a)},k=async()=>{{let t=await E();if(t.status===200)return await await t.json()}},N=({inFetchData:t})=>{const a=document.getElementById("FormId").querySelectorAll("input");console.log(a);for(const l of a)console.log(l),l.name in t&&(l.value=t[l.name])},B=async()=>{let t=await k();N({inFetchData:t})};const D=async()=>{C(),g(),P(),c(),B()},C=()=>{document.getElementById("FormId");var e=[...document.getElementsByClassName("mobileTwilioClass")];e.forEach(a=>{window.intlTelInput(a,{utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"})})},v=()=>{D()};v();