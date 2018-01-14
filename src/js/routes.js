'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');
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
                templateUrl: 'templates/user/dashboard.html'
            })
            .state('user', {
                url: '/user',
                templateUrl: 'templates/user/user.html'
            })
            .state('user.profile', {
                url: '/profile',
                templateUrl: 'templates/user/profile.html',
                controller:'Student'
                
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
           
            .state('admin', {
                url: '/admin',
                templateUrl: 'templates/admin/admin.html'
            })
             .state('admin.home', {
                url: '/home',
                templateUrl: 'templates/admin/home.html'
            })
             .state('admin.students', {
                url: '/students',
                templateUrl: 'templates/admin/students.html',
                controller:'Student',
                                
            })
             .state('admin.applications', {
                url: '/applications',
                templateUrl: 'templates/admin/applications.html',
                controller:'AdminApp'
            })
    }
]);