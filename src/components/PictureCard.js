import React, { Component } from "react";
import { Button, Row } from "antd";
import timeAgo from "node-time-ago";
import {
  Picture,
  Thumbnail,
  Caption,
  Description
} from "../styles/PictureCard";

export default class PictureCard extends Component {
  render() {
    return (
      <Picture>
        <Thumbnail url={`url(${this.props.pic.Image})`} />
        <Caption>
          <Row type="flex" justify="space-between">
            {this.props.pic.title}
            <Button
              shape="circle"
              icon="delete"
              type="danger"
              onClick={this.props.onClick}
            />
          </Row>
          <Description>{timeAgo(this.props.pic.timestamp)}</Description>
        </Caption>
      </Picture>
    );
  }
}
