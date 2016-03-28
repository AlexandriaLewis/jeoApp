var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('jeoApp',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
    .when('/jeoapp',{
          templateUrl: 'jeoApp/templates/grid.html',
          controller: 'CategoryController'
        })
});
