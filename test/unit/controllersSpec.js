'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('cmis'));

  var scope, cmisCtrl;

  beforeEach(inject(function($controller) {
      scope = {};
      cmisCtrl = $controller('CmisCtrl', { $scope: scope });
  }));


  it('should create a cis model with 3 cis', inject(function($controller) {
      expect(scope.cis.length).toBe(3);
  }));

  it('should have options for the chart', inject(function($controller) {
      expect(scope.options).toBeDefined();
  }));
});
