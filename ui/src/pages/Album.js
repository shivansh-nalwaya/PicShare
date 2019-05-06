import React, { Component } from "react";
import { observer } from "mobx-react";
import { extendObservable } from "mobx";
import AlbumModel from "../models/AlbumModel";

class Album extends Component {
  constructor(props) {
    super(props);
    extendObservable(this, { album: {} });
    AlbumModel.find(props.match.params.id).then(data => {
      this.album = data.result;
    });
  }

  render() {
    return <div>Name : {this.album.title}</div>;
  }
}

export default observer(Album);
