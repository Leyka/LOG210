Meteor.publish(null, function () {
    return Meteor.roles.find({})
});

Meteor.publish("clients", function () {
    return Meteor.users.find({"roles": ["client"]});
});