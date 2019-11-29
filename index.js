const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Joi = require("joi");
const helmet = require("helmet");
Joi.objectId = require("joi-objectid")(Joi);
const app = express();
const port = process.env.PORT || 3900;
const users = require("./routes/users");
const usersWithAccount = require("./routes/userWithAccount");
const auth = require("./routes/auth");
const cors = require("cors");
const path = require("path");
const { User } = require("./models/users");
require("dotenv/config");
var sslRedirect = require("heroku-ssl-redirect");

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log(" Connecting to the database ... "))
  .catch(err => console.log(err));

app.use(express.json());
app.use(helmet());
// enable ssl redirect
app.use(sslRedirect());
// To Fix the CORS Error
app.use(cors());

// Routes
app.get("/home", (req, res) => {
  res.send("hello");
});
app.use("/api/users", users);
app.use("/api/userswithaccount", usersWithAccount);
app.use("/api/auth", auth);

// email confirmation
app.get("/confirmation/:token", async (req, res) => {
  try {
    const user = jwt.verify(req.params.token, process.env.JWTPRIVETKEY);
    await User.findByIdAndUpdate(user._id, { confirmed: true });
  } catch (err) {
    console.log(err);
  }
  return res.redirect("http://www.movieapes.com/signin");
});

//Server statica assests if in Production
if (process.env.NODE_ENV === "production") {
  //Set a Static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.use(function(req, res, next) {
  console.log("Authenticating...");
  next();
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
