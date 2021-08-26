'use strict';

let resources = ['ngResource'];
// let resources = ['ngResource', 'ngCookies'];

var eventsApp = angular.module('eventsApp', resources)
    .factory('myCache', function($cacheFactory) {
        return $cacheFactory('myCache', { capacity: 3 });
    });
