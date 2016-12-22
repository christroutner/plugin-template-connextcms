/*
 * This file is the central location for setting the server info. It is set up to work with both vanilla JS files as well as AMD/Require.js enabled JS files.
 */ 

function getPluginData() {
  
  //These settings are for the ConnextCMS Demo site. Change them to reflect your own server.
  var pluginData = {
   
    pluginDirName: 'plugin-template-connextcms',
    
    backboneTemplates: ['backbone/templates/exampleTemplate1.html','backbone/templates/exampleTemplate2.html'],
    backboneViews: ['backbone/views/exampleView1.js','backbone/views/exampleView2.js'],
    backboneModels: ['backbone/models/exampleModel1.js','backbone/models/exampleModel2.js'],
    
  }

  return pluginData; 

};



//This little bit of code handles AMD enabled JS files that expect a define() function.
if ( typeof(define) === "function" && define.amd ) {
  define([], getPluginData );  
}

