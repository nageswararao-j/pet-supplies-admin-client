'use strict';

app.controller('UserMgtController', [ '$scope', '$location', 'Session','MENUS',
		function($scope, $location, Session,MENUS) {
			$scope.currentUser = null;
			$scope.name = Session.currentUser.name;
			$scope.load = function(mgType){
				$location.path(MENUS(mgType));	
			};
		} ]);