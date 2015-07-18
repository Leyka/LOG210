var autocomplete = null;
Template.deliverys.onRendered(function () {
    autocomplete = AutocompleteInput('#autocomplete');
});

AutocompleteInput = function (input) {
    return new google.maps.places.Autocomplete(
        ($(input)[0]), {types: ['geocode']}
    );
};

Geolocalisation = function (input) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var geolocation = new google.maps.LatLng(
                position.coords.latitude, position.coords.longitude);
            var circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy
            });
            input.setBounds(circle.getBounds());
        });
    }
};

Template.deliverys.helpers({});

AdresseLivreur = new ReactiveVar();
Template.deliverys.events({
    "focus #autocomplete": function () {
        Geolocalisation(autocomplete);
    },
    "submit #newDelivery": function (event) {
        event.preventDefault();
        AdresseLivreur.set(event.target.autocomplete.value);
        Router.go("deliveryReadyCommandList");
    }
});