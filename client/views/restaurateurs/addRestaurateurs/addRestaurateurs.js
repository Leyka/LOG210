//var autocomplete = null;
//Template.addRestaurateurs.onRendered(function () {
//    autocomplete = AutocompleteInput('[name=profile.address]');
//});

Template.addRestaurateurs.helpers({
    restaurants: function () {
        return Restaurants.find();
    }
});

Template.addRestaurateurs.events({
    //"focus #address": function () {
    //    Geolocalisation(autocomplete);
    //},
    "submit #addRestaurateur": function () {
        var doc = AutoForm.getFormValues('addRestaurateur').insertDoc;
        if (!PofileNotEmpty(doc.profile))
            return false;
        var restaurateur = {};
        restaurateur.email = doc.emails[0].address;
        restaurateur.password = doc.services.password;

        restaurateur.profile = doc.profile;

        var restaurantId = $("#restaurant")[0].selectedOptions[0].id;

        if (restaurantId == "none") {
            alert(TAPi18n.__("NoRestaurantAssignedText"));
        }
        else {
            restaurateur.restaurant = restaurantId;
        }

        Meteor.call("addRestaurateur", restaurateur);
        alert("Restaurateur Ajouté");
    }
});