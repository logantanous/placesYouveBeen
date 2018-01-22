function destination(location, landmarks, notes, image) {
  this.location = location;
  this.landmarks = landmarks;
  this.notes = notes;
  this.image = image;
}

/*Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}*/

$(document).ready(function(){
  var destinationArray = [];
  var itemsCreated = 0;
  var width = $(window).width();

  $("button").click(function() {
    width = $(window).width();
    var maxAmountOfRowItems = parseInt(width/300);
    //itemsCreated++;
    var location = $("#location").val();
    var landmarks = $("#landmarks").val();
    var image = $("#image").val();
    var notes = $("#notes").val();
    var newDestination = new destination(location, landmarks, notes, image);
    destinationArray.push(newDestination);
    alert(destinationArray[0].location);


      })
  })
