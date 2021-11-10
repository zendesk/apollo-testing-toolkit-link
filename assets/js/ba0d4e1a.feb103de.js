"use strict";(self.webpackChunk_zendesk_laika_docs=self.webpackChunk_zendesk_laika_docs||[]).push([[74],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9755:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),l=["components"],o={id:"typedefs.Result",title:"Interface: Result",sidebar_label:"typedefs.Result",custom_edit_url:null},p=void 0,s={unversionedId:"api/interfaces/typedefs.Result",id:"api/interfaces/typedefs.Result",isDocsHomePage:!1,title:"Interface: Result",description:"typedefs.Result",source:"@site/docs/api/interfaces/typedefs.Result.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/typedefs.Result",permalink:"/laika/docs/api/interfaces/typedefs.Result",editUrl:null,tags:[],version:"current",frontMatter:{id:"typedefs.Result",title:"Interface: Result",sidebar_label:"typedefs.Result",custom_edit_url:null},sidebar:"default",previous:{title:"typedefs.RecordingPointWithFixtureMeta",permalink:"/laika/docs/api/interfaces/typedefs.RecordingPointWithFixtureMeta"},next:{title:"typedefs.SubscribeMeta",permalink:"/laika/docs/api/interfaces/typedefs.SubscribeMeta"}},c=[{value:"Properties",id:"properties",children:[{value:"error",id:"error",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"result",id:"result",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/typedefs"},"typedefs"),".Result"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"error"},"error"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"error"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/zendesk/laika/blob/fbd8d21/src/typedefs.ts#L32"},"src/typedefs.ts:32")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"result"},"result"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"result"),": ",(0,a.kt)("a",{parentName:"p",href:"zendesk_laika.FetchResult"},(0,a.kt)("inlineCode",{parentName:"a"},"FetchResult")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Object"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,a.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/zendesk/laika/blob/fbd8d21/src/typedefs.ts#L31"},"src/typedefs.ts:31")))}d.isMDXComponent=!0}}]);