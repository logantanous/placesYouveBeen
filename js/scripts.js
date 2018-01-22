function destination(location, landmarks, notes, image) {
  this.location = location;
  this.landmarks = landmarks;
  this.notes = notes;
  this.image = "https://vignette.wikia.nocookie.net/theimaginenation/images/e/ed/N-a.jpg/revision/latest?cb=20121209234504";
}

/*Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}*/

$(document).ready(function(){
  var destinationArray = [];
  $("button").click(function() {
    //event.preventDefault();
    var location = $("#location").val();
    var landmarks = $("#landmarks").val();
    var image = $("#image").val();
    var notes = $("#notes").val();
    var newDestination = new destination(location, landmarks, notes, image);
    destinationArray.push(newDestination);
    //$("form").trigger("reset");
    //$(".results").append('<img src="'+newDestination.image+'" alt="location">');
    $(".results").append("<div class='items'>"+
      "<img class='place' src=" +newDestination.image+" alt='location'>"+
      "<div class='hidden'>"+
        "<h3>"+location+"</h3>"+
        "<p>"+landmarks+"</p>"+
        "<p>"+notes+"</p>"+
        "</div>"+
      "</div>");
      $(".place").last().click(function() {
        $(this).next().slideToggle();
      })
  })
  // $("p").click(function() {
  //   alert("hello");
  //   // $(this).next().css("background-color", "red");
  // })
});
