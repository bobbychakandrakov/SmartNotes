var app = angular.module('SmartNotes', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider.when('/',{

    })
    .otherwise({redirectTo:'/'});
});
