function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.movieTicket = function () {
  return this.movie + " " + this.time + " " + this.age;
}

function resetFields() {
  $("#movie").val("Spice World");
  $("#time").val("10AM");
  $("#age").val("teenager");
}


$(document).ready(function() {
  $("form#movies").submit(function(event) {
  event.preventDefault();

  var inputtedMovie = $("#movie").val();
  var inputtedTime = $("#time").val();
  var inputtedAge = $("#age").val();

  var newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);

  $(".movieType").text(newTicket.movie);
  $(".movieTime").text(newTicket.time);
  console.log(inputtedAge);

  });
});
