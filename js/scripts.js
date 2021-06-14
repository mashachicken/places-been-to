//Bussiness logic
function FavPlace(location, landmark, time, notes) {
  this.location = location;
  this.landmark = landmark;
  this.time = time;
  this.notes = notes;
}

//adds a new place

//assignes id
FavPlace.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

//finds a place by id
FavPlace.prototype.findPlace = function (id) {
  if (this.location[id] != undefined) {
    return this.location[id];
  }
  return false
};

FavPlace.prototype.deletePlace = function (id) {
  if (this.location[id] === undefined) {
    return false;
  }
  delete this.loaction[id];
  return true;
};

//UI logic 

let favoritePlace = new FavPlace()

$(document).ready(function () {
  $('form#new-place').submit(function (event) {
    event.preventDefault();
    const locationName = $('input#location-name').val();
    const locationLandmark = $('input#location-landmark').val();
    const locationTime = $('input#location-time').val();
    const locationNotes = $('input#location-notes').val();
    console.log(locationName)
    let newPlace = new FavPlace(locationName, locationLandmark, locationTime, locationNotes)

    $('.all-places').append('<li' + " class='"+ newPlace.location+"'"+'>' + newPlace.location +"</li>");
    $('input#location-name').val("");
    $('input#location-landmark').val("");
    $('input#location-time').val("");
    $('input#location-notes').val("");

    $("." + newPlace.location).click(function() {
      $('.details').append(locationTime);
      $('.details').append(locationLandmark);
      $('.details').append(locationNotes);

      });
    
  });


})