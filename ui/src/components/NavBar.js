import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { Button } from "antd";

export default class NavBar extends React.Component {
  state = { loginVisible: false, signupVisible: false };

  showLoginModal = () => {
    this.setState({ loginVisible: true });
  };

  showSignupModal = () => {
    this.setState({ signupVisible: true });
  };

  closeLoginModal = () => {
    this.setState({ loginVisible: false });
  };

  closeSignupModal = () => {
    this.setState({ signupVisible: false });
  };

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.showLoginModal}>Login</Button>
        <LoginForm
          visible={this.state.loginVisible}
          closeModal={this.closeLoginModal}
        />
        <Button onClick={this.showSignupModal}>Signup</Button>
        <SignupForm
          visible={this.state.signupVisible}
          closeModal={this.closeSignupModal}
        />
      </React.Fragment>
    );
  }
}
