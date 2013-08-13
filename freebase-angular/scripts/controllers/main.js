
angular.module('googleApp')
  	.controller('MoviesCtrl', function ($scope, $http) {
   		$scope.getQuery = function(){
	    	$http.jsonp('https://www.googleapis.com/freebase/v1/search?query=' + $scope.freebaseQuery +'&filter=(all+type%3A%2Ffilm%2Ffilm)&callback=JSON_CALLBACK&key=AIzaSyC8nRgXdpK16t5aiXpXexUVEIWma1RBNlU').success(
			function( payload ){
				$scope.movies = payload.result;
			}
		);
    }

  })
  .controller('MovieCtrl', function ($scope, $http, $routeParams) {
  		$scope.movieid = $routeParams.movieId
    	$http.jsonp('https://www.googleapis.com/freebase/v1/topic/m/'+ $scope.movieid +'?callback=JSON_CALLBACK&key=AIzaSyC8nRgXdpK16t5aiXpXexUVEIWma1RBNlU').success(
			function( payload ){
				$scope.movie = payload.property;
				$scope.actors = $scope.movie['/film/film/starring'].values;

			}
		);

  })
	.controller('ActorCtrl', function ($scope, $http, $routeParams) {
  		$scope.actorid = $routeParams.actorId
    	$http.jsonp('https://www.googleapis.com/freebase/v1/topic/m/'+ $scope.actorid +'?callback=JSON_CALLBACK&key=AIzaSyC8nRgXdpK16t5aiXpXexUVEIWma1RBNlU').success(
			function( payload ){
				$scope.actor = payload.property;
				$scope.movies = $scope.actor['/film/actor/film'].values;
			}
		);
  	})