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
    $.get(templatePath, '', function(template) {
      debugger;
      
      var thisView = global.pluginView.exampleView1;
      
      //Copy the contents of the template file into this views template object.
      thisView.template = _.template(template);
      
      this.$el.html(thisView.template);

      this.$el.show();
      
    })
    .fail(function( jqxhr, error, exception ) {
      debugger;
    });

    return this;
  },



});







debugger;


