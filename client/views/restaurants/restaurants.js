Template.restaurants.helpers({
    restaurants: function(){
        return Restaurants.find();
    },
    restaurateurName: function () {
        var restaurateur = Meteor.users.findOne({_id: this.restaurateur});
        return restaurateur.profile.fullName;
    }
});

Template.restaurants.events({
    "click .delete": function () {
        Restaurants.remove(this._id);
    }
});