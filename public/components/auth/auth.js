var app = angular.module("myRest.auth", []);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/signup", {
            templateUrl: "components/auth/signup/signup.html",
            controller: "SignupController"
        })
        .when("/login", {
            templateUrl: "components/auth/login/login.html",
            controller: "LoginController"
        })
        .when("/logout", {
            templateUrl : '',
            controller: "LogoutController"
        })
});

app.service("TokenService", [function () {
    var userToken = "token";

    this.setToken = function (token) {
        localStorage[userToken] = token;
    };

    this.getToken = function () {
        return localStorage[userToken];
    };

    this.removeToken = function () {
        localStorage.removeItem(userToken);
    };

}]);

app.service("UserService", ["$http", "TokenService", function ($http, TokenService) {
    this.signup = function (user) {
        console.log("user")
        console.log(user)
        return $http.post("/auth/signup/", user);
    };
    this.login = function (userCreds) {
        return $http.post("/auth/login", userCreds).then(function (response) {
            console.log(response);
            TokenService.setToken(response.data.token);
            return response;
        }, function (response) {
            console.log("Error");
            console.log(response);
        });
    };
    this.logout = function () {
        TokenService.removeToken();
         $location.path("/login");
    };
}]);

app.service("AuthInterceptor", ["$q", "$location", "TokenService", function ($q, $location, TokenService) {
    this.request = function (config) {
        var token = TokenService.getToken();
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = "Bearer " + token;
        }
        return config;
    }


    this.responseError = function (response) {
        if (response.status === 401) {
            TokenService.removeToken();
            $location.path("/login");
        }
        return $q.reject(response);
    };
}]);

app.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");
}]);