$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var answers = ["1", '2', '3']

    answers.map(function(answer){
      var userInput = $('input#' + answer).val().toUpperCase();

      $("ul#output").append("<li>" + userInput + "</li>");
    });

    $("#output").show();

    event.preventDefault();
  });
});
