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
     $(".results").append("<div class='items'>"+
       "<img class='place' src='"+newDestination.image+"' alt='"+location+"'>");

      $(".items").last().click(function() {
        var indexOfItem = $(this).index();
        var elements = $(".items");
        var amountOfElements = elements.length+1;
        var rowcount = maxAmountOfRowItems;
        alert("rowcount: "+rowcount);
        for (var i = 0; i <= amountOfElements; i++) {
          console.log(i);
          if (i==rowcount) {
            console.log("yup");
            rowcount = rowcount + maxAmountOfRowItems;
            $(".items:nth-child("+rowcount+")").after("<p>test</p>");
          }
        }
      });


        //alert(maxAmountOfRowItems);
        /*$(".items:nth-child("+maxAmountOfRowItems+")").after("<div class='info'>"+
          "<img class='place' src='"+newDestination.image+"' alt='"+newDestination.location+"'>"+
          "<div class='hidden'>"+
            "<h3>"+newDestination.location+"</h3>"+
            "<p>"+newDestination.landmarks+"</p>"+
            "<p>"+newDestination.notes+"</p>"+
            "</div>"+
          "</div>");*/
      })
  })
  // $("p").click(function() {
  //   alert("hello");
  //   // $(this).next().css("background-color", "red");
  // })
