debugger;

var thisPlugin = new Object();
thisPlugin.views = [];
thisPlugin.models = [];
global.pluginView.loadedPlugins.push(thisPlugin);

$.getScript('backbone/views/exampleView1.js', function(data, textStatus, jqxhr) {
  debugger;
  thisPlugin.views.push(new ExampleView1());
})
.fail(function( jqxhr, settings, exception ) {
  debugger;
});

