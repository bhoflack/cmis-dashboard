'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('CMIS dashboard', function() {

  beforeEach(function() {
      browser.get('index.html');
  });

  it('Should filter the cis as the user types in the search box', function () {
      var cis = element.all(by.repeater('ci in cis'));
      var query = element(by.model('query'));
      
      expect(cis.count()).toBe(3);

      query.sendKeys('httpd');
      expect(cis.count()).toBe(1);
  });

  it('Should allow filtering using the hostname', function() {
      var cis = element.all(by.repeater('ci in cis'));
      var query = element(by.model('query'));
      
      query.sendKeys('dlog1.sensors.elex.be');
      expect(cis.count()).toBe(1);
  });

  it('Should contain a graph for every measurement', function() {
      var query = element(by.model('query'));

      query.sendKeys('dlog');
      var charts = element.all(by.css('.chart'));
      expect(charts.count()).toBe(5);

      charts.each(function(chart) {
	  expect(chart.getTagName()).toBe("canvas");
      });
  });
});
