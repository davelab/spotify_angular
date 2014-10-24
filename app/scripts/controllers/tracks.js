'use strict';

/**
 * @ngdoc function
 * @name spotifyAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the spotifyAngularApp
 */
angular.module('spotifyAngularApp')
    .controller('TracksCtrl', function ($scope, $stateParams, spotifyService, lodash) {

        var album = lodash.find($scope.albums.items, {id: $stateParams.id});

        spotifyService.albumTracks($stateParams.id).then(function(data){
            album.tracks = data.items;
        });
    });
