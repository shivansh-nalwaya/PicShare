import React from "react";
import { Form, Icon, Input, Button, Row } from "antd";
import { StyledButton } from "../styles/common";

class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} style={{ marginTop: 20 }}>
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              size="large"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              size="large"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Row type="flex" justify="space-between" align="middle">
            Forgot password?
            <StyledButton primary htmlType="submit">
              Log In
            </StyledButton>
          </Row>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: "login_form" })(LoginForm);
