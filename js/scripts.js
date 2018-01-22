function destination(location, landmarks, notes, image) {
  this.location = location;
  this.landmarks = landmarks;
  this.notes = notes;
  this.image = image;
}

$(document).ready(function() {
  var destinationArray = [];
  var itemsCreated = 0;
  var width = $(window).width()-40;
  $("button").click(function() {
    var maxAmountOfRowItems = parseInt(width/300);
    var location = $("#location").val();
    var landmarks = $("#landmarks").val();
    var image = $("#image").val();
    var notes = $("#notes").val();
    var newDestination = new destination(location, landmarks, notes, image);
    destinationArray.push(newDestination);
    $(".results").append("<div class='items'>"+"<img class='place' src='"+newDestination.image+"' alt='"+location+"'>");
    $(".items").last().click(function() {
      $(".belowRow").remove();
      var indexOfItem = $(this).index();
      var elements = $(".items");
      var amountOfElements = elements.length+1;
      var rowcount = maxAmountOfRowItems;
      for (var i = 0; i <= amountOfElements; i++) {
        if (i==rowcount) {
          $(".items:nth-child("+rowcount+")").after("<div class='belowRow'><h3>"+newDestination.location+"</h3><p>"+newDestination.landmarks+"</p> <p>"+newDestination.notes+"</p></div>");
          rowcount = rowcount + maxAmountOfRowItems + 1;
        }
      }
      if (elements.length % maxAmountOfRowItems === 0) {}
      else {
        $(".results").append("<div class='belowRow'><h3>"+newDestination.location+"</h3><p>"+newDestination.landmarks+"</p> <p>"+newDestination.notes+"</p></div>");
      }
    });
    $(".items").click(function() {
      $(this).nextAll(".belowRow").first().show();
    });
  })
})
