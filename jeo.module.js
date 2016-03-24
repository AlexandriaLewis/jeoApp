var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('jeoApp',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
    .when('/',{
          templateUrl: "templates/grid.html",
          controller: "CategoryController"
        })
    .when('/404',{
        template: '<h1> You done goofed </h1>',
        controller: 'CategoryController'
      })
    .otherwise({
       redirectTo: '/404'
    })
});

require('./category/category.controller');
require('./question/question.controller');
require('./category/category.service');
require('./question/question.service');
require('./directives/boardDirective')
// require('./services/cacheEngine.service');
