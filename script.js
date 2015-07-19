var scoreCount;
var questionNumber;
// any reason these are outside the doc.ready below?

$(document).ready(function() {

var triviaQuestions = $(".question");
// some people prefer to name jQuery variables with a dollar sign.
// e.g. $triviaQuestions

  function getRandomQuestion() {
    var random = Math.floor(Math.random() * triviaQuestions.length);
    console.log(random);
    triviaQuestions.eq(random).show();
    $(".otherAnswer").css("background-color", "white"); // or toggle a class and manage styles in CSS
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
      $(".scoreCard").html("Score: " + scoreCount).css("color", "red"); // the color red made me think I got it wrong
      $(".next").show();
    });

    $(".otherAnswer").on("click", function(){
      $(this).css("background-color", "#F04A5A");
      // I recommend toggling a class instead of manipualting inline styles here
      // this will allow you to separate your concerns by keeping styles in CSS files
      // and behavior in JS files.
      $(".correctAnswer").css("background-color", "#02CC6B");
      questionNumber++;
      scoreCount += 0;
      $(".next").show();
    });

    $(".next").on("click", function(){
      $(".question").css("display", "none"); // or .hide()
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

// Overall:
// Excellent solution! I love that you didn't have to hardcode individual questions and
// click handlers. This means you could very easily add more questions if you choose to do
// so in the future.
//
// I recommend creating more variables for each of the jQuery selectors you have to increase
// performance, and querying the DOM is an expensive task.
