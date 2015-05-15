'use strict';

angular.module('trees')
.controller('GameCtrl', function($rootScope, $scope, Life, Tree){
  
  Life.find()
  .then(function(lifeResponse){
    console.log(lifeResponse);
    $rootScope.lives = lifeResponse.data.lives;

    Tree.find()
    .then(function(treeResponse){
      $scope.trees = treeResponse.data.trees;
    });
  });

  $scope.plantTree = function(){
    Tree.create()
    .then(function(response){
      $scope.trees.push(response.data);
    });
  };
});
