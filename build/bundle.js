var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode&&t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function a(){return t=" ",document.createTextNode(t);var t}function f(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e,n){t.classList[n?"add":"remove"](e)}let h;function p(t){h=t}const $=[],m=[];let v=[];const b=[],x=Promise.resolve();let y=!1;function _(t){v.push(t)}const k=new Set;let E=0;function w(){if(0!==E)return;const t=h;do{try{for(;E<$.length;){const t=$[E];E++,p(t),C(t.$$)}}catch(t){throw $.length=0,E=0,t}for(p(null),$.length=0,E=0;m.length;)m.pop()();for(let t=0;t<v.length;t+=1){const e=v[t];k.has(e)||(k.add(e),e())}v.length=0}while($.length);for(;b.length;)b.pop()();y=!1,k.clear(),p(t)}function C(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const L=new Set;let A;function N(t,e){t&&t.i&&(L.delete(t),t.i(e))}function O(t,n,c,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(n,c),i||_((()=>{const n=t.$$.on_mount.map(e).filter(o);t.$$.on_destroy?t.$$.on_destroy.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(_)}function j(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];v.forEach((r=>-1===t.indexOf(r)?e.push(r):n.push(r))),n.forEach((t=>t())),v=e}(n.after_update),r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function H(t,e){-1===t.$$.dirty[0]&&($.push(t),y||(y=!0,x.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(e,o,c,i,s,u,a,f=[-1]){const d=h;p(e);const g=e.$$={fragment:null,ctx:[],props:u,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:o.target||d.$$.root};a&&a(g.root);let $=!1;if(g.ctx=c?c(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return g.ctx&&s(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),$&&H(e,t)),n})):[],g.update(),$=!0,r(g.before_update),g.fragment=!!i&&i(g.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);g.fragment&&g.fragment.l(t),t.forEach(l)}else g.fragment&&g.fragment.c();o.intro&&N(e.$$.fragment),O(e,o.target,o.anchor,o.customElement),w()}p(d)}class S{$destroy(){j(this,1),this.$destroy=t}$on(e,n){if(!o(n))return t;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const t=r.indexOf(n);-1!==t&&r.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function T(e){let n,o,c,h,p,$,m,v,b,x,y,_,k,E,w,C,L,A,N,O,j,H,M,S;return{c(){n=u("div"),o=u("a"),o.innerHTML="<h1>Logo</h1>",c=a(),h=u("nav"),p=u("ul"),$=u("li"),m=u("a"),m.textContent="Home",v=a(),b=u("li"),x=u("a"),x.textContent="Features",y=a(),_=u("li"),k=u("a"),k.textContent="Pricing",E=a(),w=u("li"),C=u("a"),C.textContent="Blog",L=a(),A=u("li"),N=u("a"),N.textContent="Sign In",O=a(),j=u("div"),H=u("button"),H.innerHTML='<div class="bar-1 svelte-176ig87"></div> \n        <div class="bar-2 svelte-176ig87"></div> \n        <div class="bar-3 svelte-176ig87"></div>',d(o,"href","/"),d(o,"class","logo svelte-176ig87"),d(m,"href","/"),d(m,"class","svelte-176ig87"),g(m,"current",0===e[1]),d(x,"href","/"),d(x,"class","svelte-176ig87"),g(x,"current",1===e[1]),d(k,"href","/"),d(k,"class","svelte-176ig87"),g(k,"current",2===e[1]),d(C,"href","/"),d(C,"class","svelte-176ig87"),g(C,"current",3===e[1]),d(N,"href","/"),d(A,"class","sign-in-btn svelte-176ig87"),d(p,"class","svelte-176ig87"),d(h,"class","svelte-176ig87"),g(h,"open",e[0]),d(H,"class","burger svelte-176ig87"),d(n,"class","navbar svelte-176ig87")},m(t,r){s(t,n,r),i(n,o),i(n,c),i(n,h),i(h,p),i(p,$),i($,m),i(p,v),i(p,b),i(b,x),i(p,y),i(p,_),i(_,k),i(p,E),i(p,w),i(w,C),i(p,L),i(p,A),i(A,N),i(n,O),i(n,j),i(j,H),M||(S=[f(m,"click",e[3]),f($,"click",e[4]),f(x,"click",e[5]),f(b,"click",e[6]),f(k,"click",e[7]),f(_,"click",e[8]),f(C,"click",e[9]),f(w,"click",e[10]),f(N,"click",e[11]),f(A,"click",e[12]),f(H,"click",e[2])],M=!0)},p(t,[e]){2&e&&g(m,"current",0===t[1]),2&e&&g(x,"current",1===t[1]),2&e&&g(k,"current",2===t[1]),2&e&&g(C,"current",3===t[1]),1&e&&g(h,"open",t[0])},i:t,o:t,d(t){t&&l(n),M=!1,r(S)}}}function B(t,e,n){let r=!0;let o=0;return[r,o,function(){n(0,r=!r)},()=>n(1,o=0),()=>n(0,r=!1),()=>n(1,o=1),()=>n(0,r=!1),()=>n(1,o=2),()=>n(0,r=!1),()=>n(1,o=3),()=>n(0,r=!1),()=>n(1,o=4),()=>n(0,r=!1)]}class P extends S{constructor(t){super(),M(this,t,B,T,c,{})}}function q(e){let n,r,o,c;return n=new P({}),{c(){var t;(t=n.$$.fragment)&&t.c(),r=a(),o=u("main")},m(t,e){O(n,t,e),s(t,r,e),s(t,o,e),c=!0},p:t,i(t){c||(N(n.$$.fragment,t),c=!0)},o(t){!function(t,e,n,r){if(t&&t.o){if(L.has(t))return;L.add(t),A.c.push((()=>{L.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}(n.$$.fragment,t),c=!1},d(t){j(n,t),t&&l(r),t&&l(o)}}}return new class extends S{constructor(t){super(),M(this,t,null,q,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
