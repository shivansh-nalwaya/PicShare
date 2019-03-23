import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Button from "antd/lib/button";

const Modal = styled.div`
  position: absolute;
  z-index: 1;
  left: 15%;
  top: 20%;
  width: 70%;
  height: 50%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.6);
`;

const rotate = keyframes`
  from { transform: translateX(0%); }
  to { transform: translateX(93%); }
`;

const Login = styled.div`
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
  z-index: 2;
`;

const Signup = styled.div`
  position: absolute;
  background-color: white;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.7);
  height: 60%;
  animation: ${rotate} 0.1s linear;
  animation-fill-mode: forwards;
  width: 33%;
  left: 18%;
  top: 15%;
  z-index: 2;
`;

const Box = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  color: #ffffff;
  height: 80%;
  width: 40%;
  left: ${props => (props.login ? "5%" : "60%")};
  top: 10%;
  z-index: 2;
`;

export default class App extends Component {
  state = { login: true };

  toggleBox = () => this.setState({ login: !this.state.login });

  render() {
    const { login } = this.state;
    return (
      <div>
        <Modal>
          <Box login={true}>
            <Button onClick={this.toggleBox}>Login</Button>
          </Box>
          <Box login={false}>
            <Button onClick={this.toggleBox}>Signup</Button>
          </Box>
        </Modal>
        {login ? <Login>Login.</Login> : <Signup>Signup.</Signup>}
      </div>
    );
  }
}
