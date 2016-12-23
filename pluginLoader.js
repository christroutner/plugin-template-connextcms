debugger;

//Add this plugin to the loadedPlugins array.
var thisPlugin = new Object();
thisPlugin.views = [];
thisPlugin.models = [];
global.pluginView.loadedPlugins.push(thisPlugin);

//Get the index of this plugin and store in the pluginData, for refrence from within the plugin's own code.
var pluginIndex = global.pluginView.loadedPlugins.length-1;
global.pluginView.pluginData[pluginIndex].pluginIndex = pluginIndex;

//Get a local copy of the JSON settings for this plugin.
var pluginData = global.pluginView.pluginData[pluginIndex];
var pluginDir = '/plugins/'+pluginData.pluginDirName+'/';



// ---BEGIN BACKBONE VIEWS---

//Load the individual views for this plugin.
$.getScript(pluginDir+'backbone/views/exampleView1.js', function(data, textStatus, jqxhr) {
  //debugger;
  
  //Create the new view.
  thisPlugin.exampleView1 = new ExampleView1({el: $(pluginData.divId), pluginData: pluginData});
  
  //Create a global reference to this view.
  global.pluginView.exampleView1 = thisPlugin.exampleView1;
  
  //Add this view to the loadedPlugins.views[] array.
  thisPlugin.views.push(thisPlugin.exampleView1);
  
  //Render the view
  //thisPlugin.exampleView1.render(pluginData);
  
})
.fail(function( jqxhr, settings, exception ) {
  debugger;
});

// ---END BACKBONE VIEWS---



// ---BEGIN BACKBONE MODELS---
$.getScript(pluginDir+'backbone/models/exampleBackboneModel.js', function(data, textStatus, jqxhr) {
  global.exampleModel = new ExampleModel();
})
.fail(function( jqxhr, settings, exception ) {
  debugger;
});

$.getScript(pluginDir+'backbone/models/exampleBackboneCollection.js', function(data, textStatus, jqxhr) {
  global.exampleCollection = new ExampleCollection();
  global.exampleCollection.fetch();
})
.fail(function( jqxhr, settings, exception ) {
  debugger;
});

// ---END BACKBONE MODELS---



// ---BEGIN LEFT MENU---

var pluginLi = global.leftMenuView.$el.find('#plugin-link');
//var tmpLi = pluginLi.clone();

//Construct and add a menu item for the first view.
var tmpLi = '<li id="example1-link"><a href="#/" onclick="global.pluginView.exampleView1.render()"><i class="fa fa-gear"></i> <span>Plugin Example</span></a></li>';
pluginLi.parent().append(tmpLi);


// ---BEGIN LEFT MENU---