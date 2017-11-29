angular.module("app.directives")
    .directive("deleteButton", function () {
        return {
            restrict: "E",
            template: require("./deleteButton.view.html"),
            scope: {
                confirmAction: "&"
                // use the =?, @? to denote the property as optional
            }
        };
    });