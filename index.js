const express = require("express");
const app = express();

var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

app.use(jsonParser);

const calculate = (requiredBottles, prices, pieces) => {
  // check boxes
  let remBottles = requiredBottles % pieces[2];
  let result = {
    bottles: 0,
    packs: 0,
    Box: 0,
    price: 0,
  };
  // Calc boxes
  if (remBottles > 0) {
    result.Box = (requiredBottles - remBottles) / pieces[2];
    result.price = result.price + result.Box * prices[2];
  }
  // Calc packs
  if (remBottles % pieces[1] > 0) {
    result.packs = (remBottles - (remBottles % pieces[1])) / pieces[1];
    result.price = result.price + result.packs * prices[1];
  }
  // Calc Bottles
  remBottles %= pieces[1];
  if (remBottles > 0) {
    result.bottles = remBottles;
    result.price = result.price + result.bottles * prices[0];
  }

  return result;
};

// app.get("/", (req, res) => res.send("working"));

app.post("/", ({ body }, res) =>
  res.send(calculate(body.requiredBottles, body.prices, body.pieces))
);

// calculate(1200, [4.1, 40, 950], [1, 11, 264]);

app.listen(process.env.PORT || 4000, () => console.log("started at port 4000"));

// ------------------------------------------------------------------------------ //