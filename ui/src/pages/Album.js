import React, { Component } from "react";
import { observer } from "mobx-react";
import { extendObservable } from "mobx";
import AlbumModel from "../models/AlbumModel";
import { Upload, Button, message, Icon } from "antd";

class Album extends Component {
  constructor(props) {
    super(props);
    extendObservable(this, { album: {} });
    AlbumModel.find(props.match.params.id).then(data => {
      this.album = data.result;
    });
  }

  render() {
    const props = {
      name: "file",
      action: "http://localhost:3001/api/upload",
      headers: {
        authorization: "authorization-text"
      },
      onChange(info) {
        if (info.file.status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
    };
    return (
      <div>
        <br />
        Name : {this.album.title}
        <br />
        By : {this.album.user ? this.album.user.name : ""}
        <br />
        Upload Image :{" "}
        <Upload {...props}>
          <Button>
            <Icon type="upload" /> Click to Upload
          </Button>
        </Upload>
      </div>
    );
  }
}

export default observer(Album);
