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
            .state('index', {
                url: '/',
                templateUrl: 'modules/index/index.html',
                controller: 'IndexCtrl as vm',
                controllerAs: 'vm' //por enquanto isso nao funciona 
                    
            });
            
        $urlRouterProvider.otherwise('/');
    }]);
