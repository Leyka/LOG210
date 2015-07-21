isNotEmpty = function (value) {
    return !!(value && value !== '');

};

PofileNotEmpty = function (profile) {
    return !!(isNotEmpty(profile.fullName) && isNotEmpty(profile.birthday) && isNotEmpty(profile.addresses[0]) && isNotEmpty(profile.phoneNumber));
};

Template.modifyRestaurateur.helpers({
    restaurants: function () {
        return Restaurants.find();
    },
    assignedRestaurant: function (restaurant) {
        if (Restaurants.find({_id: restaurant, restaurateur: Template.parentData().restaurateur._id}).count())
            return "selected";
    }
});

Template.modifyRestaurateur.events({
    "submit #modifyRestaurateur": function () {
        var doc = AutoForm.getFormValues('modifyRestaurateur').insertDoc;
        if (!PofileNotEmpty(doc.profile))
            return false;
        var restaurateur = {};
        restaurateur._id = this.doc._id;
        restaurateur.email = doc.emails[0].address;

        if (isNotEmpty(doc.services)) {
            restaurateur.password = doc.services.password;
        }

        restaurateur.profile = doc.profile;

        var restaurantId = $("#restaurant")[0].selectedOptions[0].id;

        if (restaurantId == "none") {
            alert(TAPi18n.__("NoRestaurantAssignedText"));
        }
        else {
            restaurateur.restaurant = restaurantId;
        }

        Meteor.call("editRestaurateur", restaurateur);
    }
});