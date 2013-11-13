var express = require('express'),
  passport = require('passport'),
  mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./server/config/config')[env]

var app = express();

require('./server/config/express')(app, passport, config);

require('./server/config/mongoose')(config);

require('./server/config/passport')(app, passport);

require('./server/config/routes')(app);

var port = process.env.PORT || 3003;
app.listen(port);
console.log('Listening on port ' + port + '...');