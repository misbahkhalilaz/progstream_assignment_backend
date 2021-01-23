const calculate = require("./calc");
const express = require("express");
const cors = require("cors");
const app = express();

var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

app.use(jsonParser, cors());

// Task1
app.post("/", ({ body }, res) =>
  res.send(calculate(body.requiredBottles, body.prices, body.pieces))
);

// Sample data for Task2 via get
app.get("/data", (req, res) =>
  res.json({
    pricelist: [
      {
        piece: { name: "Bottle", quantity: 1, price: 410 },
        pack: { name: "11-pack", quantity: 11, price: 4000 },
        box: { name: "Big box", quantity: 264, price: 950 },
      },
      {
        piece: { name: "Chocolade bar", quantity: 1, price: 300 },
        pack: { name: "Chocolade pack", quantity: 5, price: 1450 },
      },
      {
        piece: { name: "Biscuit", quantity: 3, price: 450 },
      },
    ],
  })
);

app.listen(process.env.PORT || 4000, () => console.log("started at port 4000"));
