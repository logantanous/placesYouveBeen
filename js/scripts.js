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
    width = $(window).width()-40;
    var maxAmountOfRowItems = parseInt(width/300);
    //itemsCreated++;
    var location = $("#location").val();
    var landmarks = $("#landmarks").val();
    var image = $("#image").val();
    var notes = $("#notes").val();
    var newDestination = new destination(location, landmarks, notes, image);
    destinationArray.push(newDestination);
    $(".results").append("<div class='items'>"+"<img class='place' src='"+newDestination.image+"' alt='"+location+"'>");
    $(".items").last().click(function() {
      var indexOfItem = $(this).index();
      var elements = $(".items");
      var amountOfElements = elements.length+1;
      var rowcount = maxAmountOfRowItems;
      alert("rowcount: "+rowcount+" amountOfElements: "+elements.length);
      for (var i = 0; i <= amountOfElements; i++) {
          console.log(i);
        if (i==rowcount) {
          $(".items:nth-child("+rowcount+")").after("<p>test</p>");
          rowcount = rowcount + maxAmountOfRowItems + 1;
        }
      }
      if (elements.length % maxAmountOfRowItems === 0) {}
      else {
        $(".results").append("<p>test</p>");
      }
    });
  })
})
