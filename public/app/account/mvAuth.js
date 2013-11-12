angular.module('app').factory('mvAuth', function($http, $q, mvIdentity, mvUser, $location) {
  return {
    authenticateUser: function(username, password) {
      var dfd = $q.defer();
      $http.post('/login', {username: username, password:password}).then(function(response) {
        var user = new mvUser();
        angular.extend(user, response.data.user);
        mvIdentity.currentUser = user;
        dfd.resolve(response.data);
      });
      return dfd.promise;
    },
    logoutUser: function() {
      var dfd = $q.defer();
      $http.post('/logout', {logout:true}).then(function(response) {
        mvIdentity.currentUser = undefined;
        dfd.resolve();
      });
      return dfd.promise;
    },
    requiresRole: function(role) {
      if(!mvIdentity.isAuthorized(role)) {
        $location.path('/');
      }
    },
    authorizeCurrentUserForRoute: function(role) {
      if(mvIdentity.isAuthorized(role)) {
        return true;
      } else {
        return $q.reject('Not Authenticated');
      }
    }
  }
})