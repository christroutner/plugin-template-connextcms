debugger;


'use strict';

var ExampleTemplate1 = '/backbone/templates/exampleTemplate1.html';

var ExampleView1 = Backbone.View.extend({

  tagName:  'div',

  el: '', 

  //template: _.template(ExampleTemplate1),

  // The DOM events specific to an item.
  events: {

  },

  initialize: function () {
    debugger;
    
    
  },

  render: function (pluginData) {
    debugger;

    //Get the template associated with this view.
    var templatePath = '/plugins/'+pluginData.pluginDirName+ExampleTemplate1;
    $.get(templatePath, '', function(data) {
      debugger;
      
      
    })
    .fail(function( jqxhr, error, exception ) {
      debugger;
    });
    
    this.$el.html(this.template);

    this.$el.show();

    return this;
  },



});







debugger;


