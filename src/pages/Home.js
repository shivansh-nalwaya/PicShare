import React, { Component } from "react";
import { observer } from "mobx-react";
import { Container } from "../styles/Home";
import Navbar from "../components/Navbar";
import UploadModal from "../components/UploadModal";
import PictureCard from "../components/PictureCard";
import PictureModel from "../models/PictureModel";
import { extendObservable } from "mobx";

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
          {PictureModel.data.map((pic, index) => (
            <PictureCard
              key={index}
              pic={pic}
              onClick={() => {
                PictureModel.deletePic(index);
              }}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default observer(App);
