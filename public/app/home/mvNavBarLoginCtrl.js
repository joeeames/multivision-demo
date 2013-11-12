angular.module('app').controller('mvNavBarLoginCtrl', function($scope, mvNotifier, mvIdentity, mvAuth, $location){
  $scope.identity = mvIdentity;

  $scope.signin = function(name, password) {
    mvAuth.authenticateUser(name, password).then(function(data) {
      if(data.success) {
        mvNotifier.notify('You have successfully signed in!');
      } else {
        mvNotifier.notify('Username/Password Combination incorrect');
      }
    });
  }

  $scope.signout = function() {
    mvAuth.logoutUser().then(function() {
      $scope.username = "";
      $scope.password = "";
      mvNotifier.notify('You have successfully signed out!');
      $location.path('/');
    });
  }

});