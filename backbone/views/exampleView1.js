//debugger;


//'use strict'; //Causes error trying to import ExampleView1 object into ConnextCMS.

var ExampleTemplate1 = '/backbone/templates/exampleTemplate1.html';

var ExampleView1 = Backbone.View.extend({

  tagName:  'div',

  el: '', 

  //template: _.template(ExampleTemplate1),

  // The DOM events specific to an item.
  events: {

  },

  initialize: function () {
    //debugger;
    
    this.pluginData = this.options.pluginData;
    
    var thisView = this; //Maitain scope inside the AJAX handler.
    
    //Get the template associated with this view.
    var templatePath = '/plugins/'+this.pluginData.pluginDirName+ExampleTemplate1;
    $.get(templatePath, '', function(template) {
      //debugger;
      
      //Copy the contents of the template file into this views template object.
      thisView.template = _.template(template);

    })
    .fail(function( jqxhr, error, exception ) {
      debugger;
    });
    
  },

  render: function () {
    //debugger;
    
    //Hide all views.
    global.leftMenuView.hideAll();
    
    //Render this view
    this.$el.html(this.template);    
    this.$el.show();
    
    //Visually update the left menu to inidicate that this plugin view was selected.
    this.updateLeftMenuView();
    
    //Fill in the View with any model data.
    this.loadData();
    
    //Hide the delete button on the scaffolding template.
    this.$el.find('#pluginScaffold').find('.delBtn').hide();
    
    return this;
  },

  
  //This function is called by render(). It's responsible for maintinain visual consistency in the
  //left menu when the menu item for this plugin is selected.
  updateLeftMenuView: function() {
    //debugger;
    //Remove the 'active' class from the menu item, unless it's a treeview menu item.
    //(treeview) menu items will remove their active class in their click event.
    if( !global.leftMenuView.$el.find('.sidebar-menu').find('.active').hasClass('treeview') )
      global.leftMenuView.$el.find('.sidebar-menu').find('.active').removeClass('active');
    else
      global.leftMenuView.closeCollapsableLeftMenu();

    //Switch the 'active' class to the selected menu item
    $('#example1-link').addClass('active');

    $('#app-location').text('Plugin Example View');
  },
  
  loadData: function() {
    debugger;
    
    for(var i=0; i < global.exampleCollection.models.length; i++) {
      var thisModel = global.exampleCollection.models[i];
      
      var scaffoldElem = this.$el.find('#pluginScaffold');
      var tmpElem = scaffoldElem.clone();
      
      tmpElem.find('.control-label').text('String '+i);
      tmpElem.find('.strInput').val(thisModel.get('entry'));
      
      this.$el.find('.form-horizontal').prepend(tmpElem);
    }
  }


});







//debugger;


