angular
    .module('app.login', [])
    .controller('loginController', ['$location', function($location) {

            var ctrl = this;

            ctrl.testVariable = "Hello Doug";

            ctrl.login = function () {
                $location.path("/home");
            };
        }
    ]);
