const express = require("express");
const _ = require("lodash");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User, validate } = require("../models/users");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("This email has been used");

  user = new User(_.pick(req.body, ["name", "email", "password", "confirmed"]));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  const token = user.generateAuthToken();
  console.log(token);
  res.status(200).send(token);
});

module.exports = router;
