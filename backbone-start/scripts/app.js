var app = app ||  {}

app.Thing = Backbone.Model.extend({ });

app.ThingsCollection = Backbone.Collection.extend({
  model:app.Thing
})

app.ThingsView = Backbone.View.extend({
  el: '#things-list',
  render: function(){
    this.collection.each(function(thing) {
       var thingView = new app.ThingView({ model: thing });
       this.$el.append(thingView.render().el)
    }, this)
  }
});

app.ThingView = Backbone.View.extend({
  template: _.template( $('#thing-template').html() ),
  render: function( ){
    $(this.el).append( this.template( this.model.toJSON()  ));
    return this;
  }
})

app.Router = Backbone.Router.extend({

  routes: {
    "":                 "appView",
    "test"     :        "testView",
    "*actions" :        "appView"
  },

  appView: function() {
    app.Things = new app.ThingsCollection([{thing:'red'},{thing:'green'},{thing:'blue'}]);
    app.MainView = new app.ThingsView({collection:app.Things});
    app.MainView.render();
  },
  testView:function(){
    console.log('test')
  }

});


$(function(){
  new app.Router();
  Backbone.history.start();
});
