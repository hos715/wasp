"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},38610:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(67294),a=n(44996);const o=e=>i.createElement("div",null,i.createElement("p",{align:"center"},i.createElement("figure",null,i.createElement("img",{style:{width:e.width},alt:e.alt,src:(0,a.Z)(e.source)}),i.createElement("figcaption",{class:"image-caption",style:{fontStyle:"italic",opacity:.6,fontSize:"0.9rem"}},e.caption))))},92908:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(67294),a=n(39960);n(44996);const o=()=>i.createElement("span",{className:"in-blog-cta--divider"}," \u2192 "),r=()=>i.createElement("p",{className:"in-blog-cta-link-container"},i.createElement(a.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Beta (try it out)!"),i.createElement(o,null),i.createElement(a.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),i.createElement(o,null),i.createElement(a.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))},17883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=n(87462),a=(n(67294),n(3905)),o=(n(39960),n(44996),n(92908)),r=(n(70589),n(38610));const s={title:"Feature Announcement - TypeScript Support",authors:["sodic"],image:"/img/wasp-ts-banner.png",tags:["webdev","wasp","feature","typescript","javascript"]},p=void 0,l={permalink:"/blog/2022/11/29/typescript-feature-announcement",editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/blog/2022-11-29-typescript-feature-announcement.md",source:"@site/blog/2022-11-29-typescript-feature-announcement.md",title:"Feature Announcement - TypeScript Support",description:"<ImgWithCaption",date:"2022-11-29T00:00:00.000Z",formattedDate:"November 29, 2022",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"wasp",permalink:"/blog/tags/wasp"},{label:"feature",permalink:"/blog/tags/feature"},{label:"typescript",permalink:"/blog/tags/typescript"},{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:7.245,hasTruncateMarker:!0,authors:[{name:"Filip Sodi\u0107",title:"Founding Engineer @ Wasp",url:"https://github.com/sodic",email:"filip@wasp-lang.dev",imageURL:"https://github.com/sodic.png",key:"sodic"}],frontMatter:{title:"Feature Announcement - TypeScript Support",authors:["sodic"],image:"/img/wasp-ts-banner.png",tags:["webdev","wasp","feature","typescript","javascript"]},prevItem:{title:"Permissions (access control) in web apps",permalink:"/blog/2022/11/29/permissions-in-web-apps"},nextItem:{title:"Wasp is in Beta: Auth, TypeScript, Tailwind, LSP",permalink:"/blog/2022/11/29/wasp-beta"}},c={authorsImageUrls:[void 0]},d=[{value:"Prologue",id:"prologue",level:2},{value:"Setting up a TypeScript project in Wasp",id:"setting-up-a-typescript-project-in-wasp",level:2},{value:"Moving existing projects to the new structure (and optionally TypeScript)",id:"moving-existing-projects-to-the-new-structure-and-optionally-typescript",level:2},{value:"TypeScript in action",id:"typescript-in-action",level:2},{value:"Future work",id:"future-work",level:2}],u={toc:d},h="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(r.Z,{alt:"Wasp TS support",source:"img/wasp-ts-banner.png",mdxType:"ImgWithCaption"}),(0,a.kt)(o.Z,{mdxType:"InBlogCta"}),(0,a.kt)("h2",{id:"prologue"},"Prologue"),(0,a.kt)("p",null,"TypeScript doesn't need much introduction at this point, so we'll keep it short!\nWasp finally allows you to write your code in TypeScript (i.e., the most popular web technology after JavaScript) on both the front-end and the back-end."),(0,a.kt)("p",null,"You can now define and use types in any part of your code, enjoying all benefits of the static type checker. At the time of writing, not all parts of Wasp are typed as well as they could be, but we're working on it!\nExposing all Wasp functionalities through informative typed interfaces is one of our top priorities."),(0,a.kt)("p",null,"Without further ado, let's see how we can use TypeScript with Wasp."),(0,a.kt)("h2",{id:"setting-up-a-typescript-project-in-wasp"},"Setting up a TypeScript project in Wasp"),(0,a.kt)("p",null,"Let's start by creating a fresh Wasp project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wasp new myApp\n")),(0,a.kt)("p",null,"This will generate a project skeleton in the folder ",(0,a.kt)("inlineCode",{parentName:"p"},"myApp"),". The project structure is different than before, and there are now several additional generated files that help with IDE and TypeScript support. So let's explain it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 main.wasp             # Your wasp code goes here.\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 client            # Your client code (JS/CSS/HTML) goes here.\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Main.css\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 MainPage.jsx\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 react-app-env.d.ts\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 tsconfig.json\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 waspLogo.png\n\u2502\xa0\xa0 \u251c\u2500\u2500 server            # Your server code (Node JS) goes here.\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 tsconfig.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 shared            # Your shared (runtime independent) code goes here.\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 tsconfig.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 .waspignore\n\u2514\u2500\u2500 .wasproot\n")),(0,a.kt)("p",null,"At this point, we can choose one of three options:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"We write our code exclusively in JavaScript."),(0,a.kt)("li",{parentName:"ol"},"We write our code exclusively in TypeScript."),(0,a.kt)("li",{parentName:"ol"},"We write some parts of our code in JavaScript, and other parts in TypeScript.")),(0,a.kt)("p",null,"Since the third option is a superset of the first two, that's what Wasp currently supports. In other words, regardless of whether you want your entire codebase in one of these languages or you want to mix it up, there's no extra configuration necessary!\nSimply use the appropriate extension (",(0,a.kt)("inlineCode",{parentName:"p"},".ts")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".tsx")," for TypeScript; ",(0,a.kt)("inlineCode",{parentName:"p"},".js")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".jsx")," for JavaScript), and your IDE and Wasp will know what to do."),(0,a.kt)("p",null,"To demonstrate this, let's start Wasp and change ",(0,a.kt)("inlineCode",{parentName:"p"},"MainPage.jsx")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"MainPage.tsx"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wasp start\nmv src/client/MainPage.jsx src/client/MainPage.tsx\n")),(0,a.kt)("p",null,"That's it! Wasp will notice the change and recompile, and your app will continue to work. The only difference is that you can now write TypeScript in ",(0,a.kt)("inlineCode",{parentName:"p"},"MainPage.tsx")," and get helpful information from your IDE and the static type checker. Try removing an import and see what happens."),(0,a.kt)("p",null,"The same applies to any file you may want to include in your project. Specify the language you wish to use via the extension, and Wasp will do the rest!"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Even if you use TypeScript and have a ",(0,a.kt)("em",{parentName:"p"},"server")," file called ",(0,a.kt)("inlineCode",{parentName:"p"},"someFile.ts"),", you must still import it as if it had the ",(0,a.kt)("inlineCode",{parentName:"p"},".js")," extension (i.e., ",(0,a.kt)("inlineCode",{parentName:"p"},"import foo from 'someFile.js'"),"). Wasp internally uses ",(0,a.kt)("inlineCode",{parentName:"p"},"esnext")," module resolution, which always requires specifying the extension as ",(0,a.kt)("inlineCode",{parentName:"p"},".js")," (i.e., the extension used in the emitted JS file). This applies to all ",(0,a.kt)("inlineCode",{parentName:"p"},"@server")," imports (and files on the server in general)."),(0,a.kt)("p",{parentName:"admonition"},"Read more about ES modules in TypeScript ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/esm-node.html"},"here"),". If you're interested in the discussion and the reasoning behind this, read about it ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/33588"},"in this GitHub issue"),"."),(0,a.kt)("p",{parentName:"admonition"},"This does not apply to front-end files. Thanks to Webpack, you don't need to write extensions when working with client-side imports.")),(0,a.kt)("h2",{id:"moving-existing-projects-to-the-new-structure-and-optionally-typescript"},"Moving existing projects to the new structure (and optionally TypeScript)"),(0,a.kt)("p",null,"If you wish to move an existing project to the new structure, the easiest approach comes down to creating a new project and moving all the files from your old project into appropriate locations. After doing this, you can choose which files you'd like to implement in TypeScript, change the extension and go for it."),(0,a.kt)("p",null,"To avoid digging too deep, this is all we'll say about migrating. For a more detailed migration guide, check ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/releases/tag/v0.7.0"},"our changelog"),". It explains everything step-by-step."),(0,a.kt)("h2",{id:"typescript-in-action"},"TypeScript in action"),(0,a.kt)("p",null,"Finally, let's demonstrate how TypeScript helps us by using it in a small Todo app. The part of our code in charge of rendering tasks looks something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"\nfunction MainPage() {\n  const { data: tasks } = useQuery(getTasks)\n\n  return (\n    <div>\n      <h1>Todos</h1>\n      <TaskList tasks={tasks} />\n    </div>\n  )\n}\n\nfunction TaskList({ tasks }) {\n  if (!tasks.len) {\n    return <div>No tasks</div>\n  }\n\n  return (\n    <div>\n      {tasks.map((task, idx) => <Task {...task} key={idx}/>)}\n    </div>\n  )\n}\n\n\n\nfunction Task({ id, isdone, description }) {\n  return (\n    <div>\n      <label>\n        <input\n          type='checkbox'\n          id={id}\n          checked={isdone}\n          onChange={\n            (event) => updateTask({ id, isDone: event.target.checked })\n          }\n        />\n        <span>{description}</span>\n      </label>\n    </div>\n  )\n}\n")),(0,a.kt)("p",null,"Try to see if you can find any bugs. When you're confident you've got all of them, continue reading."),(0,a.kt)("p",null,"Let's see what happens when we bring TypeScript into the picture. Remember, we only need to change the extension to ",(0,a.kt)("inlineCode",{parentName:"p"},"tsx"),". After we do this, The IDE will warn us about missing type definitions, so let's fill these in. While we're at it, we can also tell ",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery")," what types it's working with by specifying its type arguments."),(0,a.kt)("p",null,"Here's how our code looks after these changes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// highlight-start\ntype Task = {\n  id: string\n  description: string\n  isDone: boolean\n}\n// highlight-end\n\nfunction MainPage() {\n  // highlight-next-line\n  const { data: tasks } = useQuery<Task, Task[]>(getTasks)\n\n  return (\n    <div>\n      <h1>Todos</h1>\n      <TaskList tasks={tasks} />\n    </div>\n  )\n}\n\n// highlight-next-line\nfunction TaskList({ tasks }: { tasks: Task[] }) {\n  if (!tasks.len) {\n    return <div>No tasks</div>\n  }\n\n  return (\n    <div>\n      {tasks.map((task, idx) => <Task {...task} key={idx}/>)}\n    </div>\n  )\n}\n\n\n\n// highlight-next-line\nfunction Task({ id, isdone, description }: Task) {\n  return (\n    <div>\n      <label>\n        <input\n          type='checkbox'\n          id={id}\n          checked={isdone}\n          onChange={\n            (event) => updateTask({ id, isDone: event.target.checked })\n          }\n        />\n        <span>{description}</span>\n      </label>\n    </div>\n  )\n}\n")),(0,a.kt)("p",null,"As soon as we change our code, TypeScript detects three errors:"),(0,a.kt)(r.Z,{alt:"TypeScript erros",source:"img/typescript-errors.png",caption:"The errors are pretty simple (almost as if we've made them up for this example :)",mdxType:"ImgWithCaption"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The first error warns us that ",(0,a.kt)("inlineCode",{parentName:"li"},"tasks")," might be ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined")," (e.g., on the first render), which ",(0,a.kt)("inlineCode",{parentName:"li"},"TaskList")," does not expect"),(0,a.kt)("li",{parentName:"ol"},"The second error tells us that the property ",(0,a.kt)("inlineCode",{parentName:"li"},"len")," does not exist on the array ",(0,a.kt)("inlineCode",{parentName:"li"},"tasks"),". In other words, we misspelled ",(0,a.kt)("inlineCode",{parentName:"li"},"length"),"."),(0,a.kt)("li",{parentName:"ol"},"Finally, the third error tells us that the type ",(0,a.kt)("inlineCode",{parentName:"li"},"Task")," does not contain the field ",(0,a.kt)("inlineCode",{parentName:"li"},"isdone"),". This is also a typo. The field's name should be ",(0,a.kt)("inlineCode",{parentName:"li"},"isDone"),".")),(0,a.kt)("p",null,"Thanks to TypeScript, we can quickly fix all three errors, saving us a lot of time we'd probably lose by hunting them down manually or, even worse, during runtime."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"\ntype Task = {\n  id: string\n  description: string\n  isDone: boolean\n}\nfunction MainPage() {\n  const { data: tasks } = useQuery<Task, Task[]>(getTasks)\n\n  return (\n    <div>\n      <h1>Todos</h1>\n      // highlight-next-line\n      {tasks && <TaskList tasks={tasks} />}\n    </div>\n  )\n}\n\nfunction TaskList({ tasks }: { tasks: Task[] }) {\n  // highlight-next-line\n  if (!tasks.length) {\n    return <div>No tasks</div>\n  }\n\n  return (\n    <div>\n      {tasks.map((task, idx) => <Task {...task} key={idx} />)}\n    </div>\n  )\n}\n\n\n\n// highlight-next-line\nfunction Task({ id, isDone, description }: Task) {\n  return (\n    <div>\n      <label>\n        <input\n          type='checkbox'\n          id={id}\n          // highlight-next-line\n          checked={isDone}\n          onChange={\n            (event) => updateTask({ id, isDone: event.target.checked })\n          }\n        />\n        <span>{description}</span>\n      </label>\n    </div>\n  )\n}\n")),(0,a.kt)("p",null,"And that's it! This is the joy of TypeScript. We've easily fixed all reported errors, and our code should now work correctly (well, at least less incorrectly)."),(0,a.kt)("h2",{id:"future-work"},"Future work"),(0,a.kt)("p",null,"You might have noticed that, if we want to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Task")," type, we have to write most of its type definition twice - once when defining the ",(0,a.kt)("inlineCode",{parentName:"p"},"Task")," entity in the ",(0,a.kt)("inlineCode",{parentName:"p"},".wasp")," file and then again in our code. While we can define the type in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/shared")," to avoid writing (almost) the same code on both the server and the client, we'll still have duplication between the code in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/shared")," and our ",(0,a.kt)("inlineCode",{parentName:"p"},".wasp")," file."),(0,a.kt)("p",null,"The good news is that we know about this, also find it annoying, and are working to fix it as soon as possible! In the near future, Wasp will generate types from entities and allow you to access them using ",(0,a.kt)("inlineCode",{parentName:"p"},"@wasp")," imports. Other improvements exist, too. For example, Wasp could read your query declarations and provide you with the correct type for the ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," object in their definitions. Another possible improvement is automatically typing queries on the front-end, and then relying on type inference to correctly type ",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery")," (instead of users specifying its type arguments explicitly)."),(0,a.kt)("p",null,"In short, there's a long and exciting path ahead of us, full of interesting possibilities. So stick with Wasp and see how far we can make it!"))}m.isMDXComponent=!0},70589:(e,t,n)=>{n.d(t,{ZP:()=>s});var i=n(87462),a=(n(67294),n(3905));const o={toc:[]},r="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(r,(0,i.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}s.isMDXComponent=!0}}]);