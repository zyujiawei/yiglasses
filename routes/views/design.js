var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.data = {
		designs: []
	};
	view.on('init', function(next) {
		var q = keystone.list('Designcount').model.find().exec().then(function(result) {
		locals.data.designs = result;
		next();
		},function(err){
			console.log(err);
		});
		

	});
	// Render the view
	view.render('design');
	
};
