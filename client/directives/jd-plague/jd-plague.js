'use strict';

angular.module('jdPlagueModule', [])
.directive('jdPlague', function(){
  var o = {};
  o.restrict = 'A';
  o.templateUrl = '/directives/jd-plague/jd-plague.html';
  o.scope = {
  };
  o.link = function($scope, element, attrs){};
  o.controller = function($scope, $rootScope, $http, $interval, $window){
    console.log('working');
    $interval(function(){
      var url = 'https://qrng.anu.edu.au/API/jsonI.php?length=20&type=uint16';
      $window.jQuery.get(url, function(response){
      // .success(function(response){
      //   $scope.number = Math.floor(response.data[0] / 64);
      $scope.number = response.data[0] % 4;
      switch($scope.number){
        case 0 :
            $scope.plague = 'Tunguska Event';
            break;
        case 1 :
            $scope.plague = 'Mt. St. Helens';
            break;
        case 2 :
            $scope.plague = 'Tsunami';
            break;
        case 3 :
            $scope.plague = 'chernobyl';
      }
      var selectedNumber = Math.floor(Math.random() * 10);
      console.log($scope.plague);
      $rootScope.$broadcast('plague', {plague: $scope.plague, selectedNumber: selectedNumber});
    });
    }, 10000);
  };
  return o;
});
