'use strict';

app.factory('AuthService',['$http','$rootScope','Session','USER_ROLES','AUTH_EVENTS','ERROR', function($http,$rootScope, Session,USER_ROLES,AUTH_EVENTS,ERROR) {
	var authService = {};

	authService.login = function(credentials) {
		return $http.post($rootScope.baseUrl+'/admin/login', credentials)
		.success(function(res) {
			Session.create(res.emailId, res.id, USER_ROLES.admin);
			return res.data;
		}).error(function(error) {
			if(error.present){
				console.log("Error while registering into admin/seller app");
				$rootScope.$broadcast(AUTH_EVENTS.existingUser,{
					errorMsg : ERROR.EMAIL_EXISTS
				});
			}
		});
	};

	authService.isAuthenticated = function() {
		return !!Session.id;
	};

	authService.currentUser = function(user) {
		Session.currentUser = user;
	};
	
	authService.isAuthorized = function(authorizedRoles) {
		return (authService.isAuthenticated());
	};

	return authService;
}])