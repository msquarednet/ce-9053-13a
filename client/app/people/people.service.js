angular.module("myWorld").factory("PeopleSvc", function($q, $http, AuthSvc ){
  return {
    user: AuthSvc.user,
    deletePerson: function(person){
      var dfd = $q.defer();
      $http.delete("/api/people/" + person._id +"/" + AuthSvc.getToken()).then(
        function(result){
          dfd.resolve(result.data); 
        },
        function(result){
          dfd.reject(result.data); 
        }
      );
      return dfd.promise;
    },
    getPeople: function(){
      var dfd = $q.defer();
      $http.get("/api/people").then(function(result){
        dfd.resolve(result.data);
      });
      return dfd.promise;
    },
    getPerson: function(id){
      var dfd = $q.defer();
      $http.get("/api/people/" + id).then(function(result){
        dfd.resolve(result.data);
      });
      return dfd.promise;
    },
    insertPerson: function(person){
      var dfd = $q.defer();  
      $http.post("/api/people/" + AuthSvc.getToken(), person).then(
        function(result){
          console.log(result);
          dfd.resolve(result.data);
        },
        function(result){
          dfd.reject(result.data);
        }
      );
      return dfd.promise;
    },
    updatePerson: function(person){
      var dfd = $q.defer();  
      $http.post("/api/people/" + person._id + "/" + AuthSvc.getToken(), person).then(
        function(result){
          dfd.resolve(result.data);
        },
        function(result){
          dfd.reject(result.data);
        }
      );
      return dfd.promise;
    }
  };
})