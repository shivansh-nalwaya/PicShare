const mongoose = require("mongoose");

const ImageModel = new mongoose.Schema({
  name: { type: String, required: true },
  caption: String,
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "album"
  }
});

module.exports = ImageModel;
