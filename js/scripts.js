function Ticket(movie, time, age, amount) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.amount = amount;
}

Ticket.prototype.movieTicket = function () {
  return (this.time + this.age) * this.amount;
}

function resetFields() {
  $("#movie").val("Spice World");
  $("#time").val("10");
  $("#age").val("5");
  $("#amount").val("1");
}


$(document).ready(function() {
  $("form#movies").submit(function(event) {
  event.preventDefault();

  var inputtedMovie = $("#movie").val();
  var inputtedTime = parseInt($("#time").val());
  var inputtedAge = parseInt($("#age").val());
  var inputtedAmount = parseInt($("#amount").val());

  var newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge, inputtedAmount);

  $(".receipt").show();
  $("#ticket").text("You owe us $" + newTicket.movieTicket() + "! Pay up now.");
  $(".movieType").text(newTicket.movie);

  resetFields();
  });
});
