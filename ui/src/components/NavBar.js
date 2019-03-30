import React from "react";
import { Link } from "react-router-dom";
import {
  Header,
  HeaderContainer,
  Logo,
  HeaderNav,
  HeaderNavItem,
  HeaderNavItemLink,
  HeaderNavItemSpan
} from "../styles/NavbarStyles";
import LoginModal from "./LoginModal";

const NoStyleLink = props => (
  <Link to={`${props.to}`} style={{ textDecoration: "none" }}>
    {props.children}
  </Link>
);

export default class NavBar extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({ visible: true });
  };

  closeModal = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <Header>
        <HeaderContainer>
          <NoStyleLink to="/">
            <Logo>PicShare</Logo>
          </NoStyleLink>
          <HeaderNav>
            <HeaderNavItem>
              <NoStyleLink to="/">
                <HeaderNavItemLink>Home</HeaderNavItemLink>
                <HeaderNavItemSpan />
              </NoStyleLink>
            </HeaderNavItem>
            <HeaderNavItem onClick={this.showModal}>
              <HeaderNavItemLink>Login</HeaderNavItemLink>
              <HeaderNavItemSpan />
            </HeaderNavItem>
          </HeaderNav>
        </HeaderContainer>
        <LoginModal visible={this.state.visible} />
      </Header>
    );
  }
}
