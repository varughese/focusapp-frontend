angular.module('focusapp')

.factory("Goal", ["$http", "$rootScope", function($http, $rootScope){
    var apiUrl = 'http://54.70.51.182:3000/api/goals/';

    var e = {};

    e.all = function() {
        return $http.get(apiUrl)
            .then(function(repsonse) {
                return repsonse.data;
            });
    };

    e.create = function(eventData) {
        return $http.post(apiUrl, eventData);
    };

    e.get = function(eventID) {
        return $http.get(apiUrl + eventID)
            .then(function(response) {
                return response.data;
            });
    };

    e.update = function(eventID, eventData) {
        return $http.put(apiUrl + eventID, eventData);
    };

    e.delete = function(eventID) {
        return $http.delete(apiUrl + eventID);
    };

    return e;


}])
;
