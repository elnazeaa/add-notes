(this["webpackJsonpadd-edit-remove-stuff"]=this["webpackJsonpadd-edit-remove-stuff"]||[]).push([[0],{22:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r,s=n(0),a=n.n(s),i=n(11),c=n.n(i),o=n(17),l=n(9),d=n(2),u=(n(22),n(1)),b=function(e){var t=e.isalert,n=e.createAlert,r=e.lists;return Object(s.useEffect)((function(){var e=setTimeout((function(){n()}),3e3);return function(){clearTimeout(e)}}),[t.alert,r]),Object(u.jsx)("p",{className:"alert alert-".concat(t.type),children:t.msg})},m=n(8),p=function(e){var t=e.item,n=e.removeItems,r=e.handleEditList;return Object(u.jsxs)("article",{className:"grocery-item",children:[Object(u.jsx)("p",{className:"title",children:t.name}),Object(u.jsxs)("div",{className:"btn-container",children:[Object(u.jsx)("button",{type:"button",className:"edit-btn",onClick:function(){return r(t.id,t.name)},children:Object(u.jsx)(m.a,{})}),Object(u.jsx)("button",{type:"button",className:"delete-btn",onClick:function(){return n(t.id)},children:Object(u.jsx)(m.b,{})})]})]})},j=function(e){var t=e.lists,n=e.removeItems,r=e.handleEditList;return Object(u.jsx)("div",{className:"grocery-list",children:t.map((function(e){return Object(u.jsx)(p,{item:e,removeItems:n,handleEditList:r},e.id)}))})},f=n(12),h=n(13).a.form(r||(r=Object(f.a)(["\n\n    .searchTitle {\n      font-size: 22px;\n      font-weight: 900;\n      text-align: center;\n      color: #496a0f;\n    }\n\n    .form-controls{\n        position:relative;\n       \n    }\n\n\n    .submitBtn{\n    position: absolute;\n    right: 0px;\n    border: none;\n    top: 50%;\n    transform: translate(-2%,-50%);\n    background: #496a0f;\n    width: 85px;\n    height: 41px;\n    border-radius: 50px 50px 50px 50px;\n    font-size: 17px;\n    color: #fff;\n    cursor:pointer;\n    }\n\n    .searchInput{\n      width: 100%;\n      padding: 12px 24px;\n\n      background-color: transparent;\n      transition: transform 250ms ease-in-out;\n      font-size: 14px;\n      line-height: 18px;\n\n      color: #575756;\n      background-color: transparent;\n      background-repeat: no-repeat;\n      background-size: 18px 18px;\n      background-position: 95% center;\n      border-radius: 50px;\n      border: 1px solid #575756;\n      transition: all 250ms ease-in-out;\n      backface-visibility: hidden;\n      transform-style: preserve-3d;\n\n      &::placeholder {\n        color: color(#575756 a(0.8));\n        text-transform: uppercase;\n        letter-spacing: 1.5px;\n      }\n      &:hover,\n      &:focus {\n        padding: 12px 0;\n        outline: 0;\n        border: 1px solid transparent;\n        border-bottom: 1px solid #575756;\n        border-radius: 0;\n        background-position: 100% center;\n      }\n    }\n  }\n"]))),x=function(e){var t=e.listName,n=e.handleGetInputValue,r=e.handleSubmitForm,s=e.edit;return Object(u.jsxs)(h,{className:"searchContainer",onSubmit:r,children:[Object(u.jsx)("p",{className:"searchTitle",children:"Go ahead, Add Your Lists"}),Object(u.jsxs)("div",{className:"form-controls",children:[Object(u.jsx)("input",{type:"text",className:"searchInput",placeholder:"e.g. eggs",value:t,onChange:n}),Object(u.jsx)("button",{type:"submit",className:"submitBtn",children:s?"Edit":"Submit"})]})]})};var O=function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)(localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[]),i=Object(d.a)(a,2),c=i[0],m=i[1],p=Object(s.useState)(!1),f=Object(d.a)(p,2),h=f[0],O=f[1],g=Object(s.useState)({alert:!0,msg:"",type:""}),v=Object(d.a)(g,2),N=v[0],S=v[1],y=Object(s.useState)(!1),k=Object(d.a)(y,2),I=k[0],E=k[1],L=Object(s.useState)(""),w=Object(d.a)(L,2),T=w[0],z=w[1];Object(s.useEffect)((function(){localStorage.setItem("items",JSON.stringify(c))}),[c]);var A=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return S({alert:e,msg:t,type:n})};return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("section",{className:"section-center",children:[I?Object(u.jsx)(b,{isalert:N,createAlert:A,lists:c}):"",Object(u.jsx)(x,{listName:n,handleGetInputValue:function(e){r(e.target.value)},handleSubmitForm:function(e){if(e.preventDefault(),n)if(h&&n){var t=c.map((function(e){return e.id===T?Object(l.a)(Object(l.a)({},e),{},{name:n}):e}));m(t),z(""),r(""),O(!1)}else E(!0),m([].concat(Object(o.a)(c),[{id:(new Date).getTime().toString(),name:n}])),A(!0,"List added successfuly","success"),r("");else E(!0),A(!0,"Please Enter List","danger")},edit:h}),Object(u.jsx)("div",{className:"grocery-container",children:0!==c.length?Object(u.jsx)(j,{lists:c,removeItems:function(e){var t=c.filter((function(t){return t.id!==e}));m(t),E(!0),A(!0,"One List is removed","danger")},handleEditList:function(e,t){O(!0),r(t),z(e)}}):""})]})})};c.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.07b73332.chunk.js.map