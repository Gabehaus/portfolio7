(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{113:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(0),c=a.n(s),r=a(43),i=a.n(r),o=(a(113),a(36)),l=a(15),d=a(12),u=a(149),m=a(146),b=a(89),h=a(29),j=a(32),p=a.n(j),f=function(){var e=Object(s.useState)({x:null,y:null}),t=Object(d.a)(e,2),a=t[0],n=t[1],c=function(e){n({x:e.clientX,y:e.clientY})};return Object(s.useEffect)((function(){return window.addEventListener("mousemove",c),function(){return window.removeEventListener("mousemove",c)}}),[]),a},x=a(94),O=a(35),g=a(57),w=a.n(g),N=a(18),y=a(13),v=a(10),k=a(54),S=new Array(6).fill().map((function(e,t){return t})),E=S.reduce((function(e,t){return Object(v.a)(Object(v.a)({},e),{},Object(y.a)({},t,[Math.random(),Math.random(),Math.random()]))}),0),C=Object(k.a)((function(e){return{boxes:S,coordinates:E,mutate:function(){e((function(e){for(var t={},a=0;a<e.boxes.length;a++){var n=e.boxes[a],s=Object(d.a)(e.coordinates[n],3),c=s[0],r=s[1],i=s[2];t[n]=[c+35e-5,r+35e-5,i+.00295]}return Object(v.a)(Object(v.a)({},e),{},{coordinates:t})}))}}}));function P(e){var t=e.id,a=e.xMs,c=e.yMs,r=e.scrollY,i=Object(s.useRef)(),o=Object(s.useRef)([0,0,1]);return Object(s.useEffect)((function(){return C.subscribe((function(e){return o.current=e}),(function(e){return e.coordinates[t]}))})),Object(O.b)((function(){var e;return i.current&&(e=i.current.rotation).set.apply(e,Object(N.a)(o.current))})),Object(O.b)((function(){i.current.rotation.x+=a/500})),Object(O.b)((function(){i.current.rotation.y+=r/300})),Object(O.b)((function(){i.current.rotation.y+=c/500})),Object(n.jsxs)("mesh",{ref:i,style:{opacity:.2},children:[Object(n.jsx)("icosahedronBufferGeometry",{attach:"geometry",args:[1.5,0]}),Object(n.jsx)("meshNormalMaterial",{attach:"material"}),Object(n.jsx)("directionalLight",{color:"#310fd9",intensity:3,position:[2,2,2]})]})}function A(){return Object(O.b)((function(e){e.clock;var t=e.camera;t.position.z=window.innerWidth>1600?3.1:window.innerWidth>1040?3.6:window.innerWidth>1010?4.2:window.innerWidth>760?4.9:window.innerWidth>580?4:3.6,t.position.y=0})),null}function T(e){var t=e.x,a=e.y,c=e.scrollY,r=C((function(e){return[e.boxes,e.mutate]}),w.a),i=Object(d.a)(r,2),o=i[0],l=i[1];return Object(s.useEffect)((function(){p.a.init({duration:2e3})}),[]),Object(s.useEffect)((function(){!function e(){l(),requestAnimationFrame(e)}()}),[l]),Object(n.jsxs)(O.a,{className:"ThreeD1",children:[o.map((function(e){return Object(n.jsx)(P,{id:e,xMs:t,yMs:a,scrollY:c,color:"red"},e)})),Object(n.jsx)(A,{})]})}var M=a.p+"static/media/resume.a964382d.pdf",R={root:null,rootMargin:"0px 0px 0px 0px",threshold:1},D=function(e){var t=Object(s.useState)(!1),a=Object(d.a)(t,2),n=a[0],c=a[1];return Object(s.useEffect)((function(){e.current&&new IntersectionObserver((function(t,a){t.forEach((function(t){t.isIntersecting&&(c(!0),a.unobserve(e.current))}))}),R).observe(e.current)}),[e]),n},I=a(1),G=a(3),L=a(16),W=a(4),_=a(5),B=a(21),F=a(76),H=function(e){Object(W.a)(a,e);var t=Object(_.a)(a);function a(e){var s;return Object(I.a)(this,a),(s=t.call(this,e)).radiusScale=function(e){return B.j().range([1,50]).domain([s.minValue,s.maxValue])(e)},s.simulatePositions=function(e){s.simulation=B.b().nodes(e).velocityDecay(.9).force("x",B.c().strength(.22)).force("y",B.d().strength(.35)).force("collide ",B.a((function(e){return s.radiusScale(e.v)+9}))).on("tick",(function(){s.mounted&&s.setState({data:e})}))},s.renderBubbles=function(e){var t=.95*B.g(e,(function(e){return e.v})),a=1.05*B.f(e,(function(e){return e.v})),c=B.i().domain([t,a]).interpolate(B.e).range(["#0370ff","#cd45ff"]);if(!s.props.useLabels){var r=F.map(e,(function(e,t){return Object(n.jsx)("circle",{r:s.radiusScale(e.v),cx:e.x,cy:e.y,fill:c(e.v),stroke:B.h(c(e.v)).brighter(2),strokeWidth:"2"},t)}));return Object(n.jsx)("g",{transform:"translate(".concat(s.props.width/2,", ").concat(s.props.height/2,")"),children:r})}return F.map(e,(function(e,t){var a=s.props,r=s.radiusScale(e.v)/3;return Object(n.jsxs)("g",{transform:"translate(".concat(a.width/2.7+e.x,", ").concat(a.height/1.2+e.y,")"),children:[Object(n.jsx)("circle",{r:s.radiusScale(e.v),fill:c(e.v),stroke:B.h(c("black")).brighter(2),strokeWidth:"2"}),Object(n.jsx)("text",{dy:"6",fill:"#0d0d0d",fontFamily:"Arial",textAnchor:"middle",fontSize:"".concat(r,"px"),fontWeight:"bold",children:s.state.mytext[t]})]},t)}))},s.minValue=1,s.maxValue=100,s.mounted=!1,s.state={data:[],mytext:["Redux","Typescript","Node","React","Javascript","D3","Bootstrap","MDB","Chakra","Chart.js","GSAP","ThreeJS","TypeORM","Mongoose","MongoDB","SQL","Express","GraphQL"]},s.radiusScale=s.radiusScale.bind(Object(L.a)(s)),s.simulatePositions=s.simulatePositions.bind(Object(L.a)(s)),s.renderBubbles=s.renderBubbles.bind(Object(L.a)(s)),s}return Object(G.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){this.mounted=!0}},{key:"componentDidMount",value:function(){this.props.data.length>0&&(this.minValue=.1*B.g(this.props.data,(function(e){return e.v})),this.maxValue=1.05*B.f(this.props.data,(function(e){return e.v})),this.simulatePositions(this.props.data))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return this.state.data.length?Object(n.jsxs)("div",{style:{minHeight:window.innerHeight<1200?"90vh":"0vw",width:"100vw",position:"relative !important",background:"transparent",overflow:"visible",marginBottom:"20vw !important",display:"flex !important",justifyContent:"center !important"},children:[" ",Object(n.jsx)("svg",{width:"10vw",height:"50vh",style:{display:"flex !important",marginTop:"12vh",overflow:"visible",background:"blue",border:"none 2px yellow",justifyContent:"center !important"},children:this.renderBubbles(this.state.data)})]}):Object(n.jsx)("div",{children:"Loading"})}}]),a}(c.a.Component);H.defaultProps={data:[],useLabels:!1,width:600,height:400};var z=a(119),V=a(76),J=function(e){var t=e.screen,a=e.radius;V.map([90,70,50,90,90,40,90,70,55,40,40,30,30,70,55,55,70,55],(function(e){return{v:e}}));return Object(s.useEffect)((function(){var e=["Redux","Typescript","NodeJSs","React","Javascript","D3","Bootstrap","MDB","Chakra","Chart.js","GSAP","ThreeJS","TypeORM","MongoDB","SQL","Express","GraphQL"],n={radius:"Desktop"===t?"".concat(a):250,maxSpeed:"fast",initSpeed:"fast",fill:"blue"};z(".tagcloud",e,n),z(".tagcloudMobile",e,{radius:"150",maxSpeed:"fast",initSpeed:"fast",fill:"blue"})}),[]),Object(n.jsxs)("div",{id:"circle-wrapper",children:["Desktop"===t||"Ipad"===t?Object(n.jsx)("div",{class:"tagcloud",style:{marginTop:"-7vh",zIndex:"-1",minHeight:"20vw",border:"solid 1x white",overflow:"visible",color:"white"}}):null,"Mobile"===t?Object(n.jsx)("div",{class:"tagcloudMobile",style:{marginTop:"5vw",zIndex:"-1",border:"solid 2px yellow !important",overflow:"visible"}}):null]})},U=(a(78),function(e){var t=e.skill,a=e.radius,r="languages",i=Object(s.useState)(""),o=Object(d.a)(i,2),l=o[0],u=o[1],h=Object(s.useRef)(),j=D(h);return Object(s.useEffect)((function(){p.a.init({duration:2e3})}),[]),Object(s.useEffect)((function(){var e=function(){window.innerWidth>1200?u("Desktop"):window.innerWidth<1200&&window.innerWidth>580?u("Ipad"):window.innerWidth<580&&u("Mobile")};window.addEventListener("resize",e),e()}),[]),Object(n.jsxs)(m.a,{className:"justify-content-center no-gutters skills-row",id:"skills",children:["Mobile"!==l?Object(n.jsx)(b.a,{xl:4,md:12,className:"bubble-box","data-aos":"fade-right",ref:h,children:j&&Object(n.jsx)(J,{skillSet:r,screen:l,skill:t,radius:a})}):null,Object(n.jsxs)(b.a,{xl:5,lg:12,className:"what-im-into","data-aos":"Mobile"!==l?"fade-left":null,children:[Object(n.jsxs)(m.a,{className:"into-row",children:[Object(n.jsx)(b.a,{md:12,className:"work-title2 mt-5",style:{letterSpacing:"3px"},children:"What I'm into"})," ",Object(n.jsxs)(b.a,{md:12,className:"paragraph",style:{background:"transparent"},children:["From ",Object(n.jsx)("span",{className:"blue-text",children:"moving businesses online "}),"to building"," ",Object(n.jsx)("span",{className:"blue-text",children:"full-stack mobile apps"}),", if you can dream it I can code it. I try to think of every project I work on as a coupling of"," ",Object(n.jsx)("span",{className:"blue-text",children:"art and technology"}),'. As Steve Jobs said, "it\'s technology married with liberal arts, married with the humanities, that yields us the results that make our hearts sing."']})]}),"Mobile"===l?Object(n.jsx)(b.a,{className:"white-i-use-plus-skills",children:Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(b.a,{md:12,className:"work-title3",style:{background:"transparent"},children:"What I use"}),Object(n.jsx)(b.a,{lg:12,md:12,className:"mb-5",children:Object(n.jsx)(J,{skillSet:r,screen:l,skill:t,radius:a})})]})}):null]})]})}),K=a(150),Y=a(153),Q=a(147),X=a(90),q=a.n(X);function Z(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(""),i=Object(d.a)(r,2),l=i[0],u=i[1],h=Object(s.useState)(""),j=Object(d.a)(h,2),p=j[0],f=j[1],x=Object(s.useState)(null),O=Object(d.a)(x,2),g=O[0],w=O[1],N=function(e){e.preventDefault(),console.log("email",l),console.log("name",a),console.log("message",p);var t={name:a,email:l,message:p};q.a.post("/api/mail",t).then((function(e){w(!0),y()})).catch((function(){console.log("message not sent")}))},y=function(){c(""),u(""),f(""),setTimeout((function(){w(null)}),3e3)};return Object(n.jsx)(m.a,{"data-aos":"fade-in",className:"py-5 my-5",id:"contact",children:Object(n.jsxs)(b.a,{className:"contact-column-one mx-auto py-5 mx-0 my-5",xl:8,md:10,children:[Object(n.jsx)(m.a,{className:"mx-auto",children:Object(n.jsx)(b.a,{className:"work-title3 text-center",children:"Contact"})}),Object(n.jsxs)(K.a,{onSubmit:N,style:{color:"white",marginBottom:"2vw"},className:"form",children:[g?Object(n.jsx)(Y.a,{color:"success",children:"Email successfully sent!"}):null,!1===g?Object(n.jsx)(Y.a,{color:"danger",children:"Email not sent!"}):null,Object(n.jsxs)(m.a,{md:12,className:"px-0",children:[Object(n.jsx)(b.a,{lg:4,children:Object(n.jsx)("input",{type:"text",name:"name",className:"rounded-0 mr-0 input-name",id:"name",value:a,onChange:function(e){c(e.target.value)},placeholder:"name"})}),Object(n.jsx)(b.a,{lg:8,children:Object(n.jsx)("input",{type:"email",name:"email",className:"rounded-0 ml-0 input-email",id:"exampleEmail",value:l,onChange:function(e){u(e.target.value)},placeholder:"email"})})]}),Object(n.jsx)(m.a,{md:12,children:Object(n.jsx)(b.a,{children:Object(n.jsx)("textarea",{type:"textarea",name:"message",className:"rounded-0 mt-4 input-message",id:"message",value:p,onChange:function(e){f(e.target.value)},placeholder:"message"})})}),Object(n.jsx)(Q.a,{className:"mt-3 submit-button",type:"submit",onClick:N,children:"Submit"})]}),Object(n.jsx)("div",{className:"resume-link",children:Object(n.jsx)(o.b,{to:M,target:"_blank",download:!0,style:{textDecoration:"underline",color:"#555eff"},children:"Download My Resume"})})]})})}var $={properties:[{className:"computer-image",color:"#00d486",app:"https://fathackertest.herokuapp.com/",github:"https://github.com/Gabehaus/FatTrackerJune2020",diary:"https://ghcodingdiary.herokuapp.com/fatHacker2",name:"FAT HACKER",description:"Calculates diet stats from user health info and API nutrition data.",note1:"Redux - JSON Web Tokens - oAuth2",note2:"JSON WEBTOKENS",note3:"REACT + REDUX",picture:"https://freecodecampassets.s3.us-east-2.amazonaws.com/Portfolio+Assets+1/apps/localhost_3007_(iPhone+6_7_8).png"},{className:"computer-image",color:"#00d486",app:"https://calteksolutions.com/",github:"https://github.com/Gabehaus/CalTekTest",diary:"https://github.com/Gabehaus/CalTekTest",name:"Cal Tek E-Commerce Site",description:"Includes an e-commerce shop and company intro page.",note1:"Redux - AS3 img uploader - Paypal - Inventory and Shipping Management",note2:"JSON WEBTOKENS",note3:"REACT + REDUX",picture:"https://freecodecampassets.s3.us-east-2.amazonaws.com/Portfolio+Assets+1/apps/localhost_3007_(iPhone+6_7_8).png"},{className:"computer-image",id:"114",classNm:"desktop",index:2,color:"#4a2fe0",app:"https://gabehaus.github.io/markdownViewer/",github:"https://github.com/Gabehaus/markdownViewer",diary:"https://ghcodingdiary.herokuapp.com/markdownPrev",name:"MRKDWN VIEWER",description:"A markdown code renderer with control pad that automates coding.",note1:"Custom Text Edit - Marked - Highlight.js ",note2:"AUTO TABLE GENERATOR",note3:"DRAGGABLE DIV",picture:"https://freecodecampassets.s3.us-east-2.amazonaws.com/Portfolio+Assets+1/apps/croppedMardownDesktop1.png"},{className:"computer-image",id:"112",classNm:"phone",index:0,color:"#d8f0b6",app:"https://gabehaus.github.io/DrumMachine/",github:"https://github.com/Gabehaus/DrumMachine",diary:"https://ghcodingdiary.herokuapp.com/drumMach",name:"DRUM MACHINE",description:"A touchpad digital drum machine.",note1:"React Hooks - Keydown Event Listener - HTML Audio DOM",note2:"HOOKS",note3:"RESPONSIVE",picture:"https://freecodecampassets.s3.us-east-2.amazonaws.com/Portfolio+Assets+1/apps/localhost_3006_(iPhone+6_7_8)+(1).png"},{className:"computer-image",id:"115",classNm:"POMODORO CLOCK",index:3,color:"red",app:"https://gabehaus.github.io/PomodoroClock/",github:"https://github.com/Gabehaus/PomodoroClock",diary:"https://ghcodingdiary.herokuapp.com/clock",name:"STUDY CLOCK",description:"An alarm clock with dynamic settings for work and break times.",note1:"3D Transforms - Custom React Hooks - HTML Audio DOM",note2:"3D DESKTOP DESIGN",note3:"CUSTOM HOOKS",picture:"https://freecodecampassets.s3.us-east-2.amazonaws.com/Portfolio+Assets+1/apps/croppedClockDesktop2.png"},{className:"computer-image",_id:"111",classNm:"phone",index:4,color:"#9365db",app:"https://gabehaus.github.io/calculator/",github:"https://github.com/Gabehaus/calculator",diary:"https://ghcodingdiary.herokuapp.com/calculator",name:"CALCULATOR",description:"Calculator that logs a user's input and rounds answers using order of opporations rules.",note1:"CSS Grid - Regular Expressions",note2:"FUNCTIONAL COMPONENTS",note3:"CSS GRID INTERFACE",picture:"https://freecodecampassets.s3.us-east-2.amazonaws.com/Portfolio+Assets+1/apps/localhost_3007_(iPhone+6_7_8).png"},{className:"computer-image",id:"113",classNm:"phone",index:1,color:"#0084a8",app:"https://gabehaus.github.io/ReactQuotes3/",github:"https://github.com/Gabehaus/ReactQuotes3",diary:"https://ghcodingdiary.herokuapp.com/quoteGen",name:"QUOTE GNR8TR",description:"Pulls famous quotes from an API and allows users to Tweet them.",note1:"Twitter Functionality - API Call - Dynamic Img Rendering",note2:"API CALL",note3:"RESPONSIVE",picture:"https://freecodecampassets.s3.us-east-2.amazonaws.com/Portfolio+Assets+1/apps/localhost_3006_(iPhone+6_7_8)+(2).png"}]},ee=function(e){var t=e.images;return Object(n.jsx)(b.a,{lg:12,className:"app-image-wrapper",children:$.properties.map((function(e,a){return Object(n.jsxs)(m.a,{className:"justify-content-center app-box",style:{border:"none 2px pink"},children:[Object(n.jsx)(b.a,{md:5,style:{border:"none 2px white"},className:"mt-5 mb-3",children:Object(n.jsx)("img",{src:t[a],alt:e.name,className:e.className})}),Object(n.jsxs)(b.a,{md:5,style:{border:"none 2px grey"},className:"mt-5 mb-3",children:[Object(n.jsx)(m.a,{children:Object(n.jsx)(b.a,{className:"project-name",children:e.name})}),Object(n.jsx)(m.a,{children:Object(n.jsx)(b.a,{className:"project-description px-3 mt-2",children:e.description})}),Object(n.jsx)(m.a,{children:Object(n.jsx)(b.a,{className:"mt-3 project-tech px-3",children:e.note1})}),Object(n.jsxs)(m.a,{className:window.innerWidth<800?"justify-content-center":null,children:[Object(n.jsx)(b.a,{xs:5,className:"mt-3",style:{position:"relative"},children:Object(n.jsx)("a",{href:e.diary,target:"_blank",rel:"noreferrer",className:"button-anchor",children:Object(n.jsx)("button",{className:"about-button",children:"About"})})}),Object(n.jsx)(b.a,{xs:5,className:"mt-3",style:{position:"relative"},children:Object(n.jsx)("a",{href:e.app,target:"_blank",rel:"noreferrer",className:"button-anchor",children:Object(n.jsx)("button",{className:"visit-button",children:"Visit Site"})})})]})]})]},e.name)}))})},te=a.p+"static/media/NANOGPNG.efd84a9d.png",ae=function(){return Object(n.jsx)(b.a,{lg:12,className:"app-image-wrapper",children:Object(n.jsxs)(m.a,{className:"justify-content-center app-box app-box2",style:{border:"none 2px pink"},children:[Object(n.jsx)(b.a,{md:5,style:{border:"none 2px white"},className:"mt-5 mb-3",children:Object(n.jsx)("img",{src:te,alt:"NANOG",className:"computer-image"})}),Object(n.jsxs)(b.a,{md:5,style:{border:"none 2px grey"},className:"mt-5 mb-3",children:[Object(n.jsx)(m.a,{children:Object(n.jsx)(b.a,{className:"project-name",children:"NANOG SITE UPGRADE"})}),Object(n.jsx)(m.a,{children:Object(n.jsx)(b.a,{className:"project-description px-3 mt-2",children:"Devized and executed a plan to scrape data from old versions of company site and format it for use on new site."})}),Object(n.jsx)(m.a,{children:Object(n.jsxs)(b.a,{className:"mt-3 project-tech px-3",children:[" ","React - JSON - Git - RegEx"]})}),Object(n.jsxs)(m.a,{className:window.innerWidth<800?"justify-content-center":null,children:[Object(n.jsx)(b.a,{xs:5,className:"mt-3",style:{position:"relative"},children:Object(n.jsx)("a",{href:"https://www.nanog.org/",target:"_blank",rel:"noreferrer",className:"button-anchor",children:Object(n.jsx)("button",{className:"about-button",children:"About"})})}),Object(n.jsx)(b.a,{xs:5,className:"mt-3",style:{position:"relative"},children:Object(n.jsx)("a",{href:"https://www.nanog.org/",target:"_blank",rel:"noreferrer",className:"button-anchor",children:Object(n.jsx)("button",{className:"visit-button",children:"Visit Site"})})})]})]})]})})},ne=a.p+"static/media/calculatorPNG.4293b8a9.png",se=a.p+"static/media/clockBPNG.3d3a5353.png",ce=a.p+"static/media/drumPNG.ea526cfc.png",re=a.p+"static/media/fathackPNG.a3da198f.png",ie=a.p+"static/media/markownPNG.a6b6b83b.png",oe=a.p+"static/media/quotesBPNG.c1849cbf.png",le=a.p+"static/media/CalTekPNG.438eb103.png",de=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1];return Object(s.useEffect)((function(){p.a.init({duration:2e3,disable:function(){return window.innerWidth<800}})}),[]),Object(s.useEffect)((function(){[re,le,ie,ce,se,ne,oe].map((function(e){var t=(new Image).src=e;return c((function(e){return[].concat(Object(N.a)(e),[t])})),"finished"}))}),[]),Object(n.jsxs)("div",{style:{position:"relative",background:"#0d0d0d",minHeight:"90vh",border:"none 2px pink",maxWidth:"100vw",marginTop:window.innerWidth<950?"10vw":window.innerWidth<600?"45vw":"10vw"},id:"work",children:[Object(n.jsx)(m.a,{children:Object(n.jsx)(b.a,{className:"work-title3",style:{color:"#564aff"},children:"Projects"})}),Object(n.jsx)(m.a,{children:Object(n.jsx)("h3",{className:"project-desc1 text-center font-italic mt-3",style:{color:"white",letterSpacing:".4vw"},children:"Front to back coding and design"})}),Object(n.jsxs)(m.a,{className:"mb-5",children:[Object(n.jsx)(ee,{images:a}),Object(n.jsx)(b.a,{lg:6,md:6,sm:5}),Object(n.jsx)(b.a,{lg:6,md:6,sm:5})]}),Object(n.jsx)(m.a,{className:"assistance",children:Object(n.jsx)(b.a,{className:"work-title3 mt-5",style:{color:"#564aff"},children:"Assistance"})}),Object(n.jsx)(m.a,{children:Object(n.jsx)("h3",{className:"project-desc1 text-center font-italic mt-3",style:{color:"white",letterSpacing:".4vw"},children:"Assistance on client projects"})}),Object(n.jsxs)(m.a,{children:[Object(n.jsx)(ae,{images:a}),Object(n.jsx)(b.a,{lg:6,md:6,sm:5}),Object(n.jsx)(b.a,{lg:6,md:6,sm:5})]})]})},ue=a(148),me=a.p+"static/media/FBlogo.d73beddc.svg",be=a.p+"static/media/TwitterLogo.33dfd9b1.svg",he=function(){return Object(n.jsx)(m.a,{style:{color:"#ae9eff"},className:"my-5",children:Object(n.jsx)(b.a,{xl:10,className:"mx-auto my-5",children:Object(n.jsxs)(m.a,{className:"my-5",children:[Object(n.jsxs)(b.a,{xl:4,className:"footer-col",children:[Object(n.jsx)("h3",{children:"STAY CONNECTED"}),Object(n.jsx)("p",{className:"footer-p",children:"Sign up for our monthly newsletter"}),Object(n.jsxs)("form",{className:"footerForm",children:[Object(n.jsx)("input",{type:"text",id:"email2",name:"email2",className:"formInput"}),Object(n.jsxs)("button",{type:"submit",value:"Submit",className:"subButton",children:["Submit Email"," "]})]}),Object(n.jsx)(ue.a,{src:me,className:"logo1"}),Object(n.jsx)(ue.a,{src:be,className:"logo1 logo1b"})]}),Object(n.jsxs)(b.a,{xl:4,className:"footer-col",children:[Object(n.jsx)("h3",{children:"SITE DESIGN"}),Object(n.jsxs)("p",{className:"footer-p",children:["All Lucid Media Group software and web applications designed and coded (front-to-back) by"," ",Object(n.jsx)("span",{style:{color:"#ae9eff"},children:"Gabriel Hauschildt"})]}),Object(n.jsx)(o.b,{to:M,target:"_blank",download:!0,style:{textDecoration:"underline",color:"#ae9eff",fontFamily:"Arial"},children:"Download My Resume"})]}),Object(n.jsxs)(b.a,{xl:4,className:"footer-col",children:[" ",Object(n.jsx)("h3",{children:" NAVIGATE"}),Object(n.jsxs)("ul",{className:"navLnx",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/#work",className:"a",children:"Work"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/#skills",className:"a",children:"Skills"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/#contact",className:"a",children:"Contact"})})]}),Object(n.jsx)("h3",{children:" EXTERNAL LINKS"}),Object(n.jsxs)("ul",{className:"exLnx",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://ghcodingdiary.herokuapp.com/",target:"_blank",rel:"noopener noreferrer",className:"a",children:"Coding Diary"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://fathackertest.herokuapp.com/",target:"_blank",rel:"noopener noreferrer",className:"a",children:"Fat Hacker App"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"http://calteksolutions.com/shop",target:"_blank",rel:"noopener noreferrer",className:"a",children:"Calteksolutions.com"})})]})]})]})})})},je=function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),a=t[0],c=t[1],r=f(),i=r.x,o=r.y,l=Object(x.a)(60),j=Object(s.useState)(350),O=Object(d.a)(j,2),g=O[0],w=O[1],N=Object(s.useRef)(null),y=Object(s.useRef)(null),v=Object(s.useRef)(null);Object(s.useEffect)((function(){y.current=h.a.to(N.current,{scaleY:"1.05",letterSpacing:"0",ease:"power1.out",border:"solid 5px #3108ff",duration:.6,paused:!0}),v.current=h.a.to(N.current,{color:"#2181ff",duration:1,paused:!0})}),[]);return Object(s.useEffect)((function(){p.a.init({duration:2e3})}),[]),Object(s.useEffect)((function(){h.a.timeline().to(".hi-text",{clipPath:"inset(0% 0% 0%)",webkitClipPath:"inset(0% 0% 0%)",delay:1,duration:1}).to(".i-build-text",{clipPath:"inset(0% 0% 0%)",webkitClipPath:"inset(0% 0% 0%)",duration:1},"+=.6").to(".small-text-animation-wrapper",{clipPath:"polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",webkitClipPath:"polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",duration:1},"+=1").to(".lin",{clipPath:"polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",webkitClipPath:"polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",duration:1},"-=1.3").to(".logo",{clipPath:"polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",webkitClipPath:"polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",duration:1},"-=1.3").to(".contact-button",{clipPath:"polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",webkitClipPath:"polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",duration:.3},"-=.9").to(" .selfie-wrapper-mobile",{clipPath:"polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",webkitClipPath:"polygon(0 0, 100% 0%, 100% 100%, 0% 100%)"},"-=1.3").to(".selfie-wrapper",{clipPath:"polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",webkitClipPath:"polygon(0 0, 100% 0%, 100% 100%, 0% 100%)"},"-=1").to(".contact-me",{text:"Contact Me!"},"-=.6")})),Object(s.useEffect)((function(){var e=function(){var e=.23*Number(window.innerWidth)-91;w(e),window.innerWidth<1400&&window.innerWidth>800?c("Laptop"):window.innerWidth<1200&&window.innerWidth>580?c("Ipad"):window.innerWidth<580&&c("Mobile")};return window.addEventListener("resize",e),e(),function(t){window.removeEventListener("resize",e)}}),[]),Object(n.jsxs)(u.a,{fluid:!0,style:{background:"#0d0d0d",overflowX:"hidden !important",overflowY:"hidden !important"},children:[Object(n.jsxs)(m.a,{children:[Object(n.jsx)(b.a,{className:"column1",xs:{span:12,order:2},sm:{span:12,order:2},md:{span:6,order:1},children:Object(n.jsx)(m.a,{children:Object(n.jsxs)(b.a,{className:"column1b",children:[" ",Object(n.jsx)(m.a,{className:"h1",onClick:function(){alert(window.innerWidth)},children:"Hi, I'm Gabe"}),Object(n.jsx)(m.a,{className:"h1 h1b",children:"I build websites"}),Object(n.jsxs)(m.a,{className:"h2",children:[" ",Object(n.jsxs)("p",{className:"small-text-animation-wrapper",children:[" ","Node.js - React","Ipad"===a?Object(n.jsx)("br",{}):null,"Ipad"!==a?" -":null," Javascript - Typescript"]})]}),Object(n.jsx)(m.a,{children:Object(n.jsx)(b.a,{className:"small-text px-3",children:Object(n.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),window.location.href="#contact"},value:"Contact Me!",className:"contact-button",ref:N,onMouseEnter:function(){y.current.play(),v.current.play()},onMouseLeave:function(){y.current.reverse(),v.current.reverse()},children:"Contact Me!"})})})]})})}),Object(n.jsx)(b.a,{xs:{span:12,order:1},sm:{span:12,order:1},md:{span:6,order:2},className:"column2",children:Object(n.jsx)(m.a,{children:Object(n.jsx)(b.a,{className:"column2b",children:Object(n.jsx)(T,{x:i,y:o,scrollY:l})})})})]}),Object(n.jsx)(U,{radius:g}),Object(n.jsx)(Z,{}),Object(n.jsx)(de,{}),Object(n.jsx)(he,{}),Object(n.jsx)("div",{style:{minHeight:"10vh"},children:"hi"})]})},pe=a(152),fe=a(151),xe=function(e){var t=e.name,a=e.hrf,c=Object(s.useRef)(null),r=Object(s.useRef)(null),i=Object(s.useRef)(null),o=Object(s.useRef)(null),l=Object(s.useRef)(null),d=Object(s.useRef)(null);Object(s.useEffect)((function(){o.current=h.a.to(i.current,{color:"#2181ff",duration:.1,paused:!0}),l.current=h.a.to(c.current,{opacity:1,paused:!0,duration:1}),d.current=h.a.to(r.current,{width:"100%",duration:1,paused:!0})}),[]);return Object(n.jsxs)(fe.a.Link,{href:a,className:"lin",style:{color:"#5c21ff"},onMouseEnter:function(){o.current.play(),l.current.play(),d.current.play()},onMouseLeave:function(){d.current.reverse(),l.current.reverse(),o.current.reverse()},ref:i,children:[t,Object(n.jsx)("div",{className:"under-bar",ref:c,children:Object(n.jsx)("div",{className:"nested-bar",ref:r})})]})},Oe=a.p+"static/media/logo3.05b64c25.png",ge=function(){return Object(n.jsxs)(pe.a,{style:{background:"#0d0d0d"},expand:"lg",variant:"dark",children:[Object(n.jsxs)(pe.a.Brand,{href:"#home",className:"logo",children:[" ",Object(n.jsx)("img",{alt:"",src:Oe,width:window.innerWidth>1100?"250":window.innerWidth>760?"150":"160",className:"d-inline-block align-top",style:{marginLeft:"6vw"}})]}),Object(n.jsx)(pe.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(pe.a.Collapse,{id:"basic-navbar-nav",children:Object(n.jsxs)(fe.a,{className:"mr-auto nav",children:[Object(n.jsx)(xe,{name:"Work",hrf:"#work"}),Object(n.jsx)(xe,{name:"Skills",hrf:"#skills"}),Object(n.jsx)(xe,{name:"Resume",hrf:"#contact"})]})})]})},we=function(){return Object(n.jsxs)(o.a,{children:[Object(n.jsx)(ge,{}),Object(n.jsx)(l.a,{path:"/",component:je,exact:!0})]})},Ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,154)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};a(143);i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(we,{})}),document.getElementById("root")),Ne()}},[[144,1,2]]]);
//# sourceMappingURL=main.48c08917.chunk.js.map