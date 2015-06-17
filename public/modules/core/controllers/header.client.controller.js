'use strict';

angular.module('core').controller('HeaderController', ['$http', '$scope', 'Authentication', 'Menus',
	function($scope, Authentication, Menus, $http) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});


		$scope.getSpiderman = function(){
			$http.get('/findByName', {name: 'spider-man'}).
			  success(function(data, status, headers, config) {
			    console.log(data);
			  }).
			  error(function(data, status, headers, config) {
			    console.log(data);
			  });		
		};
	}
]);