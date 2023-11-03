let autocomplete;
function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('autocomplete'),
    {
      types: ['establishment'],
      componentRestrictions: {'country': ['AU']},
      fields: ['place_id', 'geometry', 'name']
    });

  autocomplete.addListener('place_changed', onPlaceChanged);
}

function onPlaceChanged() {
  var place = autocomplete.getPlace();

  if(!place.geometry) {
    // User did not select a prediction; reset the input field
    document.getElementById('autocomplete').placeholder = 'Enter a place';
  } else {
    //display valid details about the place
    document.getElementById('favorite-l').innerHTML = place.name;
  }
}

// Initialize and add the map
let map;

async function initMap() {
  // The location of position
const position = { lat: 51.507351, lng: -0.127758 };
  // Request needed libraries.
const { Map } = await google.maps.importLibrary("maps");
const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at position
map = new Map(document.getElementById("map"), {
    zoom: 8,
    center: position,
    mapId: "DEMO_MAP_ID",
});

  // The marker, positioned at position
const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "London",
});
}

initMap();
