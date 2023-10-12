"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7768],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(o),d=n,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return o?a.createElement(m,r(r({ref:t},c),{},{components:o})):a.createElement(m,r({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,r[1]=s;for(var u=2;u<i;u++)r[u]=o[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},85039:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=o(87462),n=(o(67294),o(3905));const i={title:"Contributing to Tech Communities: How Open-Source can land you a job and get you out of the Skill Paradox",authors:["vinny"],image:"/img/open-source-contribute.gif",tags:["career","web-development","open-source","hacktoberfest"]},r=void 0,s={permalink:"/blog/2023/10/04/contributing-open-source-land-a-job",editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/blog/2023-10-04-contributing-open-source-land-a-job.md",source:"@site/blog/2023-10-04-contributing-open-source-land-a-job.md",title:"Contributing to Tech Communities: How Open-Source can land you a job and get you out of the Skill Paradox",description:"TL;DR",date:"2023-10-04T00:00:00.000Z",formattedDate:"October 4, 2023",tags:[{label:"career",permalink:"/blog/tags/career"},{label:"web-development",permalink:"/blog/tags/web-development"},{label:"open-source",permalink:"/blog/tags/open-source"},{label:"hacktoberfest",permalink:"/blog/tags/hacktoberfest"}],readingTime:9.825,hasTruncateMarker:!1,authors:[{name:"Vinny",title:"DevRel @ Wasp",url:"https://vincanger.github.io",imageURL:"https://vincanger.github.io/assets/vince_smiley.jpg",key:"vinny"}],frontMatter:{title:"Contributing to Tech Communities: How Open-Source can land you a job and get you out of the Skill Paradox",authors:["vinny"],image:"/img/open-source-contribute.gif",tags:["career","web-development","open-source","hacktoberfest"]},prevItem:{title:"On Importance of Naming in Programming",permalink:"/blog/2023/10/12/on-importance-of-naming-in-programming"},nextItem:{title:"Build your own AI Meme Generator & learn how to use OpenAI's function calls",permalink:"/blog/2023/09/17/ai-meme-generator-how-to-use-openai-function-call"}},l={authorsImageUrls:[void 0]},u=[{value:"TL;DR",id:"tldr",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. First steps on Open-Source Contribution",id:"2-first-steps-on-open-source-contribution",level:2},{value:"2.1. Finding a project",id:"21-finding-a-project",level:3},{value:"2.2. Searching for Issues",id:"22-searching-for-issues",level:3},{value:"3. Guidelines for Contributing to Open-Source Projects",id:"3-guidelines-for-contributing-to-open-source-projects",level:2},{value:"3.1. Reading the guidelines and writing some code",id:"31-reading-the-guidelines-and-writing-some-code",level:3},{value:"3.2 Handling Code Reviews and Feedback",id:"32-handling-code-reviews-and-feedback",level:3},{value:"Showcasing Contributions",id:"showcasing-contributions",level:2},{value:"Case 1 - A big contribution",id:"case-1---a-big-contribution",level:3},{value:"Case 2- A small contribution",id:"case-2--a-small-contribution",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u},h="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(h,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"tldr"},"TL;DR"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/04lotyojmwdnzt7b2s8j.png",alt:"How to Open-Source"}),"\nIn this article, we\u2019re going to see how open-source can change your career for the better and get you out of the Skill Paradox \u2014 a point in which the skills you need to land a job are generally acquired after you get a job."),(0,n.kt)("p",null,"Besides that, we\u2019ll check how you can start contributing to different open-source projects and get on the hype train of ",(0,n.kt)("a",{parentName:"p",href:"https://hacktoberfest.com/"},"Hacktoberfest")," while also learning some important topics on handling feedbacks and showcasing your contributions."),(0,n.kt)("h2",{id:"1-introduction"},"1. Introduction"),(0,n.kt)("p",null,"Are you a beginner developer that lacks certain skills needed to land a job? But you feel that you could only gain those skills ",(0,n.kt)("strong",{parentName:"p"},"on")," the job itself?\nIf you answered \u201cyes\u201d, then you\u2019re stuck in situation that I would call as the \u201c",(0,n.kt)("strong",{parentName:"p"},"skill paradox"),"\u201d ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"\u2014"))," where you need skills to get a job, but those skills are the ones you would get if you had a job. It can generate a lot of stress and frustration when you start to realize that some skills cannot be obtained while working only on side hustles and therefore, you cannot learn only by yourself, but they\u2019re generally required for job positions."),(0,n.kt)("p",null,"Collaboration and teamwork, learning how to code review (giving and receiving feedback), and getting started with bigger and existing codebases are things that cannot be taught while you work on some little projects. While, of course, you can learn those skills while getting a job in tech, sometimes those skills are necessary for you to get a job, making you stay in some kind of limbo where you need some skills to get a job, and those skills are precisely the ones you would get after the job."),(0,n.kt)("p",null,"In those cases, there\u2019s still a way out of the limbo: you can contribute to open-source communities. Besides the value you are generating for the whole ecosystem, this can be an amazing selling point for your career and, since ",(0,n.kt)("a",{parentName:"p",href:"https://hacktoberfest.com/"},"Hacktoberfest")," is already around the corner, will be a great way to win a t-shirt or plant a tree too!"),(0,n.kt)("p",null,"Now, let\u2019s begin by teaching you how to actually do this."),(0,n.kt)("h2",{id:"2-first-steps-on-open-source-contribution"},"2. First steps on Open-Source Contribution"),(0,n.kt)("h3",{id:"21-finding-a-project"},"2.1. Finding a project"),(0,n.kt)("p",null,"First of all, we need to choose a project. If you\u2019re a beginner, you\u2019re probably looking for projects that have a few characteristics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It\u2019s actively maintained."),(0,n.kt)("li",{parentName:"ul"},"Has an open-source license that we can modify and use freely."),(0,n.kt)("li",{parentName:"ul"},"It\u2019s not insanely big (since these projects can have some really hard things to accomplish before submitting something)."),(0,n.kt)("li",{parentName:"ul"},"It must have good documentation on how to contribute."),(0,n.kt)("li",{parentName:"ul"},"It must have well-characterized issues in order for you to search for something (in the case that you haven\u2019t found the problem itself).")),(0,n.kt)("p",null,"If you have matches in all of these points (or at least three of them), you\u2019re good to go!"),(0,n.kt)("p",null,"Throughout this article, I\u2019m going to use our own repo, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},"Wasp Full-stack Framework"),", since it gathers all the characteristics necessary for a good open-source repository. "),(0,n.kt)("p",null,"So, let me show you how to find all these characteristics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It\u2019s actively maintained and the owners of the repo reply and care for the issues!",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"In the case of Wasp\u2019s repo, the last commit was 13 hours ago, so, there\u2019s definitely signs of life here!")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gz3g6jl8hbvw66jmtizk.png",alt:"Last commit"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It\u2019s not insanely big \u2192 Comparing an exaggerated example with the Linux repo (if you check it, you\u2019ll see that all pull requests there usually take a lot of time to be merged since the project is so big)")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2cp5ptn8uwzb9qv81sey.png",alt:"Linux repo"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It\u2019s good to have a documentation on how to contribute",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Searching for the docs, I found a file called ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/wasp-lang/wasp/blob/main/CONTRIBUTING.md"},"CONTRIBUTING.md")," (which is a common name standard for contribution guidelines) and when we open it up:")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8orfm43mllm2r5fs222o.png",alt:"Contributing guidelines"})),(0,n.kt)("p",null,"We have a whole documentation on how to start with things! Awesome!"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It\u2019s good to have well characterized issues in order for you to search for something")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dk32gx185n9x9uoepobn.png",alt:"Issues"})),(0,n.kt)("p",null,"Searching for the issues, we can easily see that they\u2019re all labeled and that will help us A TON!"),(0,n.kt)("h3",{id:"22-searching-for-issues"},"2.2. Searching for Issues"),(0,n.kt)("p",null,"Great! Now that we have already chosen where we are going to contribute, let\u2019s dive into the issues and search for something we want to do!"),(0,n.kt)("p",null,"When searching for issues, the labels do us a great favor by already explicitly identifying all issues that can be good for newcomers! If you\u2019re a beginner, ",(0,n.kt)("strong",{parentName:"p"},"good first issues")," and ",(0,n.kt)("strong",{parentName:"p"},"documentation")," are excellent labels for you to search for!"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jdyigcuhobk75vsi37oi.png",alt:"Good labels to search for"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yy6ek9gte26emr3bi182.png",alt:"Issues on the repo labeled"})),(0,n.kt)("p",null,"Opening the first issue, we can see that someone already manifested interest on it! So, since someone has already manifested interest in that one, let\u2019s search for another one!"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6phw5wcd5ik8bj8udj4u.png",alt:"The first issue"})),(0,n.kt)("p",null,"Finding another issue \u2014 it doesn\u2019t look like anyone is working on the one below, so we can take it ourselves!"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k1o3v1r5yzzcmotjbiqi.png",alt:"Finding another issue"})),(0,n.kt)("p",null,"By the way, it's of absolute importance that, when you find an issue, you comment and set yourself as assignee in order to let other people know that you're going to take the task at hand!"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h2t7qjpv9syc2hi09xai.png",alt:"Communicating"})),(0,n.kt)("p",null,"In this case, GitHub is a great platform for us to discuss, but sometimes authors can be hard to find. In these cases, search for a link or a way to contact them directly (in the case of Wasp, they have a ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"Discord")," server, for example). Communicating your way through is really important to get things sorted out, and if you\u2019re unsure of how to communicate well with people, you can read this other article ",(0,n.kt)("a",{parentName:"p",href:"https://dev.to/llxd/how-to-deal-with-people-communication-5gef"},"here")," and start to get the hang of it!"),(0,n.kt)("h2",{id:"3-guidelines-for-contributing-to-open-source-projects"},"3. Guidelines for Contributing to Open-Source Projects"),(0,n.kt)("h3",{id:"31-reading-the-guidelines-and-writing-some-code"},"3.1. Reading the guidelines and writing some code"),(0,n.kt)("p",null,"Now that we have selected a repo, an issue to work on and communicated with the authors, it\u2019s time to check the guidelines for making Pull Requests (if you don\u2019t know what this means, it\u2019s basically a request to merge your modifications to the codebase, you can check some more basic git terms ",(0,n.kt)("a",{parentName:"p",href:"https://rogerdudler.github.io/git-guide/"},"here")," too). Sometimes, these guidelines are WAY too hard and sometimes they don\u2019t even exist (that\u2019s an awesome first issue actually), anyways look it up and see if you find something! "),(0,n.kt)("p",null,"You can check Wasp\u2019s contributing guidelines ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/blob/main/CONTRIBUTING.md"},"here")," if you want to read it yourself! After reading it, it\u2019s time to code the solution and get along with it."),(0,n.kt)("p",null,"Since the intent of this article is not to actually show the solving per se, I\u2019ll skip this part and keep talking about the process itself. "),(0,n.kt)("h3",{id:"32-handling-code-reviews-and-feedback"},"3.2 Handling Code Reviews and Feedback"),(0,n.kt)("p",null,"It\u2019s not rare that when we code things up (especially in open-source projects), there will be some problems. Code reviews and feedback are an amazing way for us to get the bigger picture and improve our code quality, so let\u2019s check on how to properly read and answer code reviews and feedback."),(0,n.kt)("p",null,"We\u2019re generally used to receiving criticism in a harsh way, so, when someone approaches you with feedbacks, we generally move into our defense zone. Unfortunately, these cases can teach you the wrong things as it\u2019s generally a good way to think of feedbacks as ",(0,n.kt)("strong",{parentName:"p"},"gifts"),"! Someone spent some time writing (or speaking) things in order for you get even better on what you\u2019re trying to accomplish."),(0,n.kt)("p",null,"This does not mean that all feedback is well-made or that people will always provide great feedback. Sometimes, people can be harsh. However, as you receive more and more feedbacks, you will develop a sense of which feedbacks are genuinely meant to help you improve and which are simply baseless criticism. It is crucial to be open to receiving constructive feedbacks and not take them personally."),(0,n.kt)("p",null,"Let\u2019s see an example of code review and feedback here:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ezsocw81o9d90erstx3n.png",alt:"Code Review Example"})),(0,n.kt)("p",null,"This is great feedback! It expresses the author\u2019s opinion without being harsh and also suggests what to make in order to be perfect! The best way to answer this is simply:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Thanking for the feedback"),(0,n.kt)("li",{parentName:"ul"},"Saying your opinion (agree or disagree) when it makes sense"),(0,n.kt)("li",{parentName:"ul"},"Work on it!")),(0,n.kt)("h2",{id:"showcasing-contributions"},"Showcasing Contributions"),(0,n.kt)("p",null,"After all that work, it\u2019s time for us to showcase our contributions! Document it all. ",(0,n.kt)("strong",{parentName:"p"},"GitHub")," (or other git platforms), ",(0,n.kt)("strong",{parentName:"p"},"personal portfolio sites, LinkedIn,")," and other means of reaching people have become as important as resumes nowadays, so it\u2019s really nice to have some statistics and data to display on:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"What open-source projects have you worked on? Try to think of this as writing a story. First, start by giving the initial context of the project and how it\u2019s revelatory."),(0,n.kt)("li",{parentName:"ul"},"How you contributed: Then, give the context of what you made, documentation, code, and problems you solved in general. Don\u2019t forget to not focus a lot on the technical side since the person who could be reading this may not be technical."),(0,n.kt)("li",{parentName:"ul"},"How big was the impact? Talk about how this affected the ecosystem; it can be as big or as small as you like. Never neglect the impact that changing documentation can have (remember that for us, programmers, the documentation is our source of truth, and fixes there are greatly appreciated).")),(0,n.kt)("p",null,"Don\u2019t forget to utilize the opportunity to engage with other developers and communities, make it so in order to get new connections and even greater opportunities later on! "),(0,n.kt)("p",null,"Now that the theory is set, let\u2019s check a few examples on how I would showcase a few of my contributions:"),(0,n.kt)("h3",{id:"case-1---a-big-contribution"},"Case 1 - A big contribution"),(0,n.kt)("p",null,"One of the ways to describe a big contribution is like this:"),(0,n.kt)("p",null,"I made a few big contributions to a project called ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://coolify.io/"},"Coolify")),", which was an open-source Heroku alternative. I refactored a lot of the UI, making it cleaner and more consistent throughout the application. Currently, more than 9000 instances are installed, and the UI affects all of them! You can check out the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/coollabsio/coolify/commits?author=LLxD"},"contributions")," here."),(0,n.kt)("p",null,"Of course, you can make this text as long or as short as you want, entering more detail about how this contribution was made and what exactly you did, but for this article, this is enough for you to get a general idea."),(0,n.kt)("h3",{id:"case-2--a-small-contribution"},"Case 2- A small contribution"),(0,n.kt)("p",null,"One way to describe a small contribution is like this:"),(0,n.kt)("p",null,"I made a small change to the new documentation for ",(0,n.kt)("a",{parentName:"p",href:"https://sequelize.org/"},"Sequelize"),"! I was just scrolling through the documentation and found this mistake that could lead others to weird debugging sessions, so as soon as I found it, I submitted a PR for them! You can check out the contribution ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sequelize/website/commits?author=LLxD"},"here"),"!"),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"So, a lot was said, let\u2019s make a quick recap on how to do contributions and how to showcase them:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"First of all, find a repo! If you don\u2019t have any in mind, there loads of lists (like ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/collections/choosing-projects"},"this")," one) that recommend some repos for you to take a look"),(0,n.kt)("li",{parentName:"ul"},"Search for an issue that is not being made and you can work on it, if you\u2019re beginner, check for ",(0,n.kt)("strong",{parentName:"li"},"documentation")," and ",(0,n.kt)("strong",{parentName:"li"},"good first issue")," labels"),(0,n.kt)("li",{parentName:"ul"},"Comment and communicate that you\u2019re going to fix the issue - take the opportunity to talk and get to know other developers"),(0,n.kt)("li",{parentName:"ul"},"Code, get you PR reviewed and ready to merge after the feedbacks"),(0,n.kt)("li",{parentName:"ul"},"Merge and showcase your contributions, showing that they are your way out of the Skill Paradox")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/04lotyojmwdnzt7b2s8j.png",alt:"How to Open-Source"})),(0,n.kt)("p",null,"The above steps can give you a really powerful experience in software engineering (which usually happens only when you\u2019re already hired by a company). This is an awesome way to get some recognition while improving the open-source community \u2014 giving back to other developers and getting yourself out of the Skill Paradox!"),(0,n.kt)("p",null,"And you? Have you contributed to open-source? Let me know in the comments below, and let\u2019s share some experiences!"))}p.isMDXComponent=!0}}]);