const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    required: true,
    type: String,
    unique: true,
  },
  address: {
    required: true,
    type: String,
  },
  country: {
    required: true,
    type: String,
  },
  BVN: {
    required: true,
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
