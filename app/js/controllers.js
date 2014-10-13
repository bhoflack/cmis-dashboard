'use strict';

/* Controllers */

var cmisApp = angular.module('cmis.controllers', ['chartjs']);

function CmisCtrl($scope, $location, ci, products) {
    $scope.$on('$locationChangeStart', function(event) {
      console.log("Changing to path: " + $location.path());

      if ($location.path()) {
        if ($location.path().length > 1) {
          var path = $location.path().substring(1);
          ci(path).
            then(function(ci) {
              $scope.ci = ci;
              $scope.hasProductSelected = true;
            });
        } else {
          $scope.hasProductSelected = false;
        }
      } else {
        // an empty string resolves to false in javascript
        $scope.hasProductSelected = false;
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

    $scope.hasProductSelected = false;
}

CmisCtrl.$inject = ['$scope', '$location', 'ci', 'products'];
cmisApp.controller('CmisCtrl', CmisCtrl);
