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
	.controller('AlunosVerCtrl', Controller);

	Controller.$inject = ['alunosService', '$ionicModal','$scope', '$stateParams', '$ionicActionSheet'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Controller(alunosService, $ionicModal, $scope, $stateParams, $ionicActionSheet) {
            /*jshint validthis: true */
            var vm = this;
            
            vm.avatarsList = alunosService.getAvatars({pageLength: 4});
            vm.avatarColors = alunosService.getAvatarsColors({pageLength: 5}); 
            vm.aluno = alunosService.get({id: $stateParams.id});
            
            
//            vm.selectedAvatar = vm.aluno.avatar;
//            vm.selectAvatar = function (index) {
//                vm.selectedAvatar = index;
//            }
//            
//            vm.selectedColor = vm.aluno.avatar_bg;
//            vm.selectColor = function (color) {
//                vm.selectedColor = color;
//            }
            
            vm.showContextMenu = function () {
                $ionicActionSheet.show({
                    buttons: [
                      { text: 'Remover aluno' }
                    ],
//                    destructiveText: 'Delete',
                    titleText: 'O que deseja fazer?',
                    cancelText: 'Fechar',
                    buttonClicked: function(index) {
                        return true;
                    }
                });
            }
            
            return vm;
	}

})();
