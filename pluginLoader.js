//pluginLoader.js
debugger;

// BEGIN PLUGIN CUSTOMIZATION
// Customize this plugin by changing the variables below.


// END PLUGIN CUSTOMIZATION




//BEGIN BOILER PLATE CODE - DO NOT CHANGE CODE BELOW THIS LINE
//Add this plugin to the loadedPlugins array.
var thisPlugin = new Object();
thisPlugin.views = [];
thisPlugin.models = [];
thisPlugin.collections = [];
global.pluginView.loadedPlugins.push(thisPlugin);

//Get the index of this plugin and store in the pluginData, for refrence from within the plugin's own code.
var pluginIndex = global.pluginView.loadedPlugins.length-1;
global.pluginView.pluginData[pluginIndex].pluginIndex = pluginIndex;

//Get a local copy of the JSON settings for this plugin.
var pluginData = global.pluginView.pluginData[pluginIndex];
var pluginDir = '/plugins/'+pluginData.pluginDirName+'/';


//Pull the Backbone model, collection, and view filename from the JSON settings.
thisPlugin.modelFiles = pluginData.backboneModelFiles;
thisPlugin.modelNames = pluginData.backboneModelNames;
thisPlugin.collectionFiles = pluginData.backboneCollectionFiles;
thisPlugin.collectionNames = pluginData.backboneCollectionNames;
thisPlugin.viewFiles = pluginData.backboneViewFiles;
thisPlugin.viewNames = pluginData.backboneViewNames;
thisPlugin.templateFiles = pluginData.backboneTemplateFiles;

//Used to generate a human readable reference to the plugins primary view.
var pluginViewReference;



// ---BEGIN BACKBONE MODELS---
function loadModels() {
  debugger;
  
  //Loop through each of the backbone models for this plugin
  //for(var i=0; i < thisPlugin.modelFiles.length; i++) {
  global.async.eachOf(thisPlugin.modelFiles, function(value, key, callback) {
    try {
    
      $.getScript(pluginDir+value, function(data, textStatus, jqxhr) {
        debugger;
        
        //global.exampleModel = new ExampleModel();
        //global.pluginView.pluginData[pluginIndex].BackboneModel[i] = new thisPlugin.modelNames[i]();
        var constructor = "new "+thisPlugin.modelNames[key]+"({pluginData: pluginData, pluginHandle: thisPlugin })";
        var thisModel = eval(constructor);

        thisPlugin.models.push(thisModel);

        callback();
        
      })
      .fail(function( jqxhr, settings, exception ) {
        debugger;
        callback(exception);
      });
      
    } catch(err) {
      debugger;
      callback(err);
    }
    
  }, function(err) {
    
    if(err) {
      debugger;
      console.error('Problem with pluginLoader.js/loadModels() when trying to load Backbone Models: '+err);  
    } else {
      loadCollections();
    }
  });
  
}
// ---END BACKBONE MODELS---


// ---BEGIN BACKBONE COLLECTIONS---
//The Collection *depends* on the Model, so load the Collection script after Models have been loaded.
function loadCollections() {
  
  global.async.eachOf(thisPlugin.collectionFiles, function(value, key, callback) {
    try {
      
      $.getScript(pluginDir+value, function(data, textStatus, jqxhr) {
        //debugger;
        
        var constructor = "new "+thisPlugin.collectionNames[key]+"({pluginData: pluginData, pluginHandle: thisPlugin })";
        var thisCollection = eval(constructor);
        
        thisPlugin.collections.push(thisCollection);
        
        //This line may need to be changed based on the particular plugin.
        //Not sure if we always want to fetch() by default?
        thisCollection.fetch();
        
      })

      .fail(function( jqxhr, settings, exception ) {
        debugger;
        callback(exception);
      });
        
      
    } catch(err) {
      debugger;
      callback(err);
    }
    
  }, function(err) {
    if(err) {
      debugger;
      console.error('Problem with pluginLoader.js/loadCollections() when trying to load Backbone Collections: '+err);
    }
  });
}
// ---END BACKBONE MODELS---


