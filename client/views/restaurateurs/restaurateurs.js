Template.restaurateurs.helpers({
    restaurateurs: function () {
        return Meteor.users.find({"roles": "restaurateur"});
    },
    restaurants: function () {
        var restaurant = Restaurants.findOne({restaurateur: this._id});
        return restaurant.name;
    },
    isEmpty: function() {
        return Meteor.users.find({"roles": "restaurateur"}).count() == 0;
    }
});

Template.restaurateurs.events({
    "click [data-action=deleteRestaurateur]": function (event) {
        var restaurateurId = event.target.id;
        Meteor.call("deleteRestaurateur", restaurateurId);
        alert("Le restaurateur à été supprimé");
    }
});