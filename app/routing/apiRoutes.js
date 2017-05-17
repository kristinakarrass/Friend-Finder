//link route to data source for friends array to load data
var friendsArray = require("../data/friends.js");

//Routing
module.exports = function(app) {
	//api route handles when user visits page
    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });
    //api route handles submitted form by user by pushing it to Friends Array
    app.post("/api/new", function(req, res) {
        var newFriend = req.body;
        res.json(newFriend);
// //add matching logic here and send info to modal on survey.html page
// 	var matchFactor = 0;
// 	var matchArray = [];
// 	var userAnswers = newFriend.answers;
// 	for (var i = 0; i < friendsArray; i++) {
// 		var friendsAnswers = friendsArray[j].answers;
// 		for (var j = 0; j < friendsAnswers.length; j++){
// 			matchFactor += Math.abs(parseInt(friendsAnswers[j]) - parseInt(userAnsers[j]));
// 		}
// 		matchArray.push(matchFactor);

// 	} console.log(matchArray);


        // friends.push(newFriend);
        // res.json(matchArray);
    });
}
