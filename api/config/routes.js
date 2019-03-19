module.exports = function(app) {
  const UsersController = require("../controllers/UsersController.js");

  app.post("/login", UsersController.login);
  app.post("/signup", UsersController.signup);
};
