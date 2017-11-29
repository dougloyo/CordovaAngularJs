require('./home.style.scss')

angular.module("app.home", [])
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/home",
            {
                controller: "homeController",
                controllerAs: "ctrl",
                template: require("./home.view.html")
            });
    }])
    .controller("homeController", ["$scope", function($scope) {

        var ctrl = this;

        ctrl.x = "Hello World";

        ctrl.someFunction = function () {
            // Do something..
        };

    }]);