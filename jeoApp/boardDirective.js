angular
  .module('jeoApp')
  .directive('titleBar', function() {
    return {
      templateUrl: 'jeoApp/templates/category.html',
      restrict: 'E',
      scope: {
        addScore: '&',
        question: '='
      },
      controller: function($rootScope,$scope){
        console.log('i should have 6');
        $scope.addScore = function(input, answer, val){
          console.log('clicked a btn',input);
          console.log('answer',answer);
          if(input === answer){
            $rootScope.score += val;
          }else{
            $rootScope.score -= val;
          }
        };
        $scope.disableBtn = function(id){
          $('button.'+id).prop('disabled', true);
          $('#'+id).modal('hide');
        };
      }
    }
  })
