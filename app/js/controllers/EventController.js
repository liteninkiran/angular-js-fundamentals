'use strict';

eventsApp.controller('EventController', function EventController($scope) {
    $scope.event = {
        name: 'Angular Boot Camp',
        date: '01/01/2013',
        time: '10:30 AM',
        location: {
            address: 'Google Headquarters',
            city: 'Mountain View',
            province: 'CA',
        },
        imageUrl: '/img/angularjs-logo.png',
    };
});

