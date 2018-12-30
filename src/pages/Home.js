import React, { Component } from "react";
import { observer } from "mobx-react";
import { Container } from "../styles/Home";
import Navbar from "../components/Navbar";
import UploadModal from "../components/UploadModal";
import PictureCard from "../components/PictureCard";
import PictureModel from "../models/PictureModel";
import { extendObservable } from "mobx";
import { Col, Row } from "antd";

class App extends Component {
  constructor(props) {
    super(props);
    extendObservable(this, {
      modalVisible: false,
      search: ""
    });
  }

  showModal = () => {
    this.modalVisible = true;
  };

  handleCancel = e => {
    this.modalVisible = false;
  };

  render() {
    return (
      <div>
        <Navbar showModal={this.showModal} />
        <Container>
          <UploadModal
            visible={this.modalVisible}
            handleCancel={this.handleCancel}
            handleOk={this.handleOk}
          />
          <Row type="flex" justify="space-between">
            {PictureModel.data.map((pic, index) => (
              <Col lg={8} md={12} sm={24} xs={24} key={index}>
                <PictureCard
                  pic={pic}
                  onClick={() => {
                    PictureModel.deletePic(index);
                  }}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default observer(App);
