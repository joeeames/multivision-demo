var express = require('express'),
  passport = require('passport'),
  config = require('./server/config/config');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development'

var app = express();

require('./server/config/express')(app, passport, config);

var Users = [
  {_id:1,firstName:'Joe',lastName:'Eames',username:'joe',roles:['admin']},
  {_id:2,firstName:'Douglas',lastName:'Crockford',username:'js',roles:[]},
  {_id:3,firstName:'Homer',lastName:'Simpson',username:'homer'}
]

require('./server/config/passport')(app, passport, Users);


require('./server/config/routes')(app, Users);

var port = process.env.PORT || 3003;
app.listen(port);
console.log('Listening on port ' + port + '...');