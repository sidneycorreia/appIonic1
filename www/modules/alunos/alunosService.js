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
 .factory('alunosService', service)

	service.$inject = ['$http'];

	function service($http) {

		var list = [
                    {"nome": "Heitor", "avatar": "kid-1", "avatar_bg" : "green"},	
                    {"nome": "Heloisa", "avatar": "kid-2", "avatar_bg" : "mauve"},	
                    {"nome": "Tomaz", "avatar": "kid-3", "avatar_bg" : "orange"},	
                    {"nome": "Sofia", "avatar": "kid-4", "avatar_bg" : "red"}	
//                    {"nome": "Filho 5", "avatar": "kid-5", "avatar_bg" : "crimson"},	
//                    {"nome": "Filho 6", "avatar": "kid-6", "avatar_bg" : "violet"},	
//                    {"nome": "Filho 7", "avatar": "kid-7", "avatar_bg" : "cobalt"},
//                    {"nome": "Filho 8", "avatar": "kid-8", "avatar_bg" : "emerald"}
		];

		return {
			getList: getList
		};

		function getList() {
			return list
		}

	}

})();
