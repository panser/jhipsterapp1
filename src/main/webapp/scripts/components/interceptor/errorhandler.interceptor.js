'use strict';

angular.module('jhipsterapp1App')
    .factory('errorHandlerInterceptor', function ($q, $rootScope) {
        return {
            'responseError': function (response) {
                if (!(response.status == 401 && response.data.path.indexOf("/api/account") == 0 )){
	                $rootScope.$emit('jhipsterapp1App.httpError', response);
	            }
                return $q.reject(response);
            }
        };
    });