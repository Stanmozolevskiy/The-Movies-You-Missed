const express = require("express");
const mongoose = require("mongoose");
const Joi = require("joi");
const config = require("config");
const helmet = require("helmet");
Joi.objectId = require("joi-objectid")(Joi);
const app = express();
const port = process.env.PORT || 3900;
const users = require("./routes/users");
const auth = require("./routes/auth");
var cors = require('cors')

mongoose
  .connect(config.get("db"), {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log(" Connecting to the database ... "))
  .catch(err => console.log(err));


app.use(express.json());
app.use(helmet());
// To Fix the CORS Error
app.use(cors())

app.use("/api/users", users);
app.use("/api/auth", auth);


app.use(function (req, res, next) {
  console.log("Authenticating...");
  next();
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
