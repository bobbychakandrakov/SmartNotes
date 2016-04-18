var initialized = false;
var app = angular.module('SmartNotes', ['ngRoute','kinvey']);
app.config(function ($routeProvider,$locationProvider) {
    $routeProvider.when('/',{
        templateUrl:"templates/authentication/login.html",
        controller:"LoginController"
    })
    .when('/register',{
        templateUrl:"templates/authentication/register.html",
        controller:"RegisterController"
     })
    .otherwise({redirectTo:'/'});
});
app.constant('kinveyConfig', {
    appKey: 'kid_Z1INyxNjk-',
    appSecret: 'f6a1b9d6936348bca23ac0082375fecd'
});
app.run(['$kinvey', '$rootScope', '$location', 'kinveyConfig', function($kinvey, $rootScope, $location, kinveyConfig) {
    $rootScope.$on('$locationChangeStart', function(event, newUrl) {
        if (!initialized) {
            event.preventDefault(); // Stop the location change
            // Initialize Kinvey
            $kinvey.init(kinveyConfig).then(function() {
                initialized = true;
                $location.path($location.url(newUrl).hash); // Go to the page
            }, function(err) {

            });
        }
    });
}]);