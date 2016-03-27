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
        $scope.addScore = function(input, answer, val){
          console.log('clicked a btn',input);
          var cluesArr = $scope.question.clues;
          console.log('scope arr',cluesArr);
          console.log('answer',answer);
          if(input === answer){
            $rootScope.score += val;
          }else{
            $rootScope.score -= val;
          }
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
