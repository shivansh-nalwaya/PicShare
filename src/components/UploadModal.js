import React, { Component } from "react";
import { Icon, Button, Row, Modal, Input, Col, Upload } from "antd";
import { extendObservable } from "mobx";
import { observer } from "mobx-react";
import { Centerify } from "../styles/UploadModal";
import PictureModel from "../models/PictureModel";

class UploadModal extends Component {
  constructor(props) {
    super(props);
    extendObservable(this, {
      url: "",
      title: "",
      file: "",
      fileList: []
    });
  }

  handleUpload = () => {
    PictureModel.addPic({
      Image: this.url || this.file.result,
      title: this.title
    });
    this.fileList = [];
    this.url = "";
    this.title = "";
    this.props.handleCancel();
  };

  actionFileUpload = e => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve();
      reader.onerror = error => reject(error);
      reader.readAsDataURL(e);
      this.file = reader;
      this.url = "";
    });
  };

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
          <Button key="upload" type="primary" onClick={this.handleUpload}>
            Upload
          </Button>
        ]}
      >
        <Row type="flex" justify="center" align="middle">
          <Col lg={8} md={8} sm={22} xs={22}>
            <Centerify>
              <Upload
                fileList={this.fileList}
                onChange={e => {
                  let f = e.file;
                  f.status = "done";
                  f.error = null;
                  f.name = f.name.substring(0, 10) + "...";
                  this.fileList = [f];
                }}
                action={this.actionFileUpload}
              >
                <Button>
                  <Icon type="upload" /> Click to Upload
                </Button>
              </Upload>
            </Centerify>
          </Col>
          <Col lg={2} md={2} sm={22} xs={22}>
            <Centerify>OR</Centerify>
          </Col>
          <Col lg={12} md={12} sm={22} xs={22}>
            <Input
              type="text"
              placeholder="Enter URL of the image"
              value={this.url}
              onChange={e => {
                this.url = e.target.value;
              }}
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
              value={this.title}
              onChange={e => {
                this.title = e.target.value;
              }}
            />
          </Col>
        </Row>
      </Modal>
    );
  }
}

export default observer(UploadModal);
