import React from "react";
import { observer } from "mobx-react";
import { Button } from "antd";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import UserModel from "../models/UserModel";

class NavBar extends React.Component {
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
        {UserModel.currentUser ? (
          <div>
            Logged in as {UserModel.currentUser.name}
            <Button onClick={UserModel.logout}>Logout</Button>
          </div>
        ) : (
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
        )}
      </React.Fragment>
    );
  }
}

export default observer(NavBar);
