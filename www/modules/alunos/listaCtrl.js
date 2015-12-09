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

	Controller.$inject = ['alunosService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Controller(alunosService) {
            /*jshint validthis: true */
            var vm = this;
            vm.title = "FILHOS";
            vm.alunosList = alunosService.getList();

            return vm;
	}

})();
