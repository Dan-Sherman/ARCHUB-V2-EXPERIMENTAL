import{S as P,i as Q,s as z,e as p,a as X,b as B,d as r,f as N,g as f,l as K,w as F,n as q,o as U,J as se,v as J,K as W,L as Y,M as Z,c as D,m as G,N as ee,t as O,k as R,p as I,u as ce,O as te,P as $e,h as ie,j as oe,Q as Me,q as je}from"./main.ff4b4c30.js";import qe from"./Layout.289e9dda.js";import{u as Ae}from"./useForm.1142f2ee.js";import"./InertiaLink.2964c486.js";function fe(l,e,t){const n=l.slice();return n[6]=e[t],n}function me(l,e,t){const n=l.slice();return n[6]=e[t],n}function de(l){let e,t=l[6].name+"",n,s,i,o;function d(){return l[4](l[6])}return{c(){e=p("button"),n=J(t),r(e,"class",s=(l[0].name==l[6].name?"border-b-4 border-b-indigo-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white")+" px-3 py-2 rounded-t-md text-md font-medium")},m(a,m){N(a,e,m),f(e,n),i||(o=K(e,"click",d),i=!0)},p(a,m){l=a,m&2&&t!==(t=l[6].name+"")&&W(n,t),m&3&&s!==(s=(l[0].name==l[6].name?"border-b-4 border-b-indigo-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white")+" px-3 py-2 rounded-t-md text-md font-medium")&&r(e,"class",s)},d(a){a&&q(e),i=!1,o()}}}function ge(l){let e,t=l[6].show&&de(l);return{c(){t&&t.c(),e=se()},m(n,s){t&&t.m(n,s),N(n,e,s)},p(n,s){n[6].show?t?t.p(n,s):(t=de(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(n){t&&t.d(n),n&&q(e)}}}function he(l){let e,t=l[6].name+"",n,s,i,o;function d(){return l[5](l[6])}return{c(){e=p("button"),n=J(t),r(e,"class",s=(l[0].name==l[6].name?"border-b-4 border-b-indigo-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white")+" block px-3 py-2 rounded-t-md text-md font-medium w-full text-left")},m(a,m){N(a,e,m),f(e,n),i||(o=K(e,"click",d),i=!0)},p(a,m){l=a,m&2&&t!==(t=l[6].name+"")&&W(n,t),m&3&&s!==(s=(l[0].name==l[6].name?"border-b-4 border-b-indigo-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white")+" block px-3 py-2 rounded-t-md text-md font-medium w-full text-left")&&r(e,"class",s)},d(a){a&&q(e),i=!1,o()}}}function Ce(l){let e,t,n,s,i,o,d,a,m,y,v,h,k,$,b,u,A,c,_=l[1],g=[];for(let x=0;x<_.length;x+=1)g[x]=ge(me(l,_,x));let L=l[1],j=[];for(let x=0;x<L.length;x+=1)j[x]=he(fe(l,L,x));return{c(){e=p("nav"),t=p("div"),n=p("div"),s=p("div"),i=p("button"),o=X("svg"),d=X("path"),m=B(),y=p("div"),v=p("div"),h=p("div");for(let x=0;x<g.length;x+=1)g[x].c();k=B(),$=p("div"),b=p("div");for(let x=0;x<j.length;x+=1)j[x].c();r(d,"stroke-linecap","round"),r(d,"stroke-linejoin","round"),r(d,"d",a=l[2]?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16"),r(o,"class","block h-6 w-6"),r(o,"xmlns","http://www.w3.org/2000/svg"),r(o,"fill","none"),r(o,"viewBox","0 0 24 24"),r(o,"stroke-width","2"),r(o,"stroke","currentColor"),r(o,"aria-hidden","true"),r(i,"type","button"),r(i,"class","inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"),r(i,"aria-controls","mobile-menu"),r(i,"aria-expanded","false"),r(s,"class","absolute inset-y-0 left-0 flex items-center sm:hidden"),r(h,"class","flex space-x-4"),r(v,"class","hidden sm:block sm:ml-6"),r(y,"class","flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"),r(n,"class","relative flex items-center justify-between h-16"),r(t,"class","px-2 sm:px-6 lg:px-8"),r(b,"class",u=(l[2]?"":"hidden")+" px-2 pt-2 pb-3 space-y-1"),r($,"class","sm:hidden"),r($,"id","mobile-menu"),r(e,"class","bg-gray-900 rounded-lg")},m(x,C){N(x,e,C),f(e,t),f(t,n),f(n,s),f(s,i),f(i,o),f(o,d),f(n,m),f(n,y),f(y,v),f(v,h);for(let w=0;w<g.length;w+=1)g[w].m(h,null);f(e,k),f(e,$),f($,b);for(let w=0;w<j.length;w+=1)j[w].m(b,null);A||(c=K(i,"click",l[3]),A=!0)},p(x,[C]){if(C&4&&a!==(a=x[2]?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16")&&r(d,"d",a),C&3){_=x[1];let w;for(w=0;w<_.length;w+=1){const H=me(x,_,w);g[w]?g[w].p(H,C):(g[w]=ge(H),g[w].c(),g[w].m(h,null))}for(;w<g.length;w+=1)g[w].d(1);g.length=_.length}if(C&3){L=x[1];let w;for(w=0;w<L.length;w+=1){const H=fe(x,L,w);j[w]?j[w].p(H,C):(j[w]=he(H),j[w].c(),j[w].m(b,null))}for(;w<j.length;w+=1)j[w].d(1);j.length=L.length}C&4&&u!==(u=(x[2]?"":"hidden")+" px-2 pt-2 pb-3 space-y-1")&&r(b,"class",u)},i:F,o:F,d(x){x&&q(e),U(g,x),U(j,x),A=!1,c()}}}function Oe(l,e,t){let{navigation:n}=e,{selected:s}=e,i=!1;const o=()=>t(2,i=!i),d=m=>t(0,s=m),a=m=>t(0,s=m);return l.$$set=m=>{"navigation"in m&&t(1,n=m.navigation),"selected"in m&&t(0,s=m.selected)},[s,n,i,o,d,a]}class Le extends P{constructor(e){super(),Q(this,e,Oe,Ce,z,{navigation:1,selected:0})}}function _e(l,e,t){const n=l.slice();return n[6]=e[t],n}function pe(l,e,t){const n=l.slice();return n[9]=e[t][0],n[10]=e[t][1],n}function be(l){let e,t,n=l[9]+"",s,i,o,d=l[10]+"";return{c(){e=p("div"),t=p("h5"),s=J(n),i=B(),o=p("p"),r(t,"class","pt-8 text-center text-gray-200 text-3xl text-bold tracking-wide"),r(o,"class","text-gray-200")},m(a,m){N(a,e,m),f(e,t),f(t,s),f(e,i),f(e,o),o.innerHTML=d},p(a,m){m&1&&n!==(n=a[9]+"")&&W(s,n),m&1&&d!==(d=a[10]+"")&&(o.innerHTML=d)},d(a){a&&q(e)}}}function ve(l){let e,t,n,s=Object.entries(l[6].content[3]),i=[];for(let o=0;o<s.length;o+=1)i[o]=be(pe(l,s,o));return{c(){e=p("div");for(let o=0;o<i.length;o+=1)i[o].c();t=B(),r(e,"class",n=l[1]==l[6]?"hidden":"")},m(o,d){N(o,e,d);for(let a=0;a<i.length;a+=1)i[a].m(e,null);f(e,t)},p(o,d){if(d&1){s=Object.entries(o[6].content[3]);let a;for(a=0;a<s.length;a+=1){const m=pe(o,s,a);i[a]?i[a].p(m,d):(i[a]=be(m),i[a].c(),i[a].m(e,t))}for(;a<i.length;a+=1)i[a].d(1);i.length=s.length}d&3&&n!==(n=o[1]==o[6]?"hidden":"")&&r(e,"class",n)},d(o){o&&q(e),U(i,o)}}}function He(l){let e,t,n,s,i,o;function d(h){l[3](h)}function a(h){l[4](h)}let m={};l[0]!==void 0&&(m.navigation=l[0]),l[1]!==void 0&&(m.selected=l[1]),t=new Le({props:m}),Y.push(()=>Z(t,"navigation",d)),Y.push(()=>Z(t,"selected",a));let y=l[0],v=[];for(let h=0;h<y.length;h+=1)v[h]=ve(_e(l,y,h));return{c(){e=p("div"),D(t.$$.fragment),i=B();for(let h=0;h<v.length;h+=1)v[h].c()},m(h,k){N(h,e,k),G(t,e,null),f(e,i);for(let $=0;$<v.length;$+=1)v[$].m(e,null);o=!0},p(h,[k]){const $={};if(!n&&k&1&&(n=!0,$.navigation=h[0],ee(()=>n=!1)),!s&&k&2&&(s=!0,$.selected=h[1],ee(()=>s=!1)),t.$set($),k&3){y=h[0];let b;for(b=0;b<y.length;b+=1){const u=_e(h,y,b);v[b]?v[b].p(u,k):(v[b]=ve(u),v[b].c(),v[b].m(e,null))}for(;b<v.length;b+=1)v[b].d(1);v.length=y.length}},i(h){o||(O(t.$$.fragment,h),o=!0)},o(h){R(t.$$.fragment,h),o=!1},d(h){h&&q(e),I(t),U(v,h)}}}function Je(l,e,t){let{mission:n}=e,s=JSON.parse(n.briefings),i=[];s.forEach(function(m){i.push({name:m[0],content:m,show:!0})});let o=i[0];function d(m){i=m,t(0,i)}function a(m){o=m,t(1,o)}return l.$$set=m=>{"mission"in m&&t(2,n=m.mission)},[i,o,n,d,a]}class Re extends P{constructor(e){super(),Q(this,e,Je,He,z,{mission:2})}}function Te(l){let e,t,n,s,i,o,d,a=l[0].user.username+"",m,y,v,h=l[0].text+"",k,$,b;return{c(){e=p("div"),t=p("img"),s=B(),i=p("div"),o=p("div"),d=p("div"),m=J(a),y=B(),v=p("div"),k=J(h),$=B(),b=p("div"),b.textContent="14 w",r(t,"class","rounded-full h-8 w-8 mr-2 mt-1"),ce(t.src,n=l[0].user.avatar)||r(t,"src",n),r(t,"alt",""),r(d,"class","font-semibold text-sm leading-relaxed"),r(v,"class","text-normal leading-snug md:leading-normal"),r(o,"class","bg-gray-700 rounded-3xl px-4 py-2"),r(b,"class","text-sm ml-4 mt-0.5 text-gray-400"),r(e,"class","text-gray-200 py-4 flex")},m(u,A){N(u,e,A),f(e,t),f(e,s),f(e,i),f(i,o),f(o,d),f(d,m),f(o,y),f(o,v),f(v,k),f(i,$),f(i,b)},p(u,[A]){A&1&&!ce(t.src,n=u[0].user.avatar)&&r(t,"src",n),A&1&&a!==(a=u[0].user.username+"")&&W(m,a),A&1&&h!==(h=u[0].text+"")&&W(k,h)},i:F,o:F,d(u){u&&q(e)}}}function Ve(l,e,t){let{comment:n}=e;return l.$$set=s=>{"comment"in s&&t(0,n=s.comment)},[n]}class Se extends P{constructor(e){super(),Q(this,e,Ve,Te,z,{comment:0})}}function we(l,e,t){const n=l.slice();return n[5]=e[t],n}function xe(l){let e,t;return e=new Se({props:{comment:l[5]}}),{c(){D(e.$$.fragment)},m(n,s){G(e,n,s),t=!0},p(n,s){const i={};s&1&&(i.comment=n[5]),e.$set(i)},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){R(e.$$.fragment,n),t=!1},d(n){I(e,n)}}}function We(l){let e,t,n,s,i,o,d,a,m,y,v,h,k,$,b=l[0].comments.reverse(),u=[];for(let c=0;c<b.length;c+=1)u[c]=xe(we(l,b,c));const A=c=>R(u[c],1,1,()=>{u[c]=null});return{c(){e=p("form"),t=p("div"),n=p("div"),s=p("textarea"),i=B(),o=p("div"),d=p("button"),a=J("Submit"),y=B();for(let c=0;c<u.length;c+=1)u[c].c();v=se(),r(s,"rows","4"),r(s,"class","px-0 w-full text-sm text-white border-0 bg-gray-800 focus:ring-0 placeholder-gray-400"),r(s,"placeholder","Write a comment..."),s.required=!0,r(n,"class","py-2 px-4 rounded-t-lg bg-gray-800"),r(d,"type","submit"),d.disabled=m=l[1].processing,r(d,"class","inline-flex items-center py-2.5 px-4 text-xs text-white font-medium rounded-lg bg-blue-700 hover:bg-blue-800"),r(o,"class","flex justify-between items-center py-2 px-3 border-t border-gray-600"),r(t,"class","mb-4 w-full rounded-lg bg-gray-700 border border-gray-600")},m(c,_){N(c,e,_),f(e,t),f(t,n),f(n,s),te(s,l[1].text),f(t,i),f(t,o),f(o,d),f(d,a),N(c,y,_);for(let g=0;g<u.length;g+=1)u[g].m(c,_);N(c,v,_),h=!0,k||($=[K(s,"input",l[4]),K(e,"submit",$e(l[3]))],k=!0)},p(c,[_]){if(_&2&&te(s,c[1].text),(!h||_&2&&m!==(m=c[1].processing))&&(d.disabled=m),_&1){b=c[0].comments.reverse();let g;for(g=0;g<b.length;g+=1){const L=we(c,b,g);u[g]?(u[g].p(L,_),O(u[g],1)):(u[g]=xe(L),u[g].c(),O(u[g],1),u[g].m(v.parentNode,v))}for(ie(),g=b.length;g<u.length;g+=1)A(g);oe()}},i(c){if(!h){for(let _=0;_<b.length;_+=1)O(u[_]);h=!0}},o(c){u=u.filter(Boolean);for(let _=0;_<u.length;_+=1)R(u[_]);h=!1},d(c){c&&q(e),c&&q(y),U(u,c),c&&q(v),k=!1,Me($)}}}function Ee(l,e,t){let n,{mission:s}=e,i=Ae({text:null});je(l,i,a=>t(1,n=a));function o(){n.post(`/hub/missions/${s.id}/comments`,{onSuccess:()=>n.reset()})}function d(){n.text=this.value,i.set(n)}return l.$$set=a=>{"mission"in a&&t(0,s=a.mission)},[s,n,i,o,d]}class Fe extends P{constructor(e){super(),Q(this,e,Ee,We,z,{mission:0})}}function ye(l,e,t){const n=l.slice();return n[5]=e[t],n}function ke(l){let e,t;return e=new Se({props:{comment:l[5]}}),{c(){D(e.$$.fragment)},m(n,s){G(e,n,s),t=!0},p(n,s){const i={};s&1&&(i.comment=n[5]),e.$set(i)},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){R(e.$$.fragment,n),t=!1},d(n){I(e,n)}}}function Ke(l){let e,t,n,s,i,o,d,a,m,y,v,h,k,$,b=l[0].notes.reverse(),u=[];for(let c=0;c<b.length;c+=1)u[c]=ke(ye(l,b,c));const A=c=>R(u[c],1,1,()=>{u[c]=null});return{c(){e=p("form"),t=p("div"),n=p("div"),s=p("textarea"),i=B(),o=p("div"),d=p("button"),a=J("Submit"),y=B();for(let c=0;c<u.length;c+=1)u[c].c();v=se(),r(s,"rows","4"),r(s,"class","px-0 w-full text-sm text-white border-0 bg-gray-800 focus:ring-0 placeholder-gray-400"),r(s,"placeholder","Write a comment..."),s.required=!0,r(n,"class","py-2 px-4 rounded-t-lg bg-gray-800"),r(d,"type","submit"),d.disabled=m=l[1].processing,r(d,"class","inline-flex items-center py-2.5 px-4 text-xs text-white font-medium rounded-lg bg-blue-700 hover:bg-blue-800"),r(o,"class","flex justify-between items-center py-2 px-3 border-t border-gray-600"),r(t,"class","mb-4 w-full rounded-lg bg-gray-700 border border-gray-600")},m(c,_){N(c,e,_),f(e,t),f(t,n),f(n,s),te(s,l[1].text),f(t,i),f(t,o),f(o,d),f(d,a),N(c,y,_);for(let g=0;g<u.length;g+=1)u[g].m(c,_);N(c,v,_),h=!0,k||($=[K(s,"input",l[4]),K(e,"submit",$e(l[3]))],k=!0)},p(c,[_]){if(_&2&&te(s,c[1].text),(!h||_&2&&m!==(m=c[1].processing))&&(d.disabled=m),_&1){b=c[0].notes.reverse();let g;for(g=0;g<b.length;g+=1){const L=ye(c,b,g);u[g]?(u[g].p(L,_),O(u[g],1)):(u[g]=ke(L),u[g].c(),O(u[g],1),u[g].m(v.parentNode,v))}for(ie(),g=b.length;g<u.length;g+=1)A(g);oe()}},i(c){if(!h){for(let _=0;_<b.length;_+=1)O(u[_]);h=!0}},o(c){u=u.filter(Boolean);for(let _=0;_<u.length;_+=1)R(u[_]);h=!1},d(c){c&&q(e),c&&q(y),U(u,c),c&&q(v),k=!1,Me($)}}}function Pe(l,e,t){let n,{mission:s}=e,i=Ae({text:null});je(l,i,a=>t(1,n=a));function o(){n.post(`/hub/missions/${s.id}/notes`,{onSuccess:()=>n.reset()})}function d(){n.text=this.value,i.set(n)}return l.$$set=a=>{"mission"in a&&t(0,s=a.mission)},[s,n,i,o,d]}class Qe extends P{constructor(e){super(),Q(this,e,Pe,Ke,z,{mission:0})}}function ze(l){let e;return{c(){e=p("p"),e.textContent="Media"},m(t,n){N(t,e,n)},p:F,i:F,o:F,d(t){t&&q(e)}}}class De extends P{constructor(e){super(),Q(this,e,null,ze,z,{})}}function Ge(l){let e,t,n,s=l[0].display_name+"",i,o,d,a,m=l[0].user.username+"",y,v,h,k=l[0].summary+"",$,b,u,A,c,_,g,L,j,x,C,w,H,S,V;function Be(M){l[3](M)}function Ne(M){l[4](M)}let ne={};l[1]!==void 0&&(ne.navigation=l[1]),l[2]!==void 0&&(ne.selected=l[2]),j=new Le({props:ne}),Y.push(()=>Z(j,"navigation",Be)),Y.push(()=>Z(j,"selected",Ne));var E=l[2].component;function re(M){return{props:{mission:M[0]}}}return E&&(S=new E(re(l))),{c(){e=p("div"),t=p("div"),n=p("h5"),i=J(s),o=B(),d=p("p"),a=J("By "),y=J(m),v=B(),h=p("p"),$=J(k),b=B(),u=p("a"),A=X("svg"),c=X("path"),g=B(),L=p("div"),D(j.$$.fragment),w=B(),H=p("div"),S&&D(S.$$.fragment),r(n,"class","truncate text-center text-3xl font-bold text-white tracking-tight"),r(d,"class","truncate text-center text-sm font-bold text-gray-300"),r(h,"class","pt-2 truncate text-center text-sm font-normal text-gray-300"),r(t,"class","pb-2"),r(c,"stroke-linecap","round"),r(c,"stroke-linejoin","round"),r(c,"d","M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"),r(A,"xmlns","http://www.w3.org/2000/svg"),r(A,"fill","none"),r(A,"viewBox","0 0 24 24"),r(A,"stroke-width","1.5"),r(A,"stroke","white"),r(A,"class","w-6 h-6"),r(u,"class","inline-flex"),r(u,"href",_="/hub/missions/"+l[0].id+"/download"),r(H,"class","my-5 mx-20"),r(L,"class","pt-1"),r(e,"class","min-h-screen-no-nav lg:w-4/5 mx-auto p-3 shadow-md border border-gray-700 bg-gray-800")},m(M,T){N(M,e,T),f(e,t),f(t,n),f(n,i),f(t,o),f(t,d),f(d,a),f(d,y),f(t,v),f(t,h),f(h,$),f(e,b),f(e,u),f(u,A),f(A,c),f(e,g),f(e,L),G(j,L,null),f(L,w),f(L,H),S&&G(S,H,null),V=!0},p(M,[T]){(!V||T&1)&&s!==(s=M[0].display_name+"")&&W(i,s),(!V||T&1)&&m!==(m=M[0].user.username+"")&&W(y,m),(!V||T&1)&&k!==(k=M[0].summary+"")&&W($,k),(!V||T&1&&_!==(_="/hub/missions/"+M[0].id+"/download"))&&r(u,"href",_);const le={};!x&&T&2&&(x=!0,le.navigation=M[1],ee(()=>x=!1)),!C&&T&4&&(C=!0,le.selected=M[2],ee(()=>C=!1)),j.$set(le);const ae={};if(T&1&&(ae.mission=M[0]),E!==(E=M[2].component)){if(S){ie();const ue=S;R(ue.$$.fragment,1,0,()=>{I(ue,1)}),oe()}E?(S=new E(re(M)),D(S.$$.fragment),O(S.$$.fragment,1),G(S,H,null)):S=null}else E&&S.$set(ae)},i(M){V||(O(j.$$.fragment,M),S&&O(S.$$.fragment,M),V=!0)},o(M){R(j.$$.fragment,M),S&&R(S.$$.fragment,M),V=!1},d(M){M&&q(e),I(j),S&&I(S)}}}const et=qe;function Ie(l,e,t){let{mission:n}=e,s=[{name:"Briefing",component:Re,show:!0},{name:"AARs",component:Fe,show:Array.isArray(n.comments)},{name:"Notes",component:Qe,show:Array.isArray(n.notes)},{name:"Media",component:De,show:!0}],i=s[0];function o(a){s=a,t(1,s)}function d(a){i=a,t(2,i)}return l.$$set=a=>{"mission"in a&&t(0,n=a.mission)},[n,s,i,o,d]}class tt extends P{constructor(e){super(),Q(this,e,Ie,Ge,z,{mission:0})}}export{tt as default,et as layout};
