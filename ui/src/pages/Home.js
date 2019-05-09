import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Input, Button } from "antd";
import AlbumModel from "../models/AlbumModel";
import { handleErrors } from "../models/ErrorHandler";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { newAlbum: "" };
    AlbumModel.getAll();
  }

  createAlbum = () => {
    if (this.state.newAlbum === "") return;
    AlbumModel.create({ title: this.state.newAlbum })
      .then(res => {
        AlbumModel.getAll();
      })
      .catch(handleErrors);
  };

  render() {
    if (AlbumModel.isLoading) return <div>Loading...</div>;
    return (
      <div>
        Albums:
        <ul>
          {AlbumModel.all.map((album, index) => (
            <li key={index}>
              <Link to={`/${album._id}`}>
                {album.title} - By {album.user.name}
              </Link>
            </li>
          ))}
        </ul>
        <Input onChange={e => this.setState({ newAlbum: e.target.value })} />
        <Button onClick={this.createAlbum}>Create</Button>
      </div>
    );
  }
}

export default observer(Home);
