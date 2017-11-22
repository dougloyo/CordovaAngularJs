angular.module("app.directives")
    .directive("addButton", function () {
        return {
            restrict: "E",
            template: require("./addButton.view.html"),
            scope: {
                url: "@"
                // use the =?, @? to denote the property as optional
            }
        };
    });