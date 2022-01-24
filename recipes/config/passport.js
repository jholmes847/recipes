const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
passport.use(
    new GoogleStrategy(
   { clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK        },
  function (accessToken, refreshToken, profile, cb) {
   } )

  function(accessToken, refreshToken, profile, cb)    {
  User.findOne({ googleId: profile.id }).then(async function(user) {
  if (err) return cb(null, err);
  if (userDoc) {
    return cb(null, userDoc);
  } else {
    const newUser = new User({
      name: profile.displayName, 
      email: profile.emails[0].value, 
      googleId: profile.id,
    });

  
  

passport.serializeUser(function(user, cb) {
    cb(null, user._id);
  });
  passport.deserializeUser(function(userId, cb) {
    User.findById(userId).then(function(user) {
      cb(null, user);
    });
  