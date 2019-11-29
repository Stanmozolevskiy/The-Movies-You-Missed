const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// app.use(express.json());

app.get('/.well-known/acme-challenge/ksyvUrjKWQi-No6EF_uUSHjeh2xJ806qtgr5CK4hWns', function (req, res) {
  res.send('ksyvUrjKWQi-No6EF_uUSHjeh2xJ806qtgr5CK4hWns.zypSFTvSHX5lLqEaP5Mi_PkUErXWd0hW6yrDZFzd3aI')
})

// app.get('/', function (req, res) {
//   res.send('YkaKwcciHu0uluGG0g8lznZRBz7fXLp7q4w_DRb3_LE.FrqwX3b9fL_dJZKKNsvCb3eP_fkT2V7ueeyjyU9XN_w ')
// })

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
