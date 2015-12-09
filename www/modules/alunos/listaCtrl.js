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

	Controller.$inject = ['alunosService', '$ionicModal','$scope'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Controller(alunosService, $ionicModal, $scope) {
            /*jshint validthis: true */
            var vm = this;
            vm.title = "FILHOS";
            vm.alunosList = alunosService.getList();
            vm.avatarsList = alunosService.getAvatars();
            
            /* INICIO MODAL */
            $ionicModal.fromTemplateUrl('add-aluno-modal.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                vm.modal = modal;
            })
            
            vm.openModal = function() {
                vm.modal.show()
            }

            vm.closeModal = function() {
                vm.modal.hide();
            };

            $scope.$on('$destroy', function() {
                vm.modal.remove();
            });
            /* FIM MODAL */
            
            vm.selectedAvatar = 1;
            vm.selectAvatar = function (index) {
                vm.selectedAvatar = index;
            }
            
            return vm;
	}

})();
