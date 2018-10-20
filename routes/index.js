var express = require('express');
var router = express.Router();

// GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Piedmont Post' });
});

// GET underwriters
router.get('/underwriters', (req, res, next) => {
  res.render('underwriters');
});

// GET subscribe
router.get('/subscribe', (req, res, next) => {
  res.render('subscribe');
});

// GET advertise
router.get('/advertise', (req, res, next) => {
  res.render('advertise');
});

// GET contact
router.get('/contact', (req, res, next) => {
  res.render('contact');
});

module.exports = router;
