app.controller('LoginController',['$scope','authenticationService','$location',function ($scope,authenticationService,$location) {
    if(authenticationService.isLogged()){
        $location.path('/notes');
    }
    $scope.user = {};
    $scope.login = function () {
        authenticationService.login($scope.user.username, $scope.user.password).then(function () {
            console.log("Logged in!");
            $location.path('/notes');
        },function (err) {
            console.log(err);
        });
    };
}]);