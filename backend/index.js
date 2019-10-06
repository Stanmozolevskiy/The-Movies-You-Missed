const express = require("express");
const mongoose = require("mongoose");
const Joi = require("joi");
const config = require("config");
const helmet = require("helmet");
Joi.objectId = require("joi-objectid")(Joi);
const app = express();
const port = process.env.PORT || 3001;
const users = require('./routes/users')

mongoose
  .connect(config.get("db"), {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log(" Connecting to the database ... "))
  .catch(err => console.log(err));

app.use(express.json());
app.use(helmet());

app.use("/api/users", users);

app.use(function(req, res, next) {
  console.log("Authenticating...");
  next();
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
