'use strict';

let modules = ['ngResource', 'ngRoute'];

var eventsApp = angular.module('eventsApp', modules)
    .config(function($routeProvider) {
        $routeProvider.when('/newEvent', {
            templateUrl: 'templates/NewEvent.html',
            controller: 'EditEventController'
        });
    });
