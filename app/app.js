var app = angular.module('myapp', ['ngRoute', 'MyController']);
 
app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
      when('/', {
        templateUrl: 'index.html',
        controller: 'MyController'
      }).
      when('/play', {
        templateUrl: 'visualization.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);