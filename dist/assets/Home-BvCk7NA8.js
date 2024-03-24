import{u as t,j as e,L as o}from"./index-CwYwv72A.js";const n="/Campers-for-rent/assets/bg-masthead-EZvo9l1P.jpg",r=t.h1`
  font-size: 48px;
  padding-bottom: 64px;
`,a=t.p`
  font-size: 48px;
  padding-bottom: 64px;
`,i=t.div`
  background-image: url(${n});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  font-family: Arial, sans-serif;
`,s=t.button`
  color: #454545;
  background: rgb(247, 247, 247);
  padding: 5px 0;
  margin: 0 auto;
  text-decoration: none;
  font-weight: 700;
  font-size: 19px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 250px;
  height: 70px;
  position: absolute;
  bottom: 150px;
  left: 50%;
  transform: translateX(-50%);
  &.active {
    border-bottom: 1px solid #454545;
    text-shadow: 0px 2px 17px rgba(246, 246, 246, 1);
  }
  &.active:hover {
    border-bottom: 1px solid #e44848;
  }
  &:hover {
    color: #e44848;
  }
`,d=()=>e.jsx(i,{children:e.jsxs("div",{children:[e.jsx(r,{children:"Caravan rental"}),e.jsx(a,{children:"Discover new places every day and experience the freedom of traveling"}),e.jsx(o,{to:"/catalog",children:e.jsx(s,{children:"CATALOG"})})]})});export{d as default};
