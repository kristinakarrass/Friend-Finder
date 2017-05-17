//link route to data source for friends array to load data
var friendsArray = require("../data/friends.js");

//Routing
module.exports = function(app) {
	//api route handles when user visits friends page (displays content of friendsArray)
    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });
    //api route handles submitted form by user by pushing it to Friends Array
    app.post("/api/new", function(req, res) {
        var newFriend = req.body;
    //add matching logic here and send info to modal on survey.html page
	var matchArray = [];
	var userAnswers = newFriend.answers;
	//compare friendsArray to user data to find best match/matches
	for (var i = 0; i < friendsArray.length; i++) {
		var matchFactor = 0;
		var friendsAnswers = friendsArray[i].answers;
		for (var j = 0; j < friendsAnswers.length; j++){
			matchFactor += Math.abs(parseInt(friendsAnswers[j]) - parseInt(userAnswers[j]));
	}
	//push match factors into array
	matchArray.push(matchFactor);
	}
	console.log(matchArray);
	//find lowest difference value
	var lowDiff = Math.min(...matchArray);
	console.log(lowDiff);
	//array to hold low matches
	var lowMatch = [];
	//find matching lowest difference in array
	for (var i = 0; i < matchArray.length; i++){
		if (lowDiff === matchArray[i]){
			lowMatch.push(i);
		}
	}
	console.log(lowMatch);
	//create array to hold best matches
	var bestMatch = [];
	//push all matches into array
	for (var i = 0; i < lowMatch.length; i++) {
		var person = friendsArray[lowMatch[i]];
		bestMatch.push(person);
	}

	//when all logic is done, push new Friend into friendsArray
	friendsArray.push(newFriend);
	console.log(bestMatch);
        res.json(bestMatch);
    });
}
