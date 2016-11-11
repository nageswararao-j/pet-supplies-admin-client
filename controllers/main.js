'use strict';

app.controller('MainCtrl', [
		'$scope',
		'USER_ROLES',
		'AuthService',
		'$location',
		'Session','MENUS',
		function($scope, USER_ROLES, AuthService, $location, Session,MENUS) {
			$scope.currentUser = null;
			$scope.name = Session.currentUser.name;
			$scope.load = function(mgType){
//				$scope.managementCatagory = MENUS(mgType);	
				$location.path(MENUS(mgType));	
			};
			
			$scope.signOut = function(){
				Session.currentUser = null;
				$location.path("/login");
			};
		} ]);