var Model = Backbone.Model.extend({
  defaults: {
	title: '',
    completed: 'false'
  },

  initialize: function() {
      console.log('This model has been initialized.');
      this.on('change:title', function(){
        console.log('- Value for "title" in this model has changed.');
    });
      this.on('change:completed', function(){
        console.log('- Value for "completed" in this model has changed.');
    });

  },

  validate: function(attributes) {
  	// Validate Model data
  },


});


