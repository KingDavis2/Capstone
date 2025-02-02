﻿(function () {
    'use strict';

    var app = angular.module('app', [
        'ngAnimate',
        'ngSanitize',

        'ui.router',
        'ui.bootstrap',
        'ui.jq',

        'abp'
    ]);

    //Configuration for Angular UI routing.
    app.config([
        '$stateProvider', '$urlRouterProvider', '$locationProvider', '$qProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider, $qProvider) {
            $locationProvider.hashPrefix('');
            $urlRouterProvider.otherwise('/');
            $qProvider.errorOnUnhandledRejections(false);

            /*
            if (abp.auth.hasPermission('Pages.Users')) {
                $stateProvider
                    .state('users', {
                        url: '/users',
                        templateUrl: '/App/Main/views/users/index.cshtml',
                        menu: 'Users' //Matches to name of 'Users' menu in SAIC_FTSNavigationProvider
                    });
                $urlRouterProvider.otherwise('/users');
            }

            if (abp.auth.hasPermission('Pages.Roles')) {
                $stateProvider
                    .state('roles', {
                        url: '/roles',
                        templateUrl: '/App/Main/views/roles/index.cshtml',
                        menu: 'Roles' //Matches to name of 'Tenants' menu in SAIC_FTSNavigationProvider
                    });
                $urlRouterProvider.otherwise('/roles');
            }

            if (abp.auth.hasPermission('Pages.Tenants')) {
                $stateProvider
                    .state('tenants', {
                        url: '/tenants',
                        templateUrl: '/App/Main/views/tenants/index.cshtml',
                        menu: 'Tenants' //Matches to name of 'Tenants' menu in SAIC_FTSNavigationProvider
                    });
                $urlRouterProvider.otherwise('/tenants');
            }
            */

            $stateProvider
                .state('search', {
                    url: '/search',
                    templateUrl: '/App/Main/views/search/search.cshtml',
                    menu: 'Search' //Matches to name of 'Search' menu in SAIC_FTSNavigationProvider
                })
                .state('data', {
                    url: '/data',
                    templateUrl: '/App/Main/views/data/data.cshtml',
                    menu: 'Data' //Matches to name of 'Search' menu in SAIC_FTSNavigationProvider
                })
                .state('help', {
                    url: '/help',
                    templateUrl: '/App/Main/views/help/help.cshtml',
                    menu: 'Help' //Matches to name of 'Search' menu in SAIC_FTSNavigationProvider
                });
                /*.state('test', {
                    url: '/test',
                    templateUrl: '/App/Main/views/test/test.cshtml',
                    menu: 'Test'
                });

                
                .state('home', {
                url: '/',
                templateUrl: '/App/Main/views/home/home.cshtml',
                menu: 'Home' //Matches to name of 'Home' menu in SAIC_FTSNavigationProvider
                })
                .state('about', {
                    url: '/about',
                    templateUrl: '/App/Main/views/about/about.cshtml',
                    menu: 'About' //Matches to name of 'About' menu in SAIC_FTSNavigationProvider
                });
                */
        }
    ]);

})();