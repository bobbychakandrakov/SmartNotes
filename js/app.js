var app = angular.module('SmartNotes', ['ngRoute']);
app.config(function ($routeProvider) {
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
