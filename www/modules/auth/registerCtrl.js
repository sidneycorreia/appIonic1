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
	.controller('RegisterCtrl', Ctrl);

	Ctrl.$inject = ['authService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Ctrl(authService) {
            /*jshint validthis: true */
            var vm = this;
            vm.title = "Login";
            
            
            //limpar historico
            //http://codepen.io/elliotwaite/pen/iayEl
            return vm;
	}

})();
