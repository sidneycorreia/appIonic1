'use strict';

(function() {

	/**
	* @ngdoc function
	* @name app.service:indexService
	* @description
	* # indexService
	* Service of the app
	*/
 angular.module('app')
 .factory('indexService', indexService)

	indexService.$inject = ['$http'];

	function indexService($http) {

		var list = [
			{"feature": "Implemented Best Practices"},
			{"feature": "Using Controller AS syntax"},
			{"feature": "Wrap Angular components in an Immediately Invoked Function Expression (IIFE)"},
			{"feature": "Declare modules without a variable using the setter syntax"},
			{"feature": "Using named functions"}
		];

		return {
			getFeaturesList: getFeaturesList
		};

		function getFeaturesList() {
			return list
		}

	}

})();
