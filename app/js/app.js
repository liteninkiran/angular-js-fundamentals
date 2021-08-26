'use strict';

let modules = ['ngResource', 'ngRoute'];

var eventsApp = angular.module('eventsApp', modules)
    .config(function($routeProvider) {
        $routeProvider.when('/newEvent', {
            templateUrl: 'templates/NewEvent.html',
            controller: 'EditEventController',
        });

        $routeProvider.when('/events', {
            templateUrl: 'templates/EventList.html',
            controller: 'EventListController',
        });

        $routeProvider.when('/event/:eventId', {
            templateUrl: 'templates/EventDetails.html',
            controller: 'EventController',
        });
    });
