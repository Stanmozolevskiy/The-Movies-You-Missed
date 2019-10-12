const express = require("express");
const _ = require("lodash");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User, validate } = require("../models/users");
const nodemailer = require("nodemailer");
require("dotenv/config");
const config = require("config");

//// Email Handler Start
async function sendEmail(address, url) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: config.get("email"), // generated ethereal user
      pass: config.get("email-password") // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"Movie Apes " <${config.get("email")}>`, // sender address
    to: address, // list of receivers
    subject: "Do not reply to this email", // Subject line
    text: "Email confirmation", // plain text body
    html: `<b>Please follow the ${url} to confirm your email.</b>` // html body
  });
}
//// Email Handler End

// secure customer id and use "me" at the API route and upload the user id with JWT payload
router.get("/", async (req, res) => {
  const user = await User.findById(req.user._id);
  res.send(_.pick(user, ["name", "email", "_id"]));
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("This email has been used");

  user = new User(_.pick(req.body, ["name", "email", "password"]));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  const token = user.generateAuthToken();
  // sent an email with the token as a url to follow and authenticate user
  sendEmail(
    req.body.email,
    `http://localhost:3900/confirmation/${token}`
  ).catch(console.error);

  res.status(200).send(token);
});

module.exports = router;
