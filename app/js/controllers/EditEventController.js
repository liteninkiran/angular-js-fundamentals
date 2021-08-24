'use strict';

eventsApp.controller('EditEventController', function EditEventController($scope) {

    $scope.saveEvent = function(event) {
        window.alert('Name: ' + event.name);
    };

    $scope.cancelEdit = function() {
        window.location = '/EventDetails.html';
    };

});
