var dcuTimetablesApp = angular.module('dcuTimetablesApp', [])
  .config(
    ['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(false);
      $locationProvider.hashPrefix('!');
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/settings', {
          templateUrl: 'views/settings.html',
          controller: 'SettingsCtrl'
        })
        .when('/credits', {
          templateUrl: 'views/credits.html'
        })
        .when('/error', {
          templateUrl: 'views/error.html'
        })
        .when('/:coursecode', {
          templateUrl: 'views/timetable.html',
          controller: 'TimetableCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
      }
    ]
  );

  
  window.addEventListener('load', function() {
      new FastClick(document.body);
  }, false);
  
  var storage = window.localStorage;