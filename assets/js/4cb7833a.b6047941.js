"use strict";(self.webpackChunkcodiac=self.webpackChunkcodiac||[]).push([[6814],{2993:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=t(4848),i=t(8453);const s={},r="Using IOC (Inversion of Control) in your API",c={id:"api-base/basics/using-ioc",title:"Using IOC (Inversion of Control) in your API",description:"In your ApiDef, in the bootstraop method, you can register types with the ioc container:",source:"@site/docs/api-base/basics/using-ioc.md",sourceDirName:"api-base/basics",slug:"/api-base/basics/using-ioc",permalink:"/scratch/api-base/basics/using-ioc",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-base/basics/using-ioc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Searching and Criteria",permalink:"/scratch/api-base/basics/searching-and-criteria"},next:{title:"Concepts",permalink:"/scratch/api-base/concepts/"}},a={},u=[];function p(e){const o={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"using-ioc-inversion-of-control-in-your-api",children:"Using IOC (Inversion of Control) in your API"}),"\n",(0,n.jsx)(o.p,{children:"In your ApiDef, in the bootstraop method, you can register types with the ioc container:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-Typescript",children:"public Bootstrap(host: apiHost): void {\n    host.ioc.bind<ICoolTool>(INTERFACES.ICoolTool).to<MyFavoriteCoolTool>(MyFavorioteCoolTool)\n}\n"})})]})}function l(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},8453:(e,o,t)=>{t.d(o,{R:()=>r,x:()=>c});var n=t(6540);const i={},s=n.createContext(i);function r(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);