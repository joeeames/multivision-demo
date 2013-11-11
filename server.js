var express = require('express'),
  stylus = require('stylus'),
  passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development'

var app = express();

function compile(str, path) {
  return stylus(str).set('filename', path);
}

app.configure(function() {
  app.set('views', __dirname + '/server/views');
  app.set('view engine', 'jade');
  app.use(express.logger('dev'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());

  app.use(express.session({ secret: 'multi vision unicorns' }));
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(stylus.middleware(
    {
      src: __dirname + '/public',
      compile: compile
    }
  ));
  app.use(express.static(__dirname + '/public'));
});

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
      return done(null, {_id:-1});
    }
  }
));

passport.serializeUser(function(user, done) {
  done(null, user._id)
})

passport.deserializeUser(function(id, done) {
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

app.post('/login', function(req, res, next) {
  console.log('0');
  var auth = passport.authenticate('local', function(err, user, info) {
    console.log('1');
    console.log(err);
    console.log(user);
    if(err) { return next(err);}
    if(!user) { res.send({success: false});}
    console.log('good');
    req.logIn(user, function(err) {
      console.log('1');
      if(err) { return next(err);}
      res.send({success:true});
    });
  });
  console.log(auth);
  auth(req, res, next);
});

app.configure('development', function() {
  app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

app.configure('production', function() {
  app.use(express.errorHandler());
});

require('./server/config/routes')(app);
//
//app.get('/partials/:partialPath', function(req, res) {
//  res.render('partials/' + req.params.partialPath);
//});
//
//app.get('*', function(req, res) {
//  res.render('index')
//});

var port = process.env.PORT || 3003;
app.listen(port);
console.log('Listening on port ' + port + '...');