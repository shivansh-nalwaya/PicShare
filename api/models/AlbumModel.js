const ImageModel = require("./ImageModel");

const mongoose = require("mongoose");
const AlbumModel = new mongoose.Schema({
  title: { type: String, required: true },
  images: [ImageModel]
});

module.exports = AlbumModel;
