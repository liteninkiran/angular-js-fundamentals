'use strict';

eventsApp.controller('EventController', function EventController($scope, eventData) {

    $scope.sortOrder = '-upVoteCount';
    $scope.event = eventData.event;

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    };


    $scope.downVoteSession = function(session) {
        session.upVoteCount--;
    };

    $scope.buttonClick = function() {
        $scope.buttonDisabled = !$scope.buttonDisabled;
        $scope.buttonText = $scope.buttonDisabled ? 'Aw, you disabled me :(' : 'Click to Disable Me';
    };

});
