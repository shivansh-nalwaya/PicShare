import React, { Component } from "react";
import { observer } from "mobx-react";
import AlbumModel from "../models/AlbumModel";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    AlbumModel.getAll();
  }

  render() {
    if (AlbumModel.isLoading) return <div>Loading...</div>;
    return (
      <div>
        <ul>
          {AlbumModel.all.map((album, index) => (
            <li key={index}>
              <Link to={`/${album._id}`}>{album.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default observer(Home);
