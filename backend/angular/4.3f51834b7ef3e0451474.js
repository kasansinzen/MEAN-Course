(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Yj9t:function(t,n,i){"use strict";i.r(n),i.d(n,"AuthModule",function(){return R});var e=i("ofXK"),a=i("s7LF"),s=i("rhD1"),o=i("iInd"),r=i("fXoL"),c=i("qXBG"),u=i("PDjf"),b=i("pu8Q"),m=i("Q2Ze"),l=i("e6WT"),d=i("Dxy4");function p(t,n){1&t&&r.Nb(0,"mat-spinner")}function f(t,n){1&t&&(r.Rb(0,"mat-error"),r.tc(1,"Please enter a valid email."),r.Qb())}function g(t,n){1&t&&(r.Rb(0,"mat-error"),r.tc(1,"Please enter a valid password."),r.Qb())}function h(t,n){1&t&&(r.Rb(0,"button",9),r.tc(1,"Login"),r.Qb())}function I(t,n){if(1&t){const t=r.Sb();r.Rb(0,"form",2,3),r.Yb("submit",function(){r.mc(t);const n=r.kc(1);return r.cc().onLogin(n)}),r.Rb(2,"mat-form-field"),r.Nb(3,"input",4,5),r.sc(5,f,2,0,"mat-error",0),r.Qb(),r.Rb(6,"mat-form-field"),r.Nb(7,"input",6,7),r.sc(9,g,2,0,"mat-error",0),r.Qb(),r.sc(10,h,2,0,"button",8),r.Qb()}if(2&t){const t=r.kc(4),n=r.kc(8),i=r.cc();r.Bb(5),r.hc("ngIf",t.invalid),r.Bb(4),r.hc("ngIf",n.invalid),r.Bb(1),r.hc("ngIf",!i.isLoading)}}function v(t,n){1&t&&r.Nb(0,"mat-spinner")}function w(t,n){1&t&&(r.Rb(0,"mat-error"),r.tc(1,"Please enter a valid email."),r.Qb())}function S(t,n){1&t&&(r.Rb(0,"mat-error"),r.tc(1,"Please enter a valid password."),r.Qb())}function y(t,n){1&t&&(r.Rb(0,"button",9),r.tc(1,"Signup"),r.Qb())}function L(t,n){if(1&t){const t=r.Sb();r.Rb(0,"form",2,3),r.Yb("submit",function(){r.mc(t);const n=r.kc(1);return r.cc().onSignup(n)}),r.Rb(2,"mat-form-field"),r.Nb(3,"input",4,5),r.sc(5,w,2,0,"mat-error",0),r.Qb(),r.Rb(6,"mat-form-field"),r.Nb(7,"input",6,7),r.sc(9,S,2,0,"mat-error",0),r.Qb(),r.sc(10,y,2,0,"button",8),r.Qb()}if(2&t){const t=r.kc(4),n=r.kc(8),i=r.cc();r.Bb(5),r.hc("ngIf",t.invalid),r.Bb(4),r.hc("ngIf",n.invalid),r.Bb(1),r.hc("ngIf",!i.isLoading)}}const M=[{path:"login",component:(()=>{class t{constructor(t){this.authService=t,this.isLoading=!1}ngOnInit(){this.authStatusSub=this.authService.getAuthStatusListener().subscribe(t=>{this.isLoading=!1})}ngOnDestroy(){this.authStatusSub.unsubscribe()}onLogin(t){t.invalid||(this.isLoading=!0,this.authService.login(t.value.email,t.value.password))}}return t.\u0275fac=function(n){return new(n||t)(r.Mb(c.a))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-login"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["loginForm","ngForm"],["type","email","name","email","ngModel","","placeholder","E-Mail","matInput","","required","","email",""],["emailInput","ngModel"],["type","password","name","password","ngModel","","matInput","","placeholder","Password","required",""],["passwordInput","ngModel"],["type","submit","color","accent","mat-raised-button","",4,"ngIf"],["type","submit","color","accent","mat-raised-button",""]],template:function(t,n){1&t&&(r.Rb(0,"mat-card"),r.sc(1,p,1,0,"mat-spinner",0),r.sc(2,I,11,3,"form",1),r.Qb()),2&t&&(r.Bb(1),r.hc("ngIf",n.isLoading),r.Bb(1),r.hc("ngIf",!n.isLoading))},directives:[u.a,e.k,b.b,a.p,a.j,a.k,m.c,a.a,l.a,a.i,a.l,a.n,a.b,m.b,d.b],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),t})()},{path:"signup",component:(()=>{class t{constructor(t){this.authService=t,this.isLoading=!1}ngOnInit(){this.authStatusSub=this.authService.getAuthStatusListener().subscribe(t=>{this.isLoading=!1})}ngOnDestroy(){this.authStatusSub.unsubscribe()}onSignup(t){t.invalid||(this.isLoading=!0,this.authService.createUser(t.value.email,t.value.password))}}return t.\u0275fac=function(n){return new(n||t)(r.Mb(c.a))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-signup"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["signupForm","ngForm"],["type","email","name","email","ngModel","","placeholder","E-Mail","matInput","","required","","email",""],["emailInput","ngModel"],["type","password","name","password","ngModel","","matInput","","placeholder","Password","required",""],["passwordInput","ngModel"],["type","submit","color","accent","mat-raised-button","",4,"ngIf"],["type","submit","color","accent","mat-raised-button",""]],template:function(t,n){1&t&&(r.Rb(0,"mat-card"),r.sc(1,v,1,0,"mat-spinner",0),r.sc(2,L,11,3,"form",1),r.Qb()),2&t&&(r.Bb(1),r.hc("ngIf",n.isLoading),r.Bb(1),r.hc("ngIf",!n.isLoading))},directives:[u.a,e.k,b.b,a.p,a.j,a.k,m.c,a.a,l.a,a.i,a.l,a.n,a.b,m.b,d.b],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),t})()}];let Q=(()=>{class t{}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(n){return new(n||t)},imports:[[e.c,o.f.forChild(M)],o.f]}),t})(),R=(()=>{class t{}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(n){return new(n||t)},imports:[[e.c,a.m,s.a,o.f,a.g,Q]]}),t})()}}]);