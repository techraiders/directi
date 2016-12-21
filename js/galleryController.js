
(function() {
  "use strict";
  angular
  	.module("directi")
    	.controller("galleryController", function($scope, $http, dataFactory) {
      		dataFactory.getData().then(function(response) {
        		$scope.gallery = response.data.gallery;
            console.info($scope.gallery.pics);
      		})
    	})
  }
)();