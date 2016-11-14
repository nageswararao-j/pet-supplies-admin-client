'use strict';

app.controller('ProductMgtController', [ '$scope', '$location', 'Session','MENUS',
		'ProductMgtService',
		function($scope, $location, Session, MENUS,ProductMgtService) {
			$scope.currentUser = null;
			$scope.name = Session.currentUser.name;
			$scope.allProducts = {};

			ProductMgtService.loadAllProducts(Session.currentUser.id).then(function(products) {
				$scope.allProducts = products.data;
			});
			$scope.load = function(mgType){
				$location.path(MENUS(mgType));	
			};
			
			$scope.addProduct = function(){
				var productToSave = prepareProdcut();
				ProductMgtService.saveProduct(productToSave).then(function(product) {
					console.log('Saved product successfully!');
				});
			};
			var prepareProdcut = function(){
				var product = {};
				product.productName = $scope.productName;
				product.desc = $scope.desc;
				product.price = $scope.price;
				product.status = $scope.statusVal;
				product.currency = $scope.currency;
				product.quantity = $scope.quantity;
				product.categoryCode = $scope.category;
				product.imageUrls = [{name : $scope.imageName,url :$scope.imageUrl}];
				product.sellerId =  Session.currentUser.id;
				return product;
			};
			$scope.deleteProduct = function(product){
				ProductMgtService.deleteProduct(product).then(function() {
					console.log('Deleted product successfully!');
				});
			};
			$scope.updateProduct = function(product){
				ProductMgtService.updateProduct(product).then(function() {
					console.log('Updated product successfully!');
				});
			};
			$scope.signOut = function(){
				Session.currentUser = null;
				$location.path("/login");
			};
		} ]);