Meteor.publish("clientCommands", function (id) {
    check(id, Match.Any);
    return Commands.find({client: id});
});

Meteor.publish("commands", function () {
    return Commands.find();
});