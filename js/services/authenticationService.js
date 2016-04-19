app.factory('authenticationService',['$q','$http','$kinvey','$location',function ($q,$http,$kinvey,$location) {
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
        register:function (username , password) {
            var deffered = $q.defer();
            var promise = $kinvey.User.signup({
                username : username,
                password : password
            });
            promise.then(function(user) {
                deffered.resolve(user);
            }, function(err) {
                deffered.reject(err);
            });
            return deffered.promise;
        },
        logout:function () {
            var deffered = $q.defer();
            var promise = $kinvey.User.logout();
            promise.then(function() {
                deffered.resolve();
            }, function(err) {
                deffered.reject(err);
            });
            return deffered.promise;
        },
        isLogged:function () {
            var user = $kinvey.getActiveUser();
            if(user){
                return true;
            }
            return false;
        }
    }
}]);