var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session);
  res.render('index', { title: 'Express', name:'ILIYA' });
  //res.send('respond with a resource');
});

module.exports = router;
