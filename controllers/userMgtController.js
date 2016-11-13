'use strict';

app.controller('UserMgtController', [ '$scope', '$location', 'Session','MENUS','UserMgtService',
		function($scope, $location, Session,MENUS,UserMgtService) {
			$scope.currentUser = null;
			$scope.name = Session.currentUser.name;
			$scope.load = function(mgType){
				$location.path(MENUS(mgType));	
			};
			$scope.allUsers = {};
			UserMgtService.loadAllUsers().then(function(users) {
				$scope.allUsers = users.data;
			});
			
			$scope.deleteUser = function(user){
				UserMgtService.deleteCategory(user).then(function() {
					console.log('Deleted user successfully!');
				});
			};
			
			$scope.updateUser = function(user){
				UserMgtService.updateUser(user).then(function() {
					console.log('Updated user successfully!');
				});
			};
			
		} ]);