var auth = require('./auth');

module.exports = function(app) {

  app.post('/login', auth.authenticate);
  app.post('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
  app.post('/currentUser', function(req, res) {
    res.send({success:true});
  })

  app.get('/partials/:partialPath', function(req, res) {
    res.render('partials/' + req.params.partialPath);
  });

  app.get('*', function(req, res) {
    res.render('index', {
      bsUserExists: true,
      bootstrappedUser: req.user
    })
  });
}