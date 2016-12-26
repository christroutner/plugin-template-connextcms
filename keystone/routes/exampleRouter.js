var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	api: importRoutes('./api') 
};

module.exports = function(app) {

  app.get('/api/exampleplugin/list', keystone.middleware.api, routes.api.exampleplugin.list);
  app.all('/api/exampleplugin/create', keystone.middleware.api, routes.api.exampleplugin.create);
  app.all('/api/exampleplugin/:id/update', keystone.middleware.api, routes.api.exampleplugin.update);
	app.get('/api/exampleplugin/:id/remove', keystone.middleware.api, routes.api.exampleplugin.remove);
  
}