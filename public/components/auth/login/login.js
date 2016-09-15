var app = angular.module("MyApp");

app.controller("LoginController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {

    $scope.login = function (user) {
        console.log("enter to login")
        UserService.login(user).then(function (response) {
            console.log("done")
            $location.path("/administrator");
        }, function (response) {
            console.log(response.data.message)
            alert(response.data.message);
        });

    };

}]);