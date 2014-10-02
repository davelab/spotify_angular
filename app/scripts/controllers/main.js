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
      var sanitizeArtist = $scope.artist.split(' ').join('+');
      $scope.searchedArtist = $scope.artist;

      spotifyService.search(sanitizeArtist, 'album', options).then(function(data) {
          $scope.albums = data.albums;
      });
    };
  });
