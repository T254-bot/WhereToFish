// Initialize and add the map
let map;

async function initMap() {
  // The location of London
  const position = { lat: 51.509, lng: -0.118 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at London
  map = new Map(document.getElementById("map"), {
    zoom: 8,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at London
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "London",
  });
}

initMap();