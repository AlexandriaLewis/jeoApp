angular
  .module('jeoApp')
  .directive('titleBar', function() {
    return {
      templateUrl: '../templates/category.html',
      restrict: 'E',
      scope: {
        title: '@',
        valueOne: '@',
        valueTwo: '@',
        valueThree: '@',
        valueFour: '@',
        valueFive: '@',
        idOne: '@',
        idTwo: '@',
        idThree: '@',
        idFour: '@',
        idFive: '@',
        questionOne: '@',
        questionTwo: '@',
        questionThree: '@',
        questionFour: '@',
        questionFive: '@',
        answerOne: '@',
        answerTwo: '@',
        answerThree: '@',
        answerFour: '@',
        answerFive: '@',
        addScore: '&'
      },
      controller: function($rootScope,$scope){
        console.log('i should have 6');
        $scope.addScore = function(val){
          console.log('clicked a btn',val);
        }
      }
    }
  })
