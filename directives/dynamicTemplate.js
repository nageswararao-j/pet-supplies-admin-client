app.directive('dynamicTemplate', function() {
	return {
		template : '<ng-include src="getTemplateUrl()"/>',
		scope : {
			catagory : '=catagory',
		},
		restrict : 'E',
		controller : function($scope) {
			$scope.getTemplateUrl = function() {
				if($scope.catagory != undefined){
					return "/pet-supplies-admin/views/"+$scope.catagory+".html";
				}
			}
		}
	};
});