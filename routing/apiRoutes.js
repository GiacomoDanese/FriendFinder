// / ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var friendsArray = require("../app/data/friends");


module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friendsArray);
	});

	app.post("/api/friends", function(req, res) {
		friendsArray.push(req.body);
		res.json(friendsArray);
	});
};