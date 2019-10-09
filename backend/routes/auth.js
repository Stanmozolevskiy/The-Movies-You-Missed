const express = require("express");
const _ = require("lodash");
const router = express.Router();
const bcrypt = require("bcrypt");
const Joi = require("joi");
const { User } = require("../models/users");

function validate(auth) {
  const schema = {
    email: Joi.string()
      .email()
      .required()
      .min(2)
      .max(255)
      .error(err => console.log(err)),
    password: Joi.string()
      .required()
      .min(4)
      .max(255)
      .error(err => console.log(err))
  };
  return Joi.validate(auth, schema);
}

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid Email or Password");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).send("Problem with Email or Password");

  const token = user.generateAuthToken();
  res.send(token);

  $window.sessionStorage.accessToken = token

});

module.exports = router;
