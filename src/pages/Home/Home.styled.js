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

export const Button = styled.button`
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
`;
