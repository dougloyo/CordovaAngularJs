angular.module("app.directives")
    .directive("editButton", function () {
        return {
            restrict: "E",
            template: require("./editButton.view.html"),
            scope: {
                url: "@"
                // use the =?, @? to denote the property as optional
            }
        };
    });