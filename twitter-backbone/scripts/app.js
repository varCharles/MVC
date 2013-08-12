var app = app ||  {}

app.Tweet = Backbone.Model.extend({});

app.TweetsCollection = Backbone.Collection.extend({
  model: app.Tweet,
  q: 'javascript',
  url : function(){
          return 'http://te.chni.ca/twitter.api/tweet.php?callback=?&q=' + this.q
        },
      
  parse: function( payload ){
    return payload.statuses;
  }
})


app.AppView = Backbone.View.extend({
  el: '#twitter-app',
  events:{
    'click #twitter-search': 'twitterSearch'
  },
  initialize : function(){
                  this.tweet_list = $( '#tweets-list' );
                  this.listenTo( app.Tweets, 'add', this.addTweet );    
               },
  addTweet: function( tweet ){
    var view = new app.TweetView({ model: tweet });
    this.tweet_list.append( view.render().el );
  },
  twitterSearch: function(){
    console.log(app.Tweets.q)
    app.Tweets.q = $('#search-field').val().trim(); 
     $('#tweets-list').html('')
     app.Tweets.fetch();

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
