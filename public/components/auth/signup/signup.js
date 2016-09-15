var app = angular.module("MyApp");

app.controller("SignupController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {
    $scope.passwordMessage = "";

    $scope.signup = function (user) {
        if ($scope.user.password !== $scope.passwordRepeat) {
            $scope.passwordMessage = "password don't match.";
        } else {
            //            console.log(user)
            UserService.signup(user).then(function (response) {

                $location.path("/login");
                console.log(response);
            }, function (response) {
                console.log(response.data)
                alert("There was a problem :" + response.data);
            });
        }
    }
}]);