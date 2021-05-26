var express = require("express");
var router = express.Router();
const fs = require("fs");

router.post("/cards", function (req, res) {
  let data = JSON.stringify(req.body);
  let rawdata = fs.readFileSync("cardDetails.json");
  let sessions = JSON.parse(rawdata);
  sessions.push(JSON.parse(data));
  fs.writeFileSync("cardDetails.json", JSON.stringify(sessions));
  res.end("OK");
});

router.get("/cards", function (req, res) {
  let rawdata = fs.readFileSync("cardDetails.json");
  let sessions = JSON.parse(rawdata);
  res.json(sessions);
});

module.exports = router;
