angular.module('TwitterApp',[])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'TweetCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    })
    .controller('TweetCtrl', function ($scope, $http) {

      //$scope.getTweets = function(){
 
      var url = "http://te.chni.ca/twitter.api/tweet.php?callback=JSON_CALLBACK";
          $http.jsonp(url)               
           .success(function (payload) {
               $scope.tweets = payload.statuses
          })

      //};       
  })

