'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

angular.module('myApp.services', ['ngResource']).
  value('version', '0.1').
  factory('Comic', ['$resource', 
	function($resource) {
		return $resource('comics/:comicId.json', {}, {
			query: {method:'GET', params:{comicId:'comics'}, isArray:true}
		});	
	}
  ]).
  factory('Category', ['$resource', 
	function($resource) {
		return $resource('comics/:categoryId.json', {}, {
			query: {method:'GET', params:{categoryId:'categories'}, isArray:true}
		});
	}
  ]);
