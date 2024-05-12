const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    name: { typeof: String, required: true },
    email: { typeof: String, required: true },
    password: { typeof: String, required: true },
  },
  {
    timeStamp: true,
  }
);

const User = mongoose.Model("User", userModel);
module.exports = User;

// 9dkVWrodFQxuvFk5
// rashikakumari
