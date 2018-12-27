import { extendObservable } from "mobx";

class PictureModel {
  constructor() {
    extendObservable(this, {
      data: this.sortPics(JSON.parse(localStorage.getItem("img_data") || []))
    });
  }

  addPic = image => {
    let new_data = this.data.concat({
      Image: image.Image,
      timestamp: new Date(),
      title: image.title
    });
    localStorage.setItem("img_data", JSON.stringify(new_data));
    this.data = this.sortPics(new_data);
  };

  deletePic = index => {
    let pics = this.data;
    pics.splice(index, 1);
    localStorage.setItem("img_data", JSON.stringify(pics));
    this.data = this.sortPics(pics);
  };

  sortPics = data => {
    return data.sort(function(x, y) {
      return Date.parse(y.timestamp) - Date.parse(x.timestamp);
    });
  };
}

export default new PictureModel();
