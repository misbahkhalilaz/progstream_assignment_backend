const calculate = require("./calc");
const express = require("express");
const app = express();

var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

app.use(jsonParser);

app.post("/", ({ body }, res) =>
  res.send(calculate(body.requiredBottles, body.prices, body.pieces))
);

app.listen(process.env.PORT || 4000, () => console.log("started at port 4000"));
