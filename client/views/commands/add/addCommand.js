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
var totalPrice = 0 ;
Template.completeCommand.helpers({
    selectedMeals: function () {
        return Session.get("commandMeals");
    },
    totalPrice: function() {
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


        // Paypal
        Meteor.Paypal.authorize({
                name: doc.client,
                number: '4214029581057430',
                type: 'visa',
                cvv2: '123',
                expire_year: '2020',
                expire_month: '07'
            },
            {
                total: totalPrice,
                currency: 'CAD'
            },
            function(error, results){
                if(error){
                    //Deal with Error
                    console.log(error);
                }

                else{
                    //results contains:
                    //  saved (true or false)
                    //  if false: "error" contains the reasons for failure
                    //  if true: "payment" contains the transaction information

                    Meteor.call("addCommand", doc);
                    alert(TAPi18n.__("ConfirmationNumberAlert") + doc._id);
                    Router.go("commands");
                }
            });

    },
    "click [data-action=changeAddress]": function () {
        var address = $("#addressSelection").find(":selected").text();
        selectedAddress.set(address);
    }
});
