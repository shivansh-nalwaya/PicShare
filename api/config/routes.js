const UsersController = require("../controllers/UsersController.js");
const VerifyToken = require("./VerifyToken");

module.exports = function(app) {
  app.post("/login", UsersController.login);
  app.post("/signup", UsersController.signup);
};
