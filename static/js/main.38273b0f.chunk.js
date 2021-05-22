(this.webpackJsonptxt2img=this.webpackJsonptxt2img||[]).push([[0],{133:function(t,e,n){},134:function(t,e,n){},135:function(t,e,n){},143:function(t,e,n){},144:function(t,e,n){},145:function(t,e,n){},146:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(48),c=n.n(i),r=(n(132),n(133),n(24)),s=n(25),h=n(29),l=n(26),u=n(105),f=n.n(u),g=(n(134),n(135),n(159)),p=n(7),d=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=v.sort().map((function(t){return{key:t,value:t,text:t}}));return Object(p.jsx)(g.a,{className:"font-list",options:e,value:this.props.font,onChange:function(e,n){var o=n.value;return t.props.onChange(String(o)||"Nanum Gothic")},compact:!0,search:!0})}}]),n}(a.a.Component),v=["Roboto","Noto Sans KR","Noto Sans JP","Nanum Gothic","Nanum Myeongjo","Nanum Pen Script","Noto Serif KR","Noto Serif JP","Nanum Brush Script","Black Han Sans","Jua","Dokdo","Cute Font","Stylish","Reggae One","Sawarabi Gothic","Kosugi Maru","Shippori Mincho","Dela Gothic One","Kiwi Maru","DotGothic16","Stick","Train One","Hachi Maru Pop","Potta One","Yusei Magic","New Tegomin"],x=d,b=(n(143),function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return Object(p.jsx)("input",{type:"color",className:"input-color",value:this.props.color,onChange:function(e){return t.props.onChange(e.target.value)}})}}]),n}(a.a.Component)),j=(n(144),n(158)),m=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return Object(p.jsx)(j.a,{type:this.props.type,className:"input-text",value:this.props.text,onChange:function(e){return t.props.onChange(e.target.value)}})}}]),n}(a.a.Component),C=(n(145),n(147)),O=n(115),w=n.n(O),y=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).canvasRef=a.a.createRef(),t.ctx=null,t}return Object(s.a)(n,[{key:"drawText",value:function(){null!==this.ctx&&(this.ctx.clearRect(0,0,this.props.width,this.props.height),this.ctx.fillStyle=this.props.bgColor,this.ctx.fillRect(0,0,this.props.width,this.props.height),this.ctx.textBaseline="middle",this.ctx.textAlign="center",this.ctx.fillStyle=this.props.fgColor,this.ctx.font="".concat(this.props.fontSize,"px ").concat(this.props.fontName),this.ctx.fillText(this.props.text,this.props.width/2,this.props.height/2))}},{key:"downloadImage",value:function(){var t=this.canvasRef.current.toDataURL("image/png").replace(/^data:image\/png/,"data:application/octet-stream");new w.a({url:t,filename:"txt2img.png",autoStart:!1}).start().catch((function(t){return alert(t)}))}},{key:"componentDidMount",value:function(){var t=this;this.ctx=this.canvasRef.current.getContext("2d"),this.drawText(),document.fonts.onloadingdone=function(){return t.drawText()}}},{key:"componentDidUpdate",value:function(){this.drawText()}},{key:"render",value:function(){var t=this;return Object(p.jsxs)("div",{children:[Object(p.jsx)("canvas",{ref:this.canvasRef,className:"text-canvas",width:this.props.width,height:this.props.height}),Object(p.jsx)(C.a,{fluid:!0,onClick:function(){return t.downloadImage()},children:"Download"})]})}}]),n}(a.a.Component),S=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={text:"Text",canvasWidth:512,canvasHeight:256,fontSize:48,fontName:"Nanum Gothic",bgColor:"#FFFFFF",fgColor:"#000000"},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){f.a.load({google:{families:[this.state.fontName]}})}},{key:"onTextChange",value:function(t){this.setState({text:t})}},{key:"onWidthChange",value:function(t){t<0&&(t=8),this.setState({canvasWidth:t})}},{key:"onHeightChange",value:function(t){t<0&&(t=8),this.setState({canvasHeight:t})}},{key:"onFontChange",value:function(t){f.a.load({google:{families:[t]}}),this.setState({fontName:t})}},{key:"onFontSizeChange",value:function(t){t<0&&(t=4),this.setState({fontSize:t})}},{key:"onBgColorChange",value:function(t){this.setState({bgColor:t})}},{key:"onFgColorChange",value:function(t){this.setState({fgColor:t})}},{key:"render",value:function(){var t=this,e=this.state;return Object(p.jsxs)("div",{className:"app-box",children:[Object(p.jsx)("h1",{children:"txt2img"}),Object(p.jsxs)("div",{className:"col2-box",children:[Object(p.jsxs)("div",{className:"named-input-box",children:["Width :",Object(p.jsx)(m,{type:"number",text:e.canvasWidth.toString(),onChange:function(e){return t.onWidthChange(parseInt(e))}})]}),Object(p.jsxs)("div",{className:"named-input-box",children:["Height :",Object(p.jsx)(m,{type:"number",text:e.canvasHeight.toString(),onChange:function(e){return t.onHeightChange(parseInt(e))}})]})]}),Object(p.jsxs)("div",{className:"col2-box",children:[Object(p.jsxs)("div",{className:"named-input-box",children:["Font :",Object(p.jsx)(x,{font:e.fontName,onChange:function(e){return t.onFontChange(e)}})]}),Object(p.jsxs)("div",{className:"named-input-box",children:["Size :",Object(p.jsx)(m,{type:"number",text:e.fontSize.toString(),onChange:function(e){return t.onFontSizeChange(parseInt(e))}})]})]}),Object(p.jsxs)("div",{className:"col2-box",children:[Object(p.jsxs)("div",{className:"named-input-box",children:["Fore :",Object(p.jsx)(b,{color:e.fgColor,onChange:function(e){return t.onFgColorChange(e)}})]}),Object(p.jsxs)("div",{className:"named-input-box",children:["Back :",Object(p.jsx)(b,{color:e.bgColor,onChange:function(e){return t.onBgColorChange(e)}})]})]}),Object(p.jsx)(m,{type:"text",text:e.text,onChange:function(e){return t.onTextChange(e)}}),Object(p.jsx)("div",{className:"canvas-box",children:Object(p.jsx)(y,{text:e.text,width:e.canvasWidth,height:e.canvasHeight,fontSize:e.fontSize,fontName:e.fontName,fgColor:e.fgColor,bgColor:e.bgColor})})]})}}]),n}(a.a.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}var F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,161)).then((function(e){var n=e.getCLS,o=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),o(t),a(t),i(t),c(t)}))};c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/txt2img",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/txt2img","/service-worker.js");k?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):N(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):N(e,t)}))}}(),F()}},[[146,1,2]]]);
//# sourceMappingURL=main.38273b0f.chunk.js.map