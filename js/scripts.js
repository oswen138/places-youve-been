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
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts [i];
      }
    }
  };
  return false;
}

function Place(location, landmarks, time, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
}

let travelBook = new TravelBook();
let place1 = new Place("San Francisco", "Golden Gate Bridge", 1993, "Good Crab");
let place2 = new Place("Egypt", "Pyramids", 2012, "Good kushari")
let place3 = new Place("Seattle", "Space Needle", 2020, "Good Clam Chowder")

for (i=1; i<4; i++) {
  travelBook.addPlace("place"+i);
}

$(document).ready(function() {

});