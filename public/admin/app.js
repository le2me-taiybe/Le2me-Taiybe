var app = angular.module("MyApp", ["ngRoute"]);
app.config(["$routeProvider", function ($routeProvider) {
    console.log("Hey");
    $routeProvider
        .when("/", {
            templateUrl: "components/home/home.html",
            controller: "homeController"
        })
        .when("/administrator", {
            templateUrl: "components/administrator/administrator.html",
            controller: "AdminController"
        })
        .when("/supporter", {
            templateUrl: "components/supporter/supporter.html",
            controller: "supporterController"
        }).when("/contact-Us", {
            templateUrl: "components/contact-us/contact-us.html",
            controller: "contactUsController"
        })
        .otherwise({
            redirectTo: "/"
        });
}]);