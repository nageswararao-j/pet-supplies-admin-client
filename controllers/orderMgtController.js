'use strict';

app.controller('OrderMgtController', [
		'$scope',
		'$location',
		'Session','OrderMgtService','MENUS',
		function($scope, $location, Session,OrderMgtService,MENUS) {
			$scope.currentUser = null;
			$scope.name = Session.currentUser.name;
			$scope.orderedProducts = {};
			OrderMgtService.loadOrders(Session.currentUser.id).then(function(loadedOrders) {
				$scope.orderedProducts = loadedOrders.data;
			});
			$scope.load = function(mgType){
				$location.path(MENUS(mgType));	
			};
			
			$scope.updateOrder = function(order){
				OrderMgtService.updateOrder(order).then(function(updatedOrder) {
					$scope.orderedProducts = updatedOrder.data;
				});
			};
			$scope.signOut = function(){
				Session.currentUser = null;
				$location.path("/login");
			};
		} ]);