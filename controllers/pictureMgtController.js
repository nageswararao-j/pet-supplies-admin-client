'use strict';

app.controller('PictureMgtController', [ '$scope', '$location', 'Session','MENUS','ImageMgtService',
		function($scope, $location, Session,MENUS,ImageMgtService) {
			$scope.currentUser = null;
			$scope.name = Session.currentUser.name;
			$scope.load = function(mgType){
				$location.path(MENUS(mgType));	
			};
			$scope.allImages = {};
			ImageMgtService.loadAllImages().then(function(images) {
				$scope.allImages = images.data;
			});
			
			$scope.deleteImage = function(image){
				ImageMgtService.deleteImage(image).then(function() {
					console.log('Deleted image successfully!');
				});
			};
			
			$scope.updateImage = function(image){
				ImageMgtService.updateImage(image).then(function() {
					console.log('Updated image successfully!');
				});
			};
			
		} ]);