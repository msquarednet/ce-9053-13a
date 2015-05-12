angular.module("myWorld").controller("PeopleCtrl", function($scope, $location, NavSvc, PeopleSvc){
  NavSvc.setTab("People");
  $scope.message = "I am the people control";
  $scope.user = PeopleSvc.user;
  $scope.delete = function(person){
    PeopleSvc.deletePerson(person).then(
      function(){
        $scope.error = null;
        $scope.success = "User has been deleted";
        activate();
      },
      function(error){
        $scope.error = error;
      }
    );
  };
  $scope.edit = function(person){
    $location.path("/people/" + person._id);
  };
  $scope.insert = function(){
    PeopleSvc.insertPerson($scope.inserting).then(
      function(person){
        $scope.success = "Insert successful for " + person.name;
        $scope.error = null;
        activate();
      },
      function(error){
        $scope.error = error;
        $scope.success = null;
      }
    );
  };
  function activate(){
    $scope.inserting = {
      active: false
    };
    PeopleSvc.getPeople().then(function(people){
      $scope.people = people;
    });
  }
  activate();
});