'use strict';

eventsApp.directive('dateKeys', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs, controller) {
            element.on('keydown', function(event) {
                if (isNumericKeyCode(event.keyCode) || isForwardSlashKeyCode(event.keyCode) || isNavigationKeycode(event.keyCode)) {
                    return true;
                }
                return false;
            })
        }
    }

    function isNumericKeyCode(keyCode) {
        return (keyCode >= 48 && keyCode <=57)
            || (keyCode >= 96 && keyCode <= 105);
    }

    function isForwardSlashKeyCode(keyCode) {
        return keyCode === 191 || keyCode === 111;
    }

    function isNavigationKeycode(keyCode) {
        switch(keyCode) {
            case  8: // Backspace
            case 35: // End
            case 36: // Home
            case 37: // Left
            case 38: // Up
            case 39: // Right
            case 40: // Down
            case 45: // Ins
            case 46: // Del
                return true;
            default:
                return false;
        }
    }
});
