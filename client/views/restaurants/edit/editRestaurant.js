Template.editRestaurant.helpers({
    restaurateurs: function () {
        return Meteor.users.find({roles: "restaurateur"}).map(function (r) {
            return {label: r.profile.fullName, value: r._id};
        });
    }
});

Template.editRestaurant.events({
    "submit #editRestaurantForm": function () {
        var doc = AutoForm.getFormValues('editRestaurantForm').updateDoc;
        if (doc.$set.restaurateur == null) {
            alert('Modification éffectuée!\n' +
                'Aucun restaurateur choisit');
        }
    }
});