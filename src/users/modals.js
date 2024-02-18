const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

let todoSchema = new Schema({
  id: {
    type: String,
  },
  userId: Number,
  custom_id: {
    type: String,
    default: () => uuidv4(),
  },

  title: {
    required: true,
    type: String,
  },
  discription: {
    type: String,
  },

  CreatedOn: {
    type: Date,
    default: () => Date.now(),
  },
});

let userSchema = new Schema({
  id: {
    type: Number,
  },
  username: String,
  custom_id: {
    type: String,
    default: () => uuidv4(),
  },

  email: {
    required: true,
    type: String,
  },
  website: {
    type: String,
  },

  CreatedOn: {
    type: Date,
    default: () => Date.now(),
  },

  modifiedOn: {
    type: Date,
    default: () => Date.now(),
  },
});

const todoModel = mongoose.model("todo", todoSchema);
const userModel = mongoose.model("user", userSchema);
module.exports = { todoModel, userModel };
