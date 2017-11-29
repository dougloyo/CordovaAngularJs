require('./people.style.scss');

angular.module("app.people")
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/people/add",
            {
                controller: "peopleFormController",
                controllerAs: "ctrl",
                template: require("./peopleForm.view.html")
            })
            .when("/people/:id/edit",
            {
                controller: "peopleFormController",
                controllerAs: "ctrl",
                template: require("./peopleForm.view.html")
            });
    }])
    .controller("peopleFormController", ["api", "services", "$routeParams", "$scope", "$rootScope", "$location", function (api, services, $routeParams, $scope, $rootScope, $location) {

        var ctrl = this;

        ctrl.model = {};
        ctrl.formAvailableOptions = { GenderOptions : [] };

        var id = $routeParams.id;

        id ? ctrl.model.title = "Edit" : ctrl.model.title = "Add";

        // Get options for form controls
        // TODO: Create endpoint to get these kind values...
        ctrl.formAvailableOptions.GenderOptions = [{ Id: 1, Name: "Male" }, { Id: 2, Name: "Female" }];

        // Go get entity by id.
        if (id) {
            api.people.get(id).then(function (data) {
                ctrl.model = data;
                ctrl.model.DateOfBirth = new Date(ctrl.model.DateOfBirth);
                ctrl.model.GenderAtBirthSelected = ctrl.formAvailableOptions.GenderOptions[ctrl.model.GenderAtBirth - 1];
            });
        }

        ctrl.save = function (person) {

            if (!$scope.form.$valid) {
                services.logger.error('Error updating', $scope.form.$error);
                return;
            }

            // Copy so that we dont affect the view model.
            var modelToPersist = angular.copy(person);

            // Cleanup model before saving...
            modelToPersist.GenderAtBirth = modelToPersist.GenderAtBirthSelected.Id;

            services.generic.save(modelToPersist, api.people, $scope.form).then(function (data) {
                $location.path("/people/" + (data.Id || id)  + "/edit");
            });
        }
    }]);