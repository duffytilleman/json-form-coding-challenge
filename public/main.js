angular.module('app', [])
.controller('JsonFormController', ['$scope', '$http', function($scope, $http) {
  $http.get('/schema')
  .then(function(res) {
    $scope.schema = res.data;
  });
}]);
