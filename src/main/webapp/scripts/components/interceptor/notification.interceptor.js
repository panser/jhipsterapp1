 'use strict';

angular.module('jhipsterapp1App')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-jhipsterapp1App-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-jhipsterapp1App-params')});
                }
                return response;
            }
        };
    });
