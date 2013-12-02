var auth = require('./auth');
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function(app) {

  // users
  app.get('/api/users', auth.requiresApiLogin, function(req, res) {
    User.find().exec(function(err, collection) {
      res.send(collection);
    })
  })
z

  app.post('/login', auth.authenticate);

  app.post('/logout', function(req, res) {
    console.log('logging out');
    req.logout();
    res.redirect('/');
  });

  app.get('/partials/:partialPath', function(req, res) {
    res.render('partials/' + req.params.partialPath);
  });

  app.get('*', function(req, res) {
    res.render('index', {
      bsUserExists: true,
      bootstrappedUser: req.user
    })
  });


//
//app.get('/postlogin', function(req, res, next) {
//  if(!req.isAuthenticated()) {
//    res.redirect('/');
//  } else {
//    res.send('Success!');
//  }
//});
}