$(document).ready(function() {
  // alert("jquery works!")

var scoreCount;
var questionNumber;

//start game
// document.getElementsByTagName("img")[0].addEventListener
$("img").eq(0).on("click", function(beginGame){
    scoreCount = 0;
    questionNumber = 1;
    $(".scoreCard").html("Score: " + scoreCount);
    $(".info").html("Question " + questionNumber + " out of " +  $(".question").length + ":");

    function getRandomQuestion() {
      var random = Math.floor(math.random() * 10);
      console.log(random);
      $(".question").eq(random).css("display: show");
    }

})

      // for (var i = 0; i <= tr.length; i++) {
      //     i = random






}) //closing tag
