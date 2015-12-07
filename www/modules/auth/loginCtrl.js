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
	.controller('LoginCtrl', Login);

	Login.$inject = ['authService', '$location'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Login(authService, $location) {
            /*jshint validthis: true */
            var vm = this;
            
            function go (path) {
                console.log(path)
                $location.path( path );
            };
            
            vm.go = go;
            //limpar historico
            //http://codepen.io/elliotwaite/pen/iayEl
            return vm;
	}

})();
