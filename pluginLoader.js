debugger;

//Initialize the Object representing this plugin.
var thisPlugin = new Object();
thisPlugin.views = [];
thisPlugin.models = [];

//Add this plugin to the loadedPlugins array.
global.pluginView.loadedPlugins.push(thisPlugin);

//Get the index of this plugin
var pluginIndex = global.pluginView.loadedPlugins.length-1;

//Get the JSON settings for this plugin.
var pluginData = global.pluginView.pluginData[pluginIndex];
var pluginDir = '/plugins/'+pluginData.pluginDirName+'/';


//Load the individual views for this plugin.
$.getScript(pluginDir+'backbone/views/exampleView1.js', function(data, textStatus, jqxhr) {
  debugger;
  thisPlugin.views.push(new ExampleView1());
})
.fail(function( jqxhr, settings, exception ) {
  debugger;
});

