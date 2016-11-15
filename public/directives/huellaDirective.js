angular.module('huellas')

.directive('toolbar', function() {
		return {
			restrict: 'E',
			templateUrl: '/partials/toolbar.html',
		};
	})

.directive('gestion', function() {
		return {
			restrict: 'E',
			templateUrl: '/partials/gestion.html',
		};
	})
	

.directive('footer', function() {
		return {
			restrict: 'E',
			templateUrl: '/partials/footer.html',
		};
	})
	
.directive('ux', function() {
		return {
			restrict: 'E',
			templateUrl: '/partials/ux.html',
		};
})

.directive('chart', function() {
		return {
			restrict: 'E',
			templateUrl: '/partials/chart.html',
		};
})

.directive('chartsiembra', function() {
		return {
			restrict: 'E',
			templateUrl: '/partials/chart/chart-siembra.html',
		};
})

.directive('chartsiembra2015', function() {
		return {
			restrict: 'E',
			templateUrl: '/partials/chart/2015.html',
		};
})

.directive('chartsiembra2016', function() {
		return {
			restrict: 'E',
			templateUrl: '/partials/chart/2016.html',
		};
})