Template.restaurants.helpers({
    restaurants: function () {
        return Restaurants.find();
    },
    restaurateurName: function () {
        if (this.restaurateur != null) {
            var restaurateur = Meteor.users.findOne({_id: this.restaurateur});
            return restaurateur.profile.fullName;
        } else {
            return TAPi18n.__("NoRestaurateurAssigned");
        }
    },
    isEmpty: function () {
        return Restaurants.find().count() == 0;
    }

});

Template.restaurants.events({
    "click .removeRestaurant": function () {
        var id = this._id;
        Meteor.call("removeRestaurant", id);
        alert(TAPi18n.__("RestaurantDeletedMessage"));
    }
});