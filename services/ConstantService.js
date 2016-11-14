'use strict';

app.constant('AUTH_EVENTS', {
	loginSuccess : 'auth-login-success',
	loginFailed : 'auth-login-failed',
	logoutSuccess : 'auth-logout-success',
	sessionTimeout : 'auth-session-timeout',
	notAuthenticated : 'auth-not-authenticated',
	notAuthorized : 'auth-not-authorized',
	existingUser : 'user-exists'
});
app.constant('USER_ROLES', {
	admin : 'ADMIN'
});
app.constant('ENVIRONMENT', {
	mode : 'prod',
	baseUrl : 'http://localhost:8080/pet-supplies-admin'
	//mode : 'dev',
	//baseUrl : 'http://localhost:8080'
});
app.constant('ERROR', {
	EMAIL_EXISTS : 'Email Id already exists! Please login'
});
app.constant('ORDERS', {
	received : 'Order received',
	readyToShip : 'Ready to ship',
	shipped : 'Shipped',
	delivered : 'Delivered',
	cancelled : 'Cancelled'
});
app.constant('MENUS', function(mgType) {
	var getManagementType = {};
	getManagementType['CATEGORIES'] = 'categoryManagement';
	getManagementType['PRODUCTS'] = 'productMgtLanding';
	getManagementType['ORDERS'] = 'orderManagement';
	getManagementType['USERS'] = 'userManagement';
	getManagementType['PICTURES'] = 'pictureManagement';
	return getManagementType[mgType];
});
