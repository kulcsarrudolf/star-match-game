(this["webpackJsonpstar-match-game"]=this["webpackJsonpstar-match-game"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),u=n.n(c),l=(n(9),n(1)),o=(n(10),{sum:function(e){return e.reduce((function(e,t){return e+t}),0)},range:function(e,t){return Array.from({length:t-e+1},(function(t,n){return e+n}))},random:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randomSumIn:function(e,t){for(var n=[[]],a=[],r=0;r<e.length;r++)for(var c=0,u=n.length;c<u;c++){var l=n[c].concat(e[r]),i=o.sum(l);i<=t&&(n.push(l),a.push(i))}return a[o.random(0,a.length-1)]}}),i=o,s={available:"lightgray",used:"lightgreen",wrong:"lightcoral",candidate:"deepskyblue"},m=function(e){return r.a.createElement(r.a.Fragment,null,i.range(1,e.count).map((function(e){return r.a.createElement("div",{key:e,className:"star"})})))},f=function(e){return r.a.createElement("button",{className:"number",style:{backgroundColor:s[e.status]},onClick:function(){return e.onClick(e.number,e.status)}},e.number)},d=function(e){return r.a.createElement("div",{className:"game-done"},r.a.createElement("div",{className:"message",style:{color:"lost"===e.gameStatus?"red":"green"}},"lost"===e.gameStatus?"Game Over":"Nice"),r.a.createElement("button",{onClick:e.onClick},"Play Again"))},g=function(e){var t=Object(a.useState)(i.random(1,9)),n=Object(l.a)(t,2),c=n[0],u=n[1],o=Object(a.useState)(i.range(1,9)),s=Object(l.a)(o,2),g=s[0],b=s[1],v=Object(a.useState)([]),h=Object(l.a)(v,2),E=h[0],k=h[1],N=Object(a.useState)(10),p=Object(l.a)(N,2),O=p[0],j=p[1];Object(a.useEffect)((function(){if(O>0&&g.length>0){var e=setTimeout((function(){j(O-1)}),1e3);return function(){return clearTimeout(e)}}}));var y=i.sum(E)>c,S=0===g.length?"won":0===O?"lost":"active",w=function(e){return g.includes(e)?E.includes(e)?y?"wrong":"candidate":"available":"used"},C=function(e,t){if("active"===S&&"used"!==t){var n="available"===t?E.concat(e):E.filter((function(t){return t!==e}));if(i.sum(n)!==c)k(n);else{var a=g.filter((function(e){return!n.includes(e)}));u(i.randomSumIn(a,9)),b(a),k([])}}};return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"help"},"Pick 1 or more numbers that sum to the number of stars"),r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"left"},"active"!==S?r.a.createElement(d,{onClick:e.startNewGame,gameStatus:S}):r.a.createElement(m,{count:c})),r.a.createElement("div",{className:"right"},i.range(1,9).map((function(e){return r.a.createElement(f,{key:e,status:w(e),number:e,onClick:C})})))),r.a.createElement("div",{className:"timer"},"Time Remaining: ",O))},b=function(){var e=Object(a.useState)(1),t=Object(l.a)(e,2),n=t[0],c=t[1];return r.a.createElement(g,{key:n,startNewGame:function(){return c(n+1)}})};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.b6cca704.chunk.js.map