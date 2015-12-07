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
	.controller('IndexCtrl', Index);

	Index.$inject = ['indexService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Index(indexService) {
            /*jshint validthis: true */
            console.log('teste');
            var vm = this;
            vm.title = "Hello, Angm-Generator!";
            vm.version = "0.3.x";
            vm.listFeatures = indexService.getFeaturesList();
            
            
            console.log(vm.title);
            return vm;
	}

})();
