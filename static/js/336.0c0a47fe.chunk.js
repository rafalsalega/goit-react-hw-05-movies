"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[336],{138:function(e,r,n){n.d(r,{J:function(){return t}});var t="d2e7e2667c6f498e88b81d9628f5971c"},336:function(e,r,n){n.r(r),n.d(r,{default:function(){return g}});var t,s=n(861),i=n(439),a=n(757),c=n.n(a),o=n(791),l=n(689),d=n(87),p=n(168),x=n(128),h=n(444),u=n(184),v=(0,h.ZP)(d.rU)(t||(t=(0,p.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 5px;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  background-color: rgb(255, 255, 255);\n  border-radius: 5px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  :hover {\n    color: orangered;\n  }\n"]))),j=function(e){var r=e.to,n=e.children;return(0,u.jsxs)(v,{to:r,children:[(0,u.jsx)(x.jTe,{size:"16"}),n]})},f=n(138),m=n(966);var g=function(){var e,r=(0,o.useState)(null),n=(0,i.Z)(r,2),t=n[0],a=n[1],p=(0,o.useState)(null),x=(0,i.Z)(p,2),h=x[0],v=x[1],g=(null===(e=(0,l.TH)().state)||void 0===e?void 0:e.from)||"/",w=(0,l.UO)().movieId;return(0,o.useEffect)((function(){var e=function(){var e=(0,s.Z)(c().mark((function e(){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(w,"?api_key=").concat(f.J,"&language=en-US"));case 3:return r=e.sent,e.next=6,r.json();case 6:n=e.sent,a(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),v(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[w]),h?(0,u.jsxs)("div",{children:["Error: ",h.message]}):t?(0,u.jsxs)("div",{children:[(0,u.jsx)(j,{to:g,children:"Go Back"}),(0,u.jsx)("h1",{children:t.title}),(0,u.jsx)("b",{children:"User score:"})," ",function(){if(t.vote_average)return 10*t.vote_average.toFixed(1)}(),"%",(0,u.jsx)("h3",{children:"Overview:"}),(0,u.jsx)("p",{children:t.overview}),(0,u.jsxs)("p",{children:[(0,u.jsx)("b",{children:"Release date:"})," ",t.release_date]}),(0,u.jsxs)("p",{children:[(0,u.jsx)("b",{children:"Runtime:"})," ",t.runtime," minutes"]}),(0,u.jsxs)("p",{children:[(0,u.jsx)("b",{children:"Genres:"})," ",Array.isArray(t.genres)&&t.genres.map((function(e){return e.name})).join(", ")]}),(0,u.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path):"https://poster.keepcalmandposters.com/3253015.jpg",alt:t.title,width:"500"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(d.rU,{to:"/goit-react-hw-05-movies/movies/".concat(w,"/cast"),state:{from:g},children:"View Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(d.rU,{to:"/goit-react-hw-05-movies/movies/".concat(w,"/reviews"),state:{from:g},children:"View Reviews"})}),(0,u.jsx)("li",{children:(0,u.jsx)(d.rU,{to:"/goit-react-hw-05-movies/movies/".concat(w,"/watch/providers"),state:{from:g},children:"View Providers"})})]}),(0,u.jsx)(o.Suspense,{fallback:(0,u.jsx)(m.a,{}),children:(0,u.jsx)(l.j3,{})})]}):(0,u.jsx)(m.a,{})}}}]);
//# sourceMappingURL=336.0c0a47fe.chunk.js.map