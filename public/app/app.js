angular.module('app', ['ngResource', 'ngRoute']);


angular.module('app').config(function($routeProvider, $locationProvider) {
  var routeRoleChecks = {
    admin: {'auth': function(mvAuth) {
      return mvAuth.authorizeCurrentUserForRoute('admin')
    }}
  }

  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', { templateUrl: '/partials/home', controller: 'mvHomeCtrl' })
    .when('/admin/users', { templateUrl: '/partials/user-list', controller: 'mvUserListCtrl',
      resolve:routeRoleChecks.admin})
    .otherwise({redirectTo: '/'});
});

angular.module('app').run(function($rootScope, $location){
  $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection){
    if(rejection === 'Not Authenticated'){
      $location.path('/');
    }
  })
})




