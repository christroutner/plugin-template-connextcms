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

debugger;

//Load the individual views for this plugin.
$.getScript(pluginDir+'backbone/views/exampleView1.js', function(data, textStatus, jqxhr) {
  debugger;
  
  //Create the new view.
  thisPlugin.exampleView1 = new ExampleView1({el: $(pluginData.divId)});
  
  //Create a global reference to this view.
  global.pluginView.exampleView1 = thisPlugin.exampleView1;
  
  //Add this view to the loadedPlugins.views[] array.
  thisPlugin.views.push(thisPlugin.exampleView1);
  
  //Render the view
  thisPlugin.exampleView1.render(pluginData);
  
  
  
  
})
.fail(function( jqxhr, settings, exception ) {
  debugger;
});

