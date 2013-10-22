'use strict';

/* jasmine specs for controllers go here */

describe('Latihan Angular', function() {
	beforeEach(function(){
		this.addMatchers({
		  toEqualData: function(expected) {
			return angular.equals(this.actual, expected);
		  }
		});
	 });
  
	beforeEach(module('myApp.controllers'));
	beforeEach(module('myApp'));
	beforeEach(module('myApp.services'));
	
	// MyCtrl1
	describe('MyCtrl1', function() {
		var scope, ctrl, $httpBackend;
		
		beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('comics/comics.json').
				respond([{name: '1/3 Romantica'}, {name: '3 Colors Signal'}]);
			scope = $rootScope.$new();
			ctrl = $controller('MyCtrl1', {$scope: scope});
		}));
		
		it('should create "comics" model with 2 comic fetched from xhr', inject(function() {
			//expect(scope.comics).toEqual([]);
			$httpBackend.flush();

			expect(scope.comics).toEqualData(
				[{name: '1/3 Romantica'}, {name: '3 Colors Signal'}]);
		}));
		
		it('should set the display value of orderProp model', function() {
			expect(scope.orderProp).toBe('age');
		});
		
	});
	
	//MyCtrl2
	describe('MyCtrl2', function() {
		var scope, ctrl, $httpBackend;
		beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('comics/comics.json').
				respond([{name: '1/3 Romantica'}, {name: '3 Colors Signal'}]);
			scope = $rootScope.$new();
			ctrl = $controller('MyCtrl1', {$scope: scope});
		}));
		
		it('should create "comics" model with 2 comic fetched from xhr', inject(function() {
			//expect(scope.comics).toEqualData({});
			$httpBackend.flush();

			expect(scope.comics).toEqualData(
				[{name: '1/3 Romantica'}, {name: '3 Colors Signal'}]);
		}));
	});
	
	//ComicDetailCtrl
	describe('ComicDetailCtrl', function() {
		var scope, ctrl, $httpBackend, 
			comicData = function() {
				return {
					name: 'comic abc',
					imageUrl: 'img/url.png'
				}
			};
		
		beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('comics/abc.json').respond(comicData());

			$routeParams.comicId = 'abc';
			scope = $rootScope.$new();
			ctrl = $controller('ComicDetailCtrl', {$scope: scope});
		}));
		
		it('should fetch comic detail', function() {
			//expect(scope.comic).toEqualData({});
			$httpBackend.flush();

			expect(scope.comic).toEqualData(comicData());
		});
	});
	
	//CategoryCtrl
	describe('CategoryCtrl', function() {
		var scope, ctrl, $httpBackend;
		beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('comics/categories.json').
				respond([{name: 'Romance'}, {name: 'Love'}]);
			scope = $rootScope.$new();
			ctrl = $controller('CategoryCtrl', {$scope: scope});
		}));
		
		it('should create "categories" model with 2 category fetched from xhr', inject(function() {
			//expect(scope.comics).toEqualData({});
			$httpBackend.flush();

			expect(scope.categories).toEqualData(
				[{name: 'Romance'}, {name: 'Love'}]);
		}));
	});
	
	//CategoryDetailCtrl
	describe('CategoryDetailCtrl', function() {
		var scope, ctrl, $httpBackend, 
			categoryData = function() {
				return {
					name: 'category abc'
				}
			};
		
		beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('comics/abc.json').respond(categoryData());

			$routeParams.categoryId = 'abc';
			scope = $rootScope.$new();
			ctrl = $controller('CategoryDetailCtrl', {$scope: scope});
		}));
		
		it('should fetch comic detail', function() {
			//expect(scope.comic).toEqualData({});
			$httpBackend.flush();

			expect(scope.category).toEqualData(categoryData());
		});
	});
});