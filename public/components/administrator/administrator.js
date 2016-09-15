var app = angular.module("MyApp");
app.controller("AdminController", ["adminService", "$scope", function (adminService, $scope) {
    load();

    function load() {
        console.log("refresh ...");
        adminService.getResto().then(function (response) {
            console.log(response.data)
            $scope.stores = response.data;
        });
    }
    $scope.post = function () {
        $scope.admin = {};
        adminService.postResto(admin).then(function (response) {
            load();
        })
    }
    $scope.delete = function (id) {
        adminService.deleteCmt(id).then(function (response) {
            load();
        })
    }

}])