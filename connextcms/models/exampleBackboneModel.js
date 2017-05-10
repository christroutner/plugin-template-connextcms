//exampleBackboneModel.js


//Create local Model to represent the Post model I'll retrieve from the server.
var ExampleModel = Backbone.Model.extend({

  idAttribute: "_id",  //Map the Model 'id' to the '_id' assigned by the server.

  //When initialized this.id is undefined. This url gets fixed in the initialize() function.
  //url: 'http://'+global.serverIp+':'+global.serverPort+'/api/post/'+this.id+'/update', 
  url: '',

  //Initialize is called upon the instantiation of this model. This function is executed once
  //per model retrieved from the server.
  initialize: function(attributes, options) {
    //This function is often used for debugging, so leave it here.
    //this.on('change', function() {
      //debugger;        
    //  this.save();
    //});
    debugger;

    //Load the plugin metdata as a local variables.
    this.pluginData = options.pluginData;
    
    //Load a handle to the plugin constructs as a local variable.
    this.pluginHandle = options.pluginHandle;
    
    this.url = '/api/exampleplugin/'+this.id+'/update';
    
    this.refreshView = false;
  },

  defaults: {
    '_id': '',
    'entry': '',
  },

  //Override the default Backbone save() function with one that our API understands.
  save: function() {
    //debugger;

    var thisModel = this;
    
    $.getJSON(this.url, this.attributes, function(data) {
      //Regardless of success or failure, the API returns the JSON data of the model that was just updated.
      //debugger;
      
      //If the refreshView flag is set, then refresh the Collection and then refresh the View.
      if(thisModel.refreshView) {
        thisModel.refreshView = false;
        //global.exampleCollection.refreshView = true;
        //global.exampleCollection.fetch();
        this.pluginHandle.collections[0].refreshView = true;
        this.pluginHandle.collections[0].fetch();
      }
      
      log.push('exampleBackboneModel.js/save() executed.');

    }).error( function(err) {
      //This is the error handler.
      //debugger;
      log.push('Error while trying exampleBackboneModel.js/save(). Most likely due to communication issue with the server.');
      //sendLog();
      console.error('Communication error with server while execute exampleBackboneModel.js/save()');
    });

  }
});

