angular
  .module('jeoApp')
  .controller('CategoryController', function($scope,$location,CategoryService) {
    CategoryService.getCategories().then(function(data){
      console.log('categories the controller',data);
      return $scope.categories = data;
    })
  })
