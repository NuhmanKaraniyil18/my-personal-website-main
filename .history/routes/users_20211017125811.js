var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 res.render('index')
});

router.get('/about', function(req, res, next) {
  res.render('users/about')
 });
 router.get('/contact', function(req, res, next) {
  res.render('u/contact')
 });

module.exports = router;
