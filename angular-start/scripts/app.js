angular.module('AngularApp',[])
  .config(function ($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    })
    .controller('MainCtrl', function ($scope) {
        $scope.things = ['red', 'green', 'blue']
    })