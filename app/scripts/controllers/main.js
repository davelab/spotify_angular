'use strict';

/**
 * @ngdoc function
 * @name spotifyAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spotifyAngularApp
 */
angular.module('spotifyAngularApp')
  .controller('MainCtrl', function ($scope, spotifyService, _) {
    var options = {
      'limit': 10
    };
    spotifyService.search('mannarino', 'album', options).then(function(data) {
        var albums = ['bar della rabbia'];
        console.log(albums);
        console.log('::::::::::::::::::::::::::::::::::::::::::::::::::::::::');
        console.log(_.uniq(albums.name));

        //$scope.albums = _.uniq(data.albums.items);
    });
  });
