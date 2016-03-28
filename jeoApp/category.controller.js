angular
  .module('jeoApp')
  .controller('CategoryController', function($scope,$rootScope,$location,CategoryService) {
    $rootScope.score = 0;
    CategoryService.getCategories().then(function(data){
      console.log('categories the controller',data);
      $scope.categories = data;
    })
  })
