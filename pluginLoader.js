debugger;

// BEGIN PLUGIN CUSTOMIZATION
// Customize this plugin by changing the variables below.

// END PLUGIN CUSTOMIZATION

//BEGIN BOILER PLATE CODE - DO NOT CHANGE CODE BELOW THIS LINE
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

//Retrieve data from JSON settings file for use in the loading script below.
//THIS CODE TO BE REMOVED
//var exampleModel = pluginData.backboneModels[0];
//var exampleCollection = pluginData.backboneCollections[1];
//var exampleView = pluginData.backboneViews[0];

//Pull the Backbone model, collection, and view filename from the JSON settings.
var thisPlugin = {};
thisPlugin.modelFiles = pluginData.backboneModelFiles;
thisPlugin.modelNames = pluginData.backboneModelNames;
thisPlugin.collectionFiles = pluginData.backboneCollectionFiles;
thisPlugin.collectionNames = pluginData.backboneCollectionNames;
thisPlugin.viewFiles = pluginData.backboneViewFiles;
thisPlugin.viewNames = pluginData.backboneViewNames;
thisPlugin.templateFiles = pluginData.backboneTemplateFiles;


// ---BEGIN BACKBONE VIEWS---

//Loop through each of the backbone views for this plugin
for(var i=0; i < thisPlugin.viewFiles.length; i++) {

  //Load the individual views for this plugin.
  $.getScript(pluginDir+thisPlugin.viewFiles[i], function(data, textStatus, jqxhr) {
    debugger;

    //Create the new view.
    //thisPlugin.exampleView1 = new ExampleView1({el: $(pluginData.divId), pluginData: pluginData});
    var constructor = "new "+thisPlugin.viewNames[i]+"({el: $(pluginData.divId), pluginData: pluginData })";
    
    //global.pluginView.pluginData[pluginIndex].BackboneView[i] = eval(constructor);
    var thisView = eval(constructor);
    
    //Create a global reference to this view.
    //global.pluginView.exampleView1 = thisPlugin.exampleView1;

    //Add this view to the loadedPlugins.views[] array.
    //thisPlugin.views.push(thisPlugin.exampleView1);
    thisPlugin.views.push(thisView);

    //Render the view
    //thisPlugin.exampleView1.render(pluginData);

    loadModels();

  })
  .fail(function( jqxhr, settings, exception ) {
    debugger;
  });
}
// ---END BACKBONE VIEWS---


// ---BEGIN BACKBONE MODELS---
function loadModels() {
  debugger;
  
  //Loop through each of the backbone models for this plugin
  for(var i=0; i < thisPlugin.modelFiles.length; i++) {
    
    $.getScript(pluginDir+thisPlugin.modelFiles[i], function(data, textStatus, jqxhr) {
      //global.exampleModel = new ExampleModel();
      global.pluginView.pluginData[pluginIndex].BackboneModel[i] = new thisPlugin.modelNames[i]();

      //The Collection *depends* on the Model, so loading the Collection script within the Model $.get handler.
      /*
      $.getScript(pluginDir+exampleCollection, function(data, textStatus, jqxhr) {
        global.exampleCollection = new ExampleCollection();
        global.exampleCollection.fetch();
      })
      
      .fail(function( jqxhr, settings, exception ) {
        debugger;
      });
      */

    })
    .fail(function( jqxhr, settings, exception ) {
      debugger;
    });
  }
  
}
// ---END BACKBONE MODELS---










// ---BEGIN LEFT MENU---
/*
var pluginLi = global.leftMenuView.$el.find('#plugin-link');
//var tmpLi = pluginLi.clone();

//Construct and add a menu item for the first view.
var tmpLi = '<li id="example1-link"><a href="#/" onclick="global.pluginView.exampleView1.render()"><i class="fa fa-gear"></i> <span>Plugin Example</span></a></li>';
pluginLi.parent().append(tmpLi);
*/

// ---BEGIN LEFT MENU---

//END BOILER PLATE CODE - DO NOT CHANGE CODE ABOVE THIS LINE