angular.module("app.services", [])
.service("services", ["loggerService", "genericService", function (loggerService, genericService) {
    return {
        logger: loggerService,
        generic: genericService
    };
}]);