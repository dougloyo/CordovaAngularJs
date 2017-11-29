angular.module("app.api", [])
.service("api", ["peopleService", function (peopleService) {
    return {
        people: peopleService
    };
}]);