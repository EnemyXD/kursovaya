(this.webpackJsonpdelivery=this.webpackJsonpdelivery||[]).push([[0],{128:function(e,t,n){e.exports={error:"error_error__19x3I"}},138:function(e,t,n){},24:function(e,t,n){e.exports={NavBarMain:"navbar_NavBarMain__MFKpW",item:"navbar_item__2x_Tm",item_active:"navbar_item_active__15xqs"}},290:function(e,t,n){"use strict";n.r(t);var c,r=n(1),i=n.n(r),s=n(56),a=n.n(s),o=(n(138),n(11)),u=n(24),d=n.n(u),l=n(0),j=function(e){return Object(l.jsxs)("div",{className:d.a.NavBarMain,children:[Object(l.jsx)("div",{children:Object(l.jsx)(o.b,{exact:!0,className:d.a.item,activeClassName:d.a.item_active,to:"/",children:"Profile"})}),Object(l.jsx)("div",{children:Object(l.jsx)(o.b,{className:d.a.item,activeClassName:d.a.item_active,to:"/posts",children:"Posts"})}),Object(l.jsx)("div",{children:Object(l.jsx)(o.b,{className:d.a.item,activeClassName:d.a.item_active,to:"/finduser",children:"Find User"})}),Object(l.jsx)("div",{children:Object(l.jsx)(o.b,{className:d.a.item,activeClassName:d.a.item_active,to:"/chat",children:"Chat"})})]})},b=n(62),O=n.n(b),p=n(3),m=n(4),h=n(2),f=n(128),v=n.n(f),x=function(e){return Object(l.jsx)("div",{className:v.a.error,children:e.children})},g=n(6),y=n.n(g),C=n(10),w=n(9),A=n(5),S=n(129),_=n.n(S);!function(e){e[e.success=0]="success",e[e.error=1]="error"}(c||(c={}));var F,P=_.a.create({withCredentials:!0,baseURL:"http://localhost:2929"}),M=function(e,t,n){return P.post("/login",{email:e,password:t}).then((function(e){return e})).catch((function(e){var t;console.log(e),401===(null===(t=e.response)||void 0===t?void 0:t.status)&&n.setErrors({login:"login or password is wrong",pass:"login or password is wrong"})}))},N=function(){return P.post("/logout",{}).then((function(e){return e.data}))},k=function(e,t,n,c){return P.post("/reg",{login:e,email:t,pass:n,phone:c}).then((function(e){return e.data}))},E=function(){return P.get("/whoami").then((function(e){return e.data}))},T=function(e){return P.post("/find/email",{email:e}).then((function(e){return e.data}))},B=function(e){return P.post("/find/name",{name:e}).then((function(e){return e.data}))},R=n(79),D=function(e){F=e?Object(R.io)("http://localhost:2929?roomName="+e):Object(R.io)("http://localhost:2929")},I=function(){var e;null===(e=F)||void 0===e||e.disconnect()},q=function(e,t){var n;null===(n=F)||void 0===n||n.emit("message-to-all",{username:t,text:e})},V=function(e,t){var n;null===(n=F)||void 0===n||n.emit("message-to-room",{username:t,text:e})},L={CommonMessages:[],status:"pending",PrivateMessages:[]},H=function(e){return{type:"chat-reducer/messagesReceivedCommon",payload:{messages:e}}},U=function(e){return{type:"chat-reducer/privateMessagesRecieved",payload:{messages:e}}},Y=function(e){return{type:"chat-reducer/recieveOldMessagesCommon",payload:{messages:e}}},z=function(){return{type:"chat-reducer/clearCommonChat"}},J=function(){return{type:"chat-reducer/crearPrivateChat"}},G=function(e){return{type:"chat-reducer/recieveOldMessagesPrivate",payload:{messages:e}}},W=function(){return function(){var e=Object(C.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},K=function(){return function(){var e=Object(C.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===F||void 0===F||F.on("recieveOldCommon",(function(e){console.log("accepted old common"),t(Y(e))})),null===F||void 0===F||F.on("message-to-all",(function(e){console.log("accepted new common"),t(H({username:e.username,text:e.text,Data:e.Data}))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Q=function(){return function(){var e=Object(C.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(z()),t(J()),e.next=4,I();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},X={initApp:!1,login:"",email:"",auth:!1,findByEmail:null,initFBE:!1,findByName:null,initFBN:!1,registrationSuccess:!1},Z=function(e,t){return{type:"profile/SetProfileData",login:e,email:t}},$=function(){return{type:"profile/LOGOUT"}},ee=function(e){return{type:"profile/setFindByEmail",user:e}},te=function(e){return{type:"profile/setFindByName",array:e}},ne=function(){return{type:"profile/setInit"}},ce=function(){return{type:"profile/reg"}},re=function(){return{type:"profile/regOff"}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profile/SetProfileData":return Object(A.a)(Object(A.a)({},e),{},{login:t.login,email:t.email,auth:!0});case"profile/LOGOUT":return Object(A.a)(Object(A.a)({},e),{},{login:"",email:"",auth:!1});case"profile/setFindByEmail":return Object(A.a)(Object(A.a)({},e),{},{findByEmail:Object(w.a)(t.user),initFBE:!0});case"profile/setFindByName":return Object(A.a)(Object(A.a)({},e),{},{findByName:t.array,initFBN:!0});case"profile/setInit":return Object(A.a)(Object(A.a)({},e),{},{initApp:!0});case"profile/reg":return Object(A.a)(Object(A.a)({},e),{},{registrationSuccess:!0});case"profile/regOff":return Object(A.a)(Object(A.a)({},e),{},{registrationSuccess:!1});case"profile/initFBEOff":return Object(A.a)(Object(A.a)({},e),{},{initFBE:!1});case"profile/initFBNOff":return Object(A.a)(Object(A.a)({},e),{},{initFBN:!1});default:return e}},se=n(16),ae=function(e){var t=Object(h.b)(),n=se.a({login:se.b().required("Required"),pass:se.b().required("Required")});return Object(l.jsx)(m.d,{initialValues:{login:"",pass:""},onSubmit:function(e,n){n.setSubmitting(!0),t(function(e,t,n){return function(){var r=Object(C.a)(y.a.mark((function r(i){var s;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,M(e,t,n);case 2:s=r.sent,n.setSubmitting(!1),(null===s||void 0===s?void 0:s.data.resultCode)===c.success&&i(Z(s.data.d.login,s.data.d.email)),(null===s||void 0===s?void 0:s.data.resultCode)===c.error&&n.setErrors({login:"login or password is wrong",pass:"login or password is wrong"});case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(e.login,e.pass,n))},validationSchema:n,children:function(e){return Object(l.jsxs)(m.c,{id:"authorization",name:"authorization",children:[Object(l.jsx)("div",{children:"Email"}),Object(l.jsxs)("div",{children:[Object(l.jsx)(m.b,{type:"text",id:"login",name:"login"}),Object(l.jsx)(m.a,{name:"login",component:x})]}),Object(l.jsx)("div",{children:"Password"}),Object(l.jsxs)("div",{children:[Object(l.jsx)(m.b,{type:"password",id:"pass",name:"pass"}),Object(l.jsx)(m.a,{name:"pass",component:x})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{type:"submit",disabled:e.isSubmitting,children:"Login"}),Object(l.jsx)(o.b,{to:"/reg",children:"Registration"})]})]})}})},oe=function(e){return e.profilePage.email},ue=function(e){return e.profilePage.login},de=function(e){return e.profilePage.auth},le=function(e){return e.profilePage.findByEmail},je=function(e){return e.profilePage.findByName},be=function(e){return e.profilePage.initApp},Oe=function(e){return e.advertisement.initAll},pe=function(e){return e.advertisement.initMy},me=function(e){return e.advertisement.allAdvertisement},he=function(e){return e.advertisement.myAdvertisement},fe=function(e){return e.profilePage.registrationSuccess},ve=function(e){return e.advertisement.redirectAfterCreate},xe=function(e){return e.profilePage.initFBN},ge=function(e){return e.chatPage.CommonMessages},ye=function(e){return e.chatPage.PrivateMessages},Ce=function(e){var t=Object(h.c)(de),n=Object(p.e)();return t&&n.push("/"),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Authorization"}),Object(l.jsx)(ae,{})]})},we=function(e){var t=Object(h.c)(ue),n=Object(h.c)(oe),r=Object(h.b)();return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"PROFILE"}),Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:["Login: ",t]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:["E-mail: ",n]})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){r(function(){var e=Object(C.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:e.sent.resultCode===c.success&&(t(Q()),t($()));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Exit"})})]})},Ae=function(e){var t=Object(h.c)(de),n=Object(p.e)();return t||n.push("/login"),Object(l.jsx)("div",{children:Object(l.jsx)(we,{})})},Se=function(e){var t=Object(h.c)(fe),n=Object(h.b)(),r=Object(p.e)();t&&(n(re),r.push("/login"));var i=se.a({login:se.b().required("Required"),email:se.b().required("Required"),pass:se.b().required("Required"),repeatPass:se.b().required("Required")});return Object(l.jsx)(m.d,{initialValues:{login:"",email:"",pass:"",repeatPass:"",phone:""},onSubmit:function(e,t){var r,i,s,a;t.setSubmitting(!0),e.pass!==e.repeatPass?(t.setErrors({pass:"Password mismatch",repeatPass:"Password mismatch"}),t.setSubmitting(!1)):n((r=e.login,i=e.email,s=e.pass,a=e.phone,function(){var e=Object(C.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(r,i,s,a);case 2:e.sent.resultCode===c.success&&t(ce());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},validationSchema:i,children:function(e){return Object(l.jsxs)(m.c,{id:"reg",name:"reg",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{}),"Name"]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(m.b,{type:"text",id:"login",name:"login"}),Object(l.jsx)(m.a,{name:"login",component:x})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{}),"E-mail"]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(m.b,{type:"text",id:"email",name:"email"}),Object(l.jsx)(m.a,{name:"email",component:x})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{}),"Contact phone"]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(m.b,{type:"password",id:"phone",name:"phone"}),Object(l.jsx)(m.a,{name:"phone",component:x})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{}),"Password"]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(m.b,{type:"password",id:"pass",name:"pass"}),Object(l.jsx)(m.a,{name:"pass",component:x})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{}),"Repeat password"]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(m.b,{type:"password",id:"repeatPass",name:"repeatPass"}),Object(l.jsx)(m.a,{name:"repeatPass",component:x})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{type:"submit",disabled:e.isSubmitting,children:"reg"}),Object(l.jsx)(o.b,{to:"/login",children:"Login"})]})]})}})},_e=n(44),Fe=n.n(_e),Pe=function(e){var t=Object(h.c)(de),n=Object(p.e)();return t||n.push("/login"),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)(o.b,{className:Fe.a.item,activeClassName:Fe.a.item_active,exact:!0,to:"/find/byemail",children:"Find by email"})}),Object(l.jsx)("div",{children:Object(l.jsx)(o.b,{className:Fe.a.item,activeClassName:Fe.a.item_active,exact:!0,to:"/find/byname",children:"Find by name"})})]})},Me=function(e){var t=Object(h.b)();return Object(l.jsx)(m.d,{initialValues:{email:""},onSubmit:function(e,n){n.setSubmitting(!0),t(function(e,t){return function(){var n=Object(C.a)(y.a.mark((function n(r){var i;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T(e);case 2:i=n.sent,t.setSubmitting(!1),i.resultCode===c.success&&r(ee(i.d));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(e.email,n))},children:function(e){return Object(l.jsxs)(m.c,{id:"reg",name:"reg",children:[Object(l.jsx)("div",{children:"E-mail"}),Object(l.jsx)("div",{children:Object(l.jsx)(m.b,{type:"text",id:"email",name:"email"})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",disabled:e.isSubmitting,children:"Find"})})]})}})},Ne=function(){var e=Object(h.c)(le),t=Object(h.c)(de),n=Object(p.e)();return t||n.push("/login"),Object(l.jsxs)("div",{children:[Object(l.jsx)(Me,{}),e&&e.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:["Name: ",null===e||void 0===e?void 0:e.username]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:["Email: ",null===e||void 0===e?void 0:e.email]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:["Phone: ",null===e||void 0===e?void 0:e.contactPhone]})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){n.push("/chat/user/".concat(e.email))},children:"Chat"})}),Object(l.jsx)("hr",{color:"black"})]})}))]})},ke=i.a.memo((function(e){var t=Object(h.c)(de),n=Object(p.e)();Object(h.c)(xe);t||n.push("/login");var r=Object(h.c)(je),i=Object(h.b)();return console.log("findByName"),console.log(r),Object(l.jsxs)("div",{children:[Object(l.jsx)(m.d,{initialValues:{email:""},onSubmit:function(e,t){t.setSubmitting(!0),i(function(e,t){return function(){var n=Object(C.a)(y.a.mark((function n(r){var i;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,B(e);case 2:i=n.sent,t.setSubmitting(!1),i.resultCode===c.success&&r(te(i.d));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(e.email,t))},children:function(e){return Object(l.jsxs)(m.c,{id:"reg",name:"reg",children:[Object(l.jsx)("div",{children:"Name"}),Object(l.jsx)("div",{children:Object(l.jsx)(m.b,{type:"text",id:"email",name:"email"})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",disabled:e.isSubmitting,children:"Find"})})]})}}),r&&(null===r||void 0===r?void 0:r.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:["Name: ",e.username]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:["E mail: ",e.email]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:["Phone: ",e.contactPhone]})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){n.push("/chat/user/".concat(e.email))},children:"Chat"})}),Object(l.jsx)("hr",{color:"black"})]})})))]})})),Ee=n(36),Te=function(e){var t=Object(p.e)();Object(h.c)(de)||t.push("/login");return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:function(){t.push("/posts/my")},children:" My Advertisement"}),Object(l.jsx)("button",{onClick:function(){t.push("/posts/all")},children:" All Advertisement"})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){t.push("/posts/create")},children:"Create Advertisement"})})]})},Be=function(){return P.get("/advertisement/all").then((function(e){return e.data}))},Re=function(){return P.get("/advertisement/my").then((function(e){return e.data}))},De=function(e,t,n,c){var r=new FormData;return r.append("shortText",e),t&&r.append("description",t),n&&r.append("images",n),c&&r.append("tags",JSON.stringify(c)),P.post("/advertisement/create",r,{headers:{"Content-type":"multipart/form-data"}}).then((function(e){return e.data}))},Ie=function(e){return P.post("/find/all",{shortText:e}).then((function(e){return e.data}))},qe=function(e){return P.post("/find/my",{shortText:e}).then((function(e){return e.data}))},Ve=function(e){return P.post("delete",{id:e}).then((function(e){return e.data}))},Le={myAdvertisement:null,initMy:!1,allAdvertisement:null,initAll:!1,redirectAfterCreate:!1},He=function(e){return{type:"advertisement/setMyAdvertisement",advertisement:e}},Ue=function(e){return{type:"advertisement/setAllAdvertisement",advertisement:e}},Ye=function(){return{type:"advertisement/setRedirectOn"}},ze=function(){return{type:"advertisement/setRedirectOff"}},Je=function(){return{type:"advertisement/setInitAllFalse"}},Ge=function(){return{type:"advertisement/setInitMyFalse"}},We=function(e){return function(){var t=Object(C.a)(y.a.mark((function t(n){var r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Be();case 2:r=t.sent,null===e||void 0===e||e.setSubmitting(!1),r.resultCode===c.success&&n(Ue(r.d));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Ke=function(e){return function(){var t=Object(C.a)(y.a.mark((function t(n){var r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Re();case 2:r=t.sent,null===e||void 0===e||e.setSubmitting(!1),r.resultCode===c.success&&n(He(r.d));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Qe=n(61),Xe=n.n(Qe),Ze=function(){var e=Object(p.e)();Object(h.c)(de)||e.push("/login");var t=Object(h.c)(Oe),n=Object(h.b)(),i=Object(h.c)(me);console.log(t+"1"),Object(r.useEffect)((function(){return t||n(We()),function(){console.log(t+"2"),n(Je()),console.log(t+"3")}}),[]);return Object(l.jsx)("div",{children:Object(l.jsx)(m.d,{initialValues:{findFromAll:""},onSubmit:function(e,t){t.setSubmitting(!0),console.log(e.findFromAll),n(function(e,t){return function(){var n=Object(C.a)(y.a.mark((function n(r){var i;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Ie(t);case 2:i=n.sent,e.setSubmitting(!1),i.resultCode===c.success&&r(Ue(i.d));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(t,e.findFromAll))},children:function(e){return Object(l.jsxs)(m.c,{id:"all",name:"all",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(m.b,{type:"text",id:"findFromAll",name:"findFromAll"}),Object(l.jsx)(m.a,{name:"findFromAll",component:x}),Object(l.jsx)("button",{type:"submit",disabled:e.isSubmitting,children:"Find"})]}),i&&(null===i||void 0===i?void 0:i.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:e.images.file,className:Xe.a.img})}),Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:["shortText: ",e.shortText]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:["description: ",e.description," "]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:["Created: ",e.createdAt]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:["Updated: ",e.updatedAt]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:["Tags:"," ",e.tags.map((function(e){return Object(l.jsxs)("span",{children:[e,", "]})}))]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:["userId: ",e.userId]})}),Object(l.jsx)("hr",{color:"black"})]})})))]})}})})},$e=function(){var e=Object(p.e)();Object(h.c)(de)||e.push("/login");var t=Object(h.c)(pe),n=Object(h.b)(),i=Object(h.c)(he);t||n(Ke()),console.log(t);Object(r.useEffect)((function(){return t||n(We()),function(){console.log(t+"2"),n(Ge()),console.log(t+"3")}}),[]);return Object(l.jsx)("div",{children:Object(l.jsx)(m.d,{initialValues:{findFromMy:""},onSubmit:function(e,t){t.setSubmitting(!0),n(function(e,t){return function(){var n=Object(C.a)(y.a.mark((function n(r){var i;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,qe(t);case 2:i=n.sent,e.setSubmitting(!1),i.resultCode===c.success&&r(He(i.d));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(t,e.findFromMy))},children:function(e){return Object(l.jsxs)(m.c,{id:"my",name:"my",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(m.b,{type:"text",id:"findFromMy",name:"findFromMy"}),Object(l.jsx)(m.a,{name:"findFromMy",component:x}),Object(l.jsx)("button",{type:"submit",disabled:e.isSubmitting,children:"Find"})]}),i&&i.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:e.images.file,className:Xe.a.img})}),Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:["shortText: ",e.shortText]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:["description: ",e.description," "]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:["Created: ",e.createdAt]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:["Updated: ",e.updatedAt]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:["Tags:"," ",e.tags.map((function(e){return Object(l.jsxs)("span",{children:[e,", "]})}))]})}),Object(l.jsxs)("div",{children:["DeleteStatus: ",e.isDeleted?"deleted":"available"]}),Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:["userId: ",e.userId]})}),!e.isDeleted&&Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){var t;n((t=e._id,function(){var e=Object(C.a)(y.a.mark((function e(n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ve(t);case 2:e.sent.resultCode===c.success&&n(Ke());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:"DELETE"})}),Object(l.jsx)("hr",{color:"black"})]})}))]})}})})},et=function(e){var t=Object(h.c)(ve),n=Object(h.b)(),r=Object(p.e)();Object(h.c)(de)||r.push("/login"),t&&(n(ze()),r.push("/posts/my"));var i=se.a({shortText:se.b().required("Required")});return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"Create Advertisement"}),Object(l.jsx)(m.d,{initialValues:{shortText:"",description:"",tags:"",images:null},onSubmit:function(e,t){console.log(e.images),t.setSubmitting(!0);var r=e.tags.split(" ");n(function(e,t,n,r,i){return function(){var s=Object(C.a)(y.a.mark((function s(a){var o;return y.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return console.log(r),s.next=3,De(t,n,r,i);case 3:o=s.sent,e.setSubmitting(!1),o.resultCode===c.success&&a(Ye());case 6:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}(t,e.shortText,e.description,e.images,r))},validationSchema:i,children:function(e){return Object(l.jsxs)(m.c,{id:"createAdv",name:"createAdv",children:[Object(l.jsx)("div",{children:"shortText"}),Object(l.jsxs)("div",{children:[Object(l.jsx)(m.b,{type:"text",id:"shortText",name:"shortText"}),Object(l.jsx)(m.a,{name:"shortText",component:x})]}),Object(l.jsx)("div",{children:"description"}),Object(l.jsxs)("div",{children:[Object(l.jsx)(m.b,{type:"text",id:"description",name:"description"}),Object(l.jsx)(m.a,{name:"description",component:x})]}),Object(l.jsx)("div",{children:"images"}),Object(l.jsx)("input",{accept:".jpg, .jpeg, .png",type:"file",onChange:function(t){var n;(null===(n=t.target.files)||void 0===n?void 0:n.length)&&(console.log(t.target.files[0]),e.setFieldValue("images",t.target.files[0]))}}),Object(l.jsx)("div",{children:"tags"}),Object(l.jsxs)("div",{children:[Object(l.jsx)(m.b,{type:"text",id:"tags",name:"tags"}),Object(l.jsx)(m.a,{name:"tags",component:x})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",disabled:e.isSubmitting,children:"Create"})})]})}})]})},tt=function(){var e=Object(h.c)(de),t=Object(p.e)();return e||t.push("/login"),Object(l.jsx)("div",{children:Object(l.jsx)("div",{children:Object(l.jsx)(o.b,{to:"/chat/all",children:"Common chat"})})})},nt=n(19),ct=function(){var e=Object(h.c)(de),t=Object(p.e)();e||t.push("/login");var n=Object(h.c)(oe),c=Object(r.useState)(""),i=Object(nt.a)(c,2),s=i[0],a=i[1],o=Object(h.c)(ge),u=Object(r.useState)(!1),d=Object(nt.a)(u,2),j=d[0],b=d[1],O=Object(r.useRef)(null);Object(r.useEffect)((function(){var e;j&&(null===(e=O.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}),[o]);return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"CHAT COMMON"}),Object(l.jsxs)("div",{style:{height:"500px",overflowY:"auto"},onScroll:function(e){var t=e.currentTarget;Math.abs(t.scrollHeight-t.scrollTop-t.clientHeight)<300?!j&&b(!0):j&&b(!1)},children:[o.map((function(e){return Object(l.jsx)(rt,{msg:e})})),Object(l.jsx)("div",{ref:O})]}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("textarea",{onChange:function(e){return a(e.currentTarget.value)},value:s}),Object(l.jsx)("div",{})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){q(s,n),a("")},children:"Send"})})]})]})},rt=i.a.memo((function(e){var t=e.msg;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("b",{children:["Username: ",t.username]}),Object(l.jsx)("br",{}),"Text: ",t.text,Object(l.jsx)("br",{}),"Date: ",t.Data,Object(l.jsx)("hr",{})]})})),it=function(){var e=Object(h.c)(de),t=Object(p.e)(),n=t.location.pathname.split("/"),c=n[n.length-1],i=Object(h.c)(oe),s=Object(h.b)();e||t.push("/login"),Object(r.useEffect)((function(){return s(Q()),D("".concat(i,"-").concat(c)),s(function(){var e=Object(C.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===F||void 0===F||F.on("recieveOldPrivate",(function(e){console.log(e),t(G(e))})),null===F||void 0===F||F.on("message-to-room",(function(e){console.log(e),t(U({username:e.username,text:e.text,Data:e.Data}))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),function(){s(Q()),s(W()),s(K())}}),[]);var a=Object(r.useState)(""),o=Object(nt.a)(a,2),u=o[0],d=o[1],j=Object(r.useState)(!1),b=Object(nt.a)(j,2),O=b[0],m=b[1],f=Object(h.c)(ye),v=Object(r.useRef)(null);Object(r.useEffect)((function(){var e;O&&(null===(e=v.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}),[f]);return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:["Chat with ",c]}),Object(l.jsxs)("div",{style:{height:"500px",overflowY:"auto"},onScroll:function(e){var t=e.currentTarget;Math.abs(t.scrollHeight-t.scrollTop-t.clientHeight)<300?!O&&m(!0):O&&m(!1)},children:[f.map((function(e){return Object(l.jsx)(rt,{msg:e})})),Object(l.jsx)("div",{ref:v})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("textarea",{onChange:function(e){return d(e.currentTarget.value)},value:u})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){V(u,i),d("")},children:"Send"})})]})]})},st=Object(Ee.c)(p.f)((function(e){var t=Object(h.c)(be),n=Object(h.c)(de),i=Object(h.b)();return t||i(function(){var e=Object(C.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:(n=e.sent)&&t(ne()),n.resultCode===c.success&&t(Z(n.d.login,n.d.email));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object(r.useEffect)((function(){return n&&i(function(){var e=Object(C.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(Q()),t(W()),t(K());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),function(){i(Q())}}),[n]),Object(l.jsxs)("div",{className:O.a.MainDiv,children:[Object(l.jsx)("div",{className:O.a.Header,children:"DELIVERY"}),Object(l.jsxs)("div",{className:O.a.AllContent,children:[Object(l.jsx)(j,{}),Object(l.jsx)(p.a,{exact:!0,path:"/",component:Ae}),Object(l.jsx)(p.a,{exact:!0,path:"/finduser",component:Pe}),Object(l.jsx)(p.a,{exact:!0,path:"/find/byemail",component:Ne}),Object(l.jsx)(p.a,{exact:!0,path:"/find/byname",component:ke}),Object(l.jsx)(p.a,{exact:!0,path:"/posts",component:Te}),Object(l.jsx)(p.a,{exact:!0,path:"/posts/all",component:Ze}),Object(l.jsx)(p.a,{exact:!0,path:"/posts/my",component:$e}),Object(l.jsx)(p.a,{exact:!0,path:"/posts/create",component:et}),Object(l.jsx)(p.a,{path:"/login",component:Ce}),Object(l.jsx)(p.a,{path:"/reg",component:Se}),Object(l.jsx)(p.a,{exact:!0,path:"/chat/all",component:ct}),Object(l.jsx)(p.a,{exact:!0,path:"/chat",component:tt}),Object(l.jsx)(p.a,{exact:!0,path:"/chat/user/:user",component:it})]})]})})),at=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,291)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))},ot=n(133),ut=Object(Ee.b)({profilePage:ie,advertisement:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"advertisement/setAllAdvertisement":return Object(A.a)(Object(A.a)({},e),{},{allAdvertisement:t.advertisement,initAll:!0});case"advertisement/setMyAdvertisement":return Object(A.a)(Object(A.a)({},e),{},{myAdvertisement:t.advertisement,initMy:!0});case"advertisement/setRedirectOn":return Object(A.a)(Object(A.a)({},e),{},{redirectAfterCreate:!0});case"advertisement/setRedirectOff":return Object(A.a)(Object(A.a)({},e),{},{redirectAfterCreate:!1});case"advertisement/setInitAllFalse":return Object(A.a)(Object(A.a)({},e),{},{initAll:!1});case"advertisement/setInitMyFalse":return Object(A.a)(Object(A.a)({},e),{},{initMy:!1});default:return e}},chatPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"chat-reducer/recieveOldMessagesPrivate":return Object(A.a)(Object(A.a)({},e),{},{PrivateMessages:[].concat(Object(w.a)(e.PrivateMessages),Object(w.a)(t.payload.messages))});case"chat-reducer/recieveOldMessagesCommon":return Object(A.a)(Object(A.a)({},e),{},{CommonMessages:[].concat(Object(w.a)(e.CommonMessages),Object(w.a)(t.payload.messages))});case"chat-reducer/messagesReceivedCommon":return Object(A.a)(Object(A.a)({},e),{},{CommonMessages:[].concat(Object(w.a)(e.CommonMessages),[t.payload.messages])});case"chat-reducer/privateMessagesRecieved":return Object(A.a)(Object(A.a)({},e),{},{PrivateMessages:[].concat(Object(w.a)(e.PrivateMessages),[t.payload.messages])});case"chat-reducer/clearCommonChat":return Object(A.a)(Object(A.a)({},e),{},{CommonMessages:[]});case"chat-reducer/crearPrivateChat":return Object(A.a)(Object(A.a)({},e),{},{PrivateMessages:[]});default:return Object(A.a)({},e)}}}),dt=Object(Ee.d)(ut,Object(Ee.a)(ot.a));a.a.render(Object(l.jsx)(o.a,{children:Object(l.jsx)(h.a,{store:dt,children:Object(l.jsx)(st,{})})}),document.getElementById("root")),at()},44:function(e,t,n){e.exports={item:"FindUsers_item__35RHQ",item_active:"FindUsers_item_active__1q0B0"}},61:function(e,t,n){e.exports={img:"posts_img__r62Vy"}},62:function(e,t,n){e.exports={MainDiv:"App_MainDiv__1wx72",Header:"App_Header__1mk9A",AllContent:"App_AllContent__2W8-l",NavBar:"App_NavBar__2XiYb",Content:"App_Content__13F6u"}}},[[290,1,2]]]);
//# sourceMappingURL=main.0fe34093.chunk.js.map