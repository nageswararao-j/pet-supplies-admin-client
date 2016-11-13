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
	$scope.openCreateCategory = function() {
		var $modalInstance = $modal.open({
			templateUrl : 'views/createCategory.html',
			controller : 'CategoryMgtController'
		});
	};
	$scope.openUpdateCategory = function(product) {
		var $modalInstance = $modal.open({
			templateUrl : 'views/updateCategory.html',
			controller : 'CategoryMgtController',
			resolve : {
				categoryToUpdated : function(){
					return category;
				}
			}
		});
	};
	$scope.openUpdateUser = function(user) {
		var $modalInstance = $modal.open({
			templateUrl : 'views/updateUser.html',
			controller : 'UserMgtController',
			resolve : {
				userToUpdated : function(){
					return user;
				}
			}
		});
	};
	$scope.openUpdateImage = function(image) {
		var $modalInstance = $modal.open({
			templateUrl : 'views/updateImage.html',
			controller : 'PictureMgtController',
			resolve : {
				imageToUpdated : function(){
					return image;
				}
			}
		});
	};
} ]);