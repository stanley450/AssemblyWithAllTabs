define(['angular', 'uiBootstrap'], function(angular) {
	var tabsstuff = angular.module('assemblyui', ['ui.bootstrap'])
	
	tabsstuff.controller('assemblycontroller', function($scope){
		 
			$scope.tabs = [];
			$scope.error = function() {document.write('<h1>you broke it.</h1>');};
	
	});
});
	