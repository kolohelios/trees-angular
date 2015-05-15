'use strict';

angular.module('trees')
.factory('Life', function($rootScope, $http, nodeUrl){
  function Life(){
  }

  Life.find = function(){
    return $http.get(nodeUrl + '/lives');
  };
  return Life;
});
