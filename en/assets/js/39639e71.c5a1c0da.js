"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[1240],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),h=o,f=d["".concat(i,".").concat(h)]||d[h]||u[h]||c;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8483:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const c={sidebar_position:11,sidebar_label:"\u6dfb\u52a0DolphinScheduler"},a="\u6dfb\u52a0DolphinScheduler",l={unversionedId:"\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0ElasticSearch",id:"\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0ElasticSearch",title:"\u6dfb\u52a0DolphinScheduler",description:"\u521d\u59cb\u5316DolphinScheduler\u6570\u636e\u5e93\u3002",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0ElasticSearch.md",sourceDirName:"\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1",slug:"/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0ElasticSearch",permalink:"/datasophon-website/en/docs/current/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0ElasticSearch",draft:!1,editUrl:"https://github.com/gaodayu168/datasophon-website/docs/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0ElasticSearch.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,sidebar_label:"\u6dfb\u52a0DolphinScheduler"},sidebar:"docSidebar",previous:{title:"\u6dfb\u52a0DolphinScheduler",permalink:"/datasophon-website/en/docs/current/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0DolphinScheduler"},next:{title:"\u6dfb\u52a0DolphinScheduler",permalink:"/datasophon-website/en/docs/current/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0StreamPark"}},i={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6dfb\u52a0dolphinscheduler"},"\u6dfb\u52a0DolphinScheduler"),(0,o.kt)("p",null,"\u521d\u59cb\u5316DolphinScheduler\u6570\u636e\u5e93\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CREATE DATABASE dolphinscheduler DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;\nGRANT ALL PRIVILEGES ON dolphinscheduler.* TO 'dolphinscheduler'@'%' IDENTIFIED BY 'dolphinscheduler';\nGRANT ALL PRIVILEGES ON dolphinscheduler.* TO 'dolphinscheduler'@'localhost' IDENTIFIED BY 'dolphinscheduler';\nflush privileges;\n")),(0,o.kt)("p",null,"DolphinScheduler\u5bfc\u5165\u6570\u636e\u5e93\u8868\u8be6\u89c1\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://dolphinscheduler.apache.org/zh-cn/docs/latest/user_doc/guide/howto/datasource-setting.html"},"https://dolphinscheduler.apache.org/zh-cn/docs/latest/user_doc/guide/howto/datasource-setting.html")))}u.isMDXComponent=!0}}]);