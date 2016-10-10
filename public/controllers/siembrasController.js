angular.module('huellas')

.controller('siembrasController', ['$scope', function($scope) {
  $scope.templates =
    [{ name: 'especies', url: 'partials/especies.html'},
     { name: 'jornadas', url: 'partials/jornada.html'}];
  $scope.template = $scope.templates[0];
}])