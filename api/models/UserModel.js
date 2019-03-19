const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");

const UsersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: String,
  token: String
});

UsersSchema.pre("save", function(next) {
  this.password = bcrypt.hashSync(this.password);
  next();
});

UsersSchema.methods.generateToken = function(cb) {
  this.token = jwt.sign(
    {
      _id: this._id,
      email: this.email
    },
    "secret-key"
  );
  this.save();
};

module.exports = mongoose.model("users", UsersSchema);
