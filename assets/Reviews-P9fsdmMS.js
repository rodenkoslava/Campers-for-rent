import{u as r,g as t,a,j as e}from"./index-Bp4wV4b4.js";import{c as p}from"./selectors-CbC4wo0s.js";import{s as o}from"./sprite-zfA8R3ds.js";import{B as x}from"./BookForm-DSf3_5Qz.js";import"./formik.esm-DBr21ARa.js";const h=r.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`,d=r.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 60px;
  column-gap: 16px;
  row-gap: 4px;
  width: 172px;
  justify-content: center;
  margin-bottom: 16px;
`,m=r.li`
  margin-bottom: 24px;
`,f=r.div`
  border-radius: 60px;
  width: 60px;
  height: 60px;
  background-color: ${t.blockFeatures};
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: ${t.btn};
  display: flex;
  align-items: center;
  justify-content: center;
`,g=r.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 133%;
`,j=r.ul`
  display: flex;
  flex-direction: row;
  gap: 4px;
`,n=r.svg`
  width: 16px;
  height: 16px;
`,w=r.p`
  color: ${t.lightText};
`,I=()=>{const l=a(p),{reviews:c}=l;return e.jsxs(h,{children:[e.jsx("div",{children:e.jsx("ul",{children:c.map(i=>e.jsxs(m,{children:[e.jsxs(d,{children:[e.jsx(f,{children:i.reviewer_name.charAt(0)}),e.jsx(g,{children:i.reviewer_name}),e.jsx(j,{children:[...Array(5)].map((u,s)=>e.jsx("li",{children:s<i.reviewer_rating?e.jsx(n,{children:e.jsx("use",{href:o+"#icon-star",fill:"#FFC531"})}):e.jsx(n,{children:e.jsx("use",{href:o+"#icon-star",fill:"#F2F4F7"})})},s))})]}),e.jsx(w,{children:i.comment})]},i.reviewer_name))})}),e.jsx(x,{})]})};export{I as default};
