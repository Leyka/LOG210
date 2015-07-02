Template.showRestaurant.helpers({

    restaurateurName: function () {
        // How to keep the current resto?
        // Tried "this", "this.restaurant", "restaurant" but dosent work
        //var restaurateur = Meteor.users.findOne({_id: resto.restaurateur});
        //return restaurateur.profile.fullName;
    }

});

Template.showRestaurant.events({

});