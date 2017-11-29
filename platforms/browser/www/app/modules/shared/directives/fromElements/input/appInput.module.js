angular.module("app.directives")
    .directive("appInput", function () {
        return {
            restrict: "E",
            require: ['^form'],
            template: require("./appInput.view.html"),
            scope: {
                model: "=",
                label: "@",                
                // use the ? to denote the property as optional
                placeholderText: "@?",
                required: "@?",
                maxlength: "@?"
            },
            controllerAs: "ctrl",
            controller: ["$scope", function ($scope) {
                var ctrl = this;

                $scope.uniqueControlId = $scope.label.replace(' ', '_');

                // check if it was defined.  If not - set defaults
                $scope.required = angular.isDefined($scope.required) ? $scope.required : false;
                $scope.maxlength = angular.isDefined($scope.maxlength) ? $scope.maxlength : 255;
                $scope.placeholderText = angular.isDefined($scope.placeholderText) ? $scope.placeholderText : $scope.label;
            }],
            link: function (scope, element, attrs, ctrls) {
                scope.form = ctrls[0];
            }

        };
    });