// ---BEGIN BACKBONE VIEWS---

//Loop through each of the backbone views for this plugin.
//Have to use an async for loop since we making async calls to $.getScript().
global.async.eachOf(thisPlugin.viewFiles, function(value, key, callback) {
  debugger;
  
  try {
    
    //Load the individual views for this plugin.
    var scriptPromise = $.getScript(pluginDir+value, function(data, textStatus, jqxhr) {
      debugger;

    })
    .fail(function( jqxhr, settings, exception ) {
      debugger;

      console.error('Problem with pluginLoader.js when trying load Backbone Views: '+exception);
    });
    
    scriptPromise.then(function(results) {
      debugger;
      
      var thisPlugin = getPluginScope('viewNames', results);
      if(thisPlugin == null) {
        console.error('Could not load plugin.');
        return;
      }
      
      debugger;
      
      //Create the new view.
      var constructor = "new "+thisPlugin.viewNames[key]+"({el: $(pluginData.divId), pluginData: pluginData, pluginHandle: thisPlugin })";
      var thisView = eval(constructor);

      //Add this view to the loadedPlugins.views[] array.
      //thisPlugin.views.push(thisPlugin.exampleView1);
      thisPlugin.views.push(thisView);

      //Create a global reference to the primary view that should be loaded when the user
      //clicks on the left menu entry for this plugin.
      //global.pluginView.exampleView1 = thisPlugin.exampleView1;
      debugger;
      if(global.pluginView.pluginData[key].primaryViewConstructor == thisPlugin.viewNames[key]) {
        pluginViewReference = "global.pluginView."+global.pluginView.pluginData[0].primaryViewInstance;
        var evalStr = pluginViewReference+" = thisView";
        eval(evalStr);
        
        //Add a menu item for this primary view.
        var tmpLi = '<li id="'+pluginData.primaryViewId+'"><a href="#/" onclick="'+pluginViewReference+'.render()"><i class="fa '+pluginData.primaryViewFAIcon+'"></i> <span>'+pluginData.primaryViewLabel+'</span></a></li>';
        pluginLi.parent().append(tmpLi);
      }

      //loadModels();
      callback();
      
    }, function(error) {
      debugger;
    });
    
  } catch(err) {
    callback(err);
  }
  
}, function(err) {
  //debugger;
  
  if(err) {
    debugger;
    console.error('Problem with pluginLoader.js when trying to load Backbone Views: '+err);  
  } else {
    loadModels();
  }
  
});

// ---END BACKBONE VIEWS---




// ---BEGIN LEFT MENU---

var pluginLi = global.leftMenuView.$el.find('#plugin-link');

// ---END LEFT MENU---



// ---BEGIN UTILITY FUNCTIONS---

//This function is used to retrieve the plugin scope -e.g. which plugin inside
//global.pluginView.loadedPlugins that we're trying to deal with. It returns
//the element inside the global.pluginView.loadedPlugins array that matches the
//key and script. If no match is found, it returns null.
function getPluginScope(key, script) {
  debugger;
  
  try {
    var thisPlugin = undefined;
    for(var i=0; i < global.pluginView.loadedPlugins.length; i++) {
      for(var j=0; j < global.pluginView.loadedPlugins[i].viewNames.length; j++) {
        if(script.indexOf(global.pluginView.loadedPlugins[i].viewNames[j]) > -1) {
          thisPlugin = global.pluginView.loadedPlugins[i];
          return thisPlugin;
        }  
      }
    }
    
    if(thisPlugin == undefined) {
      console.error('Problem in pluginLoader.js/getPluginScope(). Could not identify the view and could not set scope of thisPlugin. key = '+key+' script = '+script);
      return null;
    }
    
  } catch(err) {
    console.log('Error in getPluginScope(): '+err);
    return null;
  }
}

// ---END UTILITY FUNCTIONS---



//END BOILER PLATE CODE - DO NOT CHANGE CODE ABOVE THIS LINE