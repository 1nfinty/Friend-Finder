//required dependencies
var path = require('path');

//import list of friends
var friends = require('../data/friends.js');

//export API routes
module.exports = function(app) {

	//total list of friends
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	//add new friend entry
	app.post('/api/friends', function(req, res) {
		//capture the user input object
		var userInput = req.body;
		// console.log(userInput)

		var userResponses = userInput.scores;
		//console.log(userResponses);

		//best friend match
		var matchName = '';
		var matchImage = '';
		var totalDifference = 10000; //initial value big for comparison

		//loop existing friends in the list
		for (var i = 0; i < friends.length; i++) {
			//console.log(freind[i]);

			//differenes for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}
			// console.log(diff);

			//if lowest difference, record the friend match
			if (diff < totalDifference) {
				// console.log('Closest match found = ' + diff);
				// console.log('Friend name = ' + friends[i].name);
				// console.log('Friend image = ' + friends[i].photo);

				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}

		//add new user
		friends.push(userInput);

		//send response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};