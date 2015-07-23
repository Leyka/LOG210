/**
 *  Publish a list of restaurants to the subscribers
 *  1st arg: name of the publication
 *  2nd arg: data we want to return
 */

Meteor.publish("restaurants", function () {
    return Restaurants.find();
});

Meteor.publish("restaurantsRestaurateur", function (userId) {
    check(userId, Match.Any);
    return Restaurants.find({restaurateur: userId});
});

Meteor.publish("restaurant", function (id) {
    check(id, Match.Any);
    return Restaurants.find({"_id": id});
});