'use strict';

eventsApp.controller('MainMenuController', function MainMenuController($scope, $location) {

/*
    Exmaple URL: http://localhost:8000/newEvent?foo=bar&eventId=2#qux

    console.log('absUrl   : ', $location.absUrl()   );
    console.log('protocol : ', $location.protocol() );
    console.log('port     : ', $location.port()     );
    console.log('host     : ', $location.host()     );
    console.log('path     : ', $location.path()     );
    console.log('search   : ', $location.search()   );
    console.log('hash     : ', $location.hash()     );
    console.log('url      : ', $location.url()      );

    Output:

    absUrl   :  http://localhost:8000/newEvent?foo=bar&eventId=2#qux
    protocol :  http
    port     :  8000
    host     :  localhost
    path     :  /newEvent
    search   :  Object
    hash     :  qux
    url      :  /newEvent?foo=bar&eventId=2#qux
*/

    $scope.createEvent = function () {
        $location.replace(); //  Do not add to browser history
        $location.url('/newEvent');
    }

});
