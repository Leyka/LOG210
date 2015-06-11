Template.restaurateurs.helpers({
    restaurateurs: function () {
        return Meteor.users.find({"roles": "restaurateur"});
    },
    restaurant: function () {
        var restaurant = Restaurants.findOne(this.profile.restaurant);
        return restaurant.name;
    }
});

Template.restaurateurs.events({
    "click [data-action=deleteRestaurateur]": function (event) {
        var restaurateurId = event.target.id;
        Meteor.call("deleteRestaurateur", restaurateurId);
        alert("Le restaurateur à été supprimé");
    }
});