const mongoose = require("mongoose");

const ImageModel = new mongoose.Schema({
  name: { type: String, required: true }
});

module.exports = ImageModel;
