var App = angular.module('App', [
  'ngResource',
  'ngRoute', 
  'ngMaterial', 
  'ngMessages',
  'ngAnimate',
  'huellas',
  'leaflet-directive',
  'chart.js',
  'angularMoment'
  
  ]);

App.factory('Authentication', [
  function() {
    this.user = window.user;

    return {
      user: this.user
    };
  }
]);

App.config(['$locationProvider', '$mdThemingProvider',
  function($locationProvider, $mdThemingProvider) {
    $locationProvider.hashPrefix('!');
    $mdThemingProvider.theme('default')
      .primaryPalette('teal', {
        'default': '500',
        'hue-1': '700'
      })
      .accentPalette('purple');
  }
]);

App.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
    .when('/', {
      		templateUrl: 'partials/inicio.html'
   		 })
    .when('/profile', {
      		templateUrl: 'partials/profile.html'
   		 })
    .when('/articles/transporte/:articleId', {
			templateUrl: 'partials/transporte.html'
		  }).
		when('/arboles/', {
			templateUrl: 'huella/views/arboles.html'
		  }).
		when('/articles/vida/:articleId', {
			templateUrl: 'partials/vida.html'
		  }).
		when('/articles/consumo/:articleId', {
			templateUrl: 'partials/consumo.html'
		  }).
		when('/articles/calculo/:articleId', {
			templateUrl: 'partials/calculo-huella.html'
	  	}).
		when('/articles/edit/:articleId', {
			templateUrl: 'partials/hogar.html'
		  }).
		otherwise({
      		redirectTo: '/'
    	});
	}
]);