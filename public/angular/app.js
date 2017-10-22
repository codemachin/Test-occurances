var myApp = angular.module('myApp', []);

myApp.controller('homeController',['$http',function($http) {

	var main = this;
	this.requested = 'false';
	this.back = function(){
		this.requested = 'false';
	}

	this.find = function(){

	  main.requested = "loading"
   
      $http({
        method: 'GET',
        url: './occur/'+main.n
      }).then(function successCallback(response) {
          
          main.words = response.data;
          main.requested = 'true';
          

        }, function errorCallback(response) {
          
          alert("some error occurred. Check the console.");
          console.log(response);

        });


	}

}]);