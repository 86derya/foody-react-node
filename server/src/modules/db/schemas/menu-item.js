const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");
const uniqueValidator = require("mongoose-unique-validator");
const ObjectId = mongoose.Schema.Types.ObjectId;
const CATEGORY = require("./category");
const INGREDIENT = require("./ingredient");

const menuItemSchema = new Schema({
  id: ObjectId,
  // sku: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  description: String,
  image: String,
  price: Number,
  currency: String,
  category: [
    {
      type: ObjectId,
      ref: CATEGORY,
      required: true
    }
  ],
  likes: String,
  ingredients: [
    {
      type: ObjectId,
      ref: INGREDIENT
    }
  ]
});

menuItemSchema.plugin(timestamp);
menuItemSchema.plugin(uniqueValidator);

const MenuItem = mongoose.model("menu-item", menuItemSchema);

module.exports = MenuItem;
