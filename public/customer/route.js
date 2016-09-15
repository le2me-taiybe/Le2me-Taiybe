var app = angular.module("MyApp", ["ngRoute", "ds.clock"]);
app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider

        .when("/", {
            templateUrl: "components/home/home.html",
            controller: "homeController"
        }) 
        .when("/admimistrator", {
            templateUrl: "components/administrator/administrator.html",
            controller: "admimistratorController"
        })
        .when("/supporter", {
            templateUrl: "components/supporter/supporter.html",
            controller: "supporterController"
        }).when("/:id/contact-Us", {
            templateUrl: "components/contact-us/contact-us.html",
            controller: "contactUsController"
        }).when("/:id", {
            templateUrl: "components/restoProfile/restoProfile.html",
            controller: "RestoProfileController"
        }).when("/:id/overView", {
            templateUrl: "components/restoProfile/sub-nav/overView.html",
            controller: "OverViewController"
        })
        .otherwise({
            redirectTo: "/"
        });
}])