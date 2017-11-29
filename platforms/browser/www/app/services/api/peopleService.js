angular.module("app.api")
.service("peopleService", ["$http","config", function ($http, config) {
    
    var resourceUrl = config.api.baseURL + "people"; //"api/students";

    // Services should return the promise rather than the data. This is the asynchronous way.
    return {
        getAll: function () {
            return $http.get(resourceUrl).then(function (response) { return response.data; });
        },
        get: function (id) {
            return $http.get(resourceUrl + "/" + id).then(function (response) { return response.data; });
        },
        add: function (model) {
            return $http.post(resourceUrl, model).then(function (response) { return response.data; });
        },
        update: function (model) {
            return $http.put(resourceUrl + "/" + model.Id, model).then(function (response) { return response.data; });
        },
        delete: function (model) {
            return $http.delete(resourceUrl + "/" + model.Id).then(function (response) { return response.data; });
        }
    }
}]);