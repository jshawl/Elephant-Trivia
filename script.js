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

    getRandomQuestion();

    $("img").eq(0).hide();

    $(".correctAnswer").on("click", function(){
      $(".correctAnswer").css("background-color", "#02CC6B");
      questionNumber++;
      scoreCount++;
      $(".scoreCard").html("Score: " + scoreCount).css("color", "red");
      $(".next").show();
    });

    $(".otherAnswer").on("click", function(){
      $(this).css("background-color", "#F04A5A");
      $(".correctAnswer").css("background-color", "#02CC6B");
      questionNumber++;
      scoreCount += 0;
      $(".next").show();
    });

    $(".next").on("click", function(){
      $(".question").css("display", "none");
      $(".info").html("Question " + questionNumber + " out of " +  $(".question").length + ":");
      $(".next").hide();
      getRandomQuestion();

      if (($(".question").length) < questionNumber) {
        $("img").eq(0).show().on("click", function(){
          location.reload()
        });
        $(".info").html("Congratulations! You answered " + scoreCount + " correctly!");
        $(".enp").show();
      }

    })

  })

})
