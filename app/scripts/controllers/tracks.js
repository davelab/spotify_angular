'use strict';

/**
 * @ngdoc function
 * @name spotifyAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the spotifyAngularApp
 */
angular.module('spotifyAngularApp')
  .controller('TracksCtrl', function ($scope, $stateParams, spotifyService) {
        console.log($stateParams);
        spotifyService.albumTracks($stateParams.id).then(function(data){
            $scope.tracks = data.items;
          });
  });
