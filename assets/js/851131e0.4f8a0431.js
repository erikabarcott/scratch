"use strict";(self.webpackChunkcodiac=self.webpackChunkcodiac||[]).push([[9387],{5122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var i=n(4848),s=n(8453);const r={sidebar_position:4,sidebar_label:"Quickest - Custom Endpoint",slug:"quickstart-custom-endpoint",title:"Quickest Quickstart - Build a Custom Endpoint",description:"A quickstart guide to building a custom endpoint in Codiac in under 10 minutes.",tags:["Intro","Getting started"]},o="Quickstart #1: (Quickest) Build a Custom Endpoint in < 10 mins",a={id:"getting-started/quickstart-custom-endpoint",title:"Quickest Quickstart - Build a Custom Endpoint",description:"A quickstart guide to building a custom endpoint in Codiac in under 10 minutes.",source:"@site/docs/getting-started/quickstart-custom-endpoint.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart-custom-endpoint",permalink:"/scratch/getting-started/quickstart-custom-endpoint",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/quickstart-custom-endpoint.md",tags:[{label:"Intro",permalink:"/scratch/tags/intro"},{label:"Getting started",permalink:"/scratch/tags/getting-started"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Quickest - Custom Endpoint",slug:"quickstart-custom-endpoint",title:"Quickest Quickstart - Build a Custom Endpoint",description:"A quickstart guide to building a custom endpoint in Codiac in under 10 minutes.",tags:["Intro","Getting started"]},sidebar:"tutorialSidebar",previous:{title:"Quicker - Database CRUDs",permalink:"/scratch/getting-started/quickstart-database-cruds"},next:{title:"API",permalink:"/scratch/api-base/"}},d={},u=[{value:"Before you begin:",id:"before-you-begin",level:2},{value:"Part 1: Create a custom endpoint",id:"part-1-create-a-custom-endpoint",level:2},{value:"Add your own custom endpoint",id:"add-your-own-custom-endpoint",level:3},{value:"Build, run and hit your new endpoint",id:"build-run-and-hit-your-new-endpoint",level:3},{value:"Wanna try adding route parameters?",id:"wanna-try-adding-route-parameters",level:3},{value:"Next Steps",id:"next-steps",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"quickstart-1-quickest-build-a-custom-endpoint-in--10-mins",children:"Quickstart #1: (Quickest) Build a Custom Endpoint in < 10 mins"}),"\n",(0,i.jsx)(t.p,{children:"Let's try to learn to create an api with a custom endpoint in less than 10 minutes."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"(Ok, we all know you're never going to be building a stupid effing calculator endpoint in the real world; the point here is to learn how to add an endpoint that uses your own custom processing of its user input and returns a calculated result.)"})}),"\n",(0,i.jsx)(t.h2,{id:"before-you-begin",children:"Before you begin:"}),"\n",(0,i.jsxs)(t.p,{children:["If you havent already, create an api project as outlined in the ",(0,i.jsx)(t.a,{href:"../README#gettingStarted",children:"Getting Started tutorial"})]}),"\n",(0,i.jsx)(t.h2,{id:"part-1-create-a-custom-endpoint",children:"Part 1: Create a custom endpoint"}),"\n",(0,i.jsx)(t.p,{children:"We're going to make an endpoint that adds two given numbers and returns the sum in the response."}),"\n",(0,i.jsx)(t.h3,{id:"add-your-own-custom-endpoint",children:"Add your own custom endpoint"}),"\n",(0,i.jsx)(t.p,{children:"First, you'll need to define what the request and response objects for this endpoint will look like:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-Typescript",children:"class myRequest {\n    constructor(public partA: number, public partB: number)\n    { }\n}\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-Typescript",children:"class myResponse {\n    constructor(public sum: number)\n    { }\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"Inside the constructor of your api definition"})}),", define your endpoint as a ",(0,i.jsx)(t.code,{children:"TypeSafeEndpointDef<>"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-Typescript",children:'this.endpoints.push(\n    new TypeSafeEndpointDef<myRequest, myResponse>("myRequest"\n        , httpRestVerb.GET, "getSum")\n        .WithHandler(req => { \n            return new myResponse(req.partA + req.partB); \n        })\n);\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"TypeSafeEndpointDef"})," is an endpoint definition that enforces its request and response types, and supports all the basic core features of the system, such as routing, ."]}),"\n",(0,i.jsx)(t.h3,{id:"build-run-and-hit-your-new-endpoint",children:"Build, run and hit your new endpoint"}),"\n",(0,i.jsx)(t.p,{children:'NOTE: If you\'re firing an http "GET" method, the properties of your request contract are populated by name from the querystring parameters.'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"GET http://127.0.0.1:1775/getSum?partA=5&partB=16\n"})}),"\n",(0,i.jsx)(t.p,{children:"Your endpoint should return your response object:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{ "sum": 21 }\n'})}),"\n",(0,i.jsx)(t.h3,{id:"wanna-try-adding-route-parameters",children:"Wanna try adding route parameters?"}),"\n",(0,i.jsxs)(t.p,{children:["Just add another route to your endpoint definition using ",(0,i.jsx)(t.code,{children:".WithRoute()"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-Typescript",children:'    this.endpoints.push(\n        new TypeSafeEndpointDef<myRequest, myResponse>("myRequest"\n            , httpRestVerb.GET, "getSum")\n            .WithRoute("add/:partA/to/:partB(/)")\n            .WithHandler(req => { \n                return new myResponse(req.partA + req.partB); \n            })\n    );\n'})}),"\n",(0,i.jsx)(t.p,{children:"Now you can hit that endpoint without querystring parameters"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"GET http://127.0.0.1:1775/add/5/to/16\n"})}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"quickstart-2.md",children:"Quickstart #2"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(6540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);