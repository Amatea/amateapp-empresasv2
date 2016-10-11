var app = angular.module('huellas', []);


app.factory('Articles', ['$resource', function($resource) {
	// Usar el service '$resource' para devolver un objeto '$resource' article
    return $resource('api/articles/:userId', {
        userId: '@_id'
    }, {
        update: {
            method: 'PUT'
        },
        
    });
}]);