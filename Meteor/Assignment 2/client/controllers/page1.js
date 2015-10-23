Router.route('/page1');
if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load();
  });

  Template.page1.helpers({
    exampleMapOptions: function() {
      // Make sure the maps API has loaded
      if (GoogleMaps.loaded()) {
      // Get the current location
        var position = Geolocation.currentLocation();
        // Map initialization options
        return {
          center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
          zoom: 8
        };
      }
    }
  });

  Template.page1.onCreated(function() {
    // We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('exampleMap', function(map) {
      // Add a marker to the map once it's ready
      var marker = new google.maps.Marker({
        position: map.options.center,
        map: map.instance
      });
    });
  });
}