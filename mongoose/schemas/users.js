const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true
  },

  email: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true
  },

  password: {
    type: mongoose.Schema.Types.String,
    required: true
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;

