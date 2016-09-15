var app = angular.module("MyApp");
app.controller("AdminController", ["adminService", "$scope", function (adminService, $scope) {
    load();

    function load() {

        adminService.getResto().then(function (response) {
            $scope.stores = response.data;
        });
    };
    $scope.postRequest = function (admin) {
//        var admin = {
//            restoName: $scope.restoName,
//            storeImg: $scope.storeImg,
//            cuisines: $scope.cuisines,
//            email: $scope.email,
//            URL: $scope.url,
//            tele: $scope.tele,
//            cost: $scope.cost,
//            latAdd: $scope.leAdd,
//            lonAdd: $scope.lonAdd,
//            menuImg: $scope.menuImg,
//            since: $scope.since,
//            openHr: $scope.openHr,
//            closeHr: $scope.closeHr
//        }
 $scope.viewMessage ="";
        adminService.postResto(admin).then(function (response) {
            console.log(response)
            console.log(admin)

            $scope.view = true
            $scope.viewMessage = "Post Added Succ";
            return response;
        })
    }
    $scope.delete = function (id) {
        adminService.deleteCmt(id).then(function (response) {
            load();
        })
    }

}])