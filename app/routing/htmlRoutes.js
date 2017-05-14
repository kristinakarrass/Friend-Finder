var path = require("path");

//=====================================================================

module.exports = function(app) {
	//sends user to survey page
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    //sends user to homepage
    app.use("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    //if no path is specified, send user to homepage
    app.use( function(req, res) {
    	res.sendFile(path.join(__dirname, "../public/home.html"));
    })

}
