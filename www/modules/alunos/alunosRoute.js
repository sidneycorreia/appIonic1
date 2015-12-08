'use strict';

/**
 * @ngdoc function
 * @name app.route:HomeRoute
 * @description
 * # HomeRoute
 * Route of the app
 */

angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('alunos_lista', {
                url: '/alunos/lista',
                templateUrl: 'modules/alunos/lista.html',
                controller: 'AlunosListaCtrl as vm',
                controllerAs: 'vm' //por enquanto isso nao funciona 
                    
            });
            
        $urlRouterProvider.otherwise('/');
    }]);
