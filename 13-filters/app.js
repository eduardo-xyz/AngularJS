angular.module('filters', ['ngRoute', 'filters.controllers'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.

	when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeController'
	}).
	when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutController'
  }).
	otherwise({
  	redirectTo: '/'
	});
}]);