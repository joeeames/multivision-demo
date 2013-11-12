var auth = require('./auth');

module.exports = function(app, Users) {

  // users
  app.get('/api/users', auth.requiresApiLogin, function(req, res) {
    res.send(Users);
  })


  app.post('/login', auth.authenticate);

  app.post('/logout', function(req, res) {
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