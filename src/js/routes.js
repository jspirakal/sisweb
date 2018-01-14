'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/404');
        // $urlRouterProvider.when('/',{
            // url:'/user/home',
        // });
        // Application routes
        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'templates/login.html',
                controller:'LoginCtrl'
            })
            .state('user.home', {
                url: '/home',
                templateUrl: 'templates/dashboard.html'
            })
            .state('user', {
                url: '/user',
                templateUrl: 'templates/user/user.html'
            })
            .state('user.profile', {
                url: '/profile',
                templateUrl: 'templates/user/profile.html',
                controller:'Profile'
                
            })
            .state('user.applications', {
                url: '/applications',
                templateUrl: 'templates/user/applications.html',
                controller:'Application'
            })
            .state('user.timetable', {
                url: '/user',
                templateUrl: 'templates/user/user.html'
            })
            .state('tables', {
                url: '/tables',
                templateUrl: 'templates/tables.html'
            })
            .state('testing', {
                url: '/test',
                templateUrl: 'templates/testing.html'
            })
            .state('testing.do', {
                url: '/teste',
                template: 'helo'
            });
    }
]);