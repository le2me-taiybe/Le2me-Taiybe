var app = angular.module("MyApp");
app.controller("homeController", ["$scope","adminService","$sce", function ($scope,adminService,$sce) {
     $scope.format = 'dd-MMM-yyyy hh:mm:ss a';

     /////
     function load() {
        adminService.getResto().then(function (response) {
            console.log(response.data);
            $scope.stores = response.data;
            //restArray=response.data;
            return response;
        });
    }
    load();
    $scope.post = function (id, comment) {
        adminService.postResto(id, comment).then(function (response) {
            load();
        })
    }
    $scope.delete = function (dlt) {
        adminService.deleteResto(dlt._id).then(function (response) {
            console.log("deleted")
            load();
        })
    }
    



}]);


 