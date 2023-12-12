"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4448],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),h=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=h(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=h(a),u=o,m=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var h=2;h<i;h++)r[h]=a[h];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},38610:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),o=a(44996);const i=e=>n.createElement("div",null,n.createElement("p",{align:"center"},n.createElement("figure",null,n.createElement("img",{style:{width:e.width},alt:e.alt,src:(0,o.Z)(e.source)}),n.createElement("figcaption",{class:"image-caption",style:{fontStyle:"italic",opacity:.6,fontSize:"0.9rem"}},e.caption))))},92908:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),o=a(39960);a(44996);const i=()=>n.createElement("span",{className:"in-blog-cta--divider"}," \u2192 "),r=()=>n.createElement("p",{className:"in-blog-cta-link-container"},n.createElement(o.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Beta (try it out)!"),n.createElement(i,null),n.createElement(o.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),n.createElement(i,null),n.createElement(o.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))},61146:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var n=a(87462),o=(a(67294),a(3905));a(39960),a(44996),a(92908),a(70589),a(38610);const i={title:"How Michael Curry chose Wasp to build Grabbit: an internal tool for managing dev resources at StudentBeans",authors:["matijasos"],image:"/img/michael-curry-usecase/grabbit-hero-shot.png",tags:["webdev","wasp","startups","github"]},r=void 0,l={permalink:"/blog/2022/11/26/michael-curry-usecase",editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/blog/2022-11-26-michael-curry-usecase.md",source:"@site/blog/2022-11-26-michael-curry-usecase.md",title:"How Michael Curry chose Wasp to build Grabbit: an internal tool for managing dev resources at StudentBeans",description:"grabbit hero shot",date:"2022-11-26T00:00:00.000Z",formattedDate:"November 26, 2022",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"wasp",permalink:"/blog/tags/wasp"},{label:"startups",permalink:"/blog/tags/startups"},{label:"github",permalink:"/blog/tags/github"}],readingTime:4.545,hasTruncateMarker:!0,authors:[{name:"Matija Sosic",title:"Co-founder & CEO @ Wasp",url:"https://github.com/matijasos",email:"matija@wasp-lang.dev",imageURL:"https://github.com/matijasos.png",key:"matijasos"}],frontMatter:{title:"How Michael Curry chose Wasp to build Grabbit: an internal tool for managing dev resources at StudentBeans",authors:["matijasos"],image:"/img/michael-curry-usecase/grabbit-hero-shot.png",tags:["webdev","wasp","startups","github"]},prevItem:{title:"Amicus: See how Erlis built a SaaS for legal teams with Wasp and got first paying customers!",permalink:"/blog/2022/11/26/erlis-amicus-usecase"},nextItem:{title:"Wasp Beta Launch Week announcement",permalink:"/blog/2022/11/26/wasp-beta-launch-week"}},s={authorsImageUrls:[void 0]},h=[{value:"The problem: the battle for the dev environment",id:"the-problem-the-battle-for-the-dev-environment",level:2},{value:"The solution: Grabbit - claim and release dev environments as-you-go",id:"the-solution-grabbit---claim-and-release-dev-environments-as-you-go",level:2},{value:"The power of rapid prototyping with Wasp",id:"the-power-of-rapid-prototyping-with-wasp",level:2},{value:"Out-of-the-box deployment",id:"out-of-the-box-deployment",level:2},{value:"From MVP to a full-fledged SaaS without a rewrite",id:"from-mvp-to-a-full-fledged-saas-without-a-rewrite",level:2}],p={toc:h},c="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"grabbit hero shot",src:a(38074).Z,width:"859",height:"504"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/cursorial"},"Michael Curry")," is a senior front-end engineer at ",(0,o.kt)("a",{parentName:"p",href:"https://www.improbable.io/"},"Improbable"),", a metaverse and simulation company based in London. In his free time he enjoys learning about compilers."),(0,o.kt)("p",null,"In his previous position at StudentBeans, he experienced the problem of multiple engineering teams competing for the same dev environment (e.g. testing, staging, \u2026). Then he discovered Wasp and decided to do something about it!"),(0,o.kt)("p",null,"Read on to learn why Michael chose Wasp to build and deploy an internal tool for managing development environments at StudentBeans."),(0,o.kt)("h2",{id:"the-problem-the-battle-for-the-dev-environment"},"The problem: the battle for the dev environment"),(0,o.kt)("p",null,"StudentBeans has a microservices-based architecture with multiple environments - test, staging, production, \u2026. The team practices CI/CD and deploys multiple times a day. With such a rapid development speed, it would relatively often happen that multiple engineering teams attempt to claim the same dev environment at the same time. "),(0,o.kt)("p",null,"There wasn't an easy way for teams to synchronize on who is using which environment and it would eventually lead to unexpected changes, confusion, and prolonged development times."),(0,o.kt)("h2",{id:"the-solution-grabbit---claim-and-release-dev-environments-as-you-go"},"The solution: Grabbit - claim and release dev environments as-you-go"),(0,o.kt)("p",null,"After the incident described above repeated for the n-th time, the team got together for a postmortem. They decided their new development process should look like this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"merge your changes"),(0,o.kt)("li",{parentName:"ul"},"claim the environment you want to deploy to (e.g. testing, staging, \u2026)"),(0,o.kt)("li",{parentName:"ul"},"deploy your changes"),(0,o.kt)("li",{parentName:"ul"},"test your changes"),(0,o.kt)("li",{parentName:"ul"},"release the environment once you are done with it so others are able to claim it")),(0,o.kt)("p",null,"The other requirements were to build the solution in-house to save money and also not to spend more than a few hours on it as they still needed to deliver some important features for the ongoing sprint."),(0,o.kt)("h2",{id:"the-power-of-rapid-prototyping-with-wasp"},"The power of rapid prototyping with Wasp"),(0,o.kt)("p",null,"Michael learned about Wasp during its ",(0,o.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=26091956"},"first HackerNews launch")," and it immediately caught his eye. Being a programming language enthusiast himself, he immediately understood the value of a DSL approach and how it could drastically simplify the development process, while at the same time not preventing him from using his preferred tech stack (React, Node.js) when needed."),(0,o.kt)("p",null,"Also, although Michael had full-stack experience, his primary strength at the time was on the front-end side. Wasp looked like a great way of not having to deal with the tedious back-end setup and wiring (setting up the database, figuring out API, \u2026) and being able to focus on the UX."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When I first learned about Wasp on HN I was really excited about its DSL approach. It was amazing how fast I could get things running with Wasp - I had the first version within an hour! The language is also fairly simple and straightforward and plays well with React & Node.js + it removes a ton of boilerplate."),(0,o.kt)("p",{parentName:"blockquote"},"\u2014 Michael Curry - Grabbit")),(0,o.kt)("h2",{id:"out-of-the-box-deployment"},"Out-of-the-box deployment"),(0,o.kt)("p",null,"Once Michael was satisfied with the first version of Grabbit, and confirmed with the team it fits their desired process, the only thing left to do was to deploy it! It is well known this step can get really complicated, especially if you're not yet well-versed in the sea of config options that usually come with it."),(0,o.kt)("p",null,"Wasp CLI comes with a ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp build")," command that does all the heavy lifting for you - it creates a directory with static front-end files that you can easily deploy to e.g. Netlify, and on the other hand, a Docker image for the back-end. Since Heroku is ending its free plan, our recommendation is to deploy to Fly.io, for which the detailed guide is provided. You can find the ",(0,o.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/docs/deploying"},"detailed deployment instructions here"),"."),(0,o.kt)("p",null,"In Michael's case, he deployed Grabbit behind the VPN since it was an internal tool, and this process was made easy by having a ready-to-go Dockerfile."),(0,o.kt)("h2",{id:"from-mvp-to-a-full-fledged-saas-without-a-rewrite"},"From MVP to a full-fledged SaaS without a rewrite"),(0,o.kt)("p",null,"The presented functionality of Grabbit above is quite simple (create a resource \u2192 claim it \u2192 release it), and it could have easily been implemented in some no-code tool or, if we really wanted to go simple, with a Trello board. So why use Wasp at all?"),(0,o.kt)("p",null,'One reason is that developers know and prefer their tools and trust code over the no-code solutions, especially when requirements are still evolving and it is not evident they won\'t get "stuck" in some closed system. Michael had similar thinking - as he identified this problem at his own company, he realized others must be facing the same issue as well. That is why his plan was to keep improving Grabbit and eventually offer it as a standalone SaaS.'),(0,o.kt)("p",null,"This is where Wasp comes in - he could develop and deploy an initial version of Grabbit in a matter of hours, but still end up with a platform that he can extend indefinitely through the power of code with his stack of choice, React & Node.js, while also using the npm packages he is using everyday at work."),(0,o.kt)("p",null,"Once he starts adding more advanced features, such as multi-user support with authentication, email notifications, and integration with CI/CD, no-code tools won't cut it any more. This way he saved himself and the company from throwing an MVP away and starting everything from scratch (having to learn the new technology and figure out how to set it all up) as the product evolves."))}d.isMDXComponent=!0},70589:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(87462),o=(a(67294),a(3905));const i={toc:[]},r="wrapper";function l(e){let{components:t,...a}=e;return(0,o.kt)(r,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}l.isMDXComponent=!0},38074:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/grabbit-hero-shot-cf6ee29a431f48a29beb295252838294.png"}}]);