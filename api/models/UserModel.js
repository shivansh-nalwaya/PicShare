var mongoose = require("../config/mongoose");

const user_schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }
});

module.exports = mongoose.model("users", user_schema);
