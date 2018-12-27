import React, { Component } from "react";
import { Icon, Button, Row, Modal, Input, Col, Upload } from "antd";

export default class UploadModal extends Component {
  render() {
    return (
      <Modal
        title="Upload Image"
        visible={this.props.visible}
        onCancel={this.props.handleCancel}
        footer={[
          <Button key="cancel" onClick={this.props.handleCancel}>
            Cancel
          </Button>,
          <Button key="upload" type="primary" onClick={this.props.handleOk}>
            Upload
          </Button>
        ]}
      >
        <Row type="flex" justify="center" align="middle">
          <Col span={8}>
            <Upload action={this.props.actionFileUpload}>
              <Button>
                <Icon type="upload" /> Click to Upload
              </Button>
            </Upload>
          </Col>
          <Col span={2}>OR</Col>
          <Col span={12}>
            <Input
              type="text"
              placeholder="Enter URL of the image"
              value={this.props.url}
              onChange={this.props.onUrlChange}
            />
          </Col>
        </Row>
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ paddingTop: "1em" }}
        >
          <Col span={22}>
            <Input
              type="text"
              placeholder="Enter Title"
              value={this.props.title}
              onChange={this.props.onTitleChange}
            />
          </Col>
        </Row>
      </Modal>
    );
  }
}
