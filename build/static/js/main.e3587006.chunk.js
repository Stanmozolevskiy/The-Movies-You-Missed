(window["webpackJsonpthe-movies-you-missed"]=window["webpackJsonpthe-movies-you-missed"]||[]).push([[0],{36:function(e,t,a){e.exports=a(71)},41:function(e,t,a){},42:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),s=a.n(c),o=a(17),i=(a(41),a(10)),l=a(11),u=a(13),h=a(12),m=a(14),d=(a(42),a(8)),p=a(2),g=a.n(p),f=a(9),v=a(16),b=a.n(v);b.a.interceptors.response.use(null,(function(e){var t=e.response&&e.response.status>=400&&e.response.status<500;return t||console.log(t),Promise.reject(e)}));var E={get:b.a.get,post:b.a.post,put:b.a.put,delete:b.a.delete},w="https://api.themoviedb.org/",y="5f5cc6e6e0f91855438bb35abc9ce65b";function S(e,t){return E.get("".concat(w,"3/search/movie?api_key=").concat(y,"&query=").concat(e,"&language=en-US&&page=").concat(t,"&include_adult=false"))}function k(e){return E.get("".concat(w,"3/movie/popular?api_key=").concat(y,"&language=en-US&&page=").concat(e))}var x=function(e){var t=e.data;return r.a.createElement("div",{className:" container-size card mb-3 col-5 m-3 mx-auto",style:{padding:0}},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w400".concat(t.poster_path),className:"card-img image-fit"})),r.a.createElement("div",{className:"col-md-7"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.title),r.a.createElement("p",{className:"card-text d-inline-block  multiline-ellipsis"},t.overview),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago"))))))},N=a(35),P=a(32),j=a.n(P),C=function(e){return Object(N.a)(Array(e.data.total_pages).keys()).filter((function(e){return 0!==e}))},O=function(e){var t=e.totalPages,a=e.handlePageChange;return r.a.createElement("div",null,t.length>1?r.a.createElement(j.a,{previousLabel:"<-- prev",previousLinkClassName:"previous-pagination-butto",nextLinkClassName:"next-pagination-butto",nextLabel:"next --\x3e",breakLabel:"...",breakClassName:"break-me",pageCount:t.length-1,marginPagesDisplayed:2,pageRangeDisplayed:4,onPageChange:a,containerClassName:"pagination",subContainerClassName:"pages pagination",activeLinkClassName:"active-page-paginate",pageLinkClassName:"each-page-paginate"}):null)},L=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("table",{className:"col-12 table header"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{border:"none"}},r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{src:"Thmdb.png",className:"logo-img"}))),r.a.createElement("th",{style:{border:"none"}},r.a.createElement("h2",{className:"logo"},"The Movies You Missed"),r.a.createElement("h6",{className:"logo"}),r.a.createElement("a",{className:"navbar-btn",href:"/movie"},"Movies"),r.a.createElement("a",{className:"navbar-btn",href:"/tv"},"Tv Show"),r.a.createElement("a",{className:"navbar-btn",href:"/movie"},"People"))))))))},D=function(e){var t=e.onSearch,a=e.onSearchSubmit;return r.a.createElement("div",{className:"search-box",style:{height:"40px"}},r.a.createElement("div",{className:"container md-form mb-3 mt-0 "},r.a.createElement("input",{onKeyDown:a,className:"search-box",type:"text",placeholder:"Search for a movie, tv show or a person...",onChange:t,"aria-label":"Search"})))},_=function(e){var t=e.text;return r.a.createElement("h3",{style:{margin:"20px"}},t)},U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={search:"",data:[],totalPages:[],curentPages:"",curentPage:1,title:"Popular Movies"},a.getData=function(){var e=Object(f.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t.key||""===a.state.search){e.next=8;break}return e.next=3,S(a.state.search,1);case 3:n=e.sent,a.setState({data:n.data.results}),a.setState({curentPage:n.data.page}),a.setState({totalPages:C(n)}),a.setState({title:"Search > ".concat(a.state.search.charAt(0).toUpperCase()+a.state.search.slice(1))});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleSearch=function(e){a.setState({search:e.target.value})},a.handlePageChange=function(){var e=Object(f.a)(g.a.mark((function e(t){var n,r,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.selected+1,""!==a.state.search){e.next=7;break}return a.setState({curentPage:n}),e.next=5,k(n);case 5:r=e.sent,a.setState({data:r.data.results});case 7:if(""===a.state.search){e.next=12;break}return e.next=10,S(a.state.search,n);case 10:c=e.sent,a.setState({data:c.data.results});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(this.state.curentPage);case 2:t=e.sent,this.setState({data:t.data.results}),this.setState({curentPage:t.data.page}),this.setState({totalPages:C(t)});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement(D,{onSearch:this.handleSearch,onSearchSubmit:this.getData}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container "},r.a.createElement(_,{text:this.state.title}),r.a.createElement("div",{className:"row"},this.state.data.map((function(e){return r.a.createElement(x,{key:e.id,data:e})})))),r.a.createElement(O,{totalPages:this.state.totalPages,search:this.state.search,handlePageChange:this.handlePageChange})))}}]),t}(n.Component),A="https://api.themoviedb.org/",M="5f5cc6e6e0f91855438bb35abc9ce65b";function T(e,t){return E.get("".concat(A,"3/search/tv?api_key=").concat(M,"&query=").concat(e,"&language=en-US&&page=").concat(t,"&include_adult=false"))}function W(e){return E.get("".concat(A,"3/tv/popular?api_key=").concat(M,"&language=en-US&&page=").concat(e))}var q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={search:"",data:[],totalPages:[],curentPages:"",curentPage:1,title:"Popular TV Shows"},a.getData=function(){var e=Object(f.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t.key||""===a.state.search){e.next=8;break}return e.next=3,T(a.state.search,1);case 3:n=e.sent,a.setState({data:n.data.results}),a.setState({curentPage:n.data.page}),a.setState({totalPages:C(n)}),a.setState({title:"Search > ".concat(a.state.search.charAt(0).toUpperCase()+a.state.search.slice(1))});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleSearch=function(e){a.setState({search:e.target.value})},a.handlePageChange=function(){var e=Object(f.a)(g.a.mark((function e(t){var n,r,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.selected+1,""!==a.state.search){e.next=7;break}return a.setState({curentPage:n}),e.next=5,W(n);case 5:r=e.sent,a.setState({data:r.data.results});case 7:if(""===a.state.search){e.next=12;break}return e.next=10,T(a.state.search,n);case 10:c=e.sent,a.setState({data:c.data.results});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(this.state.curentPage);case 2:t=e.sent,this.setState({data:t.data.results}),this.setState({curentPage:t.data.page}),this.setState({totalPages:C(t)});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement(D,{onSearch:this.handleSearch,onSearchSubmit:this.getData}),r.a.createElement("div",{className:"container"},r.a.createElement(_,{text:this.state.title}),r.a.createElement("div",{className:"container "},r.a.createElement("div",{className:"row"},this.state.data.map((function(e){return r.a.createElement(x,{key:e.id,data:e})})))),r.a.createElement(O,{totalPages:this.state.totalPages,search:this.state.search,handlePageChange:this.handlePageChange})))}}]),t}(n.Component),B=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/movie",component:U})," */}",r.a.createElement(d.b,{path:"/tv",component:q})," */}",r.a.createElement(d.a,{to:"/not-found"})))}}]),t}(n.Component),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(69),a(70);s.a.render(r.a.createElement(o.a,null,r.a.createElement(B,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");J?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):R(e)}))}}()}},[[36,1,2]]]);
//# sourceMappingURL=main.e3587006.chunk.js.map