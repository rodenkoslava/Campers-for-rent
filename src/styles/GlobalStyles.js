import styled, { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

body {
  margin: 0;
  background-color: #000;
   font-family: 'Inter', sans-serif;
   font-weight: 400;
   font-style: normal;
   color: #fff;
   width: 100%;
   height: 100vh;
   margin: 0;
}



a {
  text-decoration: none;
}

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

 h1,
 h2,
 h3,
 h4,
 h5,
 h6,
 p {
   margin: 0;
 }

img, svg {
  display: block;
  width: 100%;
  height: 100%;
  
}

button {
 cursor: pointer;
 }
`;

export const Container = styled.div`
  width: 1440px;
  padding: 0 64px;
`;
