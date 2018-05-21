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
            .state('user.news', {
                url: '/news',
                templateUrl: 'templates/user/news.html',
                controller:'News'
            })
            .state('user.timetable', {
                url: '/timetable',
                templateUrl: 'templates/user/timetable.html',
                controller:'Time'
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
            .state('admin.timetable', {
                url: '/timetable',
                templateUrl: 'templates/admin/timetable.html',
                controller:'Time'
            })
            .state('admin.news', {
                url: '/news',
                templateUrl: 'templates/admin/news.html',
                controller:'News'
            })
            .state('controller', {
                url: '/controller',
                templateUrl: 'templates/controller/controller.html',
                controller:'controller'                                
            })
             .state('controller.applications', {
                url: '/applications',
                templateUrl: 'templates/controller/applications.html',
                controller:'controller'                
            })
            .state('hod', {
                url: '/hod',
                templateUrl: 'templates/hod/hod.html',
                controller:'hod'
            })
             .state('hod.applications', {
                url: '/applications',
                templateUrl: 'templates/hod/applications.html',
                controller:'hod'                
            })
    }
]);