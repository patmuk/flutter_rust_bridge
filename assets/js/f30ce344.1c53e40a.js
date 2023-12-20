"use strict";(self.webpackChunkflutter_rust_bridge=self.webpackChunkflutter_rust_bridge||[]).push([[9918],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),g=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=g(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),c=g(r),d=i,b=c["".concat(s,".").concat(d)]||c[d]||p[d]||o;return r?n.createElement(b,a(a({ref:t},l),{},{components:r})):n.createElement(b,a({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=c;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var g=2;g<o;g++)a[g]=r[g];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7763:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>g});var n=r(7462),i=(r(7294),r(3905));const o={},a="Debugging",u={unversionedId:"guides/how-to/debug",id:"guides/how-to/debug",title:"Debugging",description:"Debuggers",source:"@site/docs/guides/how-to/debug.md",sourceDirName:"guides/how-to",slug:"/guides/how-to/debug",permalink:"/flutter_rust_bridge/guides/how-to/debug",draft:!1,editUrl:"https://github.com/fzyzcjy/flutter_rust_bridge/tree/master/website/docs/guides/how-to/debug.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Stack Traces",permalink:"/flutter_rust_bridge/guides/how-to/stack-trace"},next:{title:"Logging",permalink:"/flutter_rust_bridge/guides/how-to/logging"}},s={},g=[{value:"Debuggers",id:"debuggers",level:2},{value:"Debugging by printing",id:"debugging-by-printing",level:2}],l={toc:g};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"debugging"},"Debugging"),(0,i.kt)("h2",{id:"debuggers"},"Debuggers"),(0,i.kt)("p",null,"Flutter has ",(0,i.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/testing/debugging"},"built-in support")," for using debuggers.\nFor example, you can run app ",(0,i.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/tools/vs-code#run-app-with-breakpoints"},"with breakpoints"),".\nSince Rust is nothing but a compiled binary file (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"something.so"),") added to Flutter,\nall Flutter utilities can be used as normal (for both native and web platform)."),(0,i.kt)("h2",{id:"debugging-by-printing"},"Debugging by printing"),(0,i.kt)("p",null,"Just use normal ",(0,i.kt)("inlineCode",{parentName:"p"},"println!()")," (Rust) and ",(0,i.kt)("inlineCode",{parentName:"p"},"print")," (Dart)\nto ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/189562/what-is-the-proper-name-for-doing-debugging-by-adding-print-statements"},"debug")," -\nthere is nothing special."))}p.isMDXComponent=!0}}]);