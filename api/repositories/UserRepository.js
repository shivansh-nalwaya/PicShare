var User = require("../models/UserModel");

module.exports = {
  all: () => {
    return User.find();
  },

  find: id => {
    return User.find({ _id: id });
  },

  top: () => {
    return User.find({ rank: { $lt: 4 } });
  },

  create: data => {
    var user = new User(data);
    return user.save();
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
