(this["webpackJsonpcinema-app"]=this["webpackJsonpcinema-app"]||[]).push([[0],{15:function(e,t,s){},31:function(e,t,s){},39:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),r=s(18),a=s.n(r),i=(s(31),s(13)),o=s.n(i),l=s(16),d=s(4),j=s(5),h=s(7),u=s(6),b=(s(15),s(0)),m=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var c;return Object(d.a)(this,s),(c=t.call(this,e)).catchName=function(e){c.setState({userName:e.target.value})},c.catchPass=function(e){c.setState({password:e.target.value})},c.go2Home=Object(l.a)(o.a.mark((function e(){var t,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.state.usersArr.find((function(e){return e.UserName===c.state.userName&&e.UserPassowrd===c.state.password})),e.next=3,c.setState({user:t});case 3:void 0!==c.state.user?(s=JSON.stringify(c.state.user),localStorage.setItem("user",s),window.location.href="/home"):alert("UserName / Password Is Incorrect!");case 4:case"end":return e.stop()}}),e)}))),c.inputSide=function(){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"demo bold",children:"Please Log In To Continue"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"demo italic",children:"UserName:"}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"text",onChange:c.catchName})})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"demo italic",children:"Password:"}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"password",onChange:c.catchPass})})]}),Object(b.jsx)("div",{className:"demo",children:Object(b.jsx)("button",{onClick:c.go2Home,children:"Login"})})]})},c.imageSide=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"https://cdn2.vectorstock.com/i/1000x1000/25/71/grunge-retro-cinema-poster-vector-1892571.jpg",className:"demo2",alt:"CINEMA POSTER"})})},c.state={usersArr:{}},console.log("start"),fetch("http://proj.ruppin.ac.il/bgroup22/prod/api/user",{method:"GET",headers:new Headers({"Content-Type":"application/json; charset=UTF-8",Accept:"application/json; charset=UTF-8"})}).then((function(e){return console.log("res=",e),console.log("res.status",e.status),console.log("res.ok",e.ok),e.json()})).then((function(e){console.log("fetch users = ",e),e.map((function(e){return console.log(e.UserFullName)})),c.state.usersArr=e}),(function(e){console.log("err post=",e)})),console.log("end"),c}return Object(j.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"lf",children:[this.inputSide(),this.imageSide()]})})}}]),s}(c.Component),O=Object(b.jsx)("h2",{style:{color:"blue",textAlign:"center"},children:"Cinema Center"}),v=s(8),p=s(3),x=Object(b.jsx)("h3",{className:"hdr",children:"LOGIN"}),g=Object(b.jsx)("div",{className:"cen",children:Object(b.jsx)(v.b,{to:"/",children:" START"})});var f=Object(p.f)((function(){return Object(b.jsxs)("div",{className:"bgc",children:[g,O,x,Object(b.jsx)(m,{})]})})),N=s(40);var M=Object(p.f)((function(e){return Object(b.jsx)("div",{className:"demo3",children:Object(b.jsxs)(N.a,{style:{width:"18rem"},children:[Object(b.jsx)(N.a.Img,{className:"demo2",variant:"top",src:e.item.ImgUrl}),Object(b.jsxs)(N.a.Body,{children:[Object(b.jsxs)(N.a.Title,{children:["Name: ",e.item.MovieName]}),Object(b.jsxs)(N.a.Text,{children:["Genre: ",e.item.Genre]}),Object(b.jsxs)(N.a.Text,{children:["Seats Available: ",e.item.SeatsAvailable]}),Object(b.jsx)(v.b,{to:{pathname:"/singleOrder/"+e.item.MovieName,state:{data:e.item}},children:"Order"})]})]})})}));function P(e){var t=e.movies.map((function(e){return Object(b.jsxs)("div",{children:[" ",Object(b.jsx)(M,{item:e})]},e.MovieId)}));return Object(b.jsx)("div",{className:"lf demo4",children:t})}var S=s(25);var T=Object(p.f)((function(e){var t=function(){e.sendId2MngMovies(e.item.MovieId),console.log("start");var t=e.item.MovieId;fetch("http://proj.ruppin.ac.il/bgroup22/prod/api/movie/"+t,{method:"DELETE",headers:new Headers({"Content-Type":"application/json; charset=UTF-8",Accept:"application/json; charset=UTF-8"})}).then((function(e){console.log("res=",e),console.log("res.status",e.status),console.log("res.ok",e.ok),e.ok?console.log("was deleted:)"):console.log("wasnt deleted:(")})),console.log("end")};return Object(b.jsx)("div",{className:"demo3",children:Object(b.jsxs)(N.a,{style:{width:"18rem"},children:[Object(b.jsx)(N.a.Img,{className:"demo2",variant:"top",src:e.item.ImgUrl}),Object(b.jsxs)(N.a.Body,{children:[Object(b.jsxs)(N.a.Title,{children:["Name: ",e.item.MovieName]}),Object(b.jsxs)(N.a.Text,{children:["Genre: ",e.item.Genre]}),Object(b.jsxs)(N.a.Text,{children:["Seats Available: ",e.item.SeatsAvailable]}),Object(b.jsx)(v.b,{to:{pathname:"/singleOrder/"+e.item.MovieName,state:{data:e.item}},children:"Order"}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{children:Object(b.jsx)(S.a,{trigger:Object(b.jsx)("button",{className:"demo9",children:" Delete"}),position:"top center",children:Object(b.jsxs)("div",{className:"demo11",id:"popUp",children:[Object(b.jsx)("div",{className:"demo12 bold",children:"Delete Verfication!"}),Object(b.jsxs)("div",{className:"italic pad",children:["Are You Sure You Want To ",Object(b.jsxs)("span",{children:[' Delete The "',e.item.MovieName,'" Movie ?']})]}),Object(b.jsxs)("div",{className:"italic pad",children:["Press Anywhere Outside This Box ",Object(b.jsx)("span",{children:"To Cancel."})]}),Object(b.jsx)("div",{className:"lf pad",children:Object(b.jsx)("div",{children:Object(b.jsx)("button",{onClick:t,className:"demo9 bold",children:"DELETE PERMANENTLY"})})})]})})})})]})]})})}));function I(e){function t(t){e.sendIdToHome(t)}var s=e.movies.map((function(e){return Object(b.jsxs)("div",{children:[" ",Object(b.jsx)(T,{item:e,sendId2MngMovies:t})]},e.MovieId)}));return Object(b.jsx)("div",{className:"lf demo4",children:s})}var w=Object(b.jsx)("h3",{className:"hdr",children:"Home Page - Available Movies"}),y=Object(b.jsx)("h3",{className:"hdr",children:"Available Movies - For Details And Purcahse Click On Order "}),k=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var c;return Object(d.a)(this,s),(c=t.call(this,e)).go2MyOrders=function(){var e=localStorage.getItem("user"),t=JSON.parse(e);localStorage.setItem("userId",t.UserId),window.location.href="/myOrders"},c.go2NewMovie=function(){window.location.href="/newMovie"},c.myProps=function(){var e=localStorage.getItem("user");return!0===JSON.parse(e).IsManager?Object(b.jsxs)("div",{className:"demo10",children:[Object(b.jsxs)("div",{children:[" ",Object(b.jsx)("button",{className:"demo8 demo5",onClick:c.go2MyOrders,children:"My Orders"})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:"demo8a demo5",onClick:c.go2NewMovie,children:"+ New Movie"})})]}):Object(b.jsx)("div",{className:"demo10",children:Object(b.jsxs)("div",{children:[" ",Object(b.jsx)("button",{className:"demo8 demo5",onClick:c.go2MyOrders,children:"My Orders"})]})})},c.fetchMovies=function(){console.log("start"),fetch("http://proj.ruppin.ac.il/bgroup22/prod/api/movie",{method:"GET",headers:new Headers({"Content-Type":"application/json; charset=UTF-8",Accept:"application/json; charset=UTF-8"})}).then((function(e){return console.log("res=",e),console.log("res.status",e.status),console.log("res.ok",e.ok),e.json()})).then((function(e){console.log("fetch users = ",e),e.map((function(e){return console.log(e.UserFullName)})),c.setState({moviesArr:e})}),(function(e){console.log("err post=",e)})),console.log("end")},c.getMovies=function(){if(void 0!==c.state.moviesArr){var e=localStorage.getItem("user");return!0===JSON.parse(e).IsManager?Object(b.jsx)(I,{movies:c.state.moviesArr,sendIdToHome:c.getIdFromMngMovies}):Object(b.jsx)(P,{movies:c.state.moviesArr})}},c.getIdFromMngMovies=function(e){var t=c.state.moviesArr.filter((function(t){return t.MovieId!==e}));c.setState({moviesArr:t})},c.state={},c.fetchMovies(),c}return Object(j.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"bgc",children:[O,w,this.myProps(),y,this.getMovies()]})}}]),s}(c.Component),C=Object(p.f)(k),D=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var c;return Object(d.a)(this,s),(c=t.call(this,e)).catchSeats=function(e){c.setState({seats:e.target.value})},c.handleClick=function(e){c.state.disabled||c.setState({disabled:!0})},c.postPurchase=function(){var e=Math.floor(5e4*Math.random())+1,t=c.state.seats*c.props.item.Price,s=new Date,n=s.getDate()+"-"+(s.getMonth()+1)+"-"+s.getFullYear(),r=s.getHours()+":"+s.getMinutes()+":"+s.getSeconds(),a=localStorage.getItem("user"),i=JSON.parse(a).UserId,o={PurchaseId:e,NumOfSeats:c.state.seats,TotalCost:t,PurchaseDate:n,PurchaseTime:r,UserId:i,MovieId:c.props.item.MovieId};localStorage.setItem("purchase",JSON.stringify(o)),console.log("start"),fetch("http://proj.ruppin.ac.il/bgroup22/prod/api/purchase",{method:"POST",body:JSON.stringify(o),headers:new Headers({"Content-Type":"application/json; charset=UTF-8",Accept:"application/json; charset=UTF-8"})}).then((function(e){console.log("res=",e),console.log("res.status",e.status),console.log("res.ok",e.ok)})).then((function(e){console.log("fetch New Purcahse = ",e)}),(function(e){console.log("err post=",e)})),console.log("end")},c.updateSeats=function(){console.log("start");var e={MovieId:c.props.item.MovieId,NumOfSeats:c.state.seats};fetch("http://proj.ruppin.ac.il/bgroup22/prod/api/MovieSeats",{method:"PUT",body:JSON.stringify(e),headers:new Headers({"Content-Type":"application/json; charset=UTF-8",Accept:"application/json; charset=UTF-8"})}).then((function(e){console.log("res=",e),console.log("res.status",e.status),console.log("res.ok",e.ok)})).then((function(e){console.log("fetch updated movie seats= ",e)}),(function(e){console.log("err post=",e)})),console.log("end")},c.btnFinish=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(c.state.seats>c.props.item.SeatsAvailable||void 0===c.state.seats||null===c.state.seats||""===c.state.seats||"0"===c.state.seats||isNaN(c.state.seats))){e.next=4;break}alert("Seats ERROR - Seats Must Be A Number And Less Than "+c.props.item.SeatsAvailable),e.next=10;break;case 4:return localStorage.setItem("movie",JSON.stringify(c.props.item)),c.handleClick(),e.next=8,c.postPurchase();case 8:c.updateSeats(),window.location.href="/orderSummary";case 10:case"end":return e.stop()}}),e)}))),c.movieImage=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:c.props.item.ImgUrl,className:"demo2",alt:"MOVIE POSTER"})})},c.shortDate=function(e){var t=new Date(e);return t.getDate()+"-"+(t.getMonth()+1)+"-"+t.getFullYear()},c.movieInfo=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Movie Info - "}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Name: "}),c.props.item.MovieName]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Genre: "})," ",c.props.item.Genre]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Length (Minutes): "}),c.props.item.LengthMinutes]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Production Year: "}),c.props.item.ProductionYear]})]})},c.theaterInfo=function(){var e=c.shortDate(c.props.item.MovieDate);return Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Theater Info - "}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Date: "}),e]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Time: "})," ",c.props.item.MovieTime]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Seats Available: "}),c.props.item.SeatsAvailable]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Ticket Price: "}),c.props.item.Price]})]})},c.orderBox=function(){return Object(b.jsxs)("div",{className:"btm demo7",children:[Object(b.jsx)("h4",{children:"Your Order - "}),Object(b.jsxs)("div",{className:"demo6",children:[Object(b.jsx)("div",{className:"mrt bold",children:"Selected Movie: "}),Object(b.jsx)("input",{type:"text",value:c.props.item.MovieName,readOnly:!0})]}),Object(b.jsxs)("div",{className:"demo6",children:[Object(b.jsx)("div",{className:"mrt bold",children:"Number Of Seats: "}),Object(b.jsx)("input",{type:"text",placeholder:"How Many Seats To Order?",onChange:c.catchSeats})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{onClick:c.btnFinish,disabled:c.state.disabled,children:c.state.disabled?"Updating..":"Submit & Finish"})})]})},c.state={disabled:!1},c}return Object(j.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"demo4 lf",children:[this.movieImage(),this.movieInfo(),this.theaterInfo()]}),this.orderBox()]})}}]),s}(c.Component),A=Object(p.f)(D),G=Object(b.jsx)("h3",{className:"hdr demo5",children:"Order Page - Movie Order"}),U=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var c;return Object(d.a)(this,s),(c=t.call(this,e)).state={movie:c.props.location.state.data},c}return Object(j.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"bgc",children:[O,G,Object(b.jsx)(A,{item:this.state.movie}),console.log(this.props.match.params.demo),console.log(this.props.location.state.data)]})}}]),s}(c.Component),F=Object(p.f)(U),H=Object(b.jsx)("h3",{className:"hdr demo5",children:"Order Summary Page - Order Summary"}),E=Object(b.jsx)("h2",{className:"blue italic",children:"Order Succeeded!"}),R=Object(b.jsx)("h3",{className:"blue italic hdr",children:"Thank You For Your Order From Cinema Center"}),Y=localStorage.getItem("movie"),L=localStorage.getItem("purchase"),B=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var c;return Object(d.a)(this,s),(c=t.call(this,e)).home=function(){window.location.href="/home"},c.orderImage=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:c.state.movie.ImgUrl,className:"demo2",alt:"MOVIE POSTER"})})},c.shortDate=function(e){var t=new Date(e);return t.getDate()+"-"+(t.getMonth()+1)+"-"+t.getFullYear()},c.orderDetails=function(){var e=c.shortDate(c.state.movie.MovieDate);return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Name:"})," ",c.state.movie.MovieName]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Genre: "})," ",c.state.movie.Genre]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Length (Minutes): "}),c.state.movie.LengthMinutes]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Production Year: "}),c.state.movie.ProductionYear]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Play Date: "}),e]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Play Time: "}),c.state.movie.MovieTime]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Ticket Price: "}),c.state.movie.Price]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Number Of Tickets: "}),c.state.purchase.NumOfSeats]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Cost: "}),c.state.purchase.TotalCost]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Purchase Date: "}),c.state.purchase.PurchaseDate]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Purcahse Time: "}),c.state.purchase.PurchaseTime]})]})},c.btnHome=function(){return Object(b.jsx)("div",{className:"cen",children:Object(b.jsx)("button",{onClick:c.home,children:"Back To Home Page"})})},c.state={movie:JSON.parse(Y),purchase:JSON.parse(L)},c}return Object(j.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"bgc",children:[O,H,E,R,Object(b.jsxs)("div",{className:"lf",children:[this.orderImage(),this.orderDetails()]}),this.btnHome(),console.log(JSON.parse(Y))]})}}]),s}(c.Component),J=Object(p.f)(B),V=Object(b.jsx)("h3",{className:"hdr demo5",children:"My Orders Page - Order History "}),Q=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var c;return Object(d.a)(this,s),(c=t.call(this,e)).fetchPurchases=function(){console.log("start");var e=localStorage.getItem("userId");fetch("http://proj.ruppin.ac.il/bgroup22/prod/api/purchase/"+e,{method:"GET",headers:new Headers({"Content-Type":"application/json; charset=UTF-8",Accept:"application/json; charset=UTF-8"})}).then((function(e){return console.log("res=",e),console.log("res.status",e.status),console.log("res.ok",e.ok),e.json()})).then((function(e){console.log("fetch purchase history = ",e),c.setState({purchaseHistory:e})}),(function(e){console.log("err post=",e)})),console.log("end")},c.shortDate=function(e){var t=new Date(e);return t.getDate()+"-"+(t.getMonth()+1)+"-"+t.getFullYear()},c.getOrders=function(){if(void 0!==c.state.purchaseHistory)return c.state.purchaseHistory.map((function(e){return Object(b.jsxs)("tr",{className:"tbl",children:[Object(b.jsx)("td",{children:e.PurchaseId}),Object(b.jsx)("td",{children:c.shortDate(e.PurchaseDate)}),Object(b.jsx)("td",{children:e.MovieName}),Object(b.jsx)("td",{children:e.TotalCost}),Object(b.jsxs)("td",{children:[" ",Object(b.jsx)(v.b,{to:{pathname:"/moreOnOrder",state:{singlePurchase:e}},children:"More"})]})]},e.PurchaseId)}))},c.buildTable=function(){return Object(b.jsx)("div",{className:"try1",children:Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Order No."}),Object(b.jsx)("th",{children:"Order Date"}),Object(b.jsx)("th",{children:"Movie"}),Object(b.jsx)("th",{children:"Cost ($)"}),Object(b.jsx)("th",{children:"Options"})]})}),Object(b.jsx)("tbody",{children:c.getOrders()})]})})},c.state={},c.fetchPurchases(),c}return Object(j.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"bgc",children:[O,V,this.buildTable()]})}}]),s}(c.Component),$=Object(b.jsx)("h3",{className:"hdr",children:"New Movie Page - New Movie Details"}),q=[13,14,15,16,17,18,19,20,21,22,23],W=[0,15,30,45],z=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var c;return Object(d.a)(this,s),(c=t.call(this,e)).fetchGenres=function(){fetch("http://proj.ruppin.ac.il/bgroup22/prod/api/genre",{method:"GET",headers:new Headers({"Content-Type":"application/json; charset=UTF-8",Accept:"application/json; charset=UTF-8"})}).then((function(e){return console.log("res=",e),console.log("res.status",e.status),console.log("res.ok",e.ok),e.json()})).then((function(e){console.log("fetch genres = ",e),e.map((function(e){return console.log(e.GenreName)})),c.setState({Genres:e})}),(function(e){console.log("err post=",e)})),console.log("end")},c.getGenres=function(){if(void 0!==c.state.Genres)return c.state.Genres.map((function(e){return Object(b.jsx)("option",{children:e.GenreName},e.GenreId)}))},c.getHours=function(){return q.map((function(e){return Object(b.jsx)("option",{children:e},e)}))},c.getQuarters=function(){return W.map((function(e){return Object(b.jsx)("option",{children:e},e)}))},c.catchName=function(e){c.setState({name:e.target.value})},c.catchGenre=function(e){c.setState({genre:e.target.value})},c.catchLength=function(e){c.setState({length:e.target.value})},c.catchProdYear=function(e){c.setState({prodYear:e.target.value})},c.catchImgUrl=function(e){c.setState({imgUrl:e.target.value})},c.catchDate=function(e){c.setState({date:e.target.value})},c.catchHours=function(e){c.setState({hours:e.target.value})},c.catchMinutes=function(e){c.setState({minutes:e.target.value})},c.catchSeats=function(e){c.setState({seats:e.target.value})},c.catchTktPrice=function(e){c.setState({tktPrice:e.target.value})},c.checkInput=function(){var e=!1,t=new Date,s={MovieName:c.state.name,ProductionYear:c.state.prodYear,SeatsAvailable:c.state.seats,MovieDate:c.state.date,MovieHours:c.state.hours,MovieMinutes:c.state.minutes,Price:c.state.tktPrice,LengthMinutes:c.state.length,ImgUrl:c.state.imgUrl,Genre:c.state.genre};for(var n in s){if(void 0===s[n]||""===s[n]){alert("Empty Fields ERROR - Please Fill The Empty Fields To Continue !");break}if("Hours"===s.MovieHours||"Minutes"===s.MovieMinutes){alert("Hours/Minuts ERORR - Please Choose Both Hours And Minutes !");break}if("Choose Genre"===s.Genre){alert("Genre ERORR - Please Choose A Genre!");break}if(isNaN(s.SeatsAvailable)||s.SeatsAvailable>200){alert("Seats Available ERROR - Seats Must Be A Number And Below 200 !");break}if(isNaN(s.Price)||s.Price>50){alert("Ticket Price ERROR - Price Must Be A Number And Below 50 !");break}if(isNaN(s.ProductionYear)||s.ProductionYear<1900||s.ProductionYear>2021){alert("Production Year ERROR - Year Must Be A Number And Between 1900 - 2021 !");break}if(isNaN(s.LengthMinutes)||s.LengthMinutes<60||s.LengthMinutes>240){alert("Length In Minutes ERROR - Length Must Be A Number And Between 60 - 240 !");break}if(new Date(s.MovieDate)<t){alert("Date ERROR - Date Can Not Be Earlier Than Today !");break}e=!0;break}return e},c.extractGenreId=function(e){if(localStorage.setItem("genre",e),void 0!==c.state.Genres)return c.state.Genres.find((function(t){return t.GenreName===e})).GenreId},c.genreDemo=Object(l.a)(o.a.mark((function e(){var t,s,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.checkInput()){e.next=12;break}return t=Math.floor(1e5*Math.random())+1,s=c.extractGenreId(c.state.genre),n=c.state.hours+":"+c.state.minutes+":00",r={MovieId:t,MovieName:c.state.name,ProductionYear:c.state.prodYear,SeatsAvailable:c.state.seats,MovieDate:c.state.date,MovieTime:n,Price:c.state.tktPrice,LengthMinutes:c.state.length,ImgUrl:c.state.imgUrl,GenreId:s},e.next=8,c.setState({newMovie:r});case 8:console.log(c.state.newMovie),c.postMovie(),localStorage.setItem("newMovie",JSON.stringify(c.state.newMovie)),window.location.href="/newMovieSummary";case 12:case"end":return e.stop()}}),e)}))),c.postMovie=function(){if(void 0!==c.state.newMovie){var e=c.state.newMovie;console.log("start"),fetch("http://proj.ruppin.ac.il/bgroup22/prod/api/movie",{method:"POST",body:JSON.stringify(e),headers:new Headers({"Content-Type":"application/json; charset=UTF-8",Accept:"application/json; charset=UTF-8"})}).then((function(e){console.log("res=",e),console.log("res.status",e.status),console.log("res.ok",e.ok)})).then((function(e){console.log("fetch New Movie = ",e)}),(function(e){console.log("err post=",e)})),console.log("end")}},c.state={},c.fetchGenres(),c}return Object(j.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"bgc",children:[O,$,Object(b.jsxs)("div",{className:"lf demo4",children:[Object(b.jsxs)("div",{className:"demo4",children:[Object(b.jsxs)("div",{className:"demo6 demo",children:[Object(b.jsx)("div",{className:"mrt bold",children:"Name: "}),Object(b.jsx)("input",{type:"text",onChange:this.catchName})]}),Object(b.jsxs)("div",{className:"demo6 demo",children:[Object(b.jsx)("div",{className:"mrt bold",children:"Genre: "}),Object(b.jsxs)("select",{name:"genres",onChange:this.catchGenre,children:[Object(b.jsx)("option",{children:"Choose Genre"}),this.getGenres()]})]}),Object(b.jsxs)("div",{className:"demo6 demo",children:[Object(b.jsx)("div",{className:"mrt bold",children:"Length (Minutes): "}),Object(b.jsx)("input",{type:"text",onChange:this.catchLength})]}),Object(b.jsxs)("div",{className:"demo6 demo",children:[Object(b.jsx)("div",{className:"mrt bold",children:"Production Year: "}),Object(b.jsx)("input",{type:"text",onChange:this.catchProdYear})]}),Object(b.jsxs)("div",{className:"demo6 demo",children:[Object(b.jsx)("div",{className:"mrt bold",children:"Image Url: "}),Object(b.jsx)("input",{type:"text",onChange:this.catchImgUrl})]})]}),Object(b.jsxs)("div",{className:"demo4",children:[Object(b.jsxs)("div",{className:"demo6 demo",children:[Object(b.jsx)("div",{className:"mrt bold",children:"Date: "}),Object(b.jsx)("input",{type:"date",onChange:this.catchDate})]}),Object(b.jsxs)("div",{className:"demo6 demo",children:[Object(b.jsx)("div",{className:"mrt bold",children:"Time: "}),Object(b.jsxs)("select",{name:"hours",onChange:this.catchHours,children:[Object(b.jsx)("option",{children:"Hours"}),this.getHours()]}),Object(b.jsxs)("select",{name:"quarters",onChange:this.catchMinutes,children:[Object(b.jsx)("option",{children:"Minutes"}),this.getQuarters()]})]}),Object(b.jsxs)("div",{className:"demo6 demo",children:[Object(b.jsx)("div",{className:"mrt bold",children:"Seats: "}),Object(b.jsx)("input",{type:"text",onChange:this.catchSeats})]}),Object(b.jsxs)("div",{className:"demo6 demo",children:[Object(b.jsx)("div",{className:"mrt bold",children:"Ticket Price ($): "}),Object(b.jsx)("input",{type:"text",onChange:this.catchTktPrice})]})]})]}),Object(b.jsx)("div",{className:"cen",children:Object(b.jsx)("button",{onClick:this.genreDemo,children:"Submit & Finish"})})]})}}]),s}(c.Component),K=Object(b.jsx)("h3",{className:"hdr demo5",children:"New Movie Summary Page - New Movie Summary"}),X=Object(b.jsx)("h2",{className:"blue italic",children:"Movie Has Been Added Successfully!"}),Z=localStorage.getItem("newMovie"),_=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var c;return Object(d.a)(this,s),(c=t.call(this,e)).home=function(){window.location.href="/home"},c.newMovieImage=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:c.state.newMovie.ImgUrl,className:"demo2",alt:"MOVIE POSTER"})})},c.newMovieDetails=function(){var e=localStorage.getItem("genre");return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Name:"})," ",c.state.newMovie.MovieName]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Genre: "})," ",e]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Length (Minutes): "}),c.state.newMovie.LengthMinutes]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Production Year: "}),c.state.newMovie.ProductionYear]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Play Date: "}),c.state.newMovie.MovieDate]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Play Time: "}),c.state.newMovie.MovieTime]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Ticket Price: "}),c.state.newMovie.Price]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Number Of Tickets: "}),c.state.newMovie.SeatsAvailable]})]})},c.btnHome=function(){return Object(b.jsx)("div",{className:"cen",children:Object(b.jsx)("button",{onClick:c.home,children:"Back To Home Page"})})},c.state={newMovie:JSON.parse(Z)},c}return Object(j.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"bgc",children:[O,K,X,Object(b.jsxs)("div",{className:"lf",children:[this.newMovieImage(),this.newMovieDetails()]}),this.btnHome()]})}}]),s}(c.Component),ee=Object(p.f)(_),te=Object(b.jsx)("h3",{className:"hdr demo5",children:"Single Order Page - Order Details"}),se=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var c;return Object(d.a)(this,s),(c=t.call(this,e)).back=function(){c.props.history.goBack()},c.orderImage=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:c.state.singlePurchase.ImgUrl,className:"demo2",alt:"MOVIE POSTER"})})},c.shortDate=function(e){var t=new Date(e);return t.getDate()+"-"+(t.getMonth()+1)+"-"+t.getFullYear()},c.orderDetails=function(){var e=c.shortDate(c.state.singlePurchase.MovieDate),t=c.shortDate(c.state.singlePurchase.PurchaseDate);return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Name:"})," ",c.state.singlePurchase.MovieName]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Genre: "})," ",c.state.singlePurchase.Genre]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Length (Minutes): "}),c.state.singlePurchase.LengthMinutes]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Production Year: "}),c.state.singlePurchase.ProductionYear]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Play Date: "}),e]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Play Time: "}),c.state.singlePurchase.MovieTime]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Ticket Price: "}),c.state.singlePurchase.Price]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Number Of Tickets: "}),c.state.singlePurchase.NumOfSeats]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Cost: "}),c.state.singlePurchase.TotalCost]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Purchase Date: "}),t]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Purcahse Time: "}),c.state.singlePurchase.PurchaseTime]})]})},c.btnBack=function(){return Object(b.jsx)("div",{className:"cen",children:Object(b.jsx)("button",{onClick:c.back,children:"Back To My Orders"})})},c.state={singlePurchase:c.props.location.state.singlePurchase},c}return Object(j.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"bgc",children:[O,te,Object(b.jsxs)("div",{className:"lf",children:[this.orderImage(),this.orderDetails()]}),this.btnBack()]})}}]),s}(c.Component),ce=Object(p.f)(se);var ne=Object(p.f)((function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(p.c,{children:[Object(b.jsx)(p.a,{exact:!0,path:"/",children:Object(b.jsx)(f,{})}),Object(b.jsx)(p.a,{path:"/home",children:Object(b.jsx)(C,{})}),Object(b.jsx)(p.a,{path:"/singleOrder/:demo",children:Object(b.jsx)(F,{})}),Object(b.jsx)(p.a,{path:"/orderSummary",children:Object(b.jsx)(J,{})}),Object(b.jsx)(p.a,{path:"/myOrders",children:Object(b.jsx)(Q,{})}),Object(b.jsx)(p.a,{path:"/newMovie",children:Object(b.jsx)(z,{})}),Object(b.jsx)(p.a,{path:"/newMovieSummary",children:Object(b.jsx)(ee,{})}),Object(b.jsx)(p.a,{path:"/moreOnOrder",children:Object(b.jsx)(ce,{})})]})})})),re=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,41)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),r(e),a(e)}))};a.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(v.a,{children:Object(b.jsx)(ne,{})})}),document.getElementById("root")),re()}},[[39,1,2]]]);
//# sourceMappingURL=main.2a947578.chunk.js.map