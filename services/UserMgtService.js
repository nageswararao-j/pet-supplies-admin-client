'use strict';

app.factory('UserMgtService', [
		'$http',
		'$rootScope',
		function($http, $rootScope) {

			var deleteUser = function(user) {
				return $http(
						{
							url : $rootScope.baseUrl + '/user/delete/',
							dataType : 'json',
							method : 'DELETE',
							data : category,
							headers : {
								'Content-Type' : 'application/json'
							}
						}).success(function(res) {
					if (res.status == 200) {
						console.log("Deleted user successfully!");
					}
				}).error(function(error) {
					console.log("Error while Deleting user !");
				});
			};
			
			var updateUser = function(user) {
				return $http({
						url : $rootScope.baseUrl+'/user/update/',
						dataType : 'json',
						method : 'POST',
						data : user,
						headers : {
							'Content-Type' : 'application/json'
						}})
						.success(function(res) {
							console.log("Loaded user successfully!");
						}).error(function(error) {
							console.log("Error while loading user !");
						});
			};
			

			var loadAllUsers = function() {
				return $http(
						{
							url : $rootScope.baseUrl + '/user/load/',
							dataType : 'json',
							method : 'GET',
							data : '',
							headers : {
								'Content-Type' : 'application/json'
							}
						}).success(function(res) {
					console.log("Loaded users successfully!");
				}).error(function(error) {
					console.log("Error while loading users !");
				});
			};

			return {
				loadAllUsers : loadAllUsers,
				deleteUser : deleteUser,
				updateUser :updateUser
			};
		} ]);