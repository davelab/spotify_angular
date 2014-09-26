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
      var sanitize_artist = $scope.artist.split(' ').join('+');
      $scope.searched_artist = $scope.artist;

      spotifyService.search(sanitize_artist, 'album', options).then(function(data) {
          $scope.albums = data.albums;
      });
    }

  });
