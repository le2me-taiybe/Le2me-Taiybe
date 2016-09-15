var app = angular.module("MyApp");
app.controller("RestoProfileController", ["$scope","adminService","$sce", "$location", "$routeParams", "$anchorScroll", function ($scope,adminService, $sce,$location, $routeParams, $anchorScroll) {
    $scope.testa = "test1";
    $scope.showWhat = "over view";
    $scope.scrollTo = function (id) {
        $location.hash(id);
        $anchorScroll();
    }
    $scope.scrollTo('foo');
    var idParam = $routeParams.id;
    console.log(idParam)
    $scope.restID = idParam;
    
    //get specific reso
    $scope.getById = function () {
            adminService.getOneResto(idParam).then(function (res) {
                console.log("one rest get method");
                console.log(res.data);
                $scope.store = res.data;
                $scope.id=store._id;
          
            })
        }
     $scope.getById();
        //map
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
}])