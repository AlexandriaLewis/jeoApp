// var angular = require('angular');
// var angularRoute = require('angular-route');

angular
  .module('gameboard',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
    // .when('/',{
    //       templateUrl: "main.html"
    //     })
    .when('/',{
          templateUrl: 'templates/grid.html',
          controller: 'CategoryController as CategoryCtrl'
        })
    .when('/404',{
        template: '<h1> You done goofed </h1>'
      })
    .otherwise({
       redirectTo: '/404'
    })
});

// require('./jeoApp');
