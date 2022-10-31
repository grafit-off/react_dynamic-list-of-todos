(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s,a=c(5),n=c.n(a),l=c(2),i=c(1),o=(c(10),c(11),c(3)),d=c.n(o),r=c(0),j=function(e){var t=e.todos,c=e.selectedTodo,s=e.onSelect;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.length?t.map((function(e){var t=e.id,a=e.title,n=e.completed,l=e.userId;return Object(r.jsxs)("tr",{"data-cy":"todo",className:d()({"has-background-info-light":t===(null===c||void 0===c?void 0:c.id)}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:t}),Object(r.jsx)("td",{className:"is-vcentered",children:n&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:d()({"has-text-success":n,"has-text-danger":!n}),children:a})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s({id:t,title:a,completed:n,userId:l})},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("span",{className:d()("far",{"fa-eye-slash":t===(null===c||void 0===c?void 0:c.id),"fa-eye":t!==(null===c||void 0===c?void 0:c.id)})})})})})]},t)})):Object(r.jsx)("tr",{children:Object(r.jsx)("td",{children:"Nothing's match request"})})})]})};!function(e){e.All="all",e.Completed="completed",e.Active="active"}(s||(s={}));var u=function(e){var t=e.selectValue,c=e.setSelectValue,a=e.query,n=e.setQuery;return Object(r.jsxs)("form",{className:"field has-addons",onSubmit:function(e){e.preventDefault()},children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){switch(e.target.value){case s.Active:c(s.Active);break;case s.Completed:c(s.Completed);break;default:c(s.All)}},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",value:a,onChange:function(e){n(e.target.value)},placeholder:"Search..."}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:a&&Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete","aria-label":"clear input",onClick:function(){return n("")}})})]})]})};function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=500,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(13);var h=function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})},m=function(e){var t=e.onClose,c=e.todo,s=Object(i.useState)(null),a=Object(l.a)(s,2),n=a[0],o=a[1],j=Object(i.useState)(!1),u=Object(l.a)(j,2),m=u[0],O=u[1],x=c.id,f=c.completed,v=c.title,p=c.userId;return Object(i.useEffect)((function(){(function(e){return b("/users/".concat(e))})(p).then((function(e){o(e),O(!0)})).catch((function(e){throw new Error(e)}))}),[]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),m?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(x)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close","aria-label":"Close todo info",onClick:t})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:v}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(r.jsx)("strong",{className:d()({"has-text-danger":!f,"has-text-success":f}),children:f?"Done":"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]}):Object(r.jsx)(h,{})]})},O=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(null),o=Object(l.a)(n,2),d=o[0],O=o[1],x=Object(i.useState)(!1),f=Object(l.a)(x,2),v=f[0],p=f[1],N=Object(i.useState)(""),y=Object(l.a)(N,2),g=y[0],C=y[1],k=Object(i.useState)(s.All),S=Object(l.a)(k,2),w=S[0],A=S[1],E=Object(i.useCallback)((function(e){O(e)}),[]);return Object(i.useEffect)((function(){b("/todos").then((function(e){a(e),p(!0)})).catch((function(e){throw new Error(e)}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(u,{selectValue:w,setSelectValue:A,query:g,setQuery:C})}),Object(r.jsx)("div",{className:"block",children:v?Object(r.jsx)(j,{todos:c.filter((function(e){var t=e.title.toLowerCase(),c=g.toLowerCase();return t.includes(c)})).filter((function(e){switch(w){case s.Active:return!e.completed;case s.Completed:return e.completed;default:return e}})),selectedTodo:d,onSelect:E}):Object(r.jsx)(h,{})})]})})}),d&&Object(r.jsx)(m,{todo:d,onClose:function(){return E(null)}})]})};n.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3cf40a39.chunk.js.map