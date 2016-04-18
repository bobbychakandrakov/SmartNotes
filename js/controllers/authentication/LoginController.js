app.controller('LoginController',['$scope','authenticationService','$kinvey',function ($scope,authenticationService,$kinvey) {
    $scope.user = {};
    $scope.login = function () {
        authenticationService.login($scope.user.username, $scope.user.password).then(function () {
            console.log("bravo");
        },function (err) {
            console.log(err);
        });
    };
    $scope.logout = function () {
        var promise = $kinvey.User.logout();
        promise.then(function() {
            console.log("logged out");
        }, function(err) {
            console.log(err);

        });
    };
}]);