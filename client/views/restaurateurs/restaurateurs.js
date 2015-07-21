Template.restaurateurs.helpers({
    restaurateurs: function () {
        return Meteor.users.find({"roles": "restaurateur"});
    },
    restaurants: function () {
        var restaurant = Restaurants.findOne({restaurateur: this._id});
        return isNotEmpty(restaurant) ? restaurant.name : TAPi18n.__("NoRestaurantAssigned");
    },
    isEmpty: function () {
        return Meteor.users.find({"roles": "restaurateur"}).count() == 0;
    }
});

Template.restaurateurs.events({
    "click [data-action=deleteRestaurateur]": function (event) {
        var restaurateurId = event.target.id;
        Meteor.call("deleteRestaurateur", restaurateurId);
        alert(TAPi18n.__("RestaurateurDeletedAlert"));
    }
});