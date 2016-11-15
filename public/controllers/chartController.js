angular.module('huellas')


.controller('chartController', ['$scope',
    function($scope) {
      $scope.labels = ['2007','2008','2009'];
      $scope.series = ['Huella', 'Captura'];
      $scope.data = [
        [67632, 84650, 88202],
        [58000, 70000, 72000]
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

}])

.controller('chartsiembraController', ['$scope',
    function($scope) {
      $scope.labels = ['Arrayan', 'Cedrillo', 'Chagualo', 'Cucharo', 'Jigua Amarillo', 'Manteco', 'Mestizo', 'Sangredrago', 'Yarumo', 'Nacedero', 'Guacimo', 'Frijol de Arbol', ''];
      $scope.series = ['Árboles'];
      $scope.data = [
        [300, 140, 140, 140, 190, 160, 100, 580, 150, 300, 200, 200, 0],
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

}])

.controller('chartsiembra2015Controller', ['$scope',
    function($scope) {
      $scope.labels = ['Arrayan', 'Cedrillo', 'Chagualo', 'Cucharo', 'Jigua Amarillo', 'Manteco', 'Mestizo', 'Sangredrago', 'Yarumo', ''];
      $scope.series = ['Árboles'];
      $scope.data = [
        [100, 140, 140, 140, 190, 160, 100, 180, 150, 0]
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

}])

.controller('chartsiembra2016Controller', ['$scope',
    function($scope) {
      $scope.labels = ["Sangredago", 'Nacedero', 'Guacimo', 'Arrayan', 'Frijol de Arbol', ''];
      $scope.series = ['Árboles'];
      $scope.data = [
        [400, 300, 200, 200, 200, 0],
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

}])

.controller('datoCardController', ['$scope',
    function($scope) {

      $scope.totalconsolidado = 2600;

      $scope.total2015 = 1300;

      $scope.total2016 = 1300;

}]);

