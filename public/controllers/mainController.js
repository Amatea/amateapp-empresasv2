angular.module('huellas')

.controller('ExampleController', ['$scope', 'Authentication', '$window',
  function($scope, Authentication, $window) {
    $scope.authentication = Authentication;
}])

.controller('mapController', [ '$scope', function($scope) {
    angular.extend($scope, {
                yanaconas: {
                    lat: 3.423004,
                    lng: -76.606897,
                    zoom: 15
                },
                defaults: {
                    zoomAnimation: false,
                    markerZoomAnimation: false,
                    fadeAnimation: false,
                    scrollWheelZoom: false
                }
            });
}])

.controller('chartController', ['$scope',
    function($scope) {
      $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
      $scope.series = ['Series A', 'Series B'];
      $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
      ];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };
      $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
      $scope.options = {
        scales: {
          yAxes: [
            {
              id: 'y-axis-1',
              type: 'linear',
              display: true,
              position: 'left'
            },
            {
              id: 'y-axis-2',
              type: 'linear',
              display: true,
              position: 'right'
            }
          ]
        }
      };

}]);