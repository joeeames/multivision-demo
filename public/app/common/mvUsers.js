angular.module('app').factory('mvUsers', function() {
  var users = [
    {_id:1,email:'joe@joe.com', password:'123'},
    {_id:2,email:'bob@bob.com', password:'456'}
  ]

  return {
    query: function() {
      return users;
    }
  }
});