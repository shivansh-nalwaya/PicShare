import React, { Component } from "react";
import { Modal, Box, Login, Signup, TextHeading } from "../styles/LoginModal";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { StyledButton } from "../styles/common";

export default class App extends Component {
  state = { login: true };

  toggleBox = () => this.setState({ login: !this.state.login });

  render() {
    const { login } = this.state;
    if (!this.props.visible) return null;
    return (
      <div>
        <Modal>
          <Box login={true}>
            <TextHeading>Already have an account?</TextHeading>
            <StyledButton onClick={this.toggleBox}>LOGIN</StyledButton>
          </Box>
          <Box login={false}>
            <TextHeading>Don't have an account?</TextHeading>
            <StyledButton onClick={this.toggleBox}>SIGNUP</StyledButton>
          </Box>
        </Modal>
        {login ? (
          <Login>
            <TextHeading primary>LOGIN</TextHeading>
            <LoginForm />
          </Login>
        ) : (
          <Signup>
            <TextHeading primary>SIGNUP</TextHeading>
            <SignupForm />
          </Signup>
        )}
      </div>
    );
  }
}
