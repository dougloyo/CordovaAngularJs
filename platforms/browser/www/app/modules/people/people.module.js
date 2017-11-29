require('./people.style.scss')

angular.module("app.people", [])
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/people",
            {
                controller: "peopleController",
                controllerAs: "ctrl",
                template: require("./people.view.html")
            });
    }])
    .controller("peopleController", ["api", function (api) {

        var ctrl = this;

        ctrl.model = {};

        // Go get data
        var getPeople = function () {
            api.people.getAll().then(function (data) {
                ctrl.model.people = data;
            });
        };

        getPeople();

        ctrl.delete = function (person) {
            console.log(person);

            // TODO: Show a spinner while the delete executes...
            api.people.delete(person).then(
                // Success
                function () {
                    // TODO: add a toaster message
                    //services.logger.success('Successfully deleted project');

                    // Reload the data...
                    getPeople();
                },
                // Error
                function (error) {
                    //services.logger.error('Error deleting project.', error);
                });
        };

    }]);