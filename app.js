'use strict';

/**
 * @ngdoc overview
 * @name petAdminApp
 * @description # petAdminApp
 * 
 * Main module of the application.
 */
var app = angular.module('petAdminApp', [
'ngResource', 'ngRoute', 'ui.bootstrap', 'ui.router',
]);
app.config([ '$routeProvider', '$stateProvider', 'USER_ROLES',
		function($routeProvider, $stateProvider, USER_ROLES) {
			$routeProvider.when('/login', {
				templateUrl : 'views/login.html',
				controller : 'LoginController',
				controllerAs : 'login'
			}).when('/signUp', {
				templateUrl : 'views/signUp.html',
				controller : 'SignUpController',
				controllerAs : 'signUp'
			}).when('/main', {
				templateUrl : 'views/main.html',
				controller : 'MainCtrl',
				controllerAs : 'main'
			}).when('/productMgtLanding', {
				templateUrl : 'views/product-management.html',
				controller : 'ProductMgtController',
				controllerAs : 'productMgtController'
			}).when('/orderManagement', {
				templateUrl : 'views/order-management.html',
				controller : 'OrderMgtController',
				controllerAs : 'orderMgtController'
			}).when('/categoryManagement', {
				templateUrl : 'views/category-management.html',
				controller : 'CategoryMgtController',
				controllerAs : 'categoryMgtController'
			}).when('/pictureManagement', {
				templateUrl : 'views/picture-management.html',
				controller : 'PictureMgtController',
				controllerAs : 'pictureMgtController'
			}).when('/userManagement', {
				templateUrl : 'views/user-management.html',
				controller : 'UserMgtController',
				controllerAs : 'userMgtController'
			}).otherwise({
				redirectTo : '/login'
			});
			$stateProvider.state('index', {
				url : '/views',
				templateUrl : 'views/index.html',
				data : {
					authorizedRoles : [ USER_ROLES.admin, USER_ROLES.editor ]
				}
			});
		} ]);

app.run([ '$rootScope', 'ENVIRONMENT', function($rootScope, ENVIRONMENT) {
	$rootScope.baseUrl = ENVIRONMENT.baseUrl;
} ]);