'use strict';

app.factory('ImageMgtService', [
		'$http',
		'$rootScope',
		function($http, $rootScope) {

			var deleteImage = function(image) {
				return $http(
						{
							url : $rootScope.baseUrl + '/image/delete/',
							dataType : 'json',
							method : 'DELETE',
							data : image,
							headers : {
								'Content-Type' : 'application/json'
							}
						}).success(function(res) {
					if (res.status == 200) {
						console.log("Deleted image successfully!");
					}
				}).error(function(error) {
					console.log("Error while Deleting image !");
				});
			};
			
			var updateImage = function(image) {
				return $http({
						url : $rootScope.baseUrl+'/image/update/',
						dataType : 'json',
						method : 'POST',
						data : image,
						headers : {
							'Content-Type' : 'application/json'
						}})
						.success(function(res) {
							console.log("Loaded image successfully!");
						}).error(function(error) {
							console.log("Error while loading image !");
						});
			};
			

			var loadAllImages = function() {
				return $http(
						{
							url : $rootScope.baseUrl + '/image/load/',
							dataType : 'json',
							method : 'GET',
							data : '',
							headers : {
								'Content-Type' : 'application/json'
							}
						}).success(function(res) {
					console.log("Loaded images successfully!");
				}).error(function(error) {
					console.log("Error while loading images !");
				});
			};

			return {
				loadAllImages : loadAllImages,
				deleteImage : deleteImage,
				updateImage :updateImage
			};
		} ]);