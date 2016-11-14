'use strict';

app.controller('SignUpController', [ '$scope','$location','Session','AuthService','USER_ROLES','AUTH_EVENTS',
		function($scope,$location,Session,AuthService,USER_ROLES,AUTH_EVENTS) {
		
	
	$scope.signUpToApp = function(){
		$scope.user = prepareUserToRegister();
		AuthService.login($scope.user).then(function(user){
			var userData = user.data;
			if(userData.present){
				$scope.userPresent = 'Email Id already registered,Please login';
				$location.path("/signUp");
			}else if(userData != undefined && userData.active){
				$scope.currentUser = userData;
				AuthService.currentUser(userData);
				$location.path("/main");	
			}
		});
		
	};
	
	var prepareUserToRegister = function(){
		var user = {};
		user.name = $scope.name;
		user.password = $scope.password;
		user.emailId = $scope.email;
		user.address = prepareAddress();
		user.phone = $scope.phone;
		user.register = true;
		user.profile = USER_ROLES.admin;
		return user;
	};
	
	var prepareAddress = function(){
		var address = {};
		address.address = $scope.doorNum;
		address.city = $scope.city;
		address.state = $scope.state;
		address.zipCode = $scope.zipCode
		address.email = $scope.email;
		address.phone = $scope.phone;
		address.country = $scope.country;
		return address;
	};
	
	$scope.login = function(){
		$location.path('/login');
	};
	
	$scope.$on(AUTH_EVENTS.existingUser,function(event,data){
		$scope.emailExists = data.errorMsg;
	});
	
	$scope.signOut = function(){
		Session.currentUser = null;
		$location.path("/login");
	};
} ]);