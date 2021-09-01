'use strict';

eventsApp.controller('EventController', function EventController($scope, eventData, $anchorScroll, $routeParams, $route) {

    $scope.sortOrder = '-upVoteCount';
    $scope.event = $route.current.locals.event;
    $scope.reload = function() {
        $route.reload();
    };

    // alert($route.current.foo);        // From route definition
    // alert($route.current.params.bar); // From URL parameters

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
        session.upVoteCount--;
    };

    $scope.scrollToSession = function() {
        $anchorScroll();
    };

});
