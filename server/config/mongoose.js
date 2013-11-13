var mongoose = require('mongoose');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('multivision db opened');
  });

  var userSchema = mongoose.Schema({firstName: String, lastName: String, userName: String, roles: Array});
  var User = mongoose.model('User', userSchema);

  User.find({firstName:'Joe'}).exec(function(err, collection) {
    if(collection.length === 0) {
      var admin = new User({firstName:'Joe',lastName:'Eames',userName:'joe', roles: ['admin']});
      admin.save();
      User.create({firstName:'Douglas',lastName:'Crockford',username:'js',roles:[]});
      User.create({firstName:'Homer',lastName:'Simpson',username:'homer'});
    }
  });
};