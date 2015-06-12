Meteor.methods({
        removeRestaurant: function (id) {
            check(id, Match.Any);
            Restaurants.remove(id);
        }
    }
);