(()=>{"use strict";var e,a,f,c,t,r={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var f=d[e]={id:e,loaded:!1,exports:{}};return r[e].call(f.exports,f,f.exports,b),f.loaded=!0,f.exports}b.m=r,b.c=d,e=[],b.O=(a,f,c,t)=>{if(!f){var r=1/0;for(i=0;i<e.length;i++){f=e[i][0],c=e[i][1],t=e[i][2];for(var d=!0,o=0;o<f.length;o++)(!1&t||r>=t)&&Object.keys(b.O).every((e=>b.O[e](f[o])))?f.splice(o--,1):(d=!1,t<r&&(r=t));if(d){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[f,c,t]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var t=Object.create(null);b.r(t);var r={};a=a||[null,f({}),f([]),f(f)];for(var d=2&c&&e;"object"==typeof d&&!~a.indexOf(d);d=f(d))Object.getOwnPropertyNames(d).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,b.d(t,r),t},b.d=(e,a)=>{for(var f in a)b.o(a,f)&&!b.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,f)=>(b.f[f](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",162:"a20995e2",662:"089acf37",689:"427f22ec",797:"70890373",838:"977e758b",978:"39388b9f",1240:"39639e71",1412:"6c913b17",1914:"d9f32620",2108:"2f498897",2535:"814f3328",2726:"ac4dbc58",3054:"9a657d97",3085:"1f391b9e",3089:"a6aa9e1f",3273:"8803a405",3356:"11c27619",3496:"82472ecd",3608:"9e4087bc",3966:"27d3c76c",4013:"01a85c17",4038:"da608b1a",4057:"b599bfcb",4169:"5ca6bf7a",4195:"c4f5d8e4",4301:"f23eb4f2",4666:"34f77090",4766:"d079749e",5043:"22ea76ac",5237:"51644f31",5618:"3e124143",5884:"6e0a534f",5970:"fea10208",6103:"ccc49370",6269:"71f45287",6329:"c987ec6b",6668:"84f3df7c",6863:"0ac6f059",6923:"ddb1d0f2",6972:"73b6219b",7115:"33f51336",7414:"393be207",7557:"b25d6384",7790:"941445eb",7918:"17896441",8446:"e699baaa",8610:"6875c492",9075:"0b8dc3b2",9082:"d3ac7924",9200:"52c1d48d",9204:"fa8d8d8f",9430:"763028d9",9491:"5d0a508f",9514:"1be78505",9642:"7661071f",9763:"a64a1432",9817:"14eb3368",9946:"744899c2",9962:"8a981012"}[e]||e)+"."+{53:"e07d6866",162:"eec33df0",210:"1bb5c1fb",662:"61870b83",689:"c6a741b3",797:"44c387a0",838:"52d3a708",978:"173f8efb",1240:"c5a1c0da",1412:"c57536c7",1914:"88a6e7f7",2108:"5033720b",2529:"c4aad2e1",2535:"6fc60933",2726:"039b5918",3054:"ed5e098a",3085:"73f98fd2",3089:"02c0e19e",3273:"198845ae",3356:"942871d8",3496:"43f73a5f",3608:"096db11c",3966:"d7f0d8eb",4013:"a1cde212",4038:"117e23f8",4057:"a30a1c69",4169:"f8f5eaf2",4195:"074dfc59",4301:"9e6d360d",4666:"e3e9f5b4",4766:"9e405d43",4972:"106eec05",5043:"0c6e5da8",5237:"a4185e25",5618:"dcf2ab44",5884:"f67f0a86",5970:"ef6b503e",6103:"378abef8",6269:"8dae522e",6329:"7c1c0a34",6668:"0f0b0d2e",6863:"0c56ea9e",6923:"cca0b6c4",6972:"88a54eea",7115:"49bb7790",7414:"1af3edce",7557:"95235819",7790:"7e23a786",7918:"3d284f51",8446:"0d06bda2",8610:"149fb470",9075:"aa1f8707",9082:"84c9544b",9200:"84ea544a",9204:"1177eb72",9430:"79359b91",9491:"79dddd38",9514:"26506408",9642:"ee6a7cb5",9763:"1a672156",9817:"98b2c980",9946:"d85d5789",9962:"766eac80"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},t="athenaserving:",b.l=(e,a,f,r)=>{if(c[e])c[e].push(a);else{var d,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==t+f){d=u;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",t+f),d.src=e),c[e]=[a];var l=(a,f)=>{d.onerror=d.onload=null,clearTimeout(s);var t=c[e];if(delete c[e],d.parentNode&&d.parentNode.removeChild(d),t&&t.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/datasophon-website/en/",b.gca=function(e){return e={17896441:"7918",70890373:"797","935f2afb":"53",a20995e2:"162","089acf37":"662","427f22ec":"689","977e758b":"838","39388b9f":"978","39639e71":"1240","6c913b17":"1412",d9f32620:"1914","2f498897":"2108","814f3328":"2535",ac4dbc58:"2726","9a657d97":"3054","1f391b9e":"3085",a6aa9e1f:"3089","8803a405":"3273","11c27619":"3356","82472ecd":"3496","9e4087bc":"3608","27d3c76c":"3966","01a85c17":"4013",da608b1a:"4038",b599bfcb:"4057","5ca6bf7a":"4169",c4f5d8e4:"4195",f23eb4f2:"4301","34f77090":"4666",d079749e:"4766","22ea76ac":"5043","51644f31":"5237","3e124143":"5618","6e0a534f":"5884",fea10208:"5970",ccc49370:"6103","71f45287":"6269",c987ec6b:"6329","84f3df7c":"6668","0ac6f059":"6863",ddb1d0f2:"6923","73b6219b":"6972","33f51336":"7115","393be207":"7414",b25d6384:"7557","941445eb":"7790",e699baaa:"8446","6875c492":"8610","0b8dc3b2":"9075",d3ac7924:"9082","52c1d48d":"9200",fa8d8d8f:"9204","763028d9":"9430","5d0a508f":"9491","1be78505":"9514","7661071f":"9642",a64a1432:"9763","14eb3368":"9817","744899c2":"9946","8a981012":"9962"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,f)=>{var c=b.o(e,a)?e[a]:void 0;if(0!==c)if(c)f.push(c[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var t=new Promise(((f,t)=>c=e[a]=[f,t]));f.push(c[2]=t);var r=b.p+b.u(a),d=new Error;b.l(r,(f=>{if(b.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var t=f&&("load"===f.type?"missing":f.type),r=f&&f.target&&f.target.src;d.message="Loading chunk "+a+" failed.\n("+t+": "+r+")",d.name="ChunkLoadError",d.type=t,d.request=r,c[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,f)=>{var c,t,r=f[0],d=f[1],o=f[2],n=0;if(r.some((a=>0!==e[a]))){for(c in d)b.o(d,c)&&(b.m[c]=d[c]);if(o)var i=o(b)}for(a&&a(f);n<r.length;n++)t=r[n],b.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return b.O(i)},f=self.webpackChunkathenaserving=self.webpackChunkathenaserving||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();