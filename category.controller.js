angular
  .module('gameboard')
  .controller('CategoryController', CategoryController);

  CategoryController.$inject = ['$scope','$rootScope','$location','CategoryService'];

  function CategoryController($scope,$rootScope,$location,CategoryService) {
    $rootScope.score = 0;
    var vm = this;
    CategoryService.getCategories().then(function(data){
      console.log('categories the controller',data);
      vm.categories = data;
      console.log('vm categories the controller',vm.categories);
    })
  }
