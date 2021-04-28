var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/session', function(req, res) {
  let data = JSON.stringify(req.body);
  let rawdata = fs.readFileSync('sessions.json');
  let sessions = JSON.parse(rawdata);
  sessions.push(JSON.parse(data));
  fs.writeFileSync('sessions.json', JSON.stringify(sessions));
  res.end("OK");
});

router.get('/sessions', function(req, res) {
  let rawdata = fs.readFileSync('sessions.json');
  let sessions = JSON.parse(rawdata);
  res.json(sessions);
});


module.exports = router;
