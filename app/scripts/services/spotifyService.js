'use strict';

angular.module('spotifyAngularApp')
    .factory('spotifyService',  ['$http', '$q', 'API', function($http, $q, API){

        var service = {},
            baseURL = API.baseURL;

        var api = function(endpoint, method, params) {
            var deferred = $q.defer();

            $http({
                url: baseURL + endpoint,
                method: method || 'GET',
                params: params
            })
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function(data) {
                deferred.reject(data);
            });

            return deferred.promise;
        };

        service.search = function(q, types, options) {
        var params = options || {};
            params.q = q;
            params.type = types;

        return api('/search', 'GET', params);
        };

        service.albumTracks = function(albumId, options) {
        var params = options || {},
            id = albumId;

        return api('/albums/' + id + '/tracks', 'GET', params);
        };

        return service;

    }]);
