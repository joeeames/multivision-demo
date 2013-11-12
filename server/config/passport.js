var LocalStrategy = require('passport-local').Strategy;

module.exports = function(app, passport, Users) {

  app.use(function(req, res, next) {
    req.passport = passport;
    next();
  });

  passport.use(new LocalStrategy(
    function(username, password, done) {
      var matchingUser;
      Users.forEach(function(user) {
        if(user.username.toLowerCase() == username) {
          matchingUser = user;
        }
      });
      if(matchingUser) {
        return done(null, matchingUser);
      } else {
        return done(null, false);
      }
    }
  ));

  passport.serializeUser(function(user, done) {
    if(user) {
      done(null, user._id)
    }
  });

  passport.deserializeUser(function(id, done) {
    console.log('deserializing: ' + id);
    var matchingUser;
    Users.forEach(function(user) {
      if(user._id == id) {
        matchingUser = user;
      }
    });
    if(matchingUser) {
      return done(null, matchingUser);
    }
  })
}