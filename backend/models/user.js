const mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// validate unique email with plugin
// UserSchema.plugin(uniqueValidator);

module.exports.userSchema = UserSchema;

module.exports.userModel = mongoose.model("User", UserSchema);
