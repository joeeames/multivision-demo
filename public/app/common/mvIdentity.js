// ORIGINAL VERSION
//angular.module('app').value('mvIdentity', {
//  isAuthenticated: function() {
//    return !!this.currentUser;
//  }
//});

angular.module('app').factory('mvIdentity', function($window, mvUser) {

  var currentUser;
  if(!!$window.bootstrappedUserObject) {
    var user = new mvUser();
    currentUser = angular.extend(user, $window.bootstrappedUserObject);
  }
  return {
    isAuthenticated: function() {
      return !!this.currentUser;
    },
    isAuthorized: function(role) {
      return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
    },
    currentUser: currentUser
  }
});