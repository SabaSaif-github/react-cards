(this["webpackJsonpreact-cards"]=this["webpackJsonpreact-cards"]||[]).push([[0],{115:function(e,t,c){},155:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(86),r=c.n(s),i=(c(95),c(96),c(32)),l=c(3),d=c(33),o=c(31),j=c.n(o),b=(c(115),c(90)),m=c(2);var h=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){j.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){console.log(e),n(e.data)})).catch((function(e){console.log(e)}))})),Object(m.jsx)("div",{className:"container fluid d-flex justify-content-center",children:Object(m.jsx)("div",{className:"row",children:c.map((function(e){return Object(m.jsx)("div",{className:"mt-3 mb-3 col-md-4",children:Object(m.jsxs)("div",{className:"card text-center",children:[Object(m.jsx)("div",{className:"overflow",children:Object(m.jsx)(b.a,{name:e.name,maxInitials:1})}),Object(m.jsxs)("div",{className:"card-body text-dark",children:[Object(m.jsx)("h4",{className:"card-title",children:e.name}),Object(m.jsxs)("p",{className:"card-text text-secondary",children:["@",e.username]}),Object(m.jsx)("p",{href:e.website,className:"link-primary",children:e.website}),Object(m.jsx)("br",{}),Object(m.jsx)(i.b,{to:"/details",children:Object(m.jsx)("p",{className:"btn btn-primary",onClick:function(){return t=e.id,void localStorage.setItem("id",t);var t},children:"MORE DETAILS"})})]})]})})}))})})};var x=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],s=localStorage.getItem("id");return Object(a.useEffect)((function(){j.a.get("https://jsonplaceholder.typicode.com/users/".concat(s)).then((function(e){console.log(e),n(e.data)})).catch((function(e){console.log(e)}))})),Object(m.jsx)("div",{className:"m-3 col-md-4",children:Object(m.jsx)("div",{className:"card text-center",children:Object(m.jsxs)("div",{className:"card-body text-dark",children:[Object(m.jsxs)("h4",{className:"card-text",children:["Name: ",c.name]}),Object(m.jsxs)("p",{className:"card-text",children:["Username: ",c.username]}),Object(m.jsxs)("p",{className:"card-text",children:["Email: ",c.email]}),Object(m.jsxs)("p",{className:"card-text",children:["Phone: ",c.phone]}),Object(m.jsxs)("p",{className:"card-text",children:["Website: ",c.website]})]})})})};var u=function(){return Object(m.jsxs)(i.a,{children:[Object(m.jsx)(l.a,{path:"/",exact:!0,component:h}),Object(m.jsx)(l.a,{path:"/details",component:x})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,156)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};c(154);r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(u,{})}),document.getElementById("root")),O()},95:function(e,t,c){},96:function(e,t,c){}},[[155,1,2]]]);
//# sourceMappingURL=main.bf8d2b39.chunk.js.map