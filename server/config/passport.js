var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function(app, passport) {

  app.use(function(req, res, next) {
    req.passport = passport;
    next();
  });

  passport.use(new LocalStrategy(
    function(username, password, done) {
      var matchingUser;
      User.findOne({userName:username}).exec(function(err, user) {
        if(user) {
          return done(null, user);
        } else {
          return done(null, false);
        }

      })
    }
  ));

  passport.serializeUser(function(user, done) {
    if(user) {
      done(null, user._id)
    }
  });

  passport.deserializeUser(function(id, done) {
    var matchingUser;
    User.findOne({_id:id}).exec(function(err, user) {
      if(user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
}