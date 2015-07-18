var selectedAddress = new ReactiveVar();

Template.addCommandRestaurants.helpers({
    restaurants: function () {
        return Restaurants.find();
    },
    isEmpty: function () {
        return Restaurants.find().count() == 0;
    }
});

Template.addCommandMenus.helpers({
    meals: function () {
        var menu = Menus.findOne();
        var meals = menu.meals;

        for (var i = 0; i < meals.length; i++) {
            meals[i].index = i;
        }

        return meals;
    }
});

Template.addCommandMenus.events({
    "submit #command": function (event) {
        var form = $(event.target).serializeArray();
        var meals = [];
        var restaurantId = form[0].value;
        form.forEach(function (e) {
            if (e.name != "restaurantId") {
                if (e.value > 0)
                    meals.push({meal: Menus.findOne().meals[parseInt(e.name)], quantity: e.value});
            }
        });
        Session.set("commandMeals", meals);
        event.preventDefault();
        Router.go("completeCommand", {_id: restaurantId});
    }
});

Template.completeCommand.helpers({
    selectedMeals: function () {
        return Session.get("commandMeals");
    },
    clientId: function () {
        return Meteor.userId();
    },
    selectedAddress: function () {
        if (selectedAddress.get() == null) {
            selectedAddress.set(Meteor.user().profile.address[0]);
        }
        return selectedAddress.get();

    },
    clientAddresses: function () {
        return Meteor.user().profile.address;
    }
});
var autocomplete = null;
Template.completeCommand.onRendered(function () {
    autocomplete = AutocompleteInput('[name="deliveryAddress"]');
});

Template.completeCommand.events({
    "submit #addCommandForm": function (event) {
        var form = event.target;
        var doc = {};
        doc.client = form.client.value;
        doc.dateTime = form.dateTime.value;
        doc.deliveryAddress = form.deliveryAddress.value;
        doc.restaurant = form.restaurant.value;
        selectedAddress.set(doc.deliveryAddress);
        doc.meals = Session.get("commandMeals");
        var mongoId = new Mongo.ObjectID();
        doc._id = mongoId._str;
        alert("Numéro de confirmation: " + doc._id);
        Meteor.call("addCommand", doc);
        Router.go("commands");
    },
    "click [data-action=changeAddress]": function () {
        var address = $("#addressSelection").find(":selected").text();
        selectedAddress.set(address);
    }
});