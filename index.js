const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// app.use(express.json());

app.get('/.well-known/acme-challenge/m9PWs7xgAMaueBP8L-gZ0yXWY9XV6EmDqm5K1p7t56M', function (req, res) {
  res.send('m9PWs7xgAMaueBP8L-gZ0yXWY9XV6EmDqm5K1p7t56M.FrqwX3b9fL_dJZKKNsvCb3eP_fkT2V7ueeyjyU9XN_w')
})

app.get('/', function (req, res) {
  res.send('m9PWs7xgAMaueBP8L-gZ0yXWY9XV6EmDqm5K1p7t56M.FrqwX3b9fL_dJZKKNsvCb3eP_fkT2V7ueeyjyU9XN_w')
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
