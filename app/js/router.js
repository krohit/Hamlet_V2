/**
 * Created by adrian on 11/30/13.
 */

var app = angular.module("app", ["ngRoute"]).config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl:"../index.html",
        controller: "MainController"
    });
    $routeProvider.otherwise({redirectTo: "../index.html"});
});

app.controller("MainController", function($scope) {
    $scope.things = [
        "hello world",
        "this is a test",
        "foobar"
    ];
});
