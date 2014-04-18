require('angular/angular.min');
require('angular-route/angular-route.min');
require('angular-resource/angular-resource.min');
require('angular-bootstrap/ui-bootstrap-tpls.min');

var app = angular.module('app', ['ngRoute', 'ngResource', 'ui.bootstrap']);

app.config([
	'$routeProvider',
	function($routeProvider){
		$routeProvider
			.when('/', {template: 'fuck 1'})
			.otherwise({redirectTo: '/'});
	}
]);

app.run([
	'$rootScope',
	function ($rootScope){
	}
]);

angular.bootstrap(document, ['app']);