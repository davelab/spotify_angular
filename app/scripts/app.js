'use strict';

/**
 * @ngdoc overview
 * @name spotifyAngularApp
 * @description
 * # spotifyAngularApp
 *
 * Main module of the application.
 */
angular
    .module('spotifyAngularApp', [
        'ngAnimate',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ui.utils',
        'ui.router',
        'ngLodash'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('albums', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .state('albums.tracks', {
                url: ':id/tracks',
                controller: 'TracksCtrl',
                templateUrl: 'views/tracks.html',
            });

    })
    .constant('API', (function() {
        var baseURL = 'https://api.spotify.com/',
            v       = 'v1';
        return {
            baseURL : baseURL + v
        };
    })());
