import styled from "styled-components";
import backgroundImage from "../../assets/image/bg-masthead.jpg";

export const Title = styled.h1`
  font-size: 48px;
  padding-bottom: 64px;
`;

export const Text = styled.p`
  font-size: 48px;
  padding-bottom: 64px;
`;

export const HomeWrapper = styled.div`
  background-image: url(${backgroundImage});
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
`;
