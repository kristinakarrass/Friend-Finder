module.exports = function(app) {
	//api route to get friends information
    api.get("/api/friends", function(req, res) {
        return res.json(friends);
    });
    //api route to post new friend information to file
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
        console.log(newFriend);
        friends.push(newFriend);
        res.json(newFriend);
    });
}
