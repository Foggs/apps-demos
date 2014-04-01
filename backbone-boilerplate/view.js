var View = Backbone.View.extend({

  el:  '#view',
  id: 'mainView',

  // Cache the template function for a single item.
  // viewTpl: _.template( $('#item-template').html() ),

  initialize: function (options) {
	console.log('This View has been initialized.');
	this.render();
  },

  // Re-render the title of the todo item.
  render: function() {
	console.log('This View has been rendered.');
	var self = this;
    this.$el.html(this.model.get('title'));
    return this;
  },

   events: {
        click: 'onClick'
  },

  onClick: function(e) {
    // executed when view label is  clicked
    console.log("View Clicked");
  },

});

