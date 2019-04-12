import React, { Component } from "react";
import { observer } from "mobx-react";
import AlbumModel from "../models/AlbumModel";

class Home extends Component {
  constructor(props) {
    super(props);
    AlbumModel.getAll();
  }

  render() {
    if (AlbumModel.isLoading) return <div>Loading...</div>;
    return (
      <div>
        {AlbumModel.all.map(a => {
          return a.title;
        })}
      </div>
    );
  }
}

export default observer(Home);
