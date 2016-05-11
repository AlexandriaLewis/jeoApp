var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('jeoApp',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
    .when('/jeoapp',{
          templateUrl: 'templates/grid.html',
          controller: 'CategoryController as CategoryCtrl'
        })
});
