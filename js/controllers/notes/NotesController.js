app.controller('NotesController',['$scope','authenticationService','$location','$kinvey',function ($scope,authenticationService,$location,$kinvey) {
    // if(authenticationService.isLogged() === false){
    //     $location.path('/');
    // }
    authenticationService.isLogged()
}]);