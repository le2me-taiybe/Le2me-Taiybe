var app = angular.module("MyApp.auth", []);

app.config("$routeProvider",[function("$routeProvider"){
    
    $routeProvider
    .when("/signup", {
        templateUrl : "admin/components/auth/signup/signup",
        controller : "SignupController"
    })
    .when("/login", {
        templateUrl: "admin/components/auth/login/login",
        controller: "LoginController"
    })  
}]);

