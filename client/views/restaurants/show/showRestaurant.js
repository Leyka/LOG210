Template.showRestaurant.helpers({
    restaurateurName: function () {
        var restaurateur = Meteor.users.findOne({_id: this.restaurateur});
        return restaurateur.profile.fullName;
    }
});

Template.showRestaurant.events({});