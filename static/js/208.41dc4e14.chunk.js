"use strict";(self.webpackChunken_toute_quietude=self.webpackChunken_toute_quietude||[]).push([[208],{3570:function(e,t,n){n.d(t,{$8:function(){return s},cS:function(){return c},jn:function(){return l},nD:function(){return h}});var r=n(4165),a=n(5861),i="https://neminounet.pythonanywhere.com";function s(){return u.apply(this,arguments)}function u(){return(u=(0,a.Z)((0,r.Z)().mark((function e(){var t,n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.localStorage.getItem("token"),e.next=3,fetch("".concat(i,"/availability/superuser/"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(t)}});case 3:return n=e.sent,e.next=6,n.json();case 6:if(a=e.sent,!n.ok){e.next=11;break}return e.abrupt("return",a);case 11:console.log(n.status,n.statusText);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)((0,r.Z)().mark((function e(){var t,n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.localStorage.getItem("token"),e.next=3,fetch("".concat(i,"/availability/user/"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(t)}});case 3:return n=e.sent,e.next=6,n.json();case 6:if(a=e.sent,!n.ok){e.next=11;break}return e.abrupt("return",a);case 11:console.log(n.status,n.statusText);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e,t){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a,u,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=window.localStorage.getItem("token"),e.next=3,fetch("".concat(i,"/availability/superuser/"),{method:"POST",body:JSON.stringify({date:t,heure:n}),headers:{"Content-Type":"application/json",Authorization:"Token ".concat(a)}});case 3:if(!(u=e.sent).ok){e.next=11;break}return e.next=7,s();case 7:return c=e.sent,e.abrupt("return",c);case 11:console.log(u.status,u.statusText);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.localStorage.getItem("token"),e.next=3,fetch("".concat(i,"/availability/superuser/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(n)}});case 3:if(!(a=e.sent).ok){e.next=11;break}return e.next=7,s();case 7:return u=e.sent,e.abrupt("return",u);case 11:console.log(a.status,a.statusText);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1208:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(4165),a=n(5861),i=n(9439),s=n(2791),u=n(1413),c=n(6727),o=n(4695),l=n(1134),d=n(1224),h=n(3570),f=n(184);var p=function(e){var t,n=e.postRDV,p=e.getAllRDV,v=e.setRDVList,x=e.today,m=(0,s.useContext)(d.Z).user,j=(0,s.useState)([]),b=(0,i.Z)(j,2),y=b[0],g=b[1],Z=(0,s.useState)(""),_=(0,i.Z)(Z,2),w=_[0],k=_[1],z=c.Ry({degree:c.Z_().required("vous devez choisir une classe"),date:c.Z_().required("Vous devez choisir une date"),heure:c.Z_().required("Vous devez choisir une heure")}),C={degree:"",date:"",heure:""},S=(0,l.cI)({defaultValues:C,resolver:(0,o.X)(z)}),D=S.handleSubmit,N=S.register,T=S.reset,R=S.formState.isSubmitting;function V(){return E.apply(this,arguments)}function E(){return(E=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.cS)();case 2:(t=e.sent)?(n=t.reduce((function(e,t){return e[t.date]||(e[t.date]=[]),e[t.date].push({id:t.id,heure:t.heure,is_taken:t.is_taken}),e}),{}),g(n)):g([]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return(L=(0,a.Z)((0,r.Z)().mark((function e(t){var a,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={user:m.id,degree:t.degree,availability:t.heure},e.next=3,n(a);case 3:return T(C),e.next=6,V();case 6:return e.next=8,p();case 8:i=e.sent,v(i);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,s.useEffect)((function(){V()}),[]),console.log(y),(0,f.jsx)("div",{children:(0,f.jsxs)("form",{onSubmit:D((function(e){return L.apply(this,arguments)})),children:[(0,f.jsxs)("div",{className:"d-flex flex-column",children:[(0,f.jsx)("label",{htmlFor:"degree",children:"Selectionner la classe"}),(0,f.jsxs)("select",(0,u.Z)((0,u.Z)({name:"degree"},N("degree")),{},{children:[(0,f.jsx)("option",{value:"",disabled:!0,children:"Choisissez une classe"}),["CP","CE1","CE2","CM1","CM2","6E","5E","4E","3E"].map((function(e,t){return(0,f.jsx)("option",{value:e,children:e},t)}))]}))]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("label",{htmlFor:"date",children:"Selectionner la date"}),(0,f.jsxs)("select",(0,u.Z)((0,u.Z)({name:"date"},N("date")),{},{onChange:function(e){return k(e.target.value)},children:[(0,f.jsx)("option",{value:"",disabled:!0,children:"Choisissez une date"}),Object.keys(y).filter((function(e){var t=e.split("-"),n=(0,i.Z)(t,3),r=n[0],a=n[1],s=n[2],u=new Date("".concat(a,"-").concat(r,"-").concat(s)),c=x.split("-"),o=(0,i.Z)(c,3),l=o[0],d=o[1],h=o[2];return u>=new Date("".concat(d,"-").concat(l,"-").concat(h))})).map((function(e,t){return(0,f.jsx)("option",{value:e,children:e},t)}))]}))]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("label",{htmlFor:"heure",children:"Selectionner l'heure"}),(0,f.jsxs)("select",(0,u.Z)((0,u.Z)({name:"heure"},N("heure")),{},{children:[(0,f.jsx)("option",{value:"",disabled:!0,children:"Choisissez une heure"}),null===(t=y[w])||void 0===t?void 0:t.filter((function(e){return!0!==e.is_taken})).map((function(e,t){return(0,f.jsx)("option",{value:e.id,children:e.heure},t)}))]}))]}),(0,f.jsx)("div",{children:(0,f.jsx)("button",{disabled:R,children:"Prendre RDV"})})]})})},v=n(1087);var x=function(e){var t=e.rdvList,n=e.today,r=e.user,a=(0,s.useState)(""),u=(0,i.Z)(a,2),c=u[0],o=u[1],l=(0,s.useState)(""),d=(0,i.Z)(l,2),h=d[0],p=d[1];return(0,f.jsxs)("div",{className:"d-flex flex-column",children:[(0,f.jsxs)("form",{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("label",{htmlFor:"year",children:"Selectionner l'ann\xe9e"}),(0,f.jsxs)("select",{name:"year",onChange:function(e){return o(e.target.value)},children:[(0,f.jsx)("option",{value:"",disabled:!0,children:"Choisissez une ann\xe9e"}),["2023","2024","2025","2026","2027","2028","2029","2030"].map((function(e,t){return(0,f.jsx)("option",{value:e,children:e},t)}))]})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("label",{htmlFor:"month",children:"Selectionner le mois"}),(0,f.jsxs)("select",{name:"month",onChange:function(e){return p(e.target.value)},children:[(0,f.jsx)("option",{value:"",disabled:!0,children:"Choisissez un mois"}),["01","02","03","04","05","06","07","08","09","10","11","12"].map((function(e,t){return(0,f.jsx)("option",{value:e,children:e},t)}))]})]})]}),r.is_superuser?t.filter((function(e){return e.availability.date.includes(c)})).filter((function(e){return e.availability.date.includes("-".concat(h,"-"))})).filter((function(e){return e.availability.date<n})).map((function(e){return(0,f.jsx)(v.OL,{to:"../rendezvous/".concat(e.id),children:(0,f.jsxs)("button",{className:"rdv mb-20",children:["Niveau : ",e.degree," le ",e.availability.date," \xe0 ",e.availability.heure," ",e.user.first_name," ",e.user.last_name]},e.id)},e.id)})):t.filter((function(e){return e.availability.date.includes(c)})).filter((function(e){return e.availability.date.includes("-".concat(h,"-"))})).filter((function(e){return e.availability.date<n})).filter((function(e){return e.user.id===r.id})).map((function(e){return(0,f.jsx)(v.OL,{to:"../rendezvous/".concat(e.id),children:(0,f.jsxs)("button",{className:"rdv mb-20",children:["Niveau : ",e.degree," le ",e.availability.date," \xe0 ",e.availability.heure," ",e.user.first_name," ",e.user.last_name]},e.id)},e.id)}))]})},m=n(1938),j="RendezVous_rdvContainer__S1d+s",b="RendezVous_rdvContent__FXbss",y="RendezVous_rdvBox__vOBm0";var g=function(){var e=(0,s.useContext)(d.Z).user,t=new Date,n="".concat(t.getDate()<10?"0"+t.getDate():t.getDate(),"-").concat(t.getMonth()<9?"0"+(t.getMonth()+1):t.getMonth()+1,"-").concat(t.getFullYear()),u=(0,s.useState)([]),c=(0,i.Z)(u,2),o=c[0],l=c[1];return(0,s.useEffect)((function(){function e(){return(e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.A$)();case 2:t=e.sent,l(t||[]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,f.jsxs)("div",{className:j,children:[(0,f.jsx)("h2",{children:"Rendez-Vous"}),(0,f.jsxs)("div",{className:b,children:[(0,f.jsxs)("div",{className:y,children:[(0,f.jsx)("h3",{children:"Rendez-vous \xe0 venir"}),e.is_superuser?o.length>0?o.filter((function(e){var t=e.availability.date.split("-"),r=(0,i.Z)(t,3),a=r[0],s=r[1],u=r[2],c=new Date("".concat(s,"-").concat(a,"-").concat(u)),o=n.split("-"),l=(0,i.Z)(o,3),d=l[0],h=l[1],f=l[2];return c>=new Date("".concat(h,"-").concat(d,"-").concat(f))})).map((function(t){return(0,f.jsx)(v.OL,{to:"../rendezvous/".concat(t.id),children:(0,f.jsxs)("button",{className:"m-10",disabled:t.availability.date>n&&!e.is_superuser,children:["Niveau : ",t.degree," le ",t.availability.date," \xe0 ",t.availability.heure," ",e.is_superuser?t.user.first_name:""," ",e.is_superuser?t.user.last_name:""]})},t.id)})):(0,f.jsx)("p",{children:"Pas de rendez-vous de plannifi\xe9"}):o.length>0?o.filter((function(e){var t=e.availability.date.split("-"),r=(0,i.Z)(t,3),a=r[0],s=r[1],u=r[2],c=new Date("".concat(s,"-").concat(a,"-").concat(u)),o=n.split("-"),l=(0,i.Z)(o,3),d=l[0],h=l[1],f=l[2];return c>=new Date("".concat(h,"-").concat(d,"-").concat(f))})).filter((function(t){return t.user.id===e.id})).map((function(t){return(0,f.jsx)(v.OL,{to:"../rendezvous/".concat(t.id),children:(0,f.jsxs)("button",{className:"m-10",children:["Niveau : ",t.degree," le ",t.availability.date," \xe0 ",t.availability.heure," ",e.is_superuser?t.user.first_name:""," ",e.is_superuser?t.user.last_name:""]})},t.id)})):(0,f.jsx)("p",{children:"Pas de rendez-vous de plannifi\xe9"})]}),!e.is_superuser&&(0,f.jsxs)("div",{className:y,children:[(0,f.jsx)("h3",{children:"Prendre Rendez-vous"}),(0,f.jsx)(p,{postRDV:m.ey,getAllRDV:m.A$,setRDVList:l,today:n})]}),(0,f.jsxs)("div",{className:y,children:[(0,f.jsx)("h3",{children:"Historique"}),(0,f.jsx)(x,{rdvList:o,today:n,user:e})]})]})]})}}}]);
//# sourceMappingURL=208.41dc4e14.chunk.js.map