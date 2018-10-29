var testApp = angular.module('testApp',[]);

testApp.controller('testCtrl', ["$scope",function($scope){
  $scope.clic = function () {
    alert('yaaa');
  };
}]);
