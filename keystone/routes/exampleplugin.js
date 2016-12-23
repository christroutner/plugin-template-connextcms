var async = require('async'),
	keystone = require('keystone');


var ExamplePluginModel = keystone.list('ExamplePluginModel');

/**
 * List ExamplePluginModels
 */
exports.list = function(req, res) {
	ExamplePluginModel.model.find(function(err, items) {
		
		if (err) return res.apiError('database error', err);
		
		res.apiResponse({
			collection: items
		});
		
	});
}

/**
 * ExamplePluginModel
 */
exports.create = function(req, res) {
	//debugger;
  
  //Ensure the user has a valid CSRF token
	//if (!security.csrf.validate(req)) {
	//	return res.apiError(403, 'invalid csrf');
	//}
  
	var item = new ExamplePluginModel.model(),
		data = (req.method == 'POST') ? req.body : req.query;
	
	item.getUpdateHandler(req).process(data, function(err) {
		
		if (err) return res.apiError('error', err);
		
		res.apiResponse({
			collectionl: item
		});
		
	});
}

