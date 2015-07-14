var scoreCount;
var questionNumber;

$(document).ready(function() {

var triviaQuestions = $(".question");

function getRandomQuestion() {
  var random = Math.floor(Math.random() * triviaQuestions.length);
  console.log(random);
  triviaQuestions.eq(random).show();
  $(".otherAnswer").css("background-color", "white");
  $(".correctAnswer").css("background-color", "white");
  triviaQuestions.splice(random, 1);
}


$("img").eq(0).on("click", function(){

  scoreCount = 0;
  questionNumber = 1;
  $(".scoreCard").html("Score: " + scoreCount);
  $(".info").html("Question " + questionNumber + " out of " +  triviaQuestions.length + ":");

    // console.log("about to call func");

  getRandomQuestion();


  $(".correctAnswer").on("click", function(){
    $(".correctAnswer").css("background-color", "#02CC6B");
    questionNumber++;
    scoreCount++;
    $(".scoreCard").html("Score: " + scoreCount);
    $(".question").css("display", "none");
    $(".info").html("Question " + questionNumber + " out of " +  $(".question").length + ":");
    getRandomQuestion();
  });

  $(".otherAnswer").on("click", function(){
    $(this).css("background-color", "#F04A5A");
    $(".correctAnswer").css("background-color", "#02CC6B");
    scoreCount += 0;
    questionNumber++;
    $(".question").css("display", "none");
    $(".info").html("Question " + questionNumber + " out of " +  $(".question").length + ":");
    getRandomQuestion();
  });
  //
  // if (questionNumber > triviaQuestions.length) {
  //   $(".info").html("Game over!");
  // }

})
})
