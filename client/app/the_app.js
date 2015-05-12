//configuration
var app = angular.module("myWorld", ['ngRoute']);
app.run(["AuthSvc", "PeopleSvc", function(AuthSvc, PeopleSvc){
  AuthSvc.setUser();
}]);

// services


//directives
