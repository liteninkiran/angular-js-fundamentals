'use strict';

eventsApp.controller('EventController', function EventController($scope) {

    $scope.snippet = '<span style="color:red;">Hi There</span>';
    $scope.boolValue = false;
    $scope.mystyle = { color: 'red' };
    $scope.myclass = 'title-color';
    $scope.buttonDisabled = false;
    $scope.buttonText = 'Click to Disable Me';
    $scope.event = {
        name: 'Angular Boot Camp',
        date: '01/01/2013',
        time: '10:30 AM',
        location: {
            address: 'Google Headquarters',
            city: 'Mountain View',
            province: 'CA',
        },
        imageUrl: '/img/angularjs-logo.png',
        sessions: [
            {
                name: 'Directives Masterclass',
                creatorName: 'Bob Smith',
                duration: '1 hour',
                level: 'Advanced',
                abstract: 'In this session, you will learn the ins and outs of directives.',
                upVoteCount: 0,
            },
            {
                name: 'Scopes for Fun & Profit',
                creatorName: "John Doe",
                duration: '30 mins',
                level: "Introductory",
                abstract: "This session will take a closer look at scopes.  Learn what they do, how they do it, and how to get them to do it for you.",
                upVoteCount: 0,
            },
            {
                name: 'Well Behaved Controllers',
                creatorName: "Jane Doe",
                duration: '2 hours',
                level: "Intermediate",
                abstract: "Controllers are the beginning of everything Angular does.  Learn how to craft controllers that will win the respect of your friends and neighbors.",
                upVoteCount: 0,
            },
        ],
    };

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    };


    $scope.downVoteSession = function(session) {
        session.upVoteCount--;
    };

    $scope.buttonClick = function() {
        $scope.buttonDisabled = !$scope.buttonDisabled;
        $scope.buttonText = $scope.buttonDisabled ? 'Aw, you disabled me :(' : 'Click to Disable Me';
    };

});

