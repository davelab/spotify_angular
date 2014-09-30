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
    'ui.router'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('API', (function() {
    var baseURL = 'https://api.spotify.com/',
        v = 'v1';
    return {
        baseURL : baseURL + v
    };
  })());
