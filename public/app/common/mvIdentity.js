// ORIGINAL VERSION
//angular.module('app').value('mvIdentity', {
//  isAuthenticated: function() {
//    return !!this.currentUser;
//  }
//});

angular.module('app').factory('mvIdentity', function($window) {

  var currentUser;
  if(!!$window.bootstrappedUserObject) {
    currentUser = $window.bootstrappedUserObject
  }
  return {
    isAuthenticated: function() {
      return !!this.currentUser;
    },
    currentUser: currentUser
  }
});