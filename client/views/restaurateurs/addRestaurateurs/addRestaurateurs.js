var autocomplete = null;
Template.addRestaurateurs.onRendered(function () {
    autocomplete = AutocompleteInput('#address');
});

Template.addRestaurateurs.helpers({
    restaurants: function () {
        return Restaurants.find();
    }
});

Template.addRestaurateurs.events({
    "focus #address": function () {
        Geolocalisation(autocomplete);
    },
    "submit #addRestaurateur": function (event) {
        var restaurateur = {};
        restaurateur.email = event.target.email.value;
        restaurateur.password = event.target.password.value;

        restaurateur.profile = {};
        restaurateur.profile.fullName = event.target.fullName.value;
        restaurateur.profile.birthday = event.target.birthday.value;
        restaurateur.profile.address = event.target.address.value;
        restaurateur.profile.phoneNumber = event.target.phoneNumber.value;

        var restaurantId = event.target.restaurant.selectedOptions[0].id;

        if (restaurantId == "none") {
            alert(TAPi18n.__("NoRestaurantAssignedText"));
        }
        else {
            restaurateur.restaurant = restaurantId;
        }

        Meteor.call("addRestaurateur", restaurateur);
    }
});