import React, { Component } from "react";
import { Icon, Button, Row, Input, Col } from "antd";
import { Logo, Nav } from "../styles/Navbar";
import PictureModel from "../models/PictureModel";

export default class Navbar extends Component {
  render() {
    return (
      <Nav>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={2}>
            <Logo>PicShare</Logo>
          </Col>
          <Col span={8}>
            <Input
              placeholder="Search"
              onChange={e => PictureModel.searchImage(e.target.value)}
              prefix={
                <Icon type="search" style={{ color: "rgba(0,0,0,.25)" }} />
              }
            />
          </Col>
          <Col span={8}>
            <Row>
              <Col span={4}>
                <Button size="large" icon="plus" onClick={this.props.showModal}>
                  Upload Image
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Nav>
    );
  }
}
