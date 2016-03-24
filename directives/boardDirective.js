angular
  .module('jeoApp')
  .directive('titleBar', function() {
    return {
      templateUrl: '../templates/category.html',
      restrict: 'E',
      scope: {
        title: '@'
      },
      transclude: true,
    }
  })
