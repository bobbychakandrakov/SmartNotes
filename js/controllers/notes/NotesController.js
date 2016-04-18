app.controller('NotesController',['$scope','authenticationService','$location',function ($scope,authenticationService,$location) {
    if(authenticationService.isLogged() === false){
        $location.path('/');
    }
}]);