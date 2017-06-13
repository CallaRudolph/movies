function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  // this.price;
}

// var Ticket = {};
// Ticket.price = function () {
//   return this.movie + this.time + this.age;
// }
Ticket.prototype.movieTicket = function () {
  return this.time + this.age;
}

function resetFields() {
  $("#movie").val("Spice World");
  $("#time").val("5");
  $("#age").val("1");
}


$(document).ready(function() {
  $("form#movies").submit(function(event) {
  event.preventDefault();

  var inputtedMovie = $("#movie").val();
  var inputtedTime = parseInt($("#time").val());
  var inputtedAge = parseInt($("#age").val());

  var newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);
  $(".receipt").show();
  // $(this).remove();
  $("#ticket").text(""+"You owe us $" + newTicket.movieTicket());
  $(".movieType").text(newTicket.movie);
  console.log(inputtedAge);

  resetFields();
  });
});
