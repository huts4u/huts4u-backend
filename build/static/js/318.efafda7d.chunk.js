"use strict";(self.webpackChunkhuts4u=self.webpackChunkhuts4u||[]).push([[318],{29318:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var a=r(65218),s=r(81637),o=r(94496),n=r(7353),i=r(35721),l=r(30681),d=r(65043),c=r(58387),u=r(98610),m=r(51347),p=r(34535),x=r(98206),h=r(92532),g=r(72372);function f(e){return(0,g.Ay)("MuiListItemAvatar",e)}(0,h.A)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var v=r(70579);const A=(0,p.Ay)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,"flex-start"===r.alignItems&&t.alignItemsFlexStart]}})({minWidth:56,flexShrink:0,variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}),b=d.forwardRef((function(e,t){const r=(0,x.b)({props:e,name:"MuiListItemAvatar"}),{className:a,...s}=r,o=d.useContext(m.A),n={...r,alignItems:o.alignItems},i=(e=>{const{alignItems:t,classes:r}=e,a={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,u.A)(a,f,r)})(n);return(0,v.jsx)(A,{className:(0,c.A)(i.root,a),ownerState:n,ref:t,...s})}));var y=r(81045),S=r(48734),w=r(26240),j=r(69995);const k=()=>{const[e,t]=(0,d.useState)([]),[r,c]=(0,d.useState)(!0),[u,m]=(0,d.useState)(null),p=(0,w.A)();return(0,d.useEffect)((()=>{(async()=>{try{var e,r;c(!0),m(null);const a={data:{filter:""},page:0,pageSize:50,order:[["createdAt","ASC"]]},s=await(0,j.VA)(a);if(null!==s&&void 0!==s&&null!==(e=s.data)&&void 0!==e&&null!==(r=e.data)&&void 0!==r&&r.rows){const e=s.data.data.rows.map((e=>({id:e.id,sender:e.senderName||"Unknown Sender",avatar:e.senderAvatar||void 0,text:e.content||"No content",createdAt:e.createdAt,unread:"UNREAD"===e.status})));t(e)}else t([]),m("No messages found")}catch(u){console.error("Error fetching messages:",u),m("Failed to load messages"),t([])}finally{c(!1)}})()}),[]),r?(0,v.jsx)(a.A,{maxWidth:"lg",sx:{py:4,display:"flex",justifyContent:"center"},children:(0,v.jsx)(s.A,{})}):u?(0,v.jsxs)(a.A,{maxWidth:"lg",sx:{py:4},children:[(0,v.jsx)(o.A,{variant:"h4",gutterBottom:!0,sx:{fontWeight:"bold",mb:3},children:"Messages"}),(0,v.jsx)(o.A,{color:"error",children:u})]}):(0,v.jsxs)(a.A,{maxWidth:"lg",sx:{py:4},children:[(0,v.jsx)(o.A,{variant:"h4",gutterBottom:!0,sx:{fontWeight:"bold",mb:3},children:"Messages"}),(0,v.jsx)(n.A,{sx:{bgcolor:"background.paper",borderRadius:p.shape.borderRadius,boxShadow:p.shadows[1],overflow:"hidden"},children:e.length>0?(0,v.jsx)(i.A,{children:e.map((e=>(0,v.jsxs)(l.Ay,{divider:!0,children:[(0,v.jsx)(b,{children:(0,v.jsx)(y.A,{alt:e.sender,src:e.avatar})}),(0,v.jsx)(S.A,{primary:(0,v.jsxs)(n.A,{display:"flex",justifyContent:"space-between",children:[(0,v.jsx)(o.A,{fontWeight:e.unread?"bold":"normal",color:e.unread?"text.primary":"text.secondary",children:e.sender}),(0,v.jsx)(o.A,{variant:"caption",color:e.unread?"primary.main":"text.secondary",children:new Date(e.createdAt).toLocaleTimeString()})]}),secondary:(0,v.jsx)(o.A,{variant:"body2",color:e.unread?"text.primary":"text.secondary",children:e.text})})]},e.id)))}):(0,v.jsx)(n.A,{p:4,textAlign:"center",children:(0,v.jsx)(o.A,{color:"text.secondary",children:"No messages available"})})})]})}},52900:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(64775),s=r(43898);function o(e){let{props:t,name:r,defaultTheme:o,themeId:n}=e,i=(0,s.A)(o);return n&&(i=i[n]||i),(0,a.A)({theme:i,name:r,props:t})}},65218:(e,t,r)=>{r.d(t,{A:()=>A});var a=r(65043),s=r(58387),o=r(72372),n=r(98610),i=r(67598),l=r(52900);const d=(0,r(76528).Ay)();var c=r(3216),u=r(70579);const m=(0,c.A)(),p=d("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,i.A)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),x=e=>(0,l.A)({props:e,name:"MuiContainer",defaultTheme:m});var h=r(6803),g=r(34535),f=r(98206);const v=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=p,useThemeProps:r=x,componentName:l="MuiContainer"}=e,d=t((e=>{let{theme:t,ownerState:r}=e;return{width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!r.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}}}),(e=>{let{theme:t,ownerState:r}=e;return r.fixed&&Object.keys(t.breakpoints.values).reduce(((e,r)=>{const a=r,s=t.breakpoints.values[a];return 0!==s&&(e[t.breakpoints.up(a)]={maxWidth:`${s}${t.breakpoints.unit}`}),e}),{})}),(e=>{let{theme:t,ownerState:r}=e;return{..."xs"===r.maxWidth&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},...r.maxWidth&&"xs"!==r.maxWidth&&{[t.breakpoints.up(r.maxWidth)]:{maxWidth:`${t.breakpoints.values[r.maxWidth]}${t.breakpoints.unit}`}}}})),c=a.forwardRef((function(e,t){const a=r(e),{className:c,component:m="div",disableGutters:p=!1,fixed:x=!1,maxWidth:h="lg",classes:g,...f}=a,v={...a,component:m,disableGutters:p,fixed:x,maxWidth:h},A=((e,t)=>{const{classes:r,fixed:a,disableGutters:s,maxWidth:l}=e,d={root:["root",l&&`maxWidth${(0,i.A)(String(l))}`,a&&"fixed",s&&"disableGutters"]};return(0,n.A)(d,(e=>(0,o.Ay)(t,e)),r)})(v,l);return(0,u.jsx)(d,{as:m,ownerState:v,className:(0,s.A)(A.root,c),ref:t,...f})}));return c}({createStyledComponent:(0,g.Ay)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,h.A)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,f.b)({props:e,name:"MuiContainer"})}),A=v},81045:(e,t,r)=>{r.d(t,{A:()=>A});var a=r(65043),s=r(58387),o=r(98610),n=r(34535),i=r(56262),l=r(98206),d=r(59662),c=r(70579);const u=(0,d.A)((0,c.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var m=r(92532),p=r(72372);function x(e){return(0,p.Ay)("MuiAvatar",e)}(0,m.A)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var h=r(4162);const g=(0,n.Ay)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((0,i.A)((e=>{let{theme:t}=e;return{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(t.vars||t).palette.background.default,...t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:t.palette.grey[400],...t.applyStyles("dark",{backgroundColor:t.palette.grey[600]})}}}]}}))),f=(0,n.Ay)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),v=(0,n.Ay)(u,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});const A=a.forwardRef((function(e,t){const r=(0,l.b)({props:e,name:"MuiAvatar"}),{alt:n,children:i,className:d,component:u="div",slots:m={},slotProps:p={},imgProps:A,sizes:b,src:y,srcSet:S,variant:w="circular",...j}=r;let k=null;const R={...r,component:u,variant:w},W=function(e){let{crossOrigin:t,referrerPolicy:r,src:s,srcSet:o}=e;const[n,i]=a.useState(!1);return a.useEffect((()=>{if(!s&&!o)return;i(!1);let e=!0;const a=new Image;return a.onload=()=>{e&&i("loaded")},a.onerror=()=>{e&&i("error")},a.crossOrigin=t,a.referrerPolicy=r,a.src=s,o&&(a.srcset=o),()=>{e=!1}}),[t,r,s,o]),n}({...A,..."function"===typeof p.img?p.img(R):p.img,src:y,srcSet:S}),M=y||S,C=M&&"error"!==W;R.colorDefault=!C,delete R.ownerState;const I=(e=>{const{classes:t,variant:r,colorDefault:a}=e,s={root:["root",r,a&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,o.A)(s,x,t)})(R),[N,P]=(0,h.A)("img",{className:I.img,elementType:f,externalForwardedProps:{slots:m,slotProps:{img:{...A,...p.img}}},additionalProps:{alt:n,src:y,srcSet:S,sizes:b},ownerState:R});return k=C?(0,c.jsx)(N,{...P}):i||0===i?i:M&&n?n[0]:(0,c.jsx)(v,{ownerState:R,className:I.fallback}),(0,c.jsx)(g,{as:u,className:(0,s.A)(I.root,d),ref:t,...j,ownerState:R,children:k})}))}}]);
//# sourceMappingURL=318.efafda7d.chunk.js.map