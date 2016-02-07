'use strict';

angular.module('jhipsterapp1App')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


