angular.module('app').controller('mvHomeCtrl', function($scope) {
  $scope.courses = [
    {name: 'course 1', featured: true, published: new Date('10/5/2013')},
    {name: 'course 2', featured: true, published: new Date('10/12/2013')},
    {name: 'course 3', featured: false, published: new Date('10/1/2013')},
    {name: 'course 4', featured: true, published: new Date('3/1/2013')},
    {name: 'course 5', featured: true, published: new Date('10/13/2013')},
    {name: 'course 6', featured: false, published: new Date('10/1/2013')},
    {name: 'course 7', featured: true, published: new Date('2/1/2013')},
    {name: 'course 8', featured: true, published: new Date('10/7/2013')},
    {name: 'course 9', featured: false, published: new Date('11/1/2013')},
    {name: 'course 10', featured: true, published: new Date('2/15/2013')},
    {name: 'course 11', featured: false, published: new Date('8/1/2013')},
    {name: 'course 12', featured: true, published: new Date('7/1/2013')},
    {name: 'course 13', featured: false, published: new Date('7/12/2013')},
    {name: 'course 14', featured: true, published: new Date('1/1/2013')},
    {name: 'course 15', featured: true, published: new Date('10/13/2013')}
  ]
})