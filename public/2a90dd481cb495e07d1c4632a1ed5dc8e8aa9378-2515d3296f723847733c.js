"use strict";(self.webpackChunkdima_veremchuk=self.webpackChunkdima_veremchuk||[]).push([[457],{3204:function(e){const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,a=/([\p{Alpha}\p{N}_]|$)/u,o=/[_.\- ]+/,i=new RegExp("^"+o.source),s=new RegExp(o.source+a.source,"gu"),l=new RegExp("\\d+"+a.source,"gu"),c=(e,a)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(a={pascalCase:!1,preserveConsecutiveUppercase:!1,...a},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const o=!1===a.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(a.locale),c=!1===a.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(a.locale);if(1===e.length)return a.pascalCase?c(e):o(e);return e!==o(e)&&(e=((e,n,a)=>{let o=!1,i=!1,s=!1;for(let l=0;l<e.length;l++){const c=e[l];o&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),o=!1,s=i,i=!0,l++):i&&s&&r.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=i,i=!1,o=!0):(o=n(c)===c&&a(c)!==c,s=i,i=a(c)===c&&n(c)!==c)}return e})(e,o,c)),e=e.replace(i,""),e=a.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,o):o(e),a.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,r)=>t(r))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,r){r.d(t,{L:function(){return g},M:function(){return k},P:function(){return E},S:function(){return H},_:function(){return s},a:function(){return i},b:function(){return u},g:function(){return d},h:function(){return l}});var n=r(7294),a=(r(3204),r(5697)),o=r.n(a);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(a[r]=e[r]);return a}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,r){const n={};let a="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:n}}function u(e,t,r,n,a){return void 0===a&&(a={}),i({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:i({},a,{opacity:t?1:0})})}function d(e,t,r,n,a,o,s,l){const c={};o&&(c.backgroundColor=o,"fixed"===r?(c.width=n,c.height=a,c.backgroundColor=o,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const m=["children"],p=function(e){let{layout:t,width:r,height:a}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+a+"'%20width='"+r+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,r=s(e,m);return n.createElement(n.Fragment,null,n.createElement(p,i({},r)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:r,loading:a,alt:o="",shouldLoad:l}=e,c=s(e,f);return n.createElement("img",i({},c,{decoding:"async",loading:a,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,alt:o}))},b=function(e){let{fallback:t,sources:r=[],shouldLoad:a=!0}=e,o=s(e,h);const l=o.sizes||(null==t?void 0:t.sizes),c=n.createElement(y,i({},o,t,{sizes:l,shouldLoad:a}));return r.length?n.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:o}=e;return n.createElement("source",{key:t+"-"+o+"-"+r,type:o,media:t,srcSet:a?r:void 0,"data-srcset":a?void 0:r,sizes:l})})),c):c};var v;y.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},b.displayName="Picture",b.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,r=s(e,w);return t?n.createElement(b,i({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",i({},r))};E.displayName="Placeholder",E.propTypes={fallback:a.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const k=function(e){return n.createElement(n.Fragment,null,n.createElement(b,i({},e)),n.createElement("noscript",null,n.createElement(b,i({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=b.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],L=["style","className"],N=e=>e.replace(/\n/g,""),S=function(e,t,r){for(var n=arguments.length,a=new Array(n>3?n-3:0),i=3;i<n;i++)a[i-3]=arguments[i];return e.alt||""===e.alt?o().string.apply(o(),[e,t,r].concat(a)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:o().object.isRequired,alt:S},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],j=new Set;let A,R;const F=function(e){let{as:t="div",image:a,style:o,backgroundColor:u,className:d,class:m,onStartLoad:p,onLoad:g,onError:f}=e,h=s(e,T);const{width:y,height:b,layout:v}=a,w=c(y,b,v),{style:E,className:k}=w,C=s(w,I),L=(0,n.useRef)(),N=(0,n.useMemo)((()=>JSON.stringify(a.images)),[a.images]);m&&(d=m);const S=function(e,t,r){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+r+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(v,y,b);return(0,n.useEffect)((()=>{A||(A=Promise.all([r.e(774),r.e(731)]).then(r.bind(r,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(N);if(R&&j.has(N))return;let t,n;return A.then((e=>{let{renderImageToString:r,swapPlaceholderImage:s}=e;L.current&&(L.current.innerHTML=r(i({isLoading:!0,isLoaded:j.has(N),image:a},h)),j.has(N)||(t=requestAnimationFrame((()=>{L.current&&(n=s(L.current,N,j,o,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[a]),(0,n.useLayoutEffect)((()=>{j.has(N)&&R&&(L.current.innerHTML=R(i({isLoading:j.has(N),isLoaded:j.has(N),image:a},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[a]),(0,n.createElement)(t,i({},C,{style:i({},E,o,{backgroundColor:u}),className:k+(d?" "+d:""),ref:L,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},O=(0,n.memo)((function(e){return e.image?(0,n.createElement)(F,e):null}));O.propTypes=x,O.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function _(e){return function(t){let{src:r,__imageData:a,__error:o}=t,l=s(t,P);return o&&console.warn(o),a?n.createElement(e,i({image:a},l)):(console.warn("Image not loaded",r),null)}}const q=_((function(e){let{as:t="div",className:r,class:a,style:o,image:l,loading:m="lazy",imgClassName:p,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:b}=e,v=s(e,C);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;a&&(r=a),f=i({objectFit:y,objectPosition:b,backgroundColor:h},f);const{width:w,height:S,layout:x,images:T,placeholder:I,backgroundColor:j}=l,A=c(w,S,x),{style:R,className:F}=A,O=s(A,L),P={fallback:void 0,sources:[]};return T.fallback&&(P.fallback=i({},T.fallback,{srcSet:T.fallback.srcSet?N(T.fallback.srcSet):void 0})),T.sources&&(P.sources=T.sources.map((e=>i({},e,{srcSet:N(e.srcSet)})))),n.createElement(t,i({},O,{style:i({},R,o,{backgroundColor:h}),className:F+(r?" "+r:"")}),n.createElement(g,{layout:x,width:w,height:S},n.createElement(E,i({},d(I,!1,x,w,S,j,y,b))),n.createElement(k,i({"data-gatsby-image-ssr":"",className:p},v,u("eager"===m,!1,P,m,f)))))})),W=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},z=new Set(["fixed","fullWidth","constrained"]),M={src:o().string.isRequired,alt:S,width:W,height:W,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!z.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};q.displayName="StaticImage",q.propTypes=M;const H=_(O);H.displayName="StaticImage",H.propTypes=M},1667:function(e,t,r){var n=r(7294);t.Z=function(e){let{children:t}=e;return n.createElement(n.Fragment,null,n.createElement("main",null,t))}},2781:function(e,t,r){r.d(t,{Z:function(){return d}});var n={};r.r(n),r.d(n,{PX:function(){return s},kQ:function(){return l},iF:function(){return c},YS:function(){return u}});var a=r(7294),o=r(1883),i=r(512),s="footer-module--contact--b691b",l="footer-module--content--10227",c="footer-module--copyright--9b55e",u="footer-module--wrapper--f0a3d";var d=function(){return a.createElement("div",{className:u},a.createElement("div",{className:l},a.createElement("p",{className:s},a.createElement("span",{className:"deemphasized"},"If you have an interesting project, want to collaborate or just say hi, write me at "),a.createElement(o.rU,{to:"mailto:verd@hey.com",className:n.email},"verd@hey.com")),a.createElement("div",{className:(0,i.Z)(c,"deemphasized")},"© Dima Veremchuk, ",(new Date).getFullYear())))}},4122:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(7294),a=r(1883),o=r(512);var i=function(e){return n.createElement("div",{className:"header-module--wrapper--881f5"},n.createElement("div",{className:"header-module--content--3da85"},n.createElement("div",{className:(0,o.Z)("allCaps","header-module--homeLink--3f667")},n.createElement(a.rU,{to:"/"},"Dima Veremchuk",n.createElement("div",{className:(0,o.Z)("deemphasized","header-module--bodyText--4847f")},"—software designer ",n.createElement("span",{className:"header-module--desktop--ba011"},e.details)))),n.createElement("div",{className:(0,o.Z)("allCaps","header-module--aboutLink--4f3c1")},n.createElement(a.rU,{to:"/about"},"About"))))}},4903:function(e,t,r){r.d(t,{An:function(){return R},BH:function(){return w},Bj:function(){return E},Br:function(){return _},CH:function(){return b},Cc:function(){return N},E0:function(){return q},EA:function(){return U},G9:function(){return T},Hr:function(){return z},J:function(){return l},Kr:function(){return D},NO:function(){return h},Ps:function(){return p},Qx:function(){return I},Rk:function(){return V},Rq:function(){return j},S3:function(){return M},SK:function(){return v},Sc:function(){return H},U9:function(){return x},UI:function(){return c},Wc:function(){return L},YS:function(){return B},Zv:function(){return i},_$:function(){return f},_5:function(){return A},aW:function(){return S},mK:function(){return u},mc:function(){return F},md:function(){return C},mf:function(){return d},n:function(){return O},n8:function(){return W},nh:function(){return o},nv:function(){return a},oN:function(){return g},q:function(){return k},rM:function(){return n},sm:function(){return m},u7:function(){return y},uF:function(){return s},x4:function(){return Z},yT:function(){return P}});var n="case-module--aboveTheFold--7d9e8",a="case-module--aboveTheFoldImage--39b91",o="case-module--aboveTheFoldPhone--84ec0",i="case-module--aboveTheFoldReel--b884c",s="case-module--appIcon--50fe5",l="case-module--centered--18050",c="case-module--comment--7e2c4",u="case-module--eighth--884bd",d="case-module--externalContainer--0f3ea",m="case-module--fifth--01884",p="case-module--first--adc15",g="case-module--fourth--c980e",f="case-module--headerTwo--687f6",h="case-module--headerWithParagraph--7c200",y="case-module--headerWrapper--732d6",b="case-module--highlight--9a2ea",v="case-module--highlights--9ec1d",w="case-module--image--e02de",E="case-module--imageContainer--9b9e8",k="case-module--imageLabel--f3dbc",C="case-module--imageWide--a6de1",L="case-module--images--e98a7",N="case-module--internalContainer--491b2",S="case-module--intro--e9623",x="case-module--introContent--4c409",T="case-module--introSummary--b2999",I="case-module--laptopAboveTheFold--cde55",j="case-module--leftAligned--213c9",A="case-module--ninth--5d9c2",R="case-module--paragraph--42a33",F="case-module--phoneImage--da16a",O="case-module--projectName--d630a",P="case-module--reelImage--405dd",_="case-module--rightAligned--df6c6",q="case-module--second--7c770",W="case-module--seventh--0ca2f",z="case-module--sixth--65c66",M="case-module--svgContainer--14149",H="case-module--svgImage--e39fa",U="case-module--third--88e3a",Z="case-module--typographyImage--52b99",D="case-module--unorderedList--46d45",V="case-module--video--cbc07",B="case-module--wrapper--e7278"},512:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r)}else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}t.Z=function(){for(var e,t,r=0,a="",o=arguments.length;r<o;r++)(e=arguments[r])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}}}]);
//# sourceMappingURL=2a90dd481cb495e07d1c4632a1ed5dc8e8aa9378-2515d3296f723847733c.js.map