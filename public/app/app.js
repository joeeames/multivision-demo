angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', { templateUrl: '/partials/main', controller: 'indexCtrl' })
    //.otherwise({redirectTo: '/'});
});

angular.module('app').controller('indexCtrl', function($scope) {
  $scope.someVal = "hi there";
})