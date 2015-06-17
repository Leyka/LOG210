/**
 *  Publish a list of meals to the subscribers
 *  1st arg: name of the publication
 *  2nd arg: data we want to return
 */

Meteor.publish("meals", function () {
    return Meals.find();
});

Meteor.publish("meal", function (id) {
    check(id, Match.Any);
    return Meals.find({"_id": id});
});