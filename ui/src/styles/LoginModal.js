import styled, { keyframes } from "styled-components";

export const Modal = styled.div`
  position: absolute;
  z-index: 1;
  left: 15%;
  top: 20%;
  width: 70%;
  height: 50%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.4);
`;

const rotate = keyframes`
  from { transform: translateX(0%); }
  to { transform: translateX(93%); }
`;

export const Login = styled.div`
  position: absolute;
  background-color: white;
  animation: ${rotate} 0.1s linear;
  animation-fill-mode: forwards;
  animation-direction: reverse;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.7);
  height: 60%;
  width: 33%;
  left: 18%;
  top: 15%;
  padding: 5%;
  z-index: 2;
`;

export const Signup = styled.div`
  position: absolute;
  background-color: white;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.7);
  height: 60%;
  animation: ${rotate} 0.1s linear;
  animation-fill-mode: forwards;
  width: 33%;
  left: 18%;
  top: 15%;
  padding: 5%;
  z-index: 2;
`;

export const Box = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  position: absolute;
  color: #ffffff;
  height: 80%;
  width: 42%;
  left: ${props => (props.login ? "6%" : "54%")};
  top: 10%;
  padding: 2%;
  padding-top: 3%;
  z-index: 2;
`;

export const TextHeading = styled.div`
  font-size: 1.8em;
  margin-bottom: 10px;
  color: ${props => (props.primary ? "tomato" : "white")};
`;
