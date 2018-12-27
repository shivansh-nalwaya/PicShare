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
      url: "",
      modalVisible: false,
      title: "",
      search: "",
      file: ""
    });
  }

  showModal = () => {
    this.modalVisible = true;
  };

  handleOk = () => {
    let pictureUrl = this.url;
    if (!pictureUrl) pictureUrl = this.file.result;
    PictureModel.addPic({
      Image: pictureUrl,
      title: this.title
    });
    this.modalVisible = false;
    this.url = "";
    this.title = "";
  };

  handleCancel = e => {
    this.modalVisible = false;
  };

  onSearchInputChange = e => {
    // let text = e.target.value;
    // let searchData = JSON.parse(localStorage.getItem("img_data")).filter(d => {
    //   if (text === "") return true;
    //   return d.title.toLowerCase().startsWith(text.toLowerCase());
    // });
    // this.setState({ data: this.sortPics(searchData) });
  };

  actionFileUpload = e => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve("/");
      reader.onerror = error => reject(error);
      reader.readAsDataURL(e);
      this.file = reader;
      this.url = "";
    });
  };

  onUrlChange = e => {
    this.url = e.target.value;
  };

  onTitleChange = e => {
    this.title = e.target.value;
  };

  render() {
    return (
      <div>
        <Navbar
          onInputChange={this.onSearchInputChange}
          showModal={this.showModal}
        />
        <Container>
          <UploadModal
            visible={this.modalVisible}
            handleCancel={this.handleCancel}
            handleOk={this.handleOk}
            url={this.url}
            title={this.title}
            onFileUpload={this.onFileUpload}
            actionFileUpload={this.actionFileUpload}
            onUrlChange={this.onUrlChange}
            onTitleChange={this.onTitleChange}
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
