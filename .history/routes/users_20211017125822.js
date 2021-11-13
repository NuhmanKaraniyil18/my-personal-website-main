var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 res.render('index')
});

router.get('/about', function(req, res, next) {
  res.render('use/about')
 });
 router.get('/contact', function(req, res, next) {
  res.render('/contact')
 });

module.exports = router;
