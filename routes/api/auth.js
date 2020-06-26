//Register a new user
var express = require('express');
var router = express.Router();
var Users = require('../../models/users');
var passport = require('passport');

router.post('/register', function(req,res,next){
  var data = req.body;

  Users.register(new Users({
    username: data.username,
    email: data.email,
    first_name: data.first_name,
    last_name: data.last_name
  }), 
  data.password, 
  function(err, user){

    if(err){

      return res.json({
        success: false, 
        user: req.body, 
        errors: err
      });
      
    }

    return res.json({
      success: true,
      user: user
    });

  });

});

router.post('/login', passport.authenticate('local'), function(req, res){
    res.redirect('/users');
});

module.exports = router;