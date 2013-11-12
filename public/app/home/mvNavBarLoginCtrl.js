angular.module('app').controller('mvNavBarLoginCtrl', function($scope, mvNotifier, mvUsers, mvIdentity, $http){
  $scope.identity = mvIdentity;



  $scope.signin = function(name, password) {
    $http.post('/login', {username: name, password:password}).then(function(response) {
      if(response.data.success) {
        mvNotifier.notify('You have successfully signed in!');
        mvIdentity.currentUser = response.data.user;
      } else {
        mvNotifier.notify('Username/Password Combination incorrect');
      }
    });
  }

  $scope.signout = function() {
    $http.post('/logout', {a:3}).then(function(response) {
      mvIdentity.currentUser = undefined;
      $scope.username = "";
      $scope.password = "";
      mvNotifier.notify('You have successfully signed out!');
    })
  }

});