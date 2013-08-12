var app = app ||  {}

app.Tweet = Backbone.Model.extend({});

app.TweetsCollection = Backbone.Collection.extend({
  model: app.Tweet,
  url : 'http://te.chni.ca/twitter.api/tweet.php?callback=?',
  parse: function( payload ){
    return payload.statuses;
  }
})


app.AppView = Backbone.View.extend({
  el: '#twitter-app',
  initialize : function(){
                  this.tweet_list = $( '#tweets-list' );
                  this.listenTo( app.Tweets, 'add', this.addTweet );    
               },
  addTweet: function( tweet ){
    var view = new app.TweetView({ model: tweet });
    this.tweet_list.append( view.render().el );
  }
});

app.TweetView = Backbone.View.extend({
  template: _.template( $('#tweets-template').html() ),
  render: function( ){
    $(this.el).append( this.template( this.model.toJSON()  ));
    return this;
  }
})


app.Tweets = new app.TweetsCollection();
app.Tweets.fetch();
app.MainView = new app.AppView;
