(this["webpackJsonpmarvel-react"]=this["webpackJsonpmarvel-react"]||[]).push([[0],{134:function(e,t,c){},135:function(e,t,c){},230:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),i=c(20),r=c.n(i),s=(c(134),c(135),c(46)),o=c(88),l=c.n(o),j=c(44),d=c(232),b=c(233),u=c(52),h=c(34),O=c(234),p=c(236),m=c(235),f=c(11),x=m.a.Search;function g(e){var t=e.searchTerm;return Object(f.jsx)("div",{children:Object(f.jsx)(x,{placeholder:"Enter your character Name..",style:{width:500},onChange:function(e){return t(e.target.value)}})})}var v=c.p+"static/media/MarvelLogo.7c66e653.png",y=c(89),N=(c(156),"https://gateway.marvel.com:443/v1/public/characters?"),S="a302d154b2249cb8cea2ec2c4cb22eac";function k(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)([]),r=Object(s.a)(i,2),o=r[0],m=r[1],x=Object(a.useState)(!0),k=Object(s.a)(x,2),C=k[0],w=k[1],L=Object(a.useState)(!0),T=Object(s.a)(L,2),z=T[0],D=T[1],F=Object(a.useState)([]),P=Object(s.a)(F,2),E=P[0],I=P[1],A=Object(a.useState)(!1),B=Object(s.a)(A,2),J=B[0],M=B[1],W=function(e){var t,c,a,n=(t="".concat(e.collectionURI),"undefined"==typeof(a=4)&&(a=0),"undefined"==typeof(c="s")&&(c=""),t.slice(0,a)+c+t.slice(a));l.a.get("".concat(n,"?&apikey=").concat(S)).then((function(e){m(e.data.data.results),D(!1)})),M(!0)};return Object(a.useEffect)((function(){""===c&&(w(!0),l.a.get("".concat(N,"&apikey=").concat(S)).then((function(e){I(e.data.data.results),w(!1),0===e.data.data.results.length&&y.b.error("No one here by that name..")})).catch((function(e){console.error(e)})))}),[c]),Object(f.jsxs)("div",{className:"app-body",children:[Object(f.jsx)("img",{src:v,className:"marvel-logo"}),Object(f.jsx)(g,{searchTerm:function(e){n(e)}}),Object(f.jsx)(j.a,{type:"primary",size:"large",onClick:function(){w(!0),c&&l.a.get("".concat(N,"name=").concat(c,"&apikey=").concat(S)).then((function(e){I(e.data.data.results),w(!1),0===e.data.data.results.length&&y.b.error("No one here by that name..")})).catch((function(e){console.error(e)}))},style:{marginTop:20,width:100},children:"Search"}),Object(f.jsx)(y.a,{}),C?Object(f.jsxs)("div",{className:"spinner",children:[Object(f.jsx)(d.a,{size:"large"}),Object(f.jsx)("h4",{children:"Loading..Please Wait"})]}):E.map((function(e){return Object(f.jsx)(b.a,{title:e.name,className:"card-body",children:Object(f.jsxs)(u.a,{children:[Object(f.jsx)(h.a,{span:12,children:Object(f.jsx)(O.a,{width:200,src:"".concat(e.thumbnail.path,"/portrait_incredible.jpg")})}),Object(f.jsxs)(h.a,{span:12,children:[Object(f.jsx)("p",{children:e.description?e.description:"No Description Available"}),Object(f.jsx)(j.a,{type:"primary",size:"large",onClick:function(){return W(e.comics)},children:"Open Stories"})]})]})})})),Object(f.jsx)(p.a,{centered:!0,style:{top:20},title:"Comics Data",visible:J,onOk:function(){M(!1),m([])},onCancel:function(){M(!1),m([]),D(!0)},children:z?Object(f.jsxs)("div",{className:"spinner",children:[Object(f.jsx)(d.a,{size:"large"}),Object(f.jsx)("h4",{children:"Loading..Please Wait"})]}):o.map((function(e){return Object(f.jsxs)("div",{className:"comics-data",children:[Object(f.jsx)("h2",{children:e.title}),Object(f.jsx)("p",{children:e.description?e.description:"No Description Available.."})]})}))})]})}var C=function(){return Object(f.jsx)("div",{children:Object(f.jsx)(k,{})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,237)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),i(e),r(e)}))};c(229);r.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(C,{})}),document.getElementById("root")),w()}},[[230,1,2]]]);
//# sourceMappingURL=main.db8e6d03.chunk.js.map