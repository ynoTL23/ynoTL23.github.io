(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{25:function(e){e.exports=JSON.parse('[{"projectTitle":"Sticky Notes","projectDescription":"Sticky Notes is a public bulletin board where anyone can post something for everyone to see. Users may also choose to customize their notes via the interactive menus.","projectUrl":"https://github.com/ynoTL23/cuny2x-sticky-note-final-project","projectImage":"/assets/images/sticky-notes-demo.gif","projectTechStack":["React","Node","ExpressJS","SQL"]},{"projectTitle":"NewsFlash","projectDescription":"NewsFlash is an Android app that offers an aggregation of many news outlets, allowing the user to view top headlines of the day or perform searches for specific headlines. Users may also save articles using the \u201cfavorites\u201d feature or share them amongst friends.","projectUrl":"https://github.com/ynoTL23/NewsFlash","projectImage":"/assets/images/NewsFlash-logo.png","projectTechStack":["Java"]},{"projectTitle":"Cell Shader","projectDescription":"Cell Shader is an interactive webpage that allows a user to fill in a grid of cells with their desired colors to create pixel art. This was built as part of a web dev bootcamp.","projectUrl":"https://github.com/ynoTL23/Cell-Shader","projectImage":"/assets/images/cell-shader.png","projectTechStack":["HTML","CSS","JavaScript"]}]')},26:function(e){e.exports=JSON.parse('[{"workRole":"Software Engineer Intern","workCompany":"ListenFirst Media","workTimeframe":"January 2020 - May 2020","workDescription":"Assisted in resolving front-end bugs from JIRA and deploying to production. Collaborated with co-intern to build and deploy an MVP interface that provides internal staff with a tool to explore the company\'s content API, via valid JSON request queries against the API.","workBulletNotes":["Researched and understood company\u2019s internal databases and libraries","Resolved and deployed front-end bugs to production","Used React to wireframe, develop, and deploy an MVP interface for content-level data retrieval"]},{"workRole":"Resident","workCompany":"CUNY 2X/Tech Talent Pipeline","workTimeframe":"January 2020 - February 2020","workDescription":"As a cohort 5 resident, I participated in a month-long web development and coding bootcamp designed to build tech career skills with languages and environments such as Git/GitHub, HTML, CSS, JavaScript, Node.js, React, PostgreSQL, and agile development. The CUNY 2X Tech Talent Pipeline is an initiative set to double the number of City University of New York (CUNY) students graduating with a tech-related bachelor\u2019s degree.","workBulletNotes":["Learned the fundamentals of JavaScript, Node.js, React, Express, and dabbled in PostgreSQL","Developed 2 full stack websites showcasing the knowledge learned from the bootcamp"]}]')},31:function(e,t,c){},32:function(e,t,c){},37:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),r=c(22),n=c.n(r),i=(c(31),c(14)),o=(c(32),c(13)),l=c(9),d=c(10),j=(c(37),c(0)),h=function(e){var t=e.handleDarkModeToggle;return Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(d.b,{to:"/",exact:!0,activeClassName:"selected",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(d.b,{to:"/projects",activeClassName:"selected",children:"Projects"})}),Object(j.jsx)("li",{children:Object(j.jsx)(d.b,{to:"/about",activeClassName:"selected",children:"About"})}),Object(j.jsx)("li",{onClick:t,children:Object(j.jsx)(l.a,{icon:o.b,size:"2x",className:"dark-mode-toggle"})})]})})},p=c(24),b=(c(41),{color:{r:236,g:236,b:244,a:255},background:{r:46,g:52,b:64,a:255}}),u=function(e){var t=e.darkMode;return Object(j.jsxs)("div",{className:"home-wrapper",children:[Object(j.jsx)(p.a,{className:"particles",numParticles:300,interactive:!1,color:t?b.color:{r:59,g:66,b:82,a:255},background:t?b.background:{r:255,g:255,b:255,a:255},lineWidth:1.2,particleRadius:1.2,particleSpeed:.3}),Object(j.jsxs)("h1",{children:[Object(j.jsx)("span",{id:"hand",children:"\ud83d\udc4b"})," Hi, I'm Tony Lu"]}),Object(j.jsx)("p",{children:"A software engineer from New York"})]})},m=(c(42),function(e){var t={backgroundImage:"url(".concat(e.image,")")};return Object(j.jsx)("div",{style:t,className:"card-img"})}),x=function(e){var t=e.projectBody,c=t.projectTitle,a=t.projectDescription,s=t.projectUrl,r=t.projectTechStack;return Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("p",{className:"tech-stack",children:r.join(", ")}),Object(j.jsx)("h2",{children:c}),Object(j.jsx)("p",{className:"card-description",children:a}),Object(j.jsx)("a",{href:s,target:"blank",className:"button",children:"View Project"})]})},f=function(e){var t=e.projectDetails,c=t.projectTitle,a=t.projectDescription,s=t.projectUrl,r=t.projectImage,n=t.projectTechStack;return Object(j.jsxs)("article",{className:"card",children:[Object(j.jsx)(m,{image:r}),Object(j.jsx)(x,{projectBody:{projectTitle:c,projectDescription:a,projectUrl:s,projectImage:r,projectTechStack:n}})]})},g=c(25),O=(c(43),function(){return Object(j.jsxs)("div",{className:"projects-container",children:[Object(j.jsx)("div",{className:"projects-header",children:Object(j.jsx)("h1",{children:"Projects"})}),Object(j.jsx)("div",{className:"projects-list",children:g.map((function(e,t){return Object(j.jsx)(f,{projectDetails:e},t)}))})]})}),v=c(26),N=c(19),w=function(e){var t=e.exp,c=t.workTimeframe,a=t.workRole,s=t.workCompany,r=t.workDescription,n=t.workBulletNotes;return Object(j.jsxs)("div",{className:"exp-item",children:[Object(j.jsx)("div",{className:"exp-timeframe",children:c}),Object(j.jsxs)("div",{className:"exp-title",children:[a,", ",Object(j.jsx)("em",{children:s})]}),Object(j.jsxs)("div",{className:"exp-notes",children:[r,Object(j.jsx)("ul",{children:n.map((function(e,t){return Object(j.jsx)("li",{children:e},t)}))})]})]})},k=(c(44),function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(j.jsxs)("div",{className:"about-wrapper",children:[Object(j.jsx)("h1",{children:"About Me"}),Object(j.jsxs)("div",{className:"about-container",children:[Object(j.jsxs)("div",{className:"about-profiles ".concat(c?"profile-pulse":""),children:[Object(j.jsx)("a",{href:"mailto:tonylu23@gmail.com",children:Object(j.jsx)(l.a,{icon:o.a,size:"2x"})}),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/ynoTL",target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)(l.a,{icon:N.b,size:"2x"})}),Object(j.jsx)("a",{href:"https://github.com/ynoTL23",target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)(l.a,{icon:N.a,size:"2x"})})]}),Object(j.jsx)("div",{className:"about-desc",children:Object(j.jsxs)("p",{children:["I am a Computer Science student graduating from CUNY Herbert H. Lehman College with honors. I have experience in languages such as Java, Python and JavaScript as well as frameworks like React. I have previously participated in data science research at Lehman involving classification of animal and medical data. In my free time, I love to play games, listen to music and learn about new developing technologies & trends. I hope to contribute to meaningful projects that create convenience and simplification for daily lives."," ",Object(j.jsx)("span",{id:"get-in-touch",onMouseOver:function(){return s(!0)},onMouseOut:function(){return s(!1)},children:"Feel free to get in touch with me."})]})})]}),Object(j.jsxs)("div",{className:"experience-container",children:[Object(j.jsxs)("div",{className:"education-section",children:[Object(j.jsx)("h1",{className:"exp-header",children:"Education"}),Object(j.jsxs)("div",{className:"exp-item",children:[Object(j.jsx)("div",{className:"exp-timeframe",children:"August 2017 - May 2021"}),Object(j.jsx)("div",{className:"exp-title",children:"CUNY Herbert H. Lehman College"}),Object(j.jsxs)("div",{className:"exp-notes",children:["Bachelor of Science - Computer Science, ",Object(j.jsx)("em",{children:"Magna Cum Laude"}),Object(j.jsx)("br",{}),"Phi Beta Kappa"]})]})]}),Object(j.jsxs)("div",{className:"work-section",children:[Object(j.jsx)("h1",{className:"exp-header",children:"Work"}),v.map((function(e,t){return Object(j.jsx)(w,{exp:e},t)}))]})]})]})}),y=c(3);var S=function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){c?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode")}),[c]),Object(j.jsx)(d.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"bounds-container",children:[Object(j.jsx)("div",{className:"line top"}),Object(j.jsx)("div",{className:"line right"}),Object(j.jsx)("div",{className:"line bottom"}),Object(j.jsx)("div",{className:"line left"})]}),Object(j.jsx)(h,{handleDarkModeToggle:function(){return s(!c)}}),Object(j.jsxs)(y.c,{children:[Object(j.jsx)(y.a,{path:"/",exact:!0,component:function(){return Object(j.jsx)(u,{darkMode:c})}}),Object(j.jsx)(y.a,{path:"/projects",component:O}),Object(j.jsx)(y.a,{path:"/about",component:k})]})]})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),r(e),n(e)}))};n.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),T()}},[[45,1,2]]]);
//# sourceMappingURL=main.f8f2b918.chunk.js.map