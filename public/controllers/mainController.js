angular.module('huellas')

.controller('ExampleController', ['$scope', 'Authentication', '$window',
  function($scope, Authentication, $window) {
    $scope.authentication = Authentication;
}])

.controller('huellatoolController', ['$scope', function($scope) {
  $scope.url = '#!/siembras'
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
      $scope.labels = ["2014", "2015", "2016", "2107", "2018", "2019", "2020"];
      $scope.series = ['Huella', 'Captura'];
      $scope.data = [
        [15, 14, 14, 15, 14, 14, 14],
        [14, 13, 12, 15, 14, 13, 14]
      ];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };
      $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
      $scope.options = {
        scales: {
          yAxes: [
            {
              id: 'y-axis-1',
              type: 'linear',
              display: true,
              position: 'left'
            }
          ]
        }
      };

}]);