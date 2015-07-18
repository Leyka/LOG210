Template.deliveryCommandMap.onCreated(function () {
    // We can use the `ready` callback to interact with the map API once the map is ready.
    var restaurant = [];
    var restaurantAddress = this.data.restaurantAddress;
    restaurant[0] = {
        "location": restaurantAddress,
        stopover: true
    };
    var client = this.data.commandAddress;
    GoogleMaps.ready('exampleMap', function (map) {
        // Add a marker to the map once it's ready
        var directionsService = new google.maps.DirectionsService();
        var directionsRequest = {
            origin: AdresseLivreur.get(),
            destination: client,
            waypoints: restaurant,
            travelMode: google.maps.DirectionsTravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC
        };
        directionsService.route(
            directionsRequest,
            function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    var directionRenderer = new google.maps.DirectionsRenderer({
                        map: map.instance,
                        directions: response
                    });
                    directionRenderer.setPanel(document.getElementById('directionsPanel'));
                }
                else
                    $("#error").append("Unable to retrieve your route<br />");
            }
        );
    });
});

Template.deliveryCommandMap.helpers({
    exampleMapOptions: function () {
        // Make sure the maps API has loaded
        if (GoogleMaps.loaded()) {
            // Map initialization options
            return {
                center: new google.maps.LatLng(45.315701, -73.316823),
                zoom: 8
            };
        }
    }
});

Template.deliveryCommandMap.events({});