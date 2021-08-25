'use strict';

eventsApp.controller('TimeoutSampleController', function TimeoutSampleController($scope, $timeout) {

    var promise = $timeout(function() {
        $scope.name = 'Kiran Anand';
    }, 1000);

    $scope.cancel = function() {
        $timeout.cancel(promise);
        $scope.name = 'Cancelled';
    };

});
