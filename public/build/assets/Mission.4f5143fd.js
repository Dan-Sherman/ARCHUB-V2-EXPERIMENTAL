import{S as J,i as q,s as H,e as _,a as Y,b as B,d as c,f as x,g as m,l as U,w,n as k,o as D,v as S,J as z,K as ue,L as Z,M as ee,c as F,m as G,N as te,k as I,j as fe,t as P,p as Q,h as de}from"./main.10162903.js";import me from"./Layout.72e5cb77.js";import"./InertiaLink.a3651816.js";function ne(t,e,l){const n=t.slice();return n[6]=e[l],n}function le(t,e,l){const n=t.slice();return n[6]=e[l],n}function se(t){let e,l=t[6].name+"",n,i,a,o;function r(){return t[4](t[6])}return{c(){e=_("button"),n=S(l),c(e,"class",i=(t[0].name==t[6].name?"border-b-4 border-b-indigo-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white")+" px-3 py-2 rounded-t-md text-md font-medium")},m(s,f){x(s,e,f),m(e,n),a||(o=U(e,"click",r),a=!0)},p(s,f){t=s,f&2&&l!==(l=t[6].name+"")&&z(n,l),f&3&&i!==(i=(t[0].name==t[6].name?"border-b-4 border-b-indigo-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white")+" px-3 py-2 rounded-t-md text-md font-medium")&&c(e,"class",i)},d(s){s&&k(e),a=!1,o()}}}function ie(t){let e,l=t[6].name+"",n,i,a,o;function r(){return t[5](t[6])}return{c(){e=_("button"),n=S(l),c(e,"class",i=(t[0].name==t[6].name?"border-b-4 border-b-indigo-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white")+" block px-3 py-2 rounded-t-md text-md font-medium w-full text-left")},m(s,f){x(s,e,f),m(e,n),a||(o=U(e,"click",r),a=!0)},p(s,f){t=s,f&2&&l!==(l=t[6].name+"")&&z(n,l),f&3&&i!==(i=(t[0].name==t[6].name?"border-b-4 border-b-indigo-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white")+" block px-3 py-2 rounded-t-md text-md font-medium w-full text-left")&&c(e,"class",i)},d(s){s&&k(e),a=!1,o()}}}function he(t){let e,l,n,i,a,o,r,s,f,g,j,A,K,O,M,y,R,T,N=t[1],b=[];for(let d=0;d<N.length;d+=1)b[d]=se(le(t,N,d));let h=t[1],v=[];for(let d=0;d<h.length;d+=1)v[d]=ie(ne(t,h,d));return{c(){e=_("nav"),l=_("div"),n=_("div"),i=_("div"),a=_("button"),o=Y("svg"),r=Y("path"),f=B(),g=_("div"),j=_("div"),A=_("div");for(let d=0;d<b.length;d+=1)b[d].c();K=B(),O=_("div"),M=_("div");for(let d=0;d<v.length;d+=1)v[d].c();c(r,"stroke-linecap","round"),c(r,"stroke-linejoin","round"),c(r,"d",s=t[2]?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16"),c(o,"class","block h-6 w-6"),c(o,"xmlns","http://www.w3.org/2000/svg"),c(o,"fill","none"),c(o,"viewBox","0 0 24 24"),c(o,"stroke-width","2"),c(o,"stroke","currentColor"),c(o,"aria-hidden","true"),c(a,"type","button"),c(a,"class","inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"),c(a,"aria-controls","mobile-menu"),c(a,"aria-expanded","false"),c(i,"class","absolute inset-y-0 left-0 flex items-center sm:hidden"),c(A,"class","flex space-x-4"),c(j,"class","hidden sm:block sm:ml-6"),c(g,"class","flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"),c(n,"class","relative flex items-center justify-between h-16"),c(l,"class","px-2 sm:px-6 lg:px-8"),c(M,"class",y=(t[2]?"":"hidden")+" px-2 pt-2 pb-3 space-y-1"),c(O,"class","sm:hidden"),c(O,"id","mobile-menu"),c(e,"class","bg-gray-900 rounded-lg")},m(d,C){x(d,e,C),m(e,l),m(l,n),m(n,i),m(i,a),m(a,o),m(o,r),m(n,f),m(n,g),m(g,j),m(j,A);for(let u=0;u<b.length;u+=1)b[u].m(A,null);m(e,K),m(e,O),m(O,M);for(let u=0;u<v.length;u+=1)v[u].m(M,null);R||(T=U(a,"click",t[3]),R=!0)},p(d,[C]){if(C&4&&s!==(s=d[2]?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16")&&c(r,"d",s),C&3){N=d[1];let u;for(u=0;u<N.length;u+=1){const $=le(d,N,u);b[u]?b[u].p($,C):(b[u]=se($),b[u].c(),b[u].m(A,null))}for(;u<b.length;u+=1)b[u].d(1);b.length=N.length}if(C&3){h=d[1];let u;for(u=0;u<h.length;u+=1){const $=ne(d,h,u);v[u]?v[u].p($,C):(v[u]=ie($),v[u].c(),v[u].m(M,null))}for(;u<v.length;u+=1)v[u].d(1);v.length=h.length}C&4&&y!==(y=(d[2]?"":"hidden")+" px-2 pt-2 pb-3 space-y-1")&&c(M,"class",y)},i:w,o:w,d(d){d&&k(e),D(b,d),D(v,d),R=!1,T()}}}function _e(t,e,l){let{navigation:n}=e,{selected:i}=e,a=!1;const o=()=>l(2,a=!a),r=f=>l(0,i=f),s=f=>l(0,i=f);return t.$$set=f=>{"navigation"in f&&l(1,n=f.navigation),"selected"in f&&l(0,i=f.selected)},[i,n,a,o,r,s]}class ge extends J{constructor(e){super(),q(this,e,_e,he,H,{navigation:1,selected:0})}}function oe(t,e,l){const n=t.slice();return n[2]=e[l],n}function ae(t,e,l){const n=t.slice();return n[5]=e[l][0],n[6]=e[l][1],n}function re(t){let e,l=t[5]+"",n,i,a,o=t[6]+"";return{c(){e=_("h5"),n=S(l),i=B(),a=_("p"),c(e,"class","text-gray-200"),c(a,"class","pt-5 text-gray-200")},m(r,s){x(r,e,s),m(e,n),x(r,i,s),x(r,a,s),a.innerHTML=o},p:w,d(r){r&&k(e),r&&k(i),r&&k(a)}}}function ce(t){let e,l=t[2][0]+"",n,i,a,o=Object.entries(t[2][3]),r=[];for(let s=0;s<o.length;s+=1)r[s]=re(ae(t,o,s));return{c(){e=_("h4"),n=S(l),i=B();for(let s=0;s<r.length;s+=1)r[s].c();a=ue(),c(e,"class","text-gray-200")},m(s,f){x(s,e,f),m(e,n),x(s,i,f);for(let g=0;g<r.length;g+=1)r[g].m(s,f);x(s,a,f)},p(s,f){if(f&1){o=Object.entries(s[2][3]);let g;for(g=0;g<o.length;g+=1){const j=ae(s,o,g);r[g]?r[g].p(j,f):(r[g]=re(j),r[g].c(),r[g].m(a.parentNode,a))}for(;g<r.length;g+=1)r[g].d(1);r.length=o.length}},d(s){s&&k(e),s&&k(i),D(r,s),s&&k(a)}}}function pe(t){let e,l=t[0],n=[];for(let i=0;i<l.length;i+=1)n[i]=ce(oe(t,l,i));return{c(){e=_("div");for(let i=0;i<n.length;i+=1)n[i].c()},m(i,a){x(i,e,a);for(let o=0;o<n.length;o+=1)n[o].m(e,null)},p(i,[a]){if(a&1){l=i[0];let o;for(o=0;o<l.length;o+=1){const r=oe(i,l,o);n[o]?n[o].p(r,a):(n[o]=ce(r),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=l.length}},i:w,o:w,d(i){i&&k(e),D(n,i)}}}function ve(t,e,l){let{mission:n}=e,i=JSON.parse(n.briefings);return t.$$set=a=>{"mission"in a&&l(1,n=a.mission)},[i,n]}class be extends J{constructor(e){super(),q(this,e,ve,pe,H,{mission:1})}}function we(t){let e;return{c(){e=_("p"),e.textContent="Orbat"},m(l,n){x(l,e,n)},p:w,i:w,o:w,d(l){l&&k(e)}}}class xe extends J{constructor(e){super(),q(this,e,null,we,H,{})}}function ke(t){let e;return{c(){e=_("p"),e.textContent="AARs"},m(l,n){x(l,e,n)},p:w,i:w,o:w,d(l){l&&k(e)}}}class ye extends J{constructor(e){super(),q(this,e,null,ke,H,{})}}function Me(t){let e;return{c(){e=_("p"),e.textContent="Notes"},m(l,n){x(l,e,n)},p:w,i:w,o:w,d(l){l&&k(e)}}}class $e extends J{constructor(e){super(),q(this,e,null,Me,H,{})}}function je(t){let e;return{c(){e=_("p"),e.textContent="Media"},m(l,n){x(l,e,n)},p:w,i:w,o:w,d(l){l&&k(e)}}}class Ae extends J{constructor(e){super(),q(this,e,null,je,H,{})}}function Ce(t){let e,l,n=t[0].display_name+"",i,a,o,r,s=t[0].user.username+"",f,g,j,A=t[0].summary+"",K,O,M,y,R,T,N,b,h,v;function d(p){t[3](p)}function C(p){t[4](p)}let u={};t[1]!==void 0&&(u.navigation=t[1]),t[2]!==void 0&&(u.selected=t[2]),y=new ge({props:u}),Z.push(()=>ee(y,"navigation",d)),Z.push(()=>ee(y,"selected",C));var $=t[2].component;function V(p){return{props:{mission:p[0]}}}return $&&(h=new $(V(t))),{c(){e=_("div"),l=_("h5"),i=S(n),a=B(),o=_("p"),r=S("By "),f=S(s),g=B(),j=_("p"),K=S(A),O=B(),M=_("div"),F(y.$$.fragment),N=B(),b=_("div"),h&&F(h.$$.fragment),c(l,"class","truncate text-center text-3xl font-bold text-white tracking-tight"),c(o,"class","truncate text-center text-sm font-bold text-gray-300"),c(j,"class","pt-2 truncate text-center text-sm font-normal text-gray-300"),c(b,"class","mt-5"),c(M,"class","pt-5"),c(e,"class","min-h-screen-no-nav lg:w-4/5 mx-auto p-3 shadow-md border border-gray-700 bg-gray-800")},m(p,L){x(p,e,L),m(e,l),m(l,i),m(e,a),m(e,o),m(o,r),m(o,f),m(e,g),m(e,j),m(j,K),m(e,O),m(e,M),G(y,M,null),m(M,N),m(M,b),h&&G(h,b,null),v=!0},p(p,[L]){(!v||L&1)&&n!==(n=p[0].display_name+"")&&z(i,n),(!v||L&1)&&s!==(s=p[0].user.username+"")&&z(f,s),(!v||L&1)&&A!==(A=p[0].summary+"")&&z(K,A);const E={};!R&&L&2&&(R=!0,E.navigation=p[1],te(()=>R=!1)),!T&&L&4&&(T=!0,E.selected=p[2],te(()=>T=!1)),y.$set(E);const W={};if(L&1&&(W.mission=p[0]),$!==($=p[2].component)){if(h){de();const X=h;I(X.$$.fragment,1,0,()=>{Q(X,1)}),fe()}$?(h=new $(V(p)),F(h.$$.fragment),P(h.$$.fragment,1),G(h,b,null)):h=null}else $&&h.$set(W)},i(p){v||(P(y.$$.fragment,p),h&&P(h.$$.fragment,p),v=!0)},o(p){I(y.$$.fragment,p),h&&I(h.$$.fragment,p),v=!1},d(p){p&&k(e),Q(y),h&&Q(h)}}}const Se=me;function Ne(t,e,l){let{mission:n}=e,i=[{name:"Briefing",component:be},{name:"Orbat",component:xe},{name:"AARs",component:ye},{name:"Notes",component:$e},{name:"Media",component:Ae}],a=i[0];function o(s){i=s,l(1,i)}function r(s){a=s,l(2,a)}return t.$$set=s=>{"mission"in s&&l(0,n=s.mission)},[n,i,a,o,r]}class Re extends J{constructor(e){super(),q(this,e,Ne,Ce,H,{mission:0})}}export{Re as default,Se as layout};
