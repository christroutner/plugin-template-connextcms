debugger;


'use strict';

var ExampleTemplate1 = 'text!../templates/exampleTemplate1.html';

var ExampleView1 = Backbone.View.extend({

  tagName:  'div',

  el: '', 

  //template: _.template(ExampleTemplate1),

  // The DOM events specific to an item.
  events: {

  },

  initialize: function () {
    debugger;
    
    //Get the template associated with this view.
    $.getScript(ExampleTemplate1, function(data, textStatus, jqxhr) {
      debugger;
      
      
    })
    .fail(function( jqxhr, settings, exception ) {
      debugger;
    });
  },

  render: function () {
    debugger;

    this.$el.html(this.template);

    this.$el.show();

    return this;
  },



});







debugger;


