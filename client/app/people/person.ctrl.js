angular.module("myWorld")
.controller("PersonCtrl", function($scope, $location, $routeParams, NavSvc, PeopleSvc){
  NavSvc.setTab("People");
  $scope.save = function(){
    PeopleSvc.updatePerson($scope.person).then(
      function(person){
        $location.path("/people");
      },
      function(error){
        $scope.error = error; 
      }
    );
  };
  function activate(){
    PeopleSvc.getPerson($routeParams.id).then(function(person){
      $scope.person = person;
    });
  }
  activate();
});
