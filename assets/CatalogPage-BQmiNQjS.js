import{j as t,u as r,r as s}from"./index-DcLNz5Y4.js";const d=()=>{const n=[{id:1,title:"Карточка 1",content:"Вміст карточки 1"},{id:2,title:"Карточка 2",content:"Вміст карточки 2"},{id:3,title:"Карточка 3",content:"Вміст карточки 3"},{id:4,title:"Карточка 4",content:"Вміст карточки 4"}];return t.jsxs("section",{children:[t.jsx("h2",{children:"Карточки"}),t.jsx("div",{children:n.map(i=>t.jsxs("ul",{children:[t.jsx("h3",{children:i.title}),t.jsx("p",{children:i.content})]}))})]})},x="/Campers-for-rent/assets/sprite-DxqZk0-x.svg",p=r.p`
  width: 360px;
  height: 24px;
  width: 360px;
  height: 24px;
  color: rgba(16, 24, 40, 0.6);
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 8px;
`,h=r.svg`
  stroke: rgb(16, 24, 40);
  fill: transparent;
  width: 18px;
  height: 20px;
  margin-left: 18px;
  margin-right: 8px;
`,g=r.div`
  display: flex;
  flex-direction: row;
  width: 360px;
  height: 56px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  background: rgb(247, 247, 247);
`,j=()=>{const[n,i]=s.useState(null);return s.useEffect(()=>{(async()=>{try{const o=await fetch("https://api.ipify.org?format=json"),{ip:e}=await o.json(),a=await(await fetch(`https://ipapi.co/${e}/json/`)).json();i(a)}catch(o){console.error("Error getting location information:",o)}})()},[]),t.jsxs("div",{children:[t.jsx(p,{children:"Location"}),n?t.jsxs(g,{children:[t.jsx(h,{children:t.jsx("use",{href:x+"#icon-location"})}),t.jsxs("p",{children:[n.city,", ",n.country_name]})]}):t.jsx("p",{children:"Loading location..."})]})},u=()=>{const[n,i]=s.useState([]),c=["Filter 1","Filter 2","Filter 3","Filter 4","Filter 5","Filter 6","Filter 7","Filter 8"],o=e=>{n.includes(e)?i(n.filter(l=>l!==e)):i([...n,e])};return t.jsxs("div",{children:[t.jsx("h2",{children:"Фільтри"}),t.jsx("div",{children:c.map(e=>t.jsx("button",{onClick:()=>o(e),style:{marginRight:"10px",background:n.includes(e)?"blue":"gray",color:"white",border:"none",borderRadius:"5px",padding:"5px 10px",cursor:"pointer"},children:e},e))}),t.jsxs("div",{children:[t.jsx("h3",{children:"Вибрані фільтри:"}),n.map(e=>t.jsx("div",{children:e},e))]})]})},m=()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{}),t.jsx(u,{}),t.jsx(d,{})]});export{m as default};
