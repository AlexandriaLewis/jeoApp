angular
  .module('jeoApp')
  .directive('titleBar', function() {
    return {
      templateUrl: '../templates/category.html',
      restrict: 'E',
      scope: {
        addScore: '&',
        question: '='
      },
      controller: function($rootScope,$scope){
        console.log('i should have 6');
        $scope.addScore = function(val){
          console.log('clicked a btn',val);
          var cluesArr = $scope.question.clues;
          console.log('scope',cluesArr);
        }
      }
    }
  })
  // .directive('questionBar', function(){
  //   return {
  //     templateUrl: '../templates/category.html',
  //     restrict: 'E',
  //     scope: {
  //       answer: '='
  //     },
  //     controller: function($rootScope,$scope){
  //
  //     }
  // })
