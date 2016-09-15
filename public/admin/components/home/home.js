var app = angular.module("MyApp");
app.controller("homeController", ["adminService", "$scope", "$sce", function (adminService, $scope, $sce) {
    //var restArray=[];
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
    $scope.getMap = function (lat, long) {
        console.log(lat + "," + long);
        var baseUrl = "https://www.google.com/maps/embed/v1/place?";
        var query = "q=" + lat + "," + long;
        var zoom = "&zoom=16";
        var apiKey = "&key=AIzaSyD9qmJh0PglT3x7Mhf_ajc8wLCeoD948hE";
        $scope.mapSrc = trustSrc(baseUrl + query + zoom + apiKey);
    }

    function trustSrc(src) {
        return $sce.trustAsResourceUrl(src);
    }
//    var idParam = $routeParams.id
//    $scope.restID = idParam
//    $scope.getById = function () {
//        adminService.getOneResto(idParam).then(function (res) {
//            console.log("one rest get method");
//            console.log(res.data);
//            $scope.store = res.data;
//        })
//    }
}]);