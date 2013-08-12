angular.module('googleApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MoviesCtrl'
      }).when('/movie/m/:movieId',{
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl'

      }).when('/actor/m/:actorId',{
        templateUrl: 'views/actor.html',
        controller: 'ActorCtrl'

      })
      .otherwise({
        redirectTo: '/'
      });
  });
