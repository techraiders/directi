(function () {
  // body...
  "use strict";
  angular
    .module("directi")
      .factory("dataFactory", function($http) {
        function getData() {
          return $http.get('data/data.json');
      }
      return {
        getData: getData
      }
    });
})();