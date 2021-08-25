'use strict';

eventsApp.controller('LocaleSampleController', function LocaleSampleController($scope, $locale) {

    $scope.myDate = Date.now();
    $scope.shortDate = $locale.DATETIME_FORMATS.shortDate;
    $scope.longDate = $locale.DATETIME_FORMATS.fullDate;

});
