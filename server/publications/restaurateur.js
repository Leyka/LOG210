Meteor.publish("restaurateurs", function () {
    return Meteor.users.find({"roles": "restaurateur"});
});

Meteor.publish("restaurateur", function (id) {
    check(id, Match.Any);
    return Meteor.users.find({"_id": id, "roles": "restaurateur"});
});