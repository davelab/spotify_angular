'use strict';

/**
 * @ngdoc function
 * @name spotifyAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the spotifyAngularApp
 */
angular.module('spotifyAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
