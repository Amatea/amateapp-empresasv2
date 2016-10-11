'use strict';

angular.module('huellas')

.controller('vidaController', ['$scope', '$routeParams', '$location', 'Articles',
    function($scope, $routeParams, $location, Articles) {
        
        $scope.find = function() {
            $scope.articles = Articles.query();
        };

        $scope.findOne = function() {
            $scope.article = Articles.get({
                userId: $routeParams.userId
            });
        };

        $scope.update = function() {
            $scope.article.$update(function() {
                $location.path('articles/calculo/' + $routeParams.userId);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.inicio = function() {
            $location.path('/' + $scope.article._id);
        }

        $scope.cerrar = function() {
            $location.path('/signout');
        }

}]);