(this["webpackJsonpreact-social-network"]=this["webpackJsonpreact-social-network"]||[]).push([[4],{116:function(e,t,a){e.exports={poster:"ProfileInfo_poster__1JW2L",info:"ProfileInfo_info__2Hv28",info__left:"ProfileInfo_info__left__2WA_f",info__title:"ProfileInfo_info__title__FOcIO",info__status:"ProfileInfo_info__status__1BNF3",info__logo:"ProfileInfo_info__logo__1Z09P",info__image:"ProfileInfo_info__image__2dwVG",info__follow:"ProfileInfo_info__follow__37z3z",info__input:"ProfileInfo_info__input__1v_mL",info__save:"ProfileInfo_info__save__1wEg2"}},141:function(e,t,a){e.exports={createpost:"CreatePost_createpost__3YUt_",createpost__content:"CreatePost_createpost__content__1G0yu",createpost__rules:"CreatePost_createpost__rules__20o_P"}},142:function(e,t,a){e.exports={post:"Post_post__1BbfJ",post__text:"Post_post__text__2T1O1",post__title:"Post_post__title__1WAux",post__name:"Post_post__name__2SlMa",post__image:"Post_post__image__2Uurh"}},143:function(e,t,a){e.exports={posts:"MyPosts_posts__13CGX"}},273:function(e,t,a){"use strict";a.r(t);var s=a(0),o=a.n(s),n=a(25),l=a(141),r=a.n(l);var i=function(e){return o.a.createElement(n.b,{initialValues:e.textValue,onSubmit:function(t){e.addPost(t.textField),t.textField=""}},(function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement("div",{className:r.a.createpost},o.a.createElement("h1",null,"New post"),o.a.createElement("div",{className:r.a.createpost__content},o.a.createElement("div",{className:r.a.createpost__field},o.a.createElement(n.a,{name:"textField",component:"textarea",placeholder:"Tell about us yourself..."})),o.a.createElement("div",{className:r.a.createpost__rules},o.a.createElement("button",{type:"submit"},"Publish a post")))))}))},c=a(5),_=a(142),u=a.n(_);var f=function(e){return o.a.createElement("div",{className:u.a.post},o.a.createElement("div",{className:u.a.post__title},o.a.createElement("img",{className:u.a.post__image,src:"https://images.unsplash.com/photo-1560275619-4662e36fa65c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1076&q=80"}),o.a.createElement(c.b,{className:u.a.post__name,to:"/"},"\u041f\u0443\u0448\u043e\u043a \u041f\u0443\u0448\u043e\u043a")),o.a.createElement("p",{className:u.a.post__text},e.text),o.a.createElement("p",null,e.likes," likes"))},m=a(143),p=a.n(m);var E=function(e){var t=e.posts.map((function(e){return o.a.createElement(f,{key:e.id,text:e.text,likes:e.likesCount})}));return o.a.createElement("div",null,o.a.createElement(i,{addPost:e.createPost,textValue:e.textValue}),o.a.createElement("div",{className:p.a.posts},o.a.createElement("h1",null,"My posts"),t))},d=a(37),v=a(8);var g=Object(v.b)((function(e){return{textValue:e.profilePage.textValue,posts:e.profilePage.posts}}),{createPost:d.a})(E),h=a(22),b=a(272),P=a(116),x=a.n(P);var N=o.a.memo((function(e){var t=Object(s.useState)(!1),a=Object(b.a)(t,2),n=a[0],l=a[1],r=Object(s.useState)(e.status),i=Object(b.a)(r,2),c=i[0],_=i[1],u=Object(s.useRef)(null);Object(s.useEffect)((function(){_(e.status)}),[e.status]);var f=function(){l(!n)},m=o.a.createElement("p",{onDoubleClick:f},"The user doesn't complete a status");return e.status&&(m=o.a.createElement("span",{ref:u,onDoubleClick:f},e.status)),o.a.createElement(o.a.Fragment,null,n?o.a.createElement("div",{className:x.a.info__input},o.a.createElement("input",{autoFocus:!0,type:"text",onChange:function(e){_(e.target.value)},value:c,placeholder:"Complete your status..."}),o.a.createElement("img",{onClick:function(){e.updateStatus(c),l(!1)},className:x.a.info__save,src:"https://www.flaticon.com/svg/static/icons/svg/25/25398.svg",alt:""}),o.a.createElement("img",{onClick:f,className:x.a.info__save,src:"https://www.flaticon.com/svg/static/icons/svg/126/126497.svg",alt:""})):m)})),w=(a(144),a(50)),k=a.n(w);var S=function(e){e.classes;var t=o.a.createElement("div",{className:x.a.info__logo},o.a.createElement("img",{className:x.a.info__image,src:k.a}));return e.profile.photos&&null!=e.profile.photos.small&&(t=o.a.createElement("div",{className:x.a.info__logo},o.a.createElement("img",{className:x.a.info__image,src:e.profile.photos.small,alt:"img"}))),Object.keys(e.profile).length?o.a.createElement("div",null,o.a.createElement("div",{className:x.a.poster},o.a.createElement("img",{src:"https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg?fit=fill&w=800&h=300"})),o.a.createElement("div",{className:x.a.info},o.a.createElement("div",{className:x.a.info__left},t,o.a.createElement("div",{className:x.a.info__title},o.a.createElement("h2",null,e.profile.fullName),o.a.createElement(N,{updateStatus:e.updateStatus,status:e.status}))))):o.a.createElement(h.a,null)};var O=function(e){return o.a.createElement("main",null,o.a.createElement(S,{status:e.status,updateStatus:e.updateUserStatus,profile:e.profile}),o.a.createElement(g,null))},j=a(19),y=a(4),C=a(38),I=o.a.memo((function(e){return Object(s.useEffect)((function(){var t=e.match.params.id;t||(t=e.history.push("/login")),e.getUserThunk(t),e.getUserStatus(t)}),[]),o.a.createElement(O,Object.assign({},e,{profile:e.profile,status:e.status,updateStatus:e.updateUserStatus}))}));t.default=Object(j.d)(y.f,C.a,Object(v.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{getUserThunk:d.d,getUserStatus:d.c,updateUserStatus:d.e}))(I)}}]);
//# sourceMappingURL=4.6951ba3e.chunk.js.map