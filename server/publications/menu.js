/**
 *  Publish a list of menus to the subscribers
 *  1st arg: name of the publication
 *  2nd arg: data we want to return
 */

Meteor.publish("menus", function () {
    return Menus.find();
});

Meteor.publish("menu", function (id) {
    check(id, Match.Any);
    return Menus.find({"_id": id});
});
