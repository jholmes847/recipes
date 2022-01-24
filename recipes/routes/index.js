var express = require('express');
var router = express.Router();
const passport = require('passport');


router.get('/auth/google', passport.authenticate(
  'google',
  { 
     successRedirect : '/recipes',
  failureRedirect : '/recipes',
    Scope: ['profile', 'email']
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/recipes');
});

module.exports = router;
