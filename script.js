var scoreCount;
var questionNumber;
var triviaQuestions = $(".question")

function getRandomQuestion() {
  var random = Math.floor(Math.random() * triviaQuestions.length);
  console.log(random);
  triviaQuestions.eq(random).show();
}

$(document).ready(function() {
  // alert("jquery works!")


$("img").eq(0).on("click", function(){

    scoreCount = 0;
    questionNumber = 1;
    $(".scoreCard").html("Score: " + scoreCount);
    $(".info").html("Question " + questionNumber + " out of " +  triviaQuestions.length + ":");

    // console.log("about to call func");

    getRandomQuestion();

    for (var i = 0; i <= triviaQuestions.length; i++) {

      if ($(".correctAnswer").on("click", function(){
        $(".correctAnswer").css("background-color", "#A4CE8A");
        alert("Correct!");
        scoreCount++;
        questionNumber++;
      }));

      else if ($(".otherAnswer").on("click", function(){
        $(".otherAnswer").css("background-color", "#F04A5A");
        $(".correctAnswer").css("background-color", "#A4CE8A");
        scoreCount += 0;
        questionNumber++;
      }));

      else {
        alert("Please select an answer.");
      };

      $(".scoreCard").html("Score: " + scoreCount);
      $(".info").html("Question " + questionNumber + " out of " +  $(".question").length + ":");

    }

}) //ele image closing tag
}) //documet.ready closing tag
