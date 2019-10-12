const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Joi = require("joi");
const config = require("config");
const helmet = require("helmet");
Joi.objectId = require("joi-objectid")(Joi);
const app = express();
const port = process.env.PORT || 3900;
const users = require("./routes/users");
const usersWithAccount = require("./routes/userWithAccount");
const auth = require("./routes/auth");
const cors = require("cors");
const { User } = require("./models/users");

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
app.use(cors());

app.use("/api/users", users);
app.use("/api/userswithaccount", usersWithAccount);
app.use("/api/auth", auth);

// email confirmation
app.get("/confirmation/:token", async (req, res) => {
  try {
    const user = jwt.verify(req.params.token, config.get("jwtPrivetKey"));
    await User.findByIdAndUpdate(user._id, { confirmed: true });
  } catch (err) {
    console.log(err);
  }
  return res.redirect("http://localhost:3000/signin");
});

app.use(function(req, res, next) {
  console.log("Authenticating...");
  next();
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
