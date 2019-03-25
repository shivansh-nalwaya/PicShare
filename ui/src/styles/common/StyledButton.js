import React from "react";
import { Button } from "antd";

export default class StyledButton extends React.Component {
  state = { hovered: false };
  toggleHover = () => this.setState({ hovered: !this.state.hovered });
  render() {
    const basicStyles = {
      backgroundColor: this.props.primary ? "tomato" : "transparent",
      color: "white",
      fontSize: "1.2em",
      paddingVertical: 14,
      width: "50%"
    };

    const hoverStyles = {
      borderColor: this.props.primary ? "white" : "tomato",
      color: this.props.primary ? "white" : "tomato"
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
