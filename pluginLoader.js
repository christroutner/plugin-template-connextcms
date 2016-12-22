debugger;



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

