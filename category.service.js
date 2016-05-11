angular
  .module('gameboard')
  .service('CategoryService',function($http, $q, $cacheFactory) {
    var visual = "http://jservice.io/api/category?id=11500";
    var contract = "http://jservice.io/api/category?id=11513";
    var batman = "http://jservice.io/api/category?id=11502";
    var story = "http://jservice.io/api/category?id=11525";
    var drink = "http://jservice.io/api/category?id=11547";
    var doctor = "http://jservice.io/api/category?id=11569";
    var cors = "https://free-cors-server.herokuapp.com/any-request/";

    var categoryArr = [visual,contract,batman,story,drink,doctor];

    function getCategories(){
      var promises = [];
      categoryArr.forEach(function(el){
        var promise = $http.get(cors+encodeURIComponent(el));
        promises.push(promise);
      })
      return $q.all(promises);
    }

    return {
      getCategories: getCategories
    }
})
