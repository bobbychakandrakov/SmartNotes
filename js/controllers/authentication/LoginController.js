app.controller('LoginController',['$scope',function ($scope) {
    $scope.user = {};
    $scope.login = function () {
        console.log($scope.user);
    }
}]);