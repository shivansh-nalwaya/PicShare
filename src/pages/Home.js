import React, { Component } from "react";
import { Container } from "../styles/Home";
import Navbar from "../components/Navbar";
import UploadModal from "../components/UploadModal";
import PictureCard from "../components/PictureCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      url: "",
      modalVisible: false,
      title: "",
      search: "",
      file: "",
      fileList: []
    };
  }

  componentDidMount() {
    this.setState({
      data: this.sortPics(JSON.parse(localStorage.getItem("img_data")) || [])
    });
  }

  sortPics = data => {
    let pics = data.sort(function(x, y) {
      return Date.parse(y.timestamp) - Date.parse(x.timestamp);
    });
    return pics;
  };

  showModal = () => {
    this.setState({
      modalVisible: true
    });
  };

  handleOk = () => {
    let pictureUrl = this.state.url;
    if (!pictureUrl) pictureUrl = this.state.file.result;
    let new_data = this.state.data.concat({
      Image: pictureUrl,
      timestamp: new Date(),
      title: this.state.title
    });
    localStorage.setItem("img_data", JSON.stringify(new_data));
    this.setState({
      data: this.sortPics(new_data),
      modalVisible: false,
      url: "",
      title: "",
      fileList: []
    });
  };

  handleCancel = e => {
    this.setState({
      modalVisible: false
    });
  };

  onSearchInputChange = e => {
    let text = e.target.value;
    let searchData = JSON.parse(localStorage.getItem("img_data")).filter(d => {
      if (text === "") return true;
      return d.title.toLowerCase().startsWith(text.toLowerCase());
    });
    this.setState({ data: this.sortPics(searchData) });
  };

  onFileUpload = e => {
    e.file.error = null;
    e.file.status = "done";
    this.setState({ fileList: [e.file] });
  };

  actionFileUpload = e => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve("reader.result");
      reader.onerror = error => reject(error);
      reader.readAsDataURL(e);
      this.setState({ file: reader, url: "" });
    });
  };

  onUrlChange = e => {
    this.setState({ url: e.target.value });
  };

  onTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  onAddPicture = index => {
    let pics = this.state.data;
    pics.splice(index, 1);
    localStorage.setItem("img_data", JSON.stringify(pics));
    this.setState({
      data: this.sortPics(pics)
    });
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
            visible={this.state.modalVisible}
            handleCancel={this.handleCancel}
            handleOk={this.handleOk}
            fileList={this.state.fileList}
            url={this.state.url}
            title={this.state.title}
            onFileUpload={this.onFileUpload}
            actionFileUpload={this.actionFileUpload}
            onUrlChange={this.onUrlChange}
            onTitleChange={this.onTitleChange}
          />
          {this.state.data.map((pic, index) => (
            <PictureCard
              key={index}
              pic={pic}
              onClick={() => {
                this.onAddPicture(index);
              }}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
