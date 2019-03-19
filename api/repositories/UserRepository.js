var User = require("../models/UserModel");

module.exports = {
  login: (email, password) => {
    return new Promise((resolve, reject) => {
      User.findOne({ email })
        .then(user => {
          if (user && user.validatePassword(password)) {
            resolve(user);
            user.generateJWT();
          } else reject("Invalid password!");
        })
        .catch(err => {
          console.log(err);
          reject("Invalid email!");
        });
    });
  },

  create: data => {
    const { name, email, password } = data;
    var user = new User({ name, email });
    user.setPassword(password);
    return new Promise((resolve, reject) => {
      user
        .save()
        .then(user => {
          resolve(user);
        })
        .catch(() => {
          reject("Unable to sign up!");
        });
    });
  },

  update: (id, data) => {
    return User.findOneAndUpdate(
      { _id: id },
      {
        $set: { ...data }
      }
    );
  },

  delete: id => {
    return User.deleteOne({ _id: id });
  }
};
