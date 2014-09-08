'use strict';

/* jasmine specs for controllers go here */
describe('controllers', function(){

  describe('CmisCtrl', function() {
      var scope, ctrl, $httpBackend;

      beforeEach(module('cmis'));
      beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
	  $httpBackend = _$httpBackend_;
	  expect($httpBackend).toBeDefined();
	  $httpBackend.when('GET', 'cis/cis2.json').
            respond([{name: 'Apache httpd',
		      description: 'Apache webserver',
		      critical_level: 1,
		      instances: ['apache.colo.elex.be']
		     },
		     {name: 'Electronic Wafermapping',
		      description: 'Electronic wafermapping blalba',
		      critical_level: 5,
		      instances: ['ewaf.colo.elex.be']
		     },
		     {name: 'Dlog',
		      description: 'dlog blab bala',
		      critical_level: 1,
		      instances: ['dlog1.sensors.elex.be', 
				  'dlog2.sensors.elex.be', 
				  'dlog3.sensors.elex.be',
				  'dlog1.sofia.elex.be', 
				  'dlog2.sofia.elex.be', 
				  'dlog3.sofia.elex.be']
		     }]);
	  scope = $rootScope.$new();
	  expect(scope).toBeDefined();
	  ctrl = $controller('CmisCtrl', {$scope: scope});      
	  $httpBackend.flush();
      }));

      it('should create a cis model with 3 cis', inject(function($controller) {
	  expect(scope).toBeDefined();
	  expect(scope.cis).toBeDefined();
	  expect(scope.cis.length).toBe(3);
	  expect(scope.cis.map(function (o) { return o.name; })).
		 toEqual(['Apache httpd', 'Electronic Wafermapping', 'Dlog']);
      }));

      it('should have options for the chart', inject(function($controller) {
	  expect(scope.options).toBeDefined();
      }));
  });
});
