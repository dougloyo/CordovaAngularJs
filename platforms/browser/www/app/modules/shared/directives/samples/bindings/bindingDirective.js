angular.module("app.directives")
    .directive('bindingSampleDirective', [function () {
        return {
            restrict: 'E',
            template: require("./bindingSample.view.html"),
            scope: {
                model: '=',
                text: '@',
                method: '&'
            },
            controllerAs:'ctrl',
            controller: ['$scope', function ($scope) {
                var ctrl = this;

                ctrl.model = {};

                ctrl.model.x = "here";
            }],
            
        };
    }]);