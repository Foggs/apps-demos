// Backbone BaseClass View
	App.Views.BaseView = Backbone.View.extend ({
		render: function () {
			var tpl = _.template(this.template),
			data = (this.model) ? this.model.toJSON() : {},
			html = tpl(data);
			this.$el.html(html);
			return this;
		},

		/*
		replace a view with another, destroy the old view by removing it from DOM, and clean
		up dependencies.
		*/
		close: function(){
			this.remove();
		}
	});

	// A simpler view class extende BaseClass
	App.Views.UserItemView = App.Views.BaseView.extend({
		tagName: 'div',
		template: '<span><%= name %></span>',
		render: function () {
			// Call the parent view's render function
			 App.Views.BaseView.prototype.render.apply(this, arguments);
			// Add your code here
			this.config();
			return this;
		},
		config: function () {}
	});
