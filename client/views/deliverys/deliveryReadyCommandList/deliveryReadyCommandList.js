Template.deliveryReadyCommandList.helpers({
    commands: function () {
        return Commands.find();
    },
    isEmpty: function () {
        return Commands.find().count() == 0;
    }
});
var renderedTemplate = new ReactiveVar();
var selectedCommand = new ReactiveVar();
Template.deliveryReadyCommandList.events({
    "click [data-action=SelectCommand]": function (event) {
        if (renderedTemplate.get() != null) {
            Blaze.remove(renderedTemplate.get());
        }
        var buttonId = event.target.id.split('+');
        var restaurantId = buttonId[0];
        var restaurant = Restaurants.findOne({_id: restaurantId});
        var restaurantAddress = restaurant.address;
        var commandAddress = buttonId[1];
        selectedCommand.set(buttonId[2]);
        var data = {
            restaurantAddress: restaurantAddress,
            commandAddress: commandAddress
        };
        var parentNode = $("#map")[0];
        renderedTemplate.set(Blaze.renderWithData(Template.deliveryCommandMap, data, parentNode));
    },
    "click [data-action=AcceptCommand]": function () {
        Deliveries.insert({deliveryman: Meteor.userId(), command: selectedCommand.get()});
        alert(TAPi18n.__("CommandConfirmedAlert"));
    }
});