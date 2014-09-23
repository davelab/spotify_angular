'use strict';

/**
 * @ngdoc function
 * @name spotifyAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spotifyAngularApp
 */
angular.module('spotifyAngularApp')
  .controller('MainCtrl', function ($scope, spotifyService) {
    var options = {
      'limit': 10
    };
    spotifyService.search('mannarino', 'album', options).then(function(data) {
        $scope.albums = data.albums.items;
    });
  });
