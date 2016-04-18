app.controller('RegisterController',['$scope',function ($scope) {
    $scope.user = {};
    $scope.register = function () {
        console.log($scope.user);
    }
}]);