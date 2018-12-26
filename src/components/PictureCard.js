import React, { Component } from "react";
import { Card, Button, Row } from "antd";
import timeAgo from "node-time-ago";
import { Picture, Thumbnail } from "../styles/PictureCard";
const { Meta } = Card;

export default class PictureCard extends Component {
  render() {
    return (
      <Picture>
        <Card cover={<Thumbnail url={`url(${this.props.pic.Image})`} />}>
          <Meta
            title={
              <Row type="flex" justify="space-between">
                {this.props.pic.title}
                <Button
                  shape="circle"
                  icon="delete"
                  type="danger"
                  onClick={this.props.onClick}
                />
              </Row>
            }
            description={timeAgo(this.props.pic.timestamp)}
          />
        </Card>
      </Picture>
    );
  }
}
