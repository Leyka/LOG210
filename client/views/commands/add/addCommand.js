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
var totalPrice;
Template.completeCommand.helpers({
    selectedMeals: function () {
        return Session.get("commandMeals");
    },
    totalPrice: function() {
        totalPrice = 0;
        var commandMeals =  Session.get("commandMeals");
        commandMeals.forEach(function(meal){
            totalPrice += meal.meal.price * meal.quantity;
        });

        return totalPrice;
    },
    clientId: function () {
        return Meteor.userId();
    },
    selectedAddress: function () {
        if (selectedAddress.get() == null) {
            selectedAddress.set(Meteor.user().profile.addresses[0]);
        }
        return selectedAddress.get();

    },
    clientAddresses: function () {
        return Meteor.user().profile.addresses;
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
        var userAddresses = Meteor.user().profile.addresses;
        var addressExists = false;
        userAddresses.forEach(function (e) {
            if (e == doc.deliveryAddress)
                addressExists = true;
        });

        if (!addressExists) {
            userAddresses.push(doc.deliveryAddress);
            Meteor.call("updateUserAddress", userAddresses);
        }

        doc.meals = Session.get("commandMeals");
        doc.total = totalPrice;
        var mongoId = new Mongo.ObjectID();
        doc._id = mongoId._str;

        // Paypal

        var cardNumber = form.cardNumber.value;
        var typeCard = form.typeCard.selectedOptions[0].value;
        var expireMonth = form.expireMonth.value;
        var expireYear = form.expireYear.value;

        Meteor.Paypal.authorize({
                name: doc.client,
                number: cardNumber,
                type: typeCard,
                cvv2: '123',
                expire_year: expireYear,
                expire_month: expireMonth
            },
            {
                total: totalPrice,
                currency: 'CAD'
            },
            function(error, results){
                if(error){
                    //Deal with Error
                    console.log(error);
                    alert(TAPi18n.__("MsgFailPaypal"));
                    return false;
                }

                else{
                    //results contains:
                    //  saved (true or false)
                    //  if false: "error" contains the reasons for failure
                    //  if true: "payment" contains the transaction information
                    alert(TAPi18n.__("MsgConfirmationNo") + doc._id);
                    alert(TAPi18n.__("MsgSuccessPaypal") + results.payment.id);
                    doc.paypalConfirmationNb = results.payment.id;
                    Meteor.call("addCommand", doc);
                    console.log(results);
                    Router.go("commands");
                }
            });

    },
    "click [data-action=changeAddress]": function () {
        var address = $("#addressSelection").find(":selected").text();
        selectedAddress.set(address);
    }
});
