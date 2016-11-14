'use strict';

app.factory('OrderMgtService', [
		'$http','$rootScope',
		function($http,$rootScope) {
			var loadOrders = function(admOrSellerId) {
				return $http({
						url : $rootScope.baseUrl+'/order/load/'+admOrSellerId,
						dataType : 'json',
						method : 'GET',
						data : '',
						headers : {
							'Content-Type' : 'application/json'
						}})
						.success(function(res) {
							console.log("Loaded orders successfully!");
						}).error(function(error) {
							console.log("Error while loading orders !");
						});
			};
			
			var updateOrder = function(order) {
				return $http({
						url : $rootScope.baseUrl+'/order/update/',
						dataType : 'json',
						method : 'POST',
						data : order,
						headers : {
							'Content-Type' : 'application/json'
						}})
						.success(function(res) {
							console.log("Loaded order successfully!");
						}).error(function(error) {
							console.log("Error while updating order!");
						});
			};
			
			return {
				loadOrders : loadOrders,
				updateOrder : updateOrder
			};
		} ]);