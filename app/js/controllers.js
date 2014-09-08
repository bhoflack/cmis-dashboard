'use strict';

/* Controllers */

var cmisApp = angular.module('cmis.controllers', ['chartjs']);

function CmisCtrl($scope, $location, ci, products) {
    $scope.$on('$locationChangeStart', function(event) {
      console.log($location.path());

      if ($location.path()) {
        ci($location.path()).
          then(function(ci) {
            $scope.ci = ci;
          });
      }
    });

    products().
      then(function(productList) {
        $scope.products = productList;
      });

    $scope.options = {
	animation: false,
	showTooltips: true,
        bezierCurve : false,
	legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
    };
}

CmisCtrl.$inject = ['$scope', '$location', 'ci', 'products'];
cmisApp.controller('CmisCtrl', CmisCtrl);
