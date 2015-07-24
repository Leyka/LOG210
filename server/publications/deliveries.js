Meteor.publish("deliveries", function () {
    return Deliveries.find();
});
Meteor.publish("deliverymanDeliveries", function (deliveryman) {
    check(deliveryman, Match.Any);
    return Deliveries.find({deliveryman: deliveryman});
});