//link route to data source for friends array
var friendsArray = require("../data/friends.js");

module.exports = function(app) {
	//api route handles when user visits page
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    //api route handles submitted form by user by pushing it to Friends Array
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        // newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
        console.log(newFriend);
        friends.push(newFriend);
        // res.json(newFriend);
    });
}
