angular.module("app", [
    // Vendor dependencies
    "ngRoute",

    // App config
    "app.config",

    // Services and Api
    "app.api",
    "app.services",

    // Directives
    "app.directives",

    // Application modules
    //"app.samples",
    "app.login"
    //"app.home",
    //"app.people"
])
.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
$routeProvider
    .when('/',
    {
        controller: 'loginController',
        controllerAs: 'vm',
        templateUrl: 'app/modules/login/login.view.html'
    })
    .otherwise({ redirectTo: '/' });

    // As of angularJs 1.6 the prefix changed from #/ to #!/
    // If you want to continue using just the # use the line below.
    $locationProvider.hashPrefix('');

    // use the HTML5 History API (This removes both #/ and #!/
    //$locationProvider.html5Mode(true);
}]); 