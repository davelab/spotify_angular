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

    $scope.searchAlbums= function () {
      var sanitized_artist = $scope.artist.split(' ').join('+');
      spotifyService.search(sanitized_artist, 'album', options).then(function(data) {
          $scope.albums = data.albums.items;
      });
    }

  });
