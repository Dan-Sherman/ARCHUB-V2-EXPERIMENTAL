import{S as j,i as q,s as I,c as k,m as y,t as _,a as h,d as x,e as p,f as b,H as v,C as g,J as S,h as m,D as w,K as C,j as d,E as B,F as D,G as E}from"./main.d4bf3f4a.js";import{I as F,L as G}from"./Layout.8fe0ba6a.js";function J(i){let t,n,e,r,o=i[0].display_name+"",l,$,s,c=i[0].summary+"",a;return{c(){t=p("img"),e=b(),r=p("h5"),l=v(o),$=b(),s=p("p"),a=v(c),g(t,"class","rounded-t-lg h-52"),S(t.src,n="/images/arcomm-placeholder.jpg")||g(t,"src",n),g(t,"alt",""),g(r,"class","truncate mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"),g(s,"class","truncate font-normal text-gray-700 dark:text-gray-400")},m(u,f){m(u,t,f),m(u,e,f),m(u,r,f),w(r,l),m(u,$,f),m(u,s,f),w(s,a)},p(u,f){f&1&&o!==(o=u[0].display_name+"")&&C(l,o),f&1&&c!==(c=u[0].summary+"")&&C(a,c)},d(u){u&&d(t),u&&d(e),u&&d(r),u&&d($),u&&d(s)}}}function K(i){let t,n;return t=new F({props:{href:"/hub",id:"mission-card",class:"block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",$$slots:{default:[J]},$$scope:{ctx:i}}}),{c(){k(t.$$.fragment)},m(e,r){y(t,e,r),n=!0},p(e,[r]){const o={};r&3&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){n||(_(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){x(t,e)}}}function z(i,t,n){let{mission:e}=t;return i.$$set=r=>{"mission"in r&&n(0,e=r.mission)},[e]}class A extends j{constructor(t){super(),q(this,t,z,K,I,{mission:0})}}function H(i,t,n){const e=i.slice();return e[1]=t[n],e}function L(i){let t,n;return t=new A({props:{mission:i[1]}}),{c(){k(t.$$.fragment)},m(e,r){y(t,e,r),n=!0},p(e,r){const o={};r&1&&(o.mission=e[1]),t.$set(o)},i(e){n||(_(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){x(t,e)}}}function M(i){let t,n,e,r,o=i[0],l=[];for(let s=0;s<o.length;s+=1)l[s]=L(H(i,o,s));const $=s=>h(l[s],1,1,()=>{l[s]=null});return{c(){t=p("h1"),t.textContent="Hub",n=b(),e=p("div");for(let s=0;s<l.length;s+=1)l[s].c();g(e,"class","grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3")},m(s,c){m(s,t,c),m(s,n,c),m(s,e,c);for(let a=0;a<l.length;a+=1)l[a].m(e,null);r=!0},p(s,c){if(c&1){o=s[0];let a;for(a=0;a<o.length;a+=1){const u=H(s,o,a);l[a]?(l[a].p(u,c),_(l[a],1)):(l[a]=L(u),l[a].c(),_(l[a],1),l[a].m(e,null))}for(B(),a=o.length;a<l.length;a+=1)$(a);D()}},i(s){if(!r){for(let c=0;c<o.length;c+=1)_(l[c]);r=!0}},o(s){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)h(l[c]);r=!1},d(s){s&&d(t),s&&d(n),s&&d(e),E(l,s)}}}function N(i){let t,n;return t=new G({props:{$$slots:{default:[M]},$$scope:{ctx:i}}}),{c(){k(t.$$.fragment)},m(e,r){y(t,e,r),n=!0},p(e,[r]){const o={};r&17&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){n||(_(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){x(t,e)}}}function O(i,t,n){let{missions:e}=t;return i.$$set=r=>{"missions"in r&&n(0,e=r.missions)},[e]}class R extends j{constructor(t){super(),q(this,t,O,N,I,{missions:0})}}export{R as default};
