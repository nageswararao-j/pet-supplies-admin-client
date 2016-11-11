'use strict';

app.controller('PictureMgtController', [ '$scope', '$location', 'Session','MENUS',
		function($scope, $location, Session,MENUS) {
			$scope.currentUser = null;
			$scope.name = Session.currentUser.name;
			$scope.load = function(mgType){
				$location.path(MENUS(mgType));	
			};
		} ]);