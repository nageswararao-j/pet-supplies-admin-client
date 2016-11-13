'use strict';

app.controller('CategoryMgtController', [ '$scope', '$location', 'Session','MENUS','CategoryMgtService',
		function($scope, $location, Session,MENUS,CategoryMgtService) {
			$scope.currentUser = null;
			$scope.name = Session.currentUser.name;
			$scope.load = function(mgType){
				$location.path(MENUS(mgType));	
			};
			$scope.allCategories = {};
			CategoryMgtService.loadAllCategories(Session.currentUser.id).then(function(categories) {
				$scope.allCategories = categories.data;
			});
			
			$scope.addCategory = function(){
				var categoryToSave = prepareCategory();
				CategoryMgtService.saveCategory(categoryToSave).then(function(category) {
					console.log('Saved category successfully!');
				});
			};
			var prepareCategory = function(){
				var category = {};
				category.name = $scope.categoryName;
				category.code = $scope.categoryCode;
				category.sellerId = Session.currentUser.id;
				return category;
			};
			$scope.deleteCategory = function(category){
				CategoryMgtService.deleteCategory(category).then(function() {
					console.log('Deleted category successfully!');
				});
			};
			
			$scope.updateCategory = function(category){
				UserMgtService.updateCategory(user).then(function() {
					console.log('Updated Category successfully!');
				});
			};
		} ]);