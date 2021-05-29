const { v4: uuidv4 } = require('uuid');
var express = require("express");
var router = express.Router();
const fs = require("fs");

router.post("/card", function (req, res) {
  let data = JSON.stringify(req.body);
  let rawdata = fs.readFileSync("cardDetails.json");
  let cardDetails = JSON.parse(rawdata);
  cardDetails.push(JSON.parse(data));
  cardDetails.id = uuidv4();
  fs.writeFileSync("cardDetails.json", JSON.stringify(cardDetails));
  res.end("OK");
});

router.get("/cards", function (req, res) {
  let rawdata = fs.readFileSync("cardDetails.json");
  let sessions = JSON.parse(rawdata);
  res.json(sessions);
});

module.exports = router;
