'use strict';

app.factory('ProductMgtService', [
		'$http',
		'$rootScope',
		function($http, $rootScope) {
			var saveProduct = function(product) {
				return $http.post($rootScope.baseUrl + '/product/save/',
						product).success(function(res) {
					console.log("Saved Cart Item successfully!");
				}).error(function(error) {
					console.log("Error while saving Cart Item");
				});
			};

			var deleteProduct = function(product) {
				return $http(
						{
							url : $rootScope.baseUrl + '/product/delete/',
							dataType : 'json',
							method : 'DELETE',
							data : product,
							headers : {
								'Content-Type' : 'application/json'
							}
						}).success(function(res) {
					if (res.status == 200) {
						console.log("Deleted Cart Item successfully!");
					}
				}).error(function(error) {
					console.log("Error while Deleting products !");
				});
			};

			var loadAllProducts = function(admOrSellerId) {
				return $http(
						{
							url : $rootScope.baseUrl + '/product/load/'
									+ admOrSellerId,
							dataType : 'json',
							method : 'GET',
							data : '',
							headers : {
								'Content-Type' : 'application/json'
							}
						}).success(function(res) {
					console.log("Loaded products successfully!");
				}).error(function(error) {
					console.log("Error while loading products !");
				});
			};

			return {
				saveProduct : saveProduct,
				loadAllProducts : loadAllProducts,
				deleteProduct : deleteProduct
			};
		} ]);