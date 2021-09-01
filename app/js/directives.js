'use strict';

eventsApp.directive('mySample', function ($compile) {
    return {
        restrict: 'E',
        template:  '<input type="text" ng-model="sampleData">{{ sampleData }}<br>',
/*
        link: function(scope, element, attributes, controller) {
            const markup = '<input type="text" ng-model="sampleData">{{ sampleData }}<br>';
            angular.element(element).html($compile(markup)(scope));
        },
*/
    };
});
