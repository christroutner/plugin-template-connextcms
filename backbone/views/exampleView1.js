/*global define*/
define([
	'jQuery-2.1.4.min',
	'underscore_1.3.3',
	'backbone_0.9.2',
  'text!../templates/exampleTemplate1.html'
], function ($, _, Backbone, ExampleTemplate1) {
	'use strict';

	var ExampleView1 = Backbone.View.extend({

		tagName:  'div',
    
    el: '', 

		template: _.template(ExampleTemplate1),

		// The DOM events specific to an item.
		events: {
			
		},

		initialize: function () {
			
		},

    render: function () {
      //debugger;
      
      this.$el.html(this.template);
      
      this.$el.show();
      
			return this;
		},
    
    

	});

  //debugger;
	return ExampleView1;
});
