'use strict';

(function() {

	/**
	* @ngdoc function
	* @name app.controller:HomeCtrl
	* @description
	* # HomeCtrl
	* Controller of the app
	*/
	angular
	.module('app')
	.controller('AlunosListaCtrl', Controller);

	Controller.$inject = ['indexService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Controller(indexService) {
            /*jshint validthis: true */
            var vm = this;
            vm.title = "FILHOS";
            vm.listFeatures = indexService.getFeaturesList();

            return vm;
	}

})();
