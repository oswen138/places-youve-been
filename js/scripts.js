function TravelBook() {
  this.places = [];
  this.currentId = 0;
}

TravelBook.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places.push(place);
}

TravelBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

TravelBook.prototype.findPlace = function(id) {
  for (let i=0; i< this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        return this.places [i];
      }
    }
  };
  return false;
}

function Place(location, landmark, time, notes) {
  this.location = location;
  this.landmark = landmark;
  this.time = time;
  this.notes = notes;
}

let travelBook = new TravelBook();

function displayPlaceDetails(travelBookToDisplay) {
  let placesList = $("ul#places");
  let htmlForPlaceInfo = "";
  travelBookToDisplay.places.forEach(function(place) {
    htmlForPlaceInfo += "<li id=" + place.id + ">" + place.location + "</li>";
  });
  placesList.html(htmlForPlaceInfo);
}

function showPlace(placeId) {
  const place = travelBook.findPlace(placeId);
  $("#show-place").show();
  $(".location").html(place.location);
  $(".landmark").html(place.landmark);
  $(".time").html(place.time);
  $(".notes").html(place.notes);
}

function attachPlaceListeners() {
  $("ul#places").on("click", "li", function() {
    showPlace(this.id);
  });
}

$(document).ready(function() {
  attachPlaceListeners();
  $("form#new-place").submit(function(event) {
    event.preventDefault();
    const inputLocation = $("input#location").val();
    const inputLandmark = $("input#landmark").val();
    const inputTime = $("input#time").val();
    const inputNotes = $("input#notes").val();
    
    $("input#location").val("");
    $("input#landmark").val("");
    $("input#time").val("");
    $("input#notes").val("");
    
    let newPlace = new Place(inputLocation, inputLandmark, inputTime, inputNotes);
    travelBook.addPlace(newPlace);
    displayPlaceDetails(travelBook);
  })
});