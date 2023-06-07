(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{127:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(12),o=a.n(r),s=(a(99),a(170)),i=a(171),u=a(85),l=a.n(u),j=a(56),b=a(157),d=Object(b.a)((function(t){return{container:{backgroundColor:t.palette.primary.main,color:"white",marginBottom:20,fontWeight:"lighter",padding:"5px 0px"}}})),p=a(8);function O(){var t=d();return Object(p.jsx)(j.a,{variant:"h4",align:"center",className:t.container,children:"BLOG"})}var x=a(167),f=a(14),h=a(22),m=a(161),g=a(162),v=a(175),P=a(163),k=a(164),w=a(165),C=a(166),S=a(82),y=a.n(S),R=a(83),q=a.n(R),N=a(81),_=a.n(N),M=Object(b.a)((function(t){return{media:{height:150}}})),D=a(173),E=a(63),F=function(t){return t().type},L=Object(D.a)({getPostsRequest:void 0,getPostSuccess:function(t){return t},getPostFailure:function(t){return t}}),T=Object(D.a)({createPostRequest:function(t){return t},createPostSuccess:function(t){return t},createPostFailure:function(t){return t}}),A=Object(D.a)({updatePostRequest:function(t){return t},updatePostSuccess:function(t){return t},updatePostFailure:function(t){return t}}),B=Object(E.a)("SHOW_CREATE_POST_MODAL"),H=Object(E.a)("HIDE_CREATE_POST_MODAL");function W(t){var e=t.post,a=M(),n=Object(h.b)(),r=c.a.useCallback((function(){n(A.updatePostRequest(Object(f.a)(Object(f.a)({},e),{},{likeCount:e.likeCount+1})))}),[n,e]);return Object(p.jsxs)(m.a,{children:[Object(p.jsx)(g.a,{avatar:Object(p.jsx)(v.a,{children:"A"}),title:e.author,subheader:_()(e.updatedAt).format("HH:MM MM DD,YYYY"),action:Object(p.jsx)(P.a,{children:Object(p.jsx)(y.a,{})})}),Object(p.jsx)(k.a,{image:e.attachment,title:"Title",className:a.media}),Object(p.jsxs)(w.a,{children:[Object(p.jsx)(j.a,{variant:"h5",color:"textPrimary",children:e.title}),Object(p.jsx)(j.a,{variant:"body2",component:"p",color:"textSecondary",children:e.content})]}),Object(p.jsx)(C.a,{children:Object(p.jsxs)(P.a,{onClick:r,children:[Object(p.jsx)(q.a,{}),Object(p.jsx)(j.a,{component:"span",color:"textSecondary",children:e.likeCount})]})})]})}var Y=function(t){return t.posts.data},I=function(t){return t.modal};function J(){var t=Object(h.b)(),e=Object(h.c)(Y);return c.a.useEffect((function(){t(L.getPostsRequest())}),[t]),Object(p.jsx)(x.a,{container:!0,spacing:2,alignItems:"stretch",children:e.map((function(t){return Object(p.jsx)(x.a,{item:!0,xs:12,sm:6,children:Object(p.jsx)(W,{post:t},t._id)})}))})}var G=Object(b.a)((function(t){return{fab:{position:"fixed",bottom:t.spacing(2),right:t.spacing(2)}}})),V=a(87),z=a(172),K=a(168),Q=a(169),U=a(174),X=a(84),Z=a.n(X),$=Object(b.a)((function(t){return{paper:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",position:"absolute",width:400,backgroundColor:t.palette.background.paper,boxShadow:t.shadows[5],padding:t.spacing(2,4,3)},form:{display:"flex",flexDirection:"column"},header:{margin:"0 0 10px 0"},title:{marginBottom:"10px"},textarea:{padding:"10px",marginBottom:"10px"},footer:{marginTop:"10px"}}}));function tt(){var t=Object(h.c)(I).isShow,e=Object(h.b)(),a=c.a.useState({title:"",content:"",attachment:""}),n=Object(V.a)(a,2),r=n[0],o=n[1],s=c.a.useCallback((function(){console.log({data:r}),e(T.createPostRequest(r))}),[r,e]),i=c.a.useCallback((function(){e(H()),o({title:"",content:"",attachment:""})}),[e]),u=$(),l=Object(p.jsxs)("div",{className:u.paper,id:"simple-modal-title",children:[Object(p.jsx)("h2",{children:"Create New Post"}),Object(p.jsxs)("form",{noValidate:!0,autoComplete:"off",className:u.form,children:[Object(p.jsx)(z.a,{className:u.title,required:!0,label:"Title",value:r.title,onChange:function(t){return o(Object(f.a)(Object(f.a)({},r),{},{title:t.target.value}))}}),Object(p.jsx)(K.a,{className:u.textarea,rowsMin:10,rowsMax:15,placeholder:"Content...",value:r.content,onChange:function(t){return o(Object(f.a)(Object(f.a)({},r),{},{content:t.target.value}))}}),Object(p.jsx)(Z.a,{accept:"image/*",multiple:!1,type:"file",value:r.attachment,onDone:function(t){var e=t.base64;return o(Object(f.a)(Object(f.a)({},r),{},{attachment:e}))}}),Object(p.jsx)("div",{className:u.footer,children:Object(p.jsx)(Q.a,{variant:"contained",color:"primary",component:"span",fullWidth:!0,onClick:s,children:"Create"})})]})]});return Object(p.jsx)("div",{children:Object(p.jsx)(U.a,{open:t,onClose:i,children:l})})}function et(){var t=G(),e=Object(h.b)(),a=c.a.useCallback((function(){e(B())}),[e]);return Object(p.jsxs)(s.a,{maxWidth:"lg",children:[Object(p.jsx)(O,{}),Object(p.jsx)(J,{}),Object(p.jsx)(tt,{}),Object(p.jsx)(i.a,{color:"primary",className:t.fab,onClick:a,children:Object(p.jsx)(l.a,{})})]})}var at=function(){return Object(p.jsx)(et,{})},nt=a(29),ct=a(88),rt=a(86),ot={posts:{isLoading:!1,data:[]},modal:{isShow:!1}};var st=Object(nt.b)({posts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot.posts,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case F(L.getPostsRequest):return Object(f.a)(Object(f.a)({},t),{},{isLoading:!0});case F(L.getPostSuccess):return Object(f.a)(Object(f.a)({},t),{},{isLoading:!1,data:e.payload.data});case F(L.getPostFailure):return Object(f.a)(Object(f.a)({},t),{},{isLoading:!1});case F(T.createPostSuccess):return Object(f.a)(Object(f.a)({},t),{},{data:[].concat(Object(rt.a)(t.data),[e.payload])});case F(A.updatePostSuccess):return Object(f.a)(Object(f.a)({},t),{},{data:t.data.map((function(t){return t._id===e.payload._id?e.payload:t}))});default:return t}},modal:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot.modal,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case F(B):return{isShow:!0};case F(H):return{isShow:!1};default:return t}}}),it=a(24),ut=a.n(it),lt=a(20),jt=a(55),bt=a.n(jt),dt="https://blog-app-liem.herokuapp.com",pt=function(){return bt.a.get("".concat(dt,"/posts"))},Ot=function(t){return bt.a.post("".concat(dt,"/posts"),t)},xt=function(t){return bt.a.post("".concat(dt,"/posts/update"),t)},ft=ut.a.mark(vt),ht=ut.a.mark(Pt),mt=ut.a.mark(kt),gt=ut.a.mark(wt);function vt(t){var e;return ut.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(lt.a)(pt);case 3:return e=a.sent,a.next=6,Object(lt.b)(L.getPostSuccess(e));case 6:a.next=13;break;case 8:return a.prev=8,a.t0=a.catch(0),console.log(a.t0),a.next=13,Object(lt.b)(t.getPosts.getPostFailure(a.t0));case 13:case"end":return a.stop()}}),ft,null,[[0,8]])}function Pt(t){var e;return ut.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(lt.a)(Ot,t.payload);case 3:return e=a.sent,a.next=6,Object(lt.b)(T.createPostSuccess(e.data));case 6:a.next=13;break;case 8:return a.prev=8,a.t0=a.catch(0),console.log(a.t0),a.next=13,Object(lt.b)(t.createPost.createPostFailure(a.t0));case 13:case"end":return a.stop()}}),ht,null,[[0,8]])}function kt(t){var e;return ut.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(lt.a)(xt,t.payload);case 3:return e=a.sent,a.next=6,Object(lt.b)(A.updatePostSuccess(e.data));case 6:a.next=13;break;case 8:return a.prev=8,a.t0=a.catch(0),console.log(a.t0),a.next=13,Object(lt.b)(t.updatePost.updatePostFailure(a.t0));case 13:case"end":return a.stop()}}),mt,null,[[0,8]])}function wt(){return ut.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(lt.c)(L.getPostsRequest,vt);case 2:return t.next=4,Object(lt.c)(T.createPostRequest,Pt);case 4:return t.next=6,Object(lt.c)(A.updatePostRequest,kt);case 6:case"end":return t.stop()}}),gt)}var Ct=wt,St=Object(ct.a)(),yt=Object(nt.d)(st,Object(nt.a)(St));St.run(Ct),o.a.render(Object(p.jsx)(h.a,{store:yt,children:Object(p.jsx)(at,{})}),document.getElementById("root"))},99:function(t,e,a){}},[[127,1,2]]]);
//# sourceMappingURL=main.bd9a6662.chunk.js.map