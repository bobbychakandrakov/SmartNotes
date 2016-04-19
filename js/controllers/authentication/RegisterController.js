app.controller('RegisterController',['$scope','authenticationService','$location',function ($scope,authenticationService,$location) {
    if(authenticationService.isLogged()){
        $location.path('/notes');
    }
    $scope.user = {};
    $scope.register = function () {
        authenticationService.register($scope.user.username, $scope.user.password).then(function () {
            console.log("registered!");
            $location.path('/notes');
        },function (err) {
            console.log(err);
        });
    }
}]);