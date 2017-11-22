//require('./sample.style.scss')

angular.module("app.samples", [])
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/samples",
            {
                controller: "samplesController",
                controllerAs: "ctrl",
                template: require("./samples.view.html")
            });
    }])
    .controller("samplesController", ["$scope", function($scope) {

        var ctrl = this;

        ctrl.model = {};

        ctrl.model.x = "Samples";

        // For the bindings example
        ctrl.model.binding = "Douglas";
        ctrl.bindingMethod = function() {
            alert("Parent method called");
        };

        ctrl.someFunction = function () {
            // Do something..
        };

    }]);