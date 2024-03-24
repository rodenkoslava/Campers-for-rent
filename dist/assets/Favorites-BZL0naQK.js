import{u as r,g as n,a as e,j as s,C as c,L as m}from"./index-Bp4wV4b4.js";import{s as p,a as d,C as u}from"./CampersList-WvafBW3_.js";import{s as f}from"./selectors-CbC4wo0s.js";import"./sprite-zfA8R3ds.js";import"./ModalWindow-eOAl_Rjo.js";const g="/Campers-for-rent/assets/1-CLPvdavf.jpg",h=r.h2`
  margin-bottom: 40px;
  color: ${n.lightText};

  font-weight: 500;
  font-size: 22px;
`,x=r.img`
  border-radius: 20px;
  width: 100%;
`,L=()=>{const o=e(p),a=e(d),i=e(f),t=a.filter(l=>o.includes(l._id));return s.jsxs(c,{children:[t.length===0&&s.jsxs(s.Fragment,{children:[s.jsx(h,{children:"Your favorites list is currently empty. In the catalog you can add the products you like to your favorites and you will be able to see them on this page."}),s.jsx(x,{src:g,alt:"camper"})]}),i?s.jsx(m,{}):s.jsx(u,{campers:t,pathForModal:"favorites"})]})};export{L as default};
