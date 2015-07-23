Template.commands.helpers({
    commands: function () {

        // Client?
        if(Roles.userIsInRole(Meteor.user(), 'client')){
            return Commands.find();
        }

        // Chercher les commandes du restaurant
        var restaurateurId = Meteor.userId();
        var restaurantId = Restaurants.find({restaurateur: restaurateurId}).fetch()._id;
        var commands = Commands.find({restaurant: restaurantId}).fetch();
        return commands; 

    },
    isEmpty: function () {
        var isEmpty;

        if(Roles.userIsInRole(Meteor.user(), 'client')){
            isEmpty = Commands.find().count() == 0;
        }
        else {
            var restaurateurId = Meteor.userId();
            var restaurantId = Restaurants.find({restaurateur: restaurateurId});
            isEmpty = Commands.find({restaurant: restaurantId}).count == 0;
        }

        return isEmpty;
    }
});

Template.commands.events({
    "click .prepare": function () {
        (this._id).status.allowedValues[1];

        },
    "click .cancel": function () {
        (this._id).status.allowedValues[0];
    },
    "click .ready": function () {
        (this._id).status.allowedValues[2];
    }
});