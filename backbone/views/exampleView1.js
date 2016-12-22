debugger;


'use strict';

var ExampleTemplate1 = 'text!../templates/exampleTemplate1.html';

var ExampleView1 = Backbone.View.extend({

  tagName:  'div',

  el: '', 

  template: _.template(ExampleTemplate1),

  // The DOM events specific to an item.
  events: {

  },

  initialize: function (divId) {
    debugger;
  },

  render: function (divId) {
    debugger;

    this.el = divId;
    
    this.$el.html(this.template);

    this.$el.show();

    return this;
  },



});







debugger;


