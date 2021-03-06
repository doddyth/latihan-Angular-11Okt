'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('NavBarCtrl', ['$scope', '$location', function($scope, $location) {
	$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
  }])
  .controller('MyCtrl1', ['$scope', 'Comic', function($scope, Comic) {
	$scope.comics = Comic.query();
	$scope.orderProp = "age";
  }])
  .controller('MyCtrl2', ['$scope', 'Comic', function($scope, Comic) {
	$scope.comics = Comic.query();
  }])
  .controller('ComicDetailCtrl', ['$scope', '$routeParams', 'Comic', function($scope, $routeParams, Comic) {
	$scope.comic = Comic.get({comicId: $routeParams.comicId}, function(comic) {
		$scope.image = comic.image;
	});
  }])
  .controller('CategoryCtrl', ['$scope', 'Category', function($scope, Category) {
	$scope.categories = Category.query();
  }])
  .controller('CategoryDetailCtrl', ['$scope', '$routeParams', 'Category', function($scope, $routeParams, Category) {
	$scope.category = Category.get({categoryId: $routeParams.categoryId}, function(category) {
		$scope.title = category.name;
	});
  }]);