'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('NavBarCtrl', ['$scope', '$location', function($scope, $location) {
	$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
  }])
  .controller('MyCtrl1', ['$scope', function($scope) {
	$scope.data = "ini halaman home";
  }])
  .controller('MyCtrl2', ['$scope', 'Comic', function($scope, Comic) {
	$scope.comics = Comic.query();
	$scope.orderProp = "age";
  }]);