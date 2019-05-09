const Image = require("../models").ImageModel;

module.exports = {
  all: () => {
    return Image.find().populate("album", "title");
  },

  find: id => {
    return Image.find({ _id: id }).populate("album", "title");
  },

  create: data => {
    var image = new Image(data);
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
