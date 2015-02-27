angular.module('app').factory('mvUser', function($resource) {
  var UserResource = $resource('/api/users/:id', {id: "@_id"}, {
    update: {method:'PUT',isArray:false}
  });

  UserResource.prototype.isAdmin = function() {
    return this.roles && this.roles.indexOf('admin') > -1;
  };

  return UserResource;
});
