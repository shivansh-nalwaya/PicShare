const UsersController = require("../controllers/UsersController.js");
const AlbumsController = require("../controllers/AlbumsController.js");
const VerifyToken = require("./VerifyToken");

module.exports = function(app) {
  app.post("/login", UsersController.login);
  app.post("/signup", UsersController.signup);
  app.post("/", VerifyToken, AlbumsController.create);
  app.get("/", AlbumsController.get);
  app.get("/:id", AlbumsController.show);
};
