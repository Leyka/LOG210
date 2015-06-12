Template.editAccount.helpers({
    restaurateurs: function () {
        return Meteor.users.find({roles: "restaurateur"}).map(function (r) {
            return {label: r.profile.fullName, value: r._id};
        });
    }
});

Template.editAccount.events({
    "submit #editRestaurantForm": function () {
        var doc = AutoForm.getFormValues('editRestaurantForm').updateDoc;
        if (doc.restaurateur == null) {
            alert('Ajout éffectué!\n' +
                'Aucun restaurateur choisit');
        }
    }
});