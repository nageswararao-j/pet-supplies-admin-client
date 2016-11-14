'use strict';

app.factory('CategoryMgtService', [
		'$http',
		'$rootScope',
		function($http, $rootScope) {
			var saveCategory = function(category) {
				return $http.post($rootScope.baseUrl + '/category/save/',
						category).success(function(res) {
					console.log("Saved category successfully!");
				}).error(function(error) {
					console.log("Error while saving category");
				});
			};

			
			var updateCategory = function(category) {
				return $http({
						url : $rootScope.baseUrl+'/category/update/',
						dataType : 'json',
						method : 'POST',
						data : category,
						headers : {
							'Content-Type' : 'application/json'
						}})
						.success(function(res) {
							console.log("Loaded category successfully!");
						}).error(function(error) {
							console.log("Error while loading category !");
						});
			};
			
			
			var deleteCategory = function(category) {
				return $http(
						{
							url : $rootScope.baseUrl + '/category/delete/',
							dataType : 'json',
							method : 'DELETE',
							data : category,
							headers : {
								'Content-Type' : 'application/json'
							}
						}).success(function(res) {
					if (res.status == 200) {
						console.log("Deleted category successfully!");
					}
				}).error(function(error) {
					console.log("Error while Deleting category !");
				});
			};

			var loadAllCategories = function(admOrSellerId) {
				return $http(
						{
							url : $rootScope.baseUrl + '/category/load/'
									+ admOrSellerId,
							dataType : 'json',
							method : 'GET',
							data : '',
							headers : {
								'Content-Type' : 'application/json'
							}
						}).success(function(res) {
					console.log("Loaded categories successfully!");
				}).error(function(error) {
					console.log("Error while loading categories !");
				});
			};

			return {
				saveCategory : saveCategory,
				loadAllCategories : loadAllCategories,
				deleteCategory : deleteCategory
			};
		} ]);