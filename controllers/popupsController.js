'use strict';

app.controller('PopupsController', [ '$scope', '$modal', function($scope, $modal) {
	$scope.openCreateProduct = function() {
		var $modalInstance = $modal.open({
			templateUrl : 'views/createProduct.html',
			controller : 'ProductMgtController'
		});
	};
	$scope.openUpdateProduct = function(product) {
		var $modalInstance = $modal.open({
			templateUrl : 'views/updateProduct.html',
			controller : 'ProductMgtController',
			resolve : {
				productToUpdated : function(){
					return product;
				}
			}
		});
	};
} ]);