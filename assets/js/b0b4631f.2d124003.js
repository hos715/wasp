"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6853],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),f=o,m=c["".concat(l,".").concat(f)]||c[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},46300:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(50012);function a(e){let{path:t}=e;const[r]=(0,o.Nk)("docusaurus.tab.js-ts"),a=t.lastIndexOf("{"),i=t.slice(a+1,t.length-1),[s,l]=i.split(","),p=t.slice(0,a);return n.createElement("code",null,p+("js"===r?s:l))}},55819:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));r(46300);const a={title:"Editor Setup",slug:"/editor-setup"},i=void 0,s={unversionedId:"introduction/editor-setup",id:"version-0.11.8/introduction/editor-setup",title:"Editor Setup",description:"This page assumes you have already installed Wasp. If you do not have Wasp installed yet, check out the Quick Start guide.",source:"@site/versioned_docs/version-0.11.8/introduction/editor-setup.md",sourceDirName:"introduction",slug:"/editor-setup",permalink:"/docs/editor-setup",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.11.8/introduction/editor-setup.md",tags:[],version:"0.11.8",frontMatter:{title:"Editor Setup",slug:"/editor-setup"},sidebar:"docs",previous:{title:"Quick Start",permalink:"/docs/quick-start"},next:{title:"1. Creating a New Project",permalink:"/docs/tutorial/create"}},l={},p=[{value:"VSCode",id:"vscode",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This page assumes you have already installed Wasp. If you do not have Wasp installed yet, check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/quick-start"},"Quick Start")," guide.")),(0,o.kt)("p",null,"Wasp comes with the Wasp language server, which gives supported editors powerful support and integration with the language. "),(0,o.kt)("h2",{id:"vscode"},"VSCode"),(0,o.kt)("p",null,"Currently, Wasp only supports integration with VSCode. Install the ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=wasp-lang.wasp"},"Wasp language extension")," to get syntax highlighting and integration with the Wasp language server."),(0,o.kt)("p",null,"The extension enables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"syntax highlighting for ",(0,o.kt)("inlineCode",{parentName:"li"},".wasp")," files"),(0,o.kt)("li",{parentName:"ul"},"scaffolding of new project files"),(0,o.kt)("li",{parentName:"ul"},"code completion"),(0,o.kt)("li",{parentName:"ul"},"diagnostics (errors and warnings)"),(0,o.kt)("li",{parentName:"ul"},"go to definition")),(0,o.kt)("p",null,"and more!"))}d.isMDXComponent=!0}}]);