'use strict';

let modules = ['ngResource', 'ngRoute'];

var eventsApp = angular.module('eventsApp', modules)
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/newEvent', {
            templateUrl: 'templates/NewEvent.html',
            controller: 'EditEventController',
        });

        $routeProvider.when('/events', {
            templateUrl: 'templates/EventList.html',
            controller: 'EventListController',
        });

        $routeProvider.when('/event/:eventId', {
            foo: 'bar',
            templateUrl: 'templates/EventDetails.html',
            controller: 'EventController',
            resolve: {
                event: function($route, eventData) {
                    return eventData.getEvent($route.current.pathParams.eventId).$promise;
                },
            },
        });

        $routeProvider.when('/sampleDirective', {
            templateUrl: 'templates/SampleDirective.html',
            controller: 'SampleDirectiveController',
        });

        $routeProvider.otherwise({ redirectTo: '/events' });

        $locationProvider.html5Mode(true);
    });
