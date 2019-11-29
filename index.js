const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// app.use(express.json());

app.get('/.well-known/acme-challenge/YkaKwcciHu0uluGG0g8lznZRBz7fXLp7q4w_DRb3_LE', function (req, res) {
  res.send('YkaKwcciHu0uluGG0g8lznZRBz7fXLp7q4w_DRb3_LE.FrqwX3b9fL_dJZKKNsvCb3eP_fkT2V7ueeyjyU9XN_w')
})

app.get('/', function (req, res) {
  res.send('YkaKwcciHu0uluGG0g8lznZRBz7fXLp7q4w_DRb3_LE.FrqwX3b9fL_dJZKKNsvCb3eP_fkT2V7ueeyjyU9XN_w')
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
