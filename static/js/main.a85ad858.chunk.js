(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Bob","imageURL":"images/bob.webp","clicked":false},{"id":2,"name":"Linda","imageURL":"images/linda.webp","clicked":false},{"id":3,"name":"Frond","imageURL":"images/frond.webp","clicked":false},{"id":4,"name":"Gene","imageURL":"images/gene.webp","clicked":false},{"id":5,"name":"jimmy jr","imageURL":"images/jimmy_jr.webp","clicked":false},{"id":6,"name":"Jimmy Pesto","imageURL":"images/jimmy_pesto.webp","clicked":false},{"id":7,"name":"Louise","imageURL":"images/louise.webp","clicked":false},{"id":8,"name":"Mort","imageURL":"images/mort.webp","clicked":false},{"id":9,"name":"Teddy","imageURL":"images/teddy.webp","clicked":false},{"id":10,"name":"Tina","imageURL":"images/tina.webp","clicked":false}]')},,,,,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),r=t.n(c),n=t(8),i=t.n(n),o=(t(16),t(9)),s=t(1),l=t(2),m=t(4),d=t(3),u=t(5);t(17),t(18);var h=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:e.name,src:e.image,onClick:function(){return e.handleClick(e.id)}})))};var f=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)},g=t(10),p=t.n(g);t(20);var k=function(e){return r.a.createElement("div",{className:"header"},r.a.createElement("p",{id:"headerLeft"},"Bob's Burgers Clicky Game "),r.a.createElement("p",{id:"headerMiddle"},e.headerText),r.a.createElement("p",{id:"headerRight"},"Score: ",e.score," | Top Score: ",e.topScore))},b=(t(21),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"Clicky Game")))}}]),a}(c.Component)),y=t(6),v=function(e){function a(){var e,t;Object(s.a)(this,a);for(var c=arguments.length,r=new Array(c),n=0;n<c;n++)r[n]=arguments[n];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={topScore:0,score:0,headerText:"Don't click the same image twice!",characters:y},t.handleClick=function(e){for(var a=t.state.characters,c=0;c<a.length;c++)console.log("charArr is: "+a[0].id),e===a[c].id&&(!1===a[c].clicked?t.setState({score:t.state.score+1,characters:p()(t.state.characters,Object(o.a)({},c,{clicked:{$set:!0}})),headerText:"You guessed correctly!"}):(t.state.score>t.state.topScore&&t.setState({topScore:t.state.score,score:0,headerText:"You guessed incorrectly!",characters:y},(function(){console.log("Updated new top score!")})),t.state.score<=t.state.topScore&&t.setState({score:0,headerText:"You guessed incorrectly!",characters:y},(function(){console.log("Reset-- you did not beat the top score!")}))))},t.shuffleArray=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),c=e[a];e[a]=e[t],e[t]=c}return e},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=this.state.characters.map((function(a){return r.a.createElement(h,{name:a.name,image:a.imageURL,key:a.id,id:a.id,handleClick:e.handleClick})})),t=this.shuffleArray(a);return r.a.createElement("div",null,r.a.createElement(k,{score:this.state.score,topScore:this.state.topScore,headerText:this.state.headerText}),r.a.createElement(f,null,t),r.a.createElement(b,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.a85ad858.chunk.js.map