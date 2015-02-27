angular.module('app').factory('mvCourse', function($resource) {
  var CourseResource = $resource('/api/courses/:id', {id: "@_id"}, {
    update: {method:'PUT',isArray:false}
  });

  return CourseResource;

})
