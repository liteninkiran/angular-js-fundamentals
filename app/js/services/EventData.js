eventsApp.factory('eventData', function($http, $log) {
    return {
        getEvent: function(successCb) {
            $http({ method: 'GET', url: 'data/event/1' }).
            success(function(data, status, headers, config) {
                successCb(data);
            }).
            error(function(data, status, headers, config) {
                $log.warning(data, status, headers, config);
            });
        }
    }
});
