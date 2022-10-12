import{I as l,a8 as b,af as E}from"./main.03382215.js";function y(...i){const o=typeof i[0]=="string"?i[0]:null,a=(typeof i[0]=="string"?i[1]:i[0])||{},u=o?l.Inertia.restore(o):null;let n=a,c=null,f=null,S=e=>e;const h=b({...u?u.data:a,isDirty:!1,errors:u?u.errors:{},hasErrors:!1,progress:null,wasSuccessful:!1,recentlySuccessful:!1,processing:!1,setStore(e,s){h.update(r=>Object.assign({},r,typeof e=="string"?{[e]:s}:e))},data(){return Object.keys(a).reduce((e,s)=>(e[s]=this[s],e),{})},transform(e){return S=e,this},defaults(e,s){return typeof e>"u"?(n=Object.assign(n,this.data()),this):(n=Object.assign(n,s?{[e]:s}:e),this)},reset(...e){return e.length===0?this.setStore(n):this.setStore(Object.keys(n).filter(s=>e.includes(s)).reduce((s,r)=>(s[r]=n[r],s),{})),this},setError(e,s){return this.setStore("errors",{...this.errors,...s?{[e]:s}:e}),this},clearErrors(...e){return this.setStore("errors",Object.keys(this.errors).reduce((s,r)=>({...s,...e.length>0&&!e.includes(r)?{[r]:this.errors[r]}:{}}),{})),this},submit(e,s,r={}){const g=S(this.data()),d={...r,onCancelToken:t=>{if(c=t,r.onCancelToken)return r.onCancelToken(t)},onBefore:t=>{if(this.setStore("wasSuccessful",!1),this.setStore("recentlySuccessful",!1),clearTimeout(f),r.onBefore)return r.onBefore(t)},onStart:t=>{if(this.setStore("processing",!0),r.onStart)return r.onStart(t)},onProgress:t=>{if(this.setStore("progress",t),r.onProgress)return r.onProgress(t)},onSuccess:async t=>{if(this.setStore("processing",!1),this.setStore("progress",null),this.clearErrors(),this.setStore("wasSuccessful",!0),this.setStore("recentlySuccessful",!0),f=setTimeout(()=>this.setStore("recentlySuccessful",!1),2e3),r.onSuccess)return r.onSuccess(t)},onError:t=>{if(this.setStore("processing",!1),this.setStore("progress",null),this.clearErrors().setError(t),r.onError)return r.onError(t)},onCancel:()=>{if(this.setStore("processing",!1),this.setStore("progress",null),r.onCancel)return r.onCancel()},onFinish:()=>{if(this.setStore("processing",!1),this.setStore("progress",null),c=null,r.onFinish)return r.onFinish()}};e==="delete"?l.Inertia.delete(s,{...d,data:g}):l.Inertia[e](s,g,d)},get(e,s){this.submit("get",e,s)},post(e,s){this.submit("post",e,s)},put(e,s){this.submit("put",e,s)},patch(e,s){this.submit("patch",e,s)},delete(e,s){this.submit("delete",e,s)},cancel(){c&&c.cancel()}});return h.subscribe(e=>{e.isDirty===E(e.data(),n)&&e.setStore("isDirty",!e.isDirty);const s=Object.keys(e.errors).length>0;e.hasErrors!==s&&e.setStore("hasErrors",!e.hasErrors),o&&l.Inertia.remember({data:e.data(),errors:e.errors},o)}),h}export{y as u};
