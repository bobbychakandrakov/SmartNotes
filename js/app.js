var app = angular.module('SmartNotes', ['ngRoute']);
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
