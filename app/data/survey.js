//create array of questions
var questions = [
    "You are a fan of the 70s.",
    "You constantly have a tune in your head.",
    "You give more importance to character than status.",
    "You respect other people's opinions, regardless of whether they are based in facts.",
    "You walk to the beat of your own drum.",
    "You call your mother every day.",
    "Your favorite season is summer.",
    "People can always rely on you.",
    "You prefer being around people to spending time alone.",
    "You like to hear yourself speak."
];

//when page loads, run createSurvey
$(document).ready(function() {
    createSurvey();
});

function createSurvey() {

    //create 10 questions and responding select fields
    for (var i = 1; i <= questions.length; i++) {
        var question = $("<div id='question" + i + "'>");
        var title = $("<h2><strong>").html("Question " + i);
        question.append(title);
        var text = $("<h3>").html(questions[i - 1]);
        question.append(text);
        var answer = $("<select class='form-control' id='answer" + i + "'>Select an answer<option></option><option>1 (Strongly Disagree)</option>" +
            "<option>2</option><option>3</option><option>4</option><option>5 (Strongly Agree)</option>");
        question.append(answer);
        question.append("<hr>");
        $(".questions").append(question);
    }
}

//when user clicks submit button, run match logic
$("#submit").on("click", function() {
    event.preventDefault();
    var answers = [];
    //check that user provided name and photo url
    if (!$("#name").val() || !$("#photo").val()) {
        alert("Please enter your name and photo url!");
    }
    //check that user entered answers in all fields
    for (var j = 1; j <= 10; j++) {
        //alert user he has to update fields
        if (!$("#answer" + j + " option:selected").text()) {
            alert("Please choose an answer for question " + j);
        } else {
            //grab only number from answer
            var ans = $("#answer" + j + " option:selected").text();
            if (ans === "1 (Strongly Disagree)") {
                ans = 1;
            }
            if (ans === "5 (Strongly Agree)") {
                ans = 5;
            }
            //push answer into array
            answers.push(parseInt(ans));
        }
    }
    //create new instance of friend object
    var newFriend = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        answers: answers
    };
    //make url variable that will work when app is used from different location
    var currentURL = window.location.origin;
    $.post(currentURL + "/api/new", newFriend).done(function(data) {
        console.log(data);
        $("#modal-body").empty();
        for (var i = 0; i < data.length; i++) {
            //append each match's information to modal
            $(".modal-body").append("<h2 class='text-center'>Name: " + data[i].name + "</h2>");
            $(".modal-body").append("<img src='" + data[i].photo + "' class='img-thumbnail'>");
        }
        //make modal visible
        $('#matchModal').modal('toggle');
        //clear all input fields
        $("#name").val("");
        $("#photo").val("");
        for (var i = 1; i <= 10; i++) {
            $("#answer" + i).val("");
        }
    });
});
