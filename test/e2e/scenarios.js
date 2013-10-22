'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/home");
  });

  describe('Nav list view', function() {
	beforeEach(function() {
		browser().navigateTo('#/home');
    });
	
	it('should set isActive true', function() {
		element('.navbar-nav li:eq(1) a').click();
		expect(element('.navbar-nav li:eq(1)').attr('class')).toBe('active');
    });
	
  });

  describe('Home view', function() {

    beforeEach(function() {
		browser().navigateTo('#/home');
    });

    it('should display new update comic list', function() {
		expect(repeater('.comics li').count()).toBe(5);
    });

	it('should display categories', function() {
		expect(repeater('.widgetBody .nav li').count()).toBe(3);
    });
  });


  describe('Comic list view', function() {

    beforeEach(function() {
      browser().navigateTo('#/comic-list');
    });

	it('should display all comic list', function() {
		expect(repeater('.comics li').count()).toBe(10);
		
    });
	
  });
  
  describe('Category manga view', function() {
	beforeEach(function() {
		browser().navigateTo('#/categories/Romance');
	});
	
	it('should display all romance manga', function(){
		expect(repeater('.comics li').count()).toBe(4);
	});
  });
  
  describe('Category clicked', function() {
  beforeEach(function() {
		browser().navigateTo('#/home');
	});
	it('should display romance view', function(){
		element('.widgetBody .nav li:eq(0) a').click();
		expect(browser().location().url()).toBe('/categories/Romance');
	});
  });
});
