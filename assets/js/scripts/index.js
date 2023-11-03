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
