import React, { Component } from "react";
import {
  Modal,
  Box,
  Login,
  Signup,
  TextHeading,
  StyledButton
} from "../styles/LoginModal";

export default class App extends Component {
  state = { login: true };

  toggleBox = () => this.setState({ login: !this.state.login });

  render() {
    const { login } = this.state;
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
          </Login>
        ) : (
          <Signup>
            <TextHeading primary>SIGNUP</TextHeading>
          </Signup>
        )}
      </div>
    );
  }
}
