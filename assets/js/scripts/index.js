function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 52.479, lng: -1.267 },
    zoom: 6,
  });

  const input = document.getElementById('search');
  const searchBox = new google.maps.places.SearchBox(input);
  map.addListener('bounds_changed', function () {
    searchBox.setBounds(map.getBounds());
  });

  const geocoder = new google.maps.Geocoder();
  let markers = [];
  let infoWindow = new google.maps.InfoWindow();

  document
    .getElementById('search')
    .addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        // Call your function to handle the search
        google.maps.event.trigger(this, 'places_changed');
      }
    });

  searchBox.addListener('places_changed', function () {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach((marker) => marker.setMap(null));
    markers = [];

    const bounds = new google.maps.LatLngBounds();

    places.forEach((place) => {
      if (!place.geometry) {
        console.log('Returned place contains no geometry');
        return;
      }

      const service = new google.maps.places.PlacesService(map);
      service.nearbySearch(
        {
          location: place.geometry.location,
          radius: 8046, // 5 miles in meters
          type: ['natural_feature'],
        },
        (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            results.forEach((result) => {
              console.log(result);

              if (
                result.name.toLowerCase().includes('fishing') ||
                result.name.toLowerCase().includes('pond') ||
                result.name.toLowerCase().includes('lake') ||
                result.name.toLowerCase().includes('water')
              ) {
                const placeLoc = result.geometry.location;
                const marker = new google.maps.Marker({
                  map: map,
                  position: placeLoc,
                });
                console.log(marker);
                markers.push(marker);
                bounds.extend(placeLoc);

                console.log(markers);

                // Reverse Geocoding to get the postal code
                geocoder.geocode(
                  { location: placeLoc },
                  (geocodeResults, geocodeStatus) => {
                    if (geocodeStatus === 'OK') {
                      if (geocodeResults[0]) {
                        const addressComponents =
                          geocodeResults[0].address_components;
                        const postalCodeItem = addressComponents.find(
                          (component) => component.types.includes('postal_code')
                        );
                        const postalCode = postalCodeItem
                          ? postalCodeItem.long_name
                          : 'Not found';

                        // Set the content of the InfoWindow
                        marker.addListener('click', () => {
                          const contentString = `
                        <div>
                          <strong>${result.name}</strong><br>
                          Location: ${placeLoc.lat()}, ${placeLoc.lng()}<br>
                          Postal Code: ${postalCode}<br>
                          ${
                            result.photos
                              ? `<img src="${result.photos[0].getUrl({
                                  maxWidth: 200,
                                  maxHeight: 200,
                                })}" alt="Place Image">`
                              : ''
                          }
                        </div>`;
                          infoWindow.setContent(contentString);
                          infoWindow.open(map, marker);
                        });
                      }
                    } else {
                      console.log('Geocoder failed due to: ' + geocodeStatus);
                    }
                  }
                );
              }
            });

            map.fitBounds(bounds);
          }
        }
      );

      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
  });
}

google.maps.event.addDomListener(window, 'load', initMap);