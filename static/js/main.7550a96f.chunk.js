(this["webpackJsonptest-redux-app"]=this["webpackJsonptest-redux-app"]||[]).push([[0],{118:function(e,t,c){},119:function(e,t,c){},147:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(24),i=c.n(a),s=(c(118),c(119),c(69)),d=c(9),o=(c(120),c(32)),l=c(104),j=c(103),u=c(160),h=c(82),p=c(57),b=c.n(p),O=c(78),x=(c(60),"GET_DATA"),f="SET_DATA",v="REMOVE_DATA",m=c(77),g=c(48),y=c(2),w=(c(77),function(){var e=Object(o.c)((function(e){return e.products.products})),t=Object(o.b)();return Object(n.useEffect)((function(){console.log("new deployment"),g.a.pageview("/productHome"),t(function(){var e=Object(O.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getData();case 2:c=e.sent,t({type:x,payload:c});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{class:"topnav",children:Object(y.jsx)("a",{class:"active",href:"#",children:"Product List"})}),Object(y.jsx)("div",{style:{marginTop:"10px",marginLeft:"10px",marginRight:"10px"},children:Object(y.jsx)(l.a,{itemsPerRow:5,children:e?e.map((function(e){return Object(y.jsxs)(j.a,{children:[Object(y.jsxs)(j.a.Content,{children:[Object(y.jsx)("div",{style:{height:"270px"},children:Object(y.jsx)(u.a,{src:e.image,size:"small"})}),Object(y.jsxs)(j.a.Description,{children:[Object(y.jsx)(j.a.Header,{children:Object(y.jsx)("div",{style:{height:"60px",overflowY:"scroll"},children:Object(y.jsx)(s.b,{to:"product/".concat(e.id),children:e.title})})}),Object(y.jsxs)(j.a.Header,{children:["$ ",e.price]}),Object(y.jsx)(j.a.Meta,{children:Object(y.jsx)("div",{style:{height:"200px",overflowY:"scroll",padding:"15px 15px 15px 15px"},children:e.description})})]})]}),Object(y.jsx)(j.a.Content,{extra:!0,children:Object(y.jsxs)(j.a.Header,{children:[Object(y.jsx)(h.a,{name:"star"}),e.rating.rate," / 5"]})})]},e.id)})):Object(y.jsx)("h1",{children:"Data loading....."})})})]})}),D=(c(77),function(){var e=Object(d.f)().id,t=Object(o.b)(),c=Object(o.c)((function(e){return e.products.productById}));return Object(n.useEffect)((function(){return g.a.pageview("/selectedProduct/".concat(e)),e&&""!==e&&t(function(e){return function(){var t=Object(O.a)(b.a.mark((function t(c){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.getDataByID(e);case 2:n=t.sent,c({type:f,payload:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e)),function(){t({type:v,payload:null})}}),[]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{class:"topnav",children:[Object(y.jsx)("a",{class:"active",href:"/",children:"Product List"}),Object(y.jsxs)("a",{href:"#",children:["Selected Product : ",null===c||void 0===c?void 0:c.title," "]})]}),Object(y.jsx)("div",{className:"ui placeholder segment",style:{width:"80%",marginLeft:"10%"},children:Object(y.jsx)("div",{className:"ui two column stackable center aligned grid",style:{marginTop:"2.5%",marginBottom:"2.5%"},children:c?Object(y.jsxs)("div",{className:"middle aligned row",children:[Object(y.jsx)("div",{className:"column lp",style:{paddingLeft:"100px"},children:Object(y.jsx)(u.a,{src:null===c||void 0===c?void 0:c.image,size:"large"})}),Object(y.jsxs)("div",{className:"column rp",children:[Object(y.jsx)("h1",{children:null===c||void 0===c?void 0:c.title}),Object(y.jsx)("h2",{children:Object(y.jsxs)("a",{className:"ui teal tag label",children:["$",null===c||void 0===c?void 0:c.price]})}),Object(y.jsx)("h3",{className:"ui brown block header",children:null===c||void 0===c?void 0:c.category}),Object(y.jsx)("p",{children:null===c||void 0===c?void 0:c.description}),Object(y.jsxs)("div",{className:"ui vertical animated button",tabIndex:"0",children:[Object(y.jsx)("div",{className:"hidden content",children:Object(y.jsx)("i",{className:"shop icon"})}),Object(y.jsx)("div",{className:"visible content",children:"Add to Cart"})]})]})]}):Object(y.jsx)("h1",{children:"Data loading....."})})})]})});var N=function(){return g.a.initialize("G-6ZWX4LHB7N"),Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(s.a,{children:Object(y.jsxs)(d.c,{children:[Object(y.jsx)(d.a,{path:"/",exact:!0,component:w}),Object(y.jsx)(d.a,{path:"/product/:id",component:D})]})})})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,161)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))},T=c(51),P=c(102),_=c(36),B={},I=Object(T.b)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case x:return Object(_.a)(Object(_.a)({},e),{},{products:n});case f:return Object(_.a)(Object(_.a)({},e),{},{productById:n});case v:return Object(_.a)(Object(_.a)({},e),{},{productById:{}});default:return e}}}),L=I,k=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T.c,A=Object(T.d)(L,k(Object(T.a)(P.a)));i.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(o.a,{store:A,children:Object(y.jsx)(N,{})})}),document.getElementById("root")),E()},77:function(e,t,c){"use strict";c.r(t),c.d(t,"getData",(function(){return a})),c.d(t,"getDataByID",(function(){return i}));var n=c(60),r=c.n(n),a=function(){return new Promise((function(e,t){r.a.get("https://fakestoreapi.com/products").then((function(t){return e(t.data)})).catch((function(e){return t(e)}))}))},i=function(e){return new Promise((function(t,c){r.a.get("https://fakestoreapi.com/products/"+e).then((function(e){return t(e.data)})).catch((function(e){return c(e)}))}))}}},[[147,1,2]]]);
//# sourceMappingURL=main.7550a96f.chunk.js.map