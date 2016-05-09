var keystone = require('keystone');

exports = module.exports = function(req, res, next) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	var model = req.query.model;
	var q = keystone.list('Designcount').model.find().where('model',model).exec().then(function(result) {
		if(result){
			var post = result[0];
			post.count = post.count+1;
			post.save();
		}
		},function(err){
			console.log(err);
	});
	// Render the view
	res.end();
	
};
