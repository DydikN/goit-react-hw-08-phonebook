"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[883],{5883:function(n,t,e){e.r(t),e.d(t,{default:function(){return L}});var r=e(9434),a=e(4942),i=e(1413),o=e(9439),c=e(2791),s=e(1686),u=e.n(s),l=e(8551),m=e(5954),f=e(4554),d="contact-form_btnSubmit__AJIwo",h={name:"",number:""},x=e(5036),v=function(n){return n.contacts.items},b=function(n){return n.contacts.isLoading},j=function(n){return n.contacts.error},_=function(n){var t=n.filter,e=n.contacts,r=t.toLowerCase();return e.items.filter((function(n){var t=n.name,e=n.number;return t.toLowerCase().includes(r)||e.toLowerCase().includes(r)}))},g=e(184);var p=function(){var n=(0,c.useState)((0,i.Z)({},h)),t=(0,o.Z)(n,2),e=t[0],s=t[1],b=(0,r.v9)(v),j=(0,r.I0)();(0,c.useEffect)((function(){j((0,x.yF)())}),[j]);var _=function(n){var t=n.target,e=t.name,r=t.value;s((function(n){return(0,i.Z)((0,i.Z)({},n),{},(0,a.Z)({},e,r))}))},p=e.name,Z=e.number;return(0,g.jsx)(f.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:(0,g.jsxs)(f.Z,{component:"form",onSubmit:function(n){n.preventDefault();var t=new FormData(n.currentTarget);if(b.find((function(n){return n.name.toLowerCase()===p.toLowerCase()})))return u().Notify.failure("".concat(p," is already in contacts"));var e={name:t.get("name").trim(),number:t.get("number").trim()};if(""===p.trim()&&""===Z.trim())return u().Notify.failure("Please fill out contact form");j((0,x.uK)(e)),s((0,i.Z)({},h))},noValidate:!0,sx:{mt:1},children:[(0,g.jsx)(m.Z,{margin:"normal",required:!0,fullWidth:!0,onChange:_,value:p,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",type:"text",label:"Name",name:"name",autoFocus:!0}),(0,g.jsx)(m.Z,{margin:"normal",required:!0,fullWidth:!0,onChange:_,value:Z,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",name:"number",label:"number",type:"tel"}),(0,g.jsx)(l.Z,{className:d,type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,backgroundColor:"rgb(39, 61, 164)"},children:"Add contact"})]})})},Z=e(5653),C=function(n){return n.filter},y=function(){var n=(0,r.I0)(),t=(0,r.v9)(C);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("p",{children:"Find contacts by name"}),(0,g.jsx)("input",{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:function(t){var e=t.target;n((0,Z.T)(e.value))},value:t})]})},w="contact-list_list__vtZjR",N="contact-list_item__Meq8z",k="contact-list_text__K3EqJ",A="contact-list_button__+fV1o",z=function(){var n=(0,r.v9)(_),t=(0,r.I0)();return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("ul",{className:w,children:n.map((function(n){var e=n.id,r=n.name,a=n.number;return(0,g.jsxs)("li",{className:N,children:[(0,g.jsxs)("p",{className:k,children:[r,": ",a]}),(0,g.jsx)("button",{className:A,type:"button",onClick:function(){return function(n){t((0,x.GK)(n))}(e)},children:"Delete"})]},e)}))})})},F=e(7593),L=function(){var n=(0,r.v9)(b),t=(0,r.v9)(j),e=Boolean((0,r.v9)(_).length);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h1",{children:"Phonebook"}),(0,g.jsx)(p,{}),(0,g.jsxs)("div",{children:[(0,g.jsx)("h2",{children:"Constacts"}),n&&(0,g.jsx)(F.Z,{}),t&&u().Notify.failure(t.message),(0,g.jsx)(y,{}),e?(0,g.jsx)(z,{}):(0,g.jsx)("p",{children:"No contacts"})]})]})}}}]);
//# sourceMappingURL=883.37b4c594.chunk.js.map