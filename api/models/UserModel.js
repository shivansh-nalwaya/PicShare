const crypto = require("crypto");
var mongoose = require("../config/mongoose");

const UsersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password_hash: String,
  token: String
});

UsersSchema.methods.setPassword = password => {
  this.password_hash = crypto
    .createHash("sha1")
    .update(password)
    .digest("hex");
};

UsersSchema.methods.validatePassword = password => {
  const hash = crypto
    .createHash("sha1")
    .update(password)
    .digest("hex");
  return this.password_hash === hash;
};

UsersSchema.methods.generateJWT = () => {};

module.exports = mongoose.model("users", UsersSchema);
