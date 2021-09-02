var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: process.env.name , tel: process.env.tel_number , mail: process.env.mail , note: process.env.note });
});

module.exports = router;
