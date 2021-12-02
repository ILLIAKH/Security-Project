//defining a user model
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, default: null },
  description: { type: String, default: null },
  body: { type: String, default: null },
});

module.exports = mongoose.model("post", postSchema);