app.controller('LoginController',['$scope','$kinvey',function ($scope,$kinvey) {
    $scope.user = {};
    $scope.login = function () {
        var promise = $kinvey.User.login($scope.user.username, $scope.user.password);
        promise.then(function(user) {
            console.log("bravo");
        }, function(err) {
            console.log(err);
        });
    }
    $scope.logout = function () {
        var promise = $kinvey.User.logout();
        promise.then(function() {
            console.log("logged out");
        }, function(err) {
            console.log(err);

        });
    }
}]);