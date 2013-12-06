angular.module("hamlet", []);

function MainCtrl ($scope) {
    $scope.characters = [
        {name: "Hamlet", desc: "Main Character"},
        {name: "Claudius", desc: "New King of Denmark"},
        {name: "Polonius", desc: "Advisor to King"}
    ];
}