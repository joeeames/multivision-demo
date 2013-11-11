angular.module('app').controller('mvNavBarLoginCtrl', function($scope, mvNotifier, mvUsers, mvIdentity, $http){

  $scope.signin = function(name, password) {
    console.log('hi');
    $http.post('/login', {username: name, password:password}).then(function(data) {
      console.log(data.data);
    });
//    var userCollection = mvUsers.query(); //.$promise.then(function(userCollection) {
//      userCollection.forEach(function(user) {
//        if(user.authenticate(name, password)) {
//          mvNotifier.notify('You have successfully signed in!');
//          mvIdentity.currentUser = user;
//          $scope.authenticated = true;
//        }
//      });
//      if(identity.currentUser === undefined) {
//        mvNotifier.notify('Username/Password Combination incorrect');
//      }
//    });
  }
});