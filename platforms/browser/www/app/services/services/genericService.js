angular.module("app.services")
    .service('genericService', ["$rootScope", "$timeout", "$q", "loggerService", function ($rootScope, $timeout, $q, loggerService) {
    return {
        save: function (modelToPersist, service, form) {

            // return a promise so that we can do things with it if needed...
            return $q(function (resolve, reject) {

                $rootScope.saving = true;

                // EDIT?
                if (modelToPersist.Id > 0) {
                    service.update(modelToPersist).then(
                    // Success
                    function (data) {
                        $rootScope.success = true;
                        $rootScope.saving = false; // Done saving.
                        //onSaveCallback(data);
                        // Remove the bootstrap alert.
                        $timeout(function () { $rootScope.success = false; }, 2000);
                        form.$setPristine();
                        loggerService.success("We have saved your changes successfully!");
                        // return promise
                        resolve(data);
                    },
                    // Error
                    function (error) {
                        alert(JSON.stringify(error));
                        $rootScope.error = true;
                        $rootScope.saving = false; // Done saving.
                        //onSaveErrorCallback(error);
                        // Remove the bootstrap alert.
                        $timeout(function () { $rootScope.error = false; }, 5000);
                        loggerService.error("Something went wrong.", error);
                        // return promise
                        reject(error);
                    });
                }
                    // INSERT
                else {
                    service.add(modelToPersist).then(
                    // Success
                    function (data) {
                        $rootScope.success = true;
                        $rootScope.saving = false; // Done saving.
                        // Remove the bootstrap alert.
                        $timeout(function () { $rootScope.success = false; }, 2000);
                        form.$setPristine();
                        loggerService.success("We have saved successfully!");
                        // return promise
                        resolve(data);
                    },
                    // Error
                    function (error) {
                        alert(JSON.stringify(error));
                        $rootScope.error = true;
                        $rootScope.saving = false; // Done saving.
                        // Remove the bootstrap alert.
                        $timeout(function () { $rootScope.error = false; }, 5000);
                        loggerService.error("Something went wrong.", error);
                        // return promise
                        reject(error);
                    });
                }
            });

        }
    }
}]);