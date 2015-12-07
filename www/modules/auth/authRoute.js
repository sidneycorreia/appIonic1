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
            .state('auth_login', {
                url: '/auth/login',
                templateUrl: 'modules/auth/login.html',
                controller: 'LoginCtrl as vm',
                controllerAs: 'vm' //por enquanto isso nao funciona 
                    
            })
            .state('auth_register', {
                url: '/auth/register',
                templateUrl: 'modules/auth/register.html',
                controller: 'RegisterCtrl as vm',
                controllerAs: 'vm' //por enquanto isso nao funciona 
                    
            });
            
    }]);
