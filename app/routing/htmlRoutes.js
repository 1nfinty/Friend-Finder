//required dependencies
var path = require('path');

// Export HTML routes
module.exports = function(app) {

	//home
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	//survey
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
	//matched friend
	app.get('/api/friend', function(req,res){
		res.sendFile(path.join(dirname, '../public'));
	});
};
