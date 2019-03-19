module.exports = function(app) {
  const UsersController = require("../controllers/UsersController.js");

  app.get("/", UsersController.get);
  app.get("/:id", UsersController.show);
  app.post("/", UsersController.create);
  app.put("/:id", UsersController.update);
  app.delete("/:id", UsersController.delete);
};
