"use strict";(self.webpackChunken_toute_quietude=self.webpackChunken_toute_quietude||[]).push([[998],{7998:function(e,s,r){r.r(s),r.d(s,{default:function(){return v}});var a=r(4165),n=r(4925),i=r(1413),t=r(5861),o=r(6727),l=r(4695),m=r(1134),d=r(7689),c=r(3030),p=r(2791),u=r(1224),h="Inscription_formContent__zgmdL",x="Inscription_formButton__8Fhf0",f=r(184),j=["passwordVal"];var v=function(){var e=(0,p.useContext)(u.Z).user,s=(0,d.s0)(),r=o.Ry({last_name:o.Z_().required("Veuillez renseigner votre nom.").min(2,"Votre nom doit comporter un minimum de deux caract\xe8res."),first_name:o.Z_().required("Veuillez renseigner votre pr\xe9nom.").min(2,"Votre pr\xe9nom doit comporter un minimum de deux caract\xe8res."),email:o.Z_().required("Veuillez renseigner une adresse email.").email("L'adresse email doit \xeatre valide."),password:o.Z_().required("Le mot de passe est obligatoire").min(6,"Le mot de passe doit comporter un minimum de six caract\xe8res.").matches(/^(?=.*[A-Z])(?=.*\d).+$/,"Le mot de passe doit comporter au moins une Majuscule et un chiffre."),passwordVal:o.Z_().required("Le mot de passe est obligatoire.").oneOf([o.iH("password"),""],"Les mots de passes ne sont pas identiques")}),v=(0,m.cI)({defaultValues:{last_name:"",first_name:"",email:"",password:"",passwordVal:""},resolver:(0,l.X)(r)}),_=v.handleSubmit,g=v.register,w=v.setError,Z=v.clearErrors,b=v.formState,N=b.errors,V=b.isSubmitting;function y(){return(y=(0,t.Z)((0,a.Z)().mark((function e(r){var i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.passwordVal,i=(0,n.Z)(r,j),e.prev=1,Z(),e.next=5,(0,c.r4)(i);case 5:s("/connexion"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),w("generic",{type:"generic",message:e.t0.email});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return(0,f.jsx)(f.Fragment,{children:e?(0,f.jsx)(d.Fg,{to:"/workspace"}):(0,f.jsx)("div",{className:"pagesContainer",children:(0,f.jsxs)("div",{className:"pagesContent",children:[(0,f.jsx)("h2",{children:"Inscription"}),(0,f.jsxs)("form",{onSubmit:_((function(e){return y.apply(this,arguments)})),children:[(0,f.jsxs)("div",{className:h,children:[(0,f.jsx)("label",{htmlFor:"last_name",children:"Nom"}),(0,f.jsx)("input",(0,i.Z)({type:"text",name:"last_name"},g("last_name"))),(null===N||void 0===N?void 0:N.last_name)&&(0,f.jsx)("p",{className:"form-error",children:N.last_name.message})]}),(0,f.jsxs)("div",{className:h,children:[(0,f.jsx)("label",{htmlFor:"first_name",children:"Pr\xe9nom"}),(0,f.jsx)("input",(0,i.Z)({type:"text",name:"first_name"},g("first_name"))),(null===N||void 0===N?void 0:N.first_name)&&(0,f.jsx)("p",{className:"form-error",children:N.first_name.message})]}),(0,f.jsxs)("div",{className:h,children:[(0,f.jsx)("label",{htmlFor:"email",children:"Adresse email"}),(0,f.jsx)("input",(0,i.Z)({type:"text",name:"email"},g("email"))),(null===N||void 0===N?void 0:N.email)&&(0,f.jsx)("p",{className:"form-error",children:N.email.message})]}),(0,f.jsxs)("div",{className:h,children:[(0,f.jsx)("label",{htmlFor:"password",children:"Mot de passe"}),(0,f.jsx)("input",(0,i.Z)({type:"password",name:"password"},g("password"))),(null===N||void 0===N?void 0:N.password)&&(0,f.jsx)("p",{className:"form-error",children:N.password.message})]}),(0,f.jsxs)("div",{className:h,children:[(0,f.jsx)("label",{htmlFor:"passwordVal",children:"Confirmer Mot de passe"}),(0,f.jsx)("input",(0,i.Z)({type:"password",name:"passwordVal"},g("passwordVal"))),(null===N||void 0===N?void 0:N.passwordVal)&&(0,f.jsx)("p",{className:"form-error",children:N.passwordVal.message})]}),N.generic&&(0,f.jsx)("div",{children:(0,f.jsx)("p",{className:"form-error",children:N.generic.message.toString()})}),(0,f.jsx)("div",{children:(0,f.jsx)("button",{disabled:V,className:x,children:"S'inscrire"})})]})]})})})}}}]);
//# sourceMappingURL=998.1c4bcfd6.chunk.js.map