var questions = [
        "You are always in a good mood.",
        "You have very few but good friends.",
        "You give more importance to character than status.",
        "You respect other people's opinions, regardless of whether they are based in facts.",
        "You like animals better than people.",
        "You call your mother every day.",
        "Your favorite season is winter.",
        "People can always rely on you.",
        "You prefer being around people to spending time alone.",
        "You like to hear yourself speak."];

var answers = [];

$(document).ready(function() {
	createSurvey();
});

function createSurvey() {
	for (var i = 0; i < questions.length; i++){
		var question = $("<div id='question" + (i+1) +"'>");
		var title = $("<h2>").html("Question " + (i+1));
		question.append(title);
		var text = $("<h3>").html(questions[i]);
		question.append(text);
		var answer = $("<select class='form-control'><option>1 (Strongly Disagree)</option>" +
						"<option>2</option><option>3</option><option>4</option><option>5 (Strongly Agree)</option>");
		question.append(answer);
		$(".questions").append(question);
	}
}

$("#submit").on("click", function(){
	console.log("working");
});