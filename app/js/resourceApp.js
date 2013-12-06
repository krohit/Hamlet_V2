angular.module("resourceApp", []);

function MainCtrl ($scope) {
    $scope.characters =
    [
        {name: "Hamlet",   desc: "Main Character"},
        {name: "Claudius", desc: "King of Denmark and uncle of Hamlet"},
        {name: "Polonius", desc: "Advisor to King"},
        {name: "Ophelia",  desc: "daughter of Polonius"},
        {name: "Laertes",  desc: "Son of Polonius"},
        {name: "Horatio",  desc: "Friend of Hamlet"},
        {name: "Gertrude", desc: "Hamlet's mother and wife of Claudius"},
        {name: "Ghost",    desc: "The Ghost of Hamlet Sr."},
        {name: "Fortinbras", desc: " Norwegian crown prince, who assumes the throne of Denmark after Hamlet's death"},
        {name: "Rosencrantz and Guildenstern", desc: "hildhood friends and schoolmates of Hamlet, who were summoned to Elsinore by Claudius and Gertrude"}
    ]
}