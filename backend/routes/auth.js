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

  if (!user.confirmed) {
    res.status(400).send("Please verify your email");
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).send("Problem with Email or Password");
  } else {
    const token = user.generateAuthToken();
    res.status(200).send(token);
  }
});

module.exports = router;
