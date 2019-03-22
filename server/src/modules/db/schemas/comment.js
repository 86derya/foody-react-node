const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");
const uniqueValidator = require("mongoose-unique-validator");
const ObjectId = mongoose.Schema.Types.ObjectId;
const USER = require("./user");
const MENU_ITEM = require("./menu-item");

const commentSchema = new Schema({
  id: ObjectId,
  menuItem: {
    type: ObjectId,
    ref: MENU_ITEM
  },
  text: String,
  name: {
    ObjectId,
    ref: USER
  },
  mark: {
    type: Number,
    min: 1,
    max: 10,
    default: 0
  }
});

commentSchema.plugin(timestamp);
commentSchema.plugin(uniqueValidator);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
