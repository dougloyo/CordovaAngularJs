require('./savebutton.style.scss')

angular.module("app.directives")
    .directive("saveButton", function () {
        return {
            restrict: "E",
            require: ['^form'],
            template: require("./saveButton.view.html"),
            scope: {
                saveAction: "&"
                // use the =?, @? to denote the property as optional
            },
            controllerAs: "ctrl",
            controller: ["$scope", function ($scope) {
                var ctrl = this;

                // check if it was defined.  If not - set defaults
                $scope.loading = angular.isDefined($scope.loading) ? $scope.loading : false;
            }],
            link: function (scope, element, attrs, ctrls) {
                scope.form = ctrls[0];
            }

        };
    });