"use strict";(self.webpackChunken_toute_quietude=self.webpackChunken_toute_quietude||[]).push([[289],{3570:function(e,t,n){n.d(t,{$8:function(){return c},cS:function(){return i},jn:function(){return l},nD:function(){return h}});var r=n(4165),a=n(5861),s="https://neminounet.pythonanywhere.com";function c(){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)((0,r.Z)().mark((function e(){var t,n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.localStorage.getItem("token"),e.next=3,fetch("".concat(s,"/availability/superuser/"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(t)}});case 3:return n=e.sent,e.next=6,n.json();case 6:if(a=e.sent,!n.ok){e.next=11;break}return e.abrupt("return",a);case 11:console.log(n.status,n.statusText);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(){return u.apply(this,arguments)}function u(){return(u=(0,a.Z)((0,r.Z)().mark((function e(){var t,n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.localStorage.getItem("token"),e.next=3,fetch("".concat(s,"/availability/user/"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(t)}});case 3:return n=e.sent,e.next=6,n.json();case 6:if(a=e.sent,!n.ok){e.next=11;break}return e.abrupt("return",a);case 11:console.log(n.status,n.statusText);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e,t){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a,o,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=window.localStorage.getItem("token"),e.next=3,fetch("".concat(s,"/availability/superuser/"),{method:"POST",body:JSON.stringify({date:t,heure:n}),headers:{"Content-Type":"application/json",Authorization:"Token ".concat(a)}});case 3:if(!(o=e.sent).ok){e.next=11;break}return e.next=7,c();case 7:return i=e.sent,e.abrupt("return",i);case 11:console.log(o.status,o.statusText);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.localStorage.getItem("token"),e.next=3,fetch("".concat(s,"/availability/superuser/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(n)}});case 3:if(!(a=e.sent).ok){e.next=11;break}return e.next=7,c();case 7:return o=e.sent,e.abrupt("return",o);case 11:console.log(a.status,a.statusText);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},7289:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var r=n(4165),a=n(5861),s=n(7689),c=n(1087),o=n(1413),i=n(9439),u=n(2791),l=n(1224),d=n(6727),h=n(4695),p=n(1134),f="https://neminounet.pythonanywhere.com";function m(e){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.localStorage.getItem("token"),e.next=3,fetch("".concat(f,"/availability/messages/?rdv_id=").concat(t),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(n)}});case 3:if(!(a=e.sent).ok){e.next=11;break}return e.next=7,a.json();case 7:return s=e.sent,e.abrupt("return",s);case 11:return console.log(a.status,a.statusText),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.localStorage.getItem("token"),e.next=3,fetch("".concat(f,"/availability/messages/"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:"Token ".concat(n)}});case 3:if(!(a=e.sent).ok){e.next=11;break}return e.next=7,a.json();case 7:s=e.sent,console.log(s),e.next=12;break;case 11:console.log(a.status,a.statusText);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return j.apply(this,arguments)}function j(){return(j=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.localStorage.getItem("token"),e.next=3,fetch("".concat(f,"/availability/messages/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(n)}});case 3:(a=e.sent).ok||console.log(a.status,a.statusText);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k="Chat_messageContainer__piqya",w="Chat_messageHeader__C1TLF",b="Chat_messageContent__wsB7T",Z="Chat_btnDelete__pcgKQ",_=n(184);var T=function(e){var t=e.rdv,n=(0,u.useContext)(l.Z).user,s=(0,u.useState)([]),c=(0,i.Z)(s,2),f=c[0],x=c[1],v=new Date;function j(e){var t=new Date(e);return"".concat(t.getDate()<10?"0"+t.getDate():t.getDate(),"-").concat(t.getMonth()<9?"0"+(t.getMonth()+1):t.getMonth()+1,"-").concat(t.getFullYear()," \xe0 ").concat(t.getHours()<10?"0"+t.getHours():t.getHours(),":").concat(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),":").concat(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())}function T(e){return"".concat(e.getFullYear(),"-").concat(e.getMonth()<9?"0"+(e.getMonth()+1):e.getMonth()+1,"-").concat(e.getDate()<10?"0"+e.getDate():e.getDate(),"T").concat(e.getHours()<10?"0"+e.getHours():e.getHours(),":").concat(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),":").concat(e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds())}var D,S=t.availability.date.split("-"),C=(0,i.Z)(S,3),N=C[0],M=C[1],z=C[2],E=new Date("".concat(M,"-").concat(N,"-").concat(z)),V="".concat((D=v).getDate()<10?"0"+D.getDate():D.getDate(),"-").concat(D.getMonth()<9?"0"+(D.getMonth()+1):D.getMonth()+1,"-").concat(D.getFullYear()).split("-"),I=(0,i.Z)(V,3),A=I[0],R=I[1],H=I[2],q=new Date("".concat(R,"-").concat(A,"-").concat(H));(0,u.useEffect)((function(){m(t.id).then((function(e){return x(e)}))}),[t]);var O=d.Ry({content:d.Z_().required("Vous devez \xe9crire quelque-chose ! :).").min(1,"Votre message doit contenir un minimum de un caract\xe8re.").max(1e3,"Votre message ne peut d\xe9passer les 1000 caract\xe8res.")}),F={content:""},K=(0,p.cI)({defaultValues:F,resolver:(0,h.X)(O)}),L=K.handleSubmit,P=K.register,G=K.reset,Y=K.clearErrors,J=K.formState,B=J.errors,Q=J.isSubmitting;function U(e){return X.apply(this,arguments)}function X(){return(X=(0,a.Z)((0,r.Z)().mark((function e(a){var s,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={rdv:t.id,sender:n.id,content:a.content,date_time:T(v)},Y(),e.next=4,g(s);case 4:return G(F),e.next=7,m(t.id);case 7:c=e.sent,x(c);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(){return($=(0,a.Z)((0,r.Z)().mark((function e(n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(n);case 2:return e.next=4,m(t.id);case 4:a=e.sent,x(a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,_.jsxs)("div",{className:"d-flex flex-column ai-center",children:[(0,_.jsx)("h3",{className:"mb-20",children:"Messagerie"}),(0,_.jsx)("div",{className:k,children:f.length>0?f.map((function(e,t){return(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{className:w,children:[(0,_.jsx)("p",{children:(0,_.jsxs)("small",{children:[e.sender.first_name," ",e.sender.last_name]})}),(0,_.jsx)("p",{children:(0,_.jsx)("small",{children:j(e.date_time)})})]}),(0,_.jsxs)("div",{className:b,children:[(0,_.jsx)("p",{children:e.content}),n.is_superuser&&(0,_.jsx)("div",{className:Z,onClick:function(){return function(e){return $.apply(this,arguments)}(e.id)},children:"x"})]})]},e.id)})):(0,_.jsx)("h5",{children:"Pas de message"})}),E>=q&&(0,_.jsxs)("form",{onSubmit:L(U),children:[(0,_.jsxs)("div",{children:[(0,_.jsx)("label",{htmlFor:"content",children:"Message"}),(0,_.jsx)("textarea",(0,o.Z)((0,o.Z)({name:"content",id:"",cols:"40",rows:"5"},P("content")),{},{onKeyDown:function(e){"Enter"===e.key&&!1===e.shiftKey&&""!==e.target.value.trim()&&(e.preventDefault(),L(U)())}})),(null===B||void 0===B?void 0:B.content)&&(0,_.jsx)("p",{className:"form-error",children:B.content.message})]}),(0,_.jsx)("div",{children:(0,_.jsx)("button",{disabled:Q,children:"Envoyer message"})})]})]})},D="RendezVousDetail_componentContainer__SUk-7",S="RendezVousDetail_rdvDetailContainer__AK8OM",C="RendezVousDetail_rdvInfo__PZceK",N=n(3570);var M=function(){var e=(0,u.useContext)(l.Z).user,t=(0,s.f_)(),n=(0,s.s0)();function o(){return(o=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,N.nD)(t);case 2:n("../rendezvous");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,_.jsxs)("div",{className:D,children:[(0,_.jsx)("h1",{children:"Rendez-Vous"}),(0,_.jsxs)("div",{className:S,children:[(0,_.jsxs)("div",{className:"d-flex flex-column ai-center",children:[(0,_.jsx)(c.OL,{className:"mb-20",to:"../rendezvous",children:(0,_.jsx)("button",{children:(0,_.jsx)("i",{className:"fa-solid fa-arrow-left"})})}),(0,_.jsxs)("div",{className:C,children:[(0,_.jsx)("h3",{children:"D\xe9tail du Rendez-vous"}),(0,_.jsxs)("h5",{children:["RDV du : ",t.availability.date," \xe0 ",t.availability.heure]}),(0,_.jsxs)("div",{className:"d-flex flex-column ai-center",children:[(0,_.jsxs)("p",{className:"mt-20",children:["Etudiant : ",t.user.first_name," ",t.user.last_name]}),(0,_.jsxs)("p",{className:"mt-20",children:["Niveau scolaire : ",t.degree]}),e.is_superuser&&(0,_.jsx)("button",{className:"mt-20 delete",onClick:function(){return function(e){return o.apply(this,arguments)}(t.availability.id)},children:"Supprimer RDV"})]})]})]}),(0,_.jsx)("div",{children:(0,_.jsx)(T,{rdv:t})})]})]})}}}]);
//# sourceMappingURL=289.b46d26eb.chunk.js.map