angular
  .module('jeoApp')
  .controller('QuestionController', function($scope,$location,CategoryService,QuestionService) {
    QuestionService.getQuestions().then(function(data){
      console.log('categories the question controller',data);
      // return $scope.categories = data;
    })
  })
