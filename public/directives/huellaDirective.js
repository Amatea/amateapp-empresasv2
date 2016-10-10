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
			templateUrl: '/partials/chart-siembra.html',
		};
})