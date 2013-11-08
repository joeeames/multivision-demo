var express = require('express'),
  stylus = require('stylus');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development'

var app = express();

function compile(str, path) {
  return stylus(str).set('filename', path);
}

app.configure(function() {
  app.set('views', __dirname + '/server/views');
  app.set('view engine', 'jade');
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(stylus.middleware(
    {
      src: __dirname + '/public',
      compile: compile
    }
  ));
  app.use(express.static(__dirname + '/client'));
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

var port = 3003;
app.listen(port);
console.log('Listening on port ' + port + '...');