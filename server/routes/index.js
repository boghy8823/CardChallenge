var express = require("express");
var router = express.Router();
const fs = require("fs");

router.post("/card", function (req, res) {
  let data = JSON.stringify(req.body);
  let rawdata = fs.readFileSync("cardDetails.json");
  let cardDetails = JSON.parse(rawdata);

  cardDetails.push(JSON.parse(data));

  fs.writeFileSync("cardDetails.json", JSON.stringify(cardDetails, null, 2));

  console.log("CARD DETAILS ", cardDetails);
  res.json(cardDetails.find((card) => card.id === req.body.id));
});

router.patch("/card", function (req, res) {
  let rawdata = fs.readFileSync("cardDetails.json");
  let cardDetails = JSON.parse(rawdata);

  const updatedDetails = cardDetails.map((card) => {
    if (card.id === req.body.id) {
      card.id === req.body.id;
      card.cardHolderName = req.body.cardHolderName;
      card.cardNumber = req.body.cardNumber;
      card.expirationDate = req.body.expirationDate;
      card.cvc = req.body.cvc;
    }
    return card;
  });

  fs.writeFileSync("cardDetails.json", JSON.stringify(updatedDetails, null, 2));
  res.json(updatedDetails.find((card) => card.id === req.body.id));
});

router.get("/cards", function (req, res) {
  let rawdata = fs.readFileSync("cardDetails.json");
  let cards = JSON.parse(rawdata);

  res.json(cards);
});

module.exports = router;
