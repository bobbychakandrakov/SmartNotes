app.factory('authenticationService',['$q','$http','$kinvey',function ($q,$http,$kinvey) {
    return {
        login:function (username,password) {
            var deffered = $q.defer();
            var promise = $kinvey.User.login(username, password);
            promise.then(function(user) {
                deffered.resolve();
            }, function(err) {
                deffered.reject(err);
            });
            return deffered.promise;
        },
        register:function () {
            
        },
        logout:function () {
            
        }
    }
}]);