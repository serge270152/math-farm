var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/math', function(req, res, next) {
  res.send('this math game is great!');
});

module.exports = router;
