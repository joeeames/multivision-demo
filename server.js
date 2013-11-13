var express = require('express'),
  passport = require('passport'),
  config = require('./server/config/config'),
  mongoose = require('mongoose');



var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

require('./server/config/express')(app, passport, config);

mongoose.connect('mongodb://localhost/multivision');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
  console.log('multivision db opened');
});

var userSchema = mongoose.Schema({firstName: String, lastName: String, userName: String, roles: Array});
//logoutUser.methods.speak = function() {
//  var greeting = this.name ? "Meow, my name is " + this.name : "I don't have a name";
//  console.log(greeting);
//}

var User = mongoose.model('User', userSchema);

//var fluffy = new Cat({name: 'fluffy'});

User.find({firstName:'Joe'}).exec(function(err, collection) {
  if(collection.length === 0) {
    var admin = new User({firstName:'Joe',lastName:'Eames',userName:'joe', roles: ['admin']});
    admin.save()
    User.create({firstName:'Douglas',lastName:'Crockford',username:'js',roles:[]});
    User.create({firstName:'Homer',lastName:'Simpson',username:'homer'});
  }
});

//var Users = [
//  {_id:1,firstName:'Joe',lastName:'Eames',username:'joe',roles:['admin']},
//  {_id:2,firstName:'Douglas',lastName:'Crockford',username:'js',roles:[]},
//  {_id:3,firstName:'Homer',lastName:'Simpson',username:'homer'}
//]

require('./server/config/passport')(app, passport);

require('./server/config/routes')(app);

var port = process.env.PORT || 3003;
app.listen(port);
console.log('Listening on port ' + port + '...');