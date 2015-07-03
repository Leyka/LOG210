Template.addRestaurant.helpers({
    restaurateurs: function () {
        return Meteor.users.find({roles: "restaurateur"}).map(function (r) {
            return {label: r.profile.fullName, value: r._id};
        });
    }
});

Template.addRestaurant.events({
    "submit #addRestaurantForm": function () {
        var doc = AutoForm.getFormValues('addRestaurantForm').insertDoc;
        if (doc.restaurateur == null) {
            alert('Ajout effectué!\n' +
                'Aucun restaurateur choisit');
        }
    }
});