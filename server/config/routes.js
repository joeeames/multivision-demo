module.exports = function(app) {
  app.get('/partials/:partialPath', function(req, res) {
    res.render('partials/' + req.params.partialPath);
  });

  app.get('*', function(req, res) {
    res.render('index')
  });
}