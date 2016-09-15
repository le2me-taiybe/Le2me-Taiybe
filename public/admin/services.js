var app = angular.module("MyApp");

app.service("adminService", function($http){
    
    this.postResto = function(res){
        return $http.post("/api/stores", res);
    }
    
    this.getResto = function(){
        return $http.get("/api/stores");
    }
    this.deleteResto = function(id){
        return $http.delete("/api/stores/"+ id);
    }
    // will go through it :)
//    this.put = function(){}
    
});