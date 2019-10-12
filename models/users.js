const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Joi = require("joi");
const config = require("config");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minlength: 2,
    maxlength: 255
  },
  email: {
    type: String,
    require: true,
    unique: true,
    minlength: 2,
    maxlength: 255
  },
  password: {
    type: String,
    require: true,
    minlength: 4,
    maxlength: 1024
  },
  confirmed: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: String
  }
});

// this is where JWT get created
userSchema.methods.generateAuthToken = function() {
  return (token = jwt.sign({ _id: this._id }, config.get("jwtPrivetKey")));
};

const User = mongoose.model("Users", userSchema);

function validateUser(user) {
  const schema = {
    name: Joi.string()
      .required()
      .min(2)
      .max(255)
      .error(err => console.log(err)),
    email: Joi.string()
      .email()
      .required()
      .min(2)
      .max(255)
      .error(err => console.log(err)),
    password: Joi.string()
      .required()
      .min(4)
      .max(1024)
      .error(err => console.log(err)),
    confirmed: Joi.boolean()
  };
  return Joi.validate(user, schema);
}
exports.validate = validateUser;
exports.User = User;
