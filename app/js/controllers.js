'use strict';

/* Controllers */

angular.module('cmis', ['chartjs'])
  .controller('CmisCtrl', ['$scope', function($scope) {
    $scope.options = {
	animation: false
    };

    $scope.cis = [
	{name: 'Apache httpd',
	 description: 'Apache webserver',
	 critical_level: 1,
	 instances: ['apache.colo.elex.be'],
	 measurements: [
           {name: 'cpu idle',
	    charts: [
		{
		    labels: ["January", "February", "March", "April", "May", "June", "July"],
		    datasets: [{
			fillColor: "rgba(220,220,220,0.5)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			data: [65, 59, 90, 81, 56, 55, 40]
		    }, {
			fillColor: "rgba(151,187,205,0.5)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			data: [28, 48, 40, 19, 96, 27, 100]
		    }]
		}		
	    ]
	   },
	   {name: 'cpu io wait',
	    charts: [
		{
		    labels: ["January", "February", "March", "April", "May", "June", "July"],
		    datasets: [{
			fillColor: "rgba(220,220,220,0.5)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			data: [65, 59, 90, 81, 56, 55, 40]
		    }, {
			fillColor: "rgba(151,187,205,0.5)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			data: [28, 48, 40, 19, 96, 27, 100]
		    }]
		}		
	    ]},
	   {name: 'cpu system',
	    charts: [
		{
		    labels: ["January", "February", "March", "April", "May", "June", "July"],
		    datasets: [{
			fillColor: "rgba(220,220,220,0.5)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			data: [65, 59, 90, 81, 56, 55, 40]
		    }, {
			fillColor: "rgba(151,187,205,0.5)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			data: [28, 48, 40, 19, 96, 27, 100]
		    }]
		}		
	    ]},
	   {name: 'cpu user',
	    charts: [
		{
		    labels: ["January", "February", "March", "April", "May", "June", "July"],
		    datasets: [{
			fillColor: "rgba(220,220,220,0.5)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			data: [65, 59, 90, 81, 56, 55, 40]
		    }, {
			fillColor: "rgba(151,187,205,0.5)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			data: [28, 48, 40, 19, 96, 27, 100]
		    }]
		}		
	    ]},
	   {name: 'memory',
	    charts: [
		{
		    labels: ["January", "February", "March", "April", "May", "June", "July"],
		    datasets: [{
			fillColor: "rgba(220,220,220,0.5)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			data: [65, 59, 90, 81, 56, 55, 40]
		    }, {
			fillColor: "rgba(151,187,205,0.5)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			data: [28, 48, 40, 19, 96, 27, 100]
		    }]
		}		
	    ]}
	 ]
	},
	{name: 'Electronic Wafermapping',
	 description: 'Electronic wafermapping blalba',
	 critical_level: 5,
	 instances: ['ewaf.colo.elex.be'],	 
	 measurements: [
           {'name': 'cpu idle'},
	   {'name': 'cpu io wait'},
	   {'name': 'cpu system'},
	   {'name': 'cpu user'},
	   {'name': 'memory'}
	 ]	 
	},
	{name: 'Dlog',
	 description: 'dlog blab bala',
	 critical_level: 1,
	 instances: ['dlog1.sensors.elex.be', 'dlog2.sensors.elex.be', 'dlog3.sensors.elex.be',
		     'dlog1.sofia.elex.be', 'dlog2.sofia.elex.be', 'dlog3.sofia.elex.be'],
	 measurements: [
           {name: 'cpu idle',
	    charts: [
		{
		    labels: ["January", "February", "March", "April", "May", "June", "July"],
		    datasets: [{
			fillColor: "rgba(220,220,220,0.5)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			data: [65, 59, 90, 81, 56, 55, 40]
		    }, {
			fillColor: "rgba(151,187,205,0.5)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			data: [28, 48, 40, 19, 96, 27, 100]
		    }]
		}		
	    ]
	   },
	   {name: 'cpu io wait',
	    charts: [
		{
		    labels: ["January", "February", "March", "April", "May", "June", "July"],
		    datasets: [{
			fillColor: "rgba(220,220,220,0.5)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			data: [65, 59, 90, 81, 56, 55, 40]
		    }, {
			fillColor: "rgba(151,187,205,0.5)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			data: [28, 48, 40, 19, 96, 27, 100]
		    }]
		}		
	    ]},
	   {name: 'cpu system',
	    charts: [
		{
		    labels: ["January", "February", "March", "April", "May", "June", "July"],
		    datasets: [{
			fillColor: "rgba(220,220,220,0.5)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			data: [65, 59, 90, 81, 56, 55, 40]
		    }, {
			fillColor: "rgba(151,187,205,0.5)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			data: [28, 48, 40, 19, 96, 27, 100]
		    }]
		}		
	    ]},
	   {name: 'cpu user',
	    charts: [
		{
		    labels: ["January", "February", "March", "April", "May", "June", "July"],
		    datasets: [{
			fillColor: "rgba(220,220,220,0.5)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			data: [65, 59, 90, 81, 56, 55, 40]
		    }, {
			fillColor: "rgba(151,187,205,0.5)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			data: [28, 48, 40, 19, 96, 27, 100]
		    }]
		}		
	    ]},
	   {name: 'memory',
	    charts: [
		{
		    labels: ["January", "February", "March", "April", "May", "June", "July"],
		    datasets: [{
			fillColor: "rgba(220,220,220,0.5)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			data: [65, 59, 90, 81, 56, 55, 40]
		    }, {
			fillColor: "rgba(151,187,205,0.5)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			data: [28, 48, 40, 19, 96, 27, 100]
		    }]
		}		
	    ]}
	 ]
	}
    ];
  }]);
