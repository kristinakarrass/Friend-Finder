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
        console.log(newFriend);
//add matching logic here and send info to modal on survey.html page

        friends.push(newFriend);
        // res.json(newFriend);
    });
}
