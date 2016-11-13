'use strict';

app.factory('ProductMgtService', [
		'$http',
		'$rootScope',
		function($http, $rootScope) {
			var saveProduct = function(product) {
				return $http.post($rootScope.baseUrl + '/product/save/',
						product).success(function(res) {
					console.log("Saved product successfully!");
				}).error(function(error) {
					console.log("Error while saving product");
				});
			};

			var updateUser = function(u) {
				return $http({
						url : $rootScope.baseUrl+'/user/update/',
						dataType : 'json',
						method : 'POST',
						data : order,
						headers : {
							'Content-Type' : 'application/json'
						}})
						.success(function(res) {
							console.log("Loaded user successfully!");
						}).error(function(error) {
							console.log("Error while loading user !");
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
						console.log("Deleted product successfully!");
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
				deleteProduct : deleteProduct,
				updateUser : updateUser
			};
		} ]);