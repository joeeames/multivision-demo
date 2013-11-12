var express = require('express'),
  passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  config = require('./server/config/config');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development'

var app = express();

require('./server/config/express')(app, passport, config);

var Users = [
  {_id:1,firstName:'Joe',lastName:'Eames',username:'joe',password:'joe'},
  {_id:2,firstName:'Douglas',lastName:'Crockford',username:'js',password:'js'}
]

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

var requiresLogin = function (req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect('/login')
  }
  next()
};

app.use(function(req, res, next) {
  req.passport = passport;
  next();
})

app.get('/postlogin', function(req, res, next) {
  if(!req.isAuthenticated()) {
    res.redirect('/');
  } else {
    res.send('Success!');
  }
});


require('./server/config/routes')(app);

var port = process.env.PORT || 3003;
app.listen(port);
console.log('Listening on port ' + port + '...');