var autocomplete = null;
Template.addRestaurant.onRendered(function () {
    autocomplete = AutocompleteInput('[name="address"]');
});
Template.addRestaurant.helpers({
    restaurateurs: function () {
        return Meteor.users.find({roles: "restaurateur"}).map(function (r) {
            return {label: r.profile.fullName, value: r._id};
        });
    }
});

Template.addRestaurant.events({
    'focus [name="address.formattedAddress"]': function () {
        Geolocalisation(autocomplete);
    },
    "submit #addRestaurantForm": function () {
        var doc = AutoForm.getFormValues('addRestaurantForm').insertDoc;
        if (isNotEmpty(doc.name) && isNotEmpty(doc.address) && doc.restaurateur == null) {
            alert(TAPi18n.__("NoRestaurateurAssigned"));
        }
    }
});