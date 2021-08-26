'use strict';

eventsApp.controller('CookieStoreSampleController', function CookieStoreSampleController($scope, $cookieStore) {

    $scope.event = { id: 1, name: 'My Event' };

    $scope.saveEventToCookie = function(event) {
        $cookieStore.put('event', event);
    };

    $scope.getEventFromCookie = function() {
        console.log($cookieStore.get('event'));
        alert('Check the console');
    };
    
    $scope.removeEventCookie = function() {
        $cookieStore.remove('event');
    };

});
