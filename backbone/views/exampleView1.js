debugger;


'use strict';

var ExampleTemplate1 = '/templates/exampleTemplate1.html';

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
    $.getScript(templatePath, function(data, textStatus, jqxhr) {
      debugger;
      
      
    })
    .fail(function( jqxhr, settings, exception ) {
      debugger;
    });
    
    this.$el.html(this.template);

    this.$el.show();

    return this;
  },



});







debugger;


