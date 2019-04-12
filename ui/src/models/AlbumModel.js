import BaseModel from "./BaseModel";
import { extendObservable } from "mobx";

class AlbumModel extends BaseModel {
  constructor() {
    super("api/");
    extendObservable(this, {
      all: [],
      isLoading: true
    });
  }

  getAll = () => {
    return fetch(`${this.baseApi}/${this.api}`)
      .then(data => data.json())
      .then(res => {
        this.all = res.data.map(e => {
          e.key = e._id;
          return e;
        });
        this.isLoading = false;
      });
  };
}

const album = new AlbumModel();

export default album;
