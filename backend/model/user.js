const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
  email: { type: String },
  password: { type: String },
  phone: { type: String },
});

module.exports = mongoose.model("User", userSchema);
