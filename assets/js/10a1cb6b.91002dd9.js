"use strict";(self.webpackChunkcodiac=self.webpackChunkcodiac||[]).push([[2397],{1274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(4848),s=n(8453);const r={},o="The Repo Registry Pattern",a={id:"api-base/basics/repo-registry-pattern",title:"The Repo Registry Pattern",description:"TL;DR.",source:"@site/docs/api-base/basics/repo-registry-pattern.md",sourceDirName:"api-base/basics",slug:"/api-base/basics/repo-registry-pattern",permalink:"/api-base/basics/repo-registry-pattern",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-base/basics/repo-registry-pattern.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Projections",permalink:"/api-base/basics/projections"},next:{title:"Response Envelopes",permalink:"/api-base/basics/response-envelopes"}},l={},c=[{value:"TL;DR.",id:"tldr",level:2},{value:"Implementation essentials",id:"implementation-essentials",level:3},{value:"Built in, customizeable, extensible, overrideable",id:"built-in-customizeable-extensible-overrideable",level:2}];function p(e){const t={h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"the-repo-registry-pattern",children:"The Repo Registry Pattern"}),"\n",(0,i.jsx)(t.h2,{id:"tldr",children:"TL;DR."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"generic repo pattern"})," can be employed to perform cruds against an entity model."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The registry is a map of entity repos by entity type.  The registry decouples the concrete repos from the code that consumes them."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"implementation-essentials",children:"Implementation essentials"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"At Startup:"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Declare a repo for each entity type"}),"\n",(0,i.jsx)(t.li,{children:"Register that repo for its entity type"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"At runtime:"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"As the registry for the repo mapped to a given entity type"}),"\n",(0,i.jsx)(t.li,{children:"Call the repo methods."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"built-in-customizeable-extensible-overrideable",children:"Built in, customizeable, extensible, overrideable"}),"\n",(0,i.jsx)(t.p,{children:"An added benefit in that decoupling is the ability to decouple the database platform itself, so that you can employ multiple database platforms without any impact on the consumer.  That is, you can use MS Sql for one entity type and MongoDb for another, without any impact to the code consuming your repo."}),"\n",(0,i.jsx)(t.p,{children:"You can use the built in repos, which are highly customizeable and extensible.  The repo patterns are extensible allowing you to build your own where you see fit.  And finally, you can completely override the use of the repo pattern altogether by writring custom endpoints if you want to approach your data access in an entirely different way."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(6540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);