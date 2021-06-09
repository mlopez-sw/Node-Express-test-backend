const mongoose = require("mongoose");
const { userSchema } = require("../models/user");

const ObjectSchema = mongoose.Schema({
  number_prop: { type: Number, required: true },
  string_prop: { type: String, required: true },
  numbers_array_prop: { type: [Number], required: true },
  object_prop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  objects_array_prop: [userSchema],
});

module.exports.objectModel = mongoose.model("Object", ObjectSchema);
