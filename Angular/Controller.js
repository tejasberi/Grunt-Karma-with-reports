//create angular module
var app = angular.module('app',[]);

//app controller
app.controller('controller', ['$scope', function ($scope) {
  
  $scope.message = 'grunt karma';

}]);