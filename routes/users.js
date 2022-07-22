var express = require('express');
var router = express.Router();
var db= require('../database')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user-list', function(req, res, next) {
  var sql='SELECT * FROM carsdb';
  db.query(sql, function (err, data, fields) {
  if (err) throw err;
  res.render('sample_data', { title: 'User List', userData: data});
});
});

module.exports = router;
