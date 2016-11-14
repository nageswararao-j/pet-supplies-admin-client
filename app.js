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
app.config([ '$routeProvider', '$stateProvider', 'USER_ROLES','ENVIRONMENT',
		function($routeProvider, $stateProvider, USER_ROLES,ENVIRONMENT) {
			var baseUrl = ''; 
			if(ENVIRONMENT.mode === 'prod'){
				baseUrl	= ENVIRONMENT.baseUrl;
			}
			$routeProvider.when('/login', {
				templateUrl : baseUrl+'/views/login.html',
				controller : 'LoginController',
				controllerAs : 'login'
			}).when('/signUp', {
				templateUrl : baseUrl+'/views/signUp.html',
				controller : 'SignUpController',
				controllerAs : 'signUp'
			}).when('/main', {
				templateUrl : baseUrl+'/views/main.html',
				controller : 'MainCtrl',
				controllerAs : 'main'
			}).when('/productMgtLanding', {
				templateUrl : baseUrl+'/views/product-management.html',
				controller : 'ProductMgtController',
				controllerAs : 'productMgtController'
			}).when('/orderManagement', {
				templateUrl : baseUrl+'/views/order-management.html',
				controller : 'OrderMgtController',
				controllerAs : 'orderMgtController'
			}).when('/categoryManagement', {
				templateUrl : baseUrl+'/views/category-management.html',
				controller : 'CategoryMgtController',
				controllerAs : 'categoryMgtController'
			}).when('/pictureManagement', {
				templateUrl : baseUrl+'/views/picture-management.html',
				controller : 'PictureMgtController',
				controllerAs : 'pictureMgtController'
			}).when('/userManagement', {
				templateUrl : baseUrl+'/views/user-management.html',
				controller : 'UserMgtController',
				controllerAs : 'userMgtController'
			}).otherwise({
				redirectTo : '/login'
			});
			$stateProvider.state('index', {
				url : '/views',
				templateUrl : baseUrl+'/views/index.html',
				data : {
					authorizedRoles : [ USER_ROLES.admin, USER_ROLES.editor ]
				}
			});
		} ]);

app.run([ '$rootScope', 'ENVIRONMENT', function($rootScope, ENVIRONMENT) {
	$rootScope.baseUrl = ENVIRONMENT.baseUrl;
} ]);