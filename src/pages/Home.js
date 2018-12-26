import React, { Component } from "react";
import styled from "styled-components";
import { Icon, Button, Row, Modal, Input, Col, Upload } from "antd";
import Navbar from "../components/Navbar";
import PictureCard from "../components/PictureCard";

const Container = styled.div`
  padding-top: 2em;
  padding-left: 1em;
`;

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

  render() {
    return (
      <div>
        <Navbar
          onInputChange={e => {
            let text = e.target.value;
            let searchData = JSON.parse(
              localStorage.getItem("img_data")
            ).filter(d => {
              if (text === "") return true;
              return d.title.toLowerCase().startsWith(text.toLowerCase());
            });
            this.setState({ data: this.sortPics(searchData) });
          }}
          showModal={this.props.showModal}
        />
        <Container>
          <Modal
            title="Upload Image"
            visible={this.state.modalVisible}
            onCancel={this.handleCancel}
            footer={[
              <Button key="cancel" onClick={this.handleCancel}>
                Cancel
              </Button>,
              <Button key="upload" type="primary" onClick={this.handleOk}>
                Upload
              </Button>
            ]}
          >
            <Row type="flex" justify="center" align="middle">
              <Col span={8}>
                <Upload
                  fileList={this.state.fileList}
                  onChange={e => {
                    e.file.error = null;
                    e.file.status = "done";
                    this.setState({ fileList: [e.file] });
                  }}
                  action={e => {
                    console.log(e);
                    return new Promise((resolve, reject) => {
                      const reader = new FileReader();
                      reader.onload = () => resolve("reader.result");
                      reader.onerror = error => reject(error);
                      reader.readAsDataURL(e);
                      this.setState({ file: reader, url: "" });
                    });
                  }}
                >
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
                  value={this.state.url}
                  onChange={e => {
                    this.setState({ url: e.target.value });
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
                  value={this.state.title}
                  onChange={e => {
                    this.setState({ title: e.target.value });
                  }}
                />
              </Col>
            </Row>
          </Modal>
          {this.state.data.map((pic, index) => (
            <PictureCard
              key={index}
              pic={pic}
              onClick={() => {
                let pics = this.state.data;
                pics.splice(index, 1);
                localStorage.setItem("img_data", JSON.stringify(pics));
                this.setState({
                  data: this.sortPics(pics)
                });
              }}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
