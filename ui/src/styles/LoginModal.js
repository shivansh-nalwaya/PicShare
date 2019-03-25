import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "antd/lib/button";

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
  color: ${props => (props.primary ? "tomato" : "white")};
`;

export class StyledButton extends React.Component {
  state = { hovered: false };

  toggleHover = () => this.setState({ hovered: !this.state.hovered });

  render() {
    const basicStyles = {
      backgroundColor: "transparent",
      color: "white",
      fontSize: "1.2em",
      marginTop: 10,
      paddingVertical: 14,
      width: "50%"
    };
    const hoverStyles = {
      borderColor: "tomato",
      color: "tomato"
    };
    const styles = this.state.hovered
      ? { ...basicStyles, ...hoverStyles }
      : { ...basicStyles };
    return (
      <Button
        size="large"
        {...this.props}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        style={styles}
      >
        {this.props.children}
      </Button>
    );
  }
}
