angular.module("myWorld").controller("ThingsCtrl", function($scope, NavSvc){
  NavSvc.setTab("Things");
  $scope.message = "I am the things control";
});

