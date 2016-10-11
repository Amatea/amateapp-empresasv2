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

App.config(['$mdThemingProvider',
  function( $mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('teal', {
        'default': '500',
        'hue-1': '700',
        'hue-2': 'A700'
      })
      .accentPalette('purple')
      .warnPalette('green');
  }
]);



App.config(['$locationProvider', '$routeProvider',
	function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
		$routeProvider
    .when('/', {
      		templateUrl: 'partials/inicio.html'
   		 })
    .when('/profile', {
      		templateUrl: 'partials/profile.html'
   		 })
    .when('/siembras', {
      		templateUrl: 'partials/siembras.html'
   		 })
    .when('/articles/transporte/:userId', {
			templateUrl: 'partials/transporte.html'
		  }).
		when('/arboles/', {
			templateUrl: 'huella/views/arboles.html'
		  }).
		when('/articles/vida/:userId', {
			templateUrl: 'partials/vida.html'
		  }).
		when('/articles/consumo/:userId', {
			templateUrl: 'partials/consumo.html'
		  }).
		when('/articles/calculo/:userId', {
			templateUrl: 'partials/calculo-huella.html'
	  	}).
		when('/articles/edit/:userId', {
			templateUrl: 'partials/hogar.html'
		  }).
		otherwise({
      		redirectTo: '/'
    	});
	}
]);