var app = angular.module("MyApp");

app.controller("LogoutController",["UserService","$scope","$location" ,function(UserService, $scope,$location){
    
   
       UserService.logout();
       
}]);