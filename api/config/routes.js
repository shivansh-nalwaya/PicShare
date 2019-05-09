const UsersController = require("../controllers/UsersController.js");
const AlbumsController = require("../controllers/AlbumsController.js");
const VerifyToken = require("./VerifyToken");

module.exports = function(app) {
  app.post("/login", UsersController.login);
  app.get("/logout", UsersController.login);
  app.post("/signup", UsersController.signup);

  app.post("/albums", VerifyToken, AlbumsController.create);
  app.get("/albums", AlbumsController.get);
  app.get("/albums/:id", AlbumsController.show);
};
