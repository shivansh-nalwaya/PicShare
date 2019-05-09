const Image = require("../models").ImageModel;
const fs = require("fs");
const path = require("path");

module.exports = {
  all: () => {
    return Image.find().populate("album", "title");
  },

  find: id => {
    return Image.find({ _id: id }).populate("album", "title");
  },

  create: (data, file) => {
    console.log(data, file);
    const tempPath = file.path;
    const targetPath = path.join(__dirname, `../uploads/${file.originalname}`);
    fs.rename(tempPath, targetPath, err => {});
    let sanitizedData = { name: file.originalname };
    var image = new Image(sanitizedData);
    return image.save();
  },

  update: (id, data) => {
    return Image.findOneAndUpdate(
      { _id: id },
      {
        $set: { ...data }
      }
    );
  },

  delete: id => {
    return Image.deleteOne({ _id: id });
  }
};
