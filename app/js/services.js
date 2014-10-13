'use strict';

var colors = ["rgba(0,128,0,0.3)",
	      "rgba(0,0,255,0.3)",
	      "rgba(0,128,128,0.3)",
	      "rgba(0,255,0,0.3)",
	      "rgba(0,255,255,0.3)",
	      "rgba(128,0,0,0.3)",
	      "rgba(128,0,128,0.3)",
	      "rgba(128,128,0,0.3)",
	      "rgba(0,0,128,0.3)",
	      "rgba(128,128,128,0.3)",
	      "rgba(0,0,0,0.3)",
	      "rgba(255,0,255,0.3)",
	      "rgba(255,255,0,0.3)",
	      "rgba(255,255,255,0.3)"
	     ];

/* Services */
function transformCi(ci) {
    if (ci.measurements != null) {
	ci.measurements = ci.measurements.map(function(measurement) {
	    var datasets = [];

	    var i = 0;
	    
	    for (var k in measurement.data) {
		var v = measurement.data[k];
		if (measurement.data.hasOwnProperty(k)) {
		    datasets.push({label: k,
				   data: v,
				   fillColor: colors[i],
				   strokeColor: colors[i],
				   pointStrokeColor: "#fff"
				  });
		    i++;
		}
	    }

	    measurement.charts = [{labels: measurement.labels,
				   datasets: datasets
				  }];
	    return measurement;
	});
    }

    return ci;
}

angular.module('cmis.services', []).
  factory('products', ['$http', function($http) {
      return function() {
        return $http.get('cis/').
                 then(function(response, code) {
                   return response.data;
                 });
      }
  }]).
  factory('ci', ['$http', function($http) {
      return function(name) {
        return $http.get('cis/product', {params: {name: name}}).
                 then(function(response, code) {
                   return transformCi(response.data);
                 });
      }
  }]).
  value('version', '0.1');
