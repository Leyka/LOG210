Meteor.publish("clientCommands", function (id) {
    check(id, Match.Any);
    return Commands.find({client: id});
});

Meteor.publish("commands", function () {
    return Commands.find();
});

Meteor.publish("restaurateurCommands", function (userId) {
    check(userId, Match.Any);
    var restaurant = Restaurants.findOne({restaurateur: userId});
    return Commands.find({restaurant: restaurant._id});
});