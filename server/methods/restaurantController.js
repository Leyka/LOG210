Meteor.methods({
        removeRestaurant: function (id) {
            check(id, Match.Any);
            Restaurants.remove(id);
        },
        assignRestaurateur: function (restaurateur) {
            check(restaurateur, Match.Any);
            Restaurants.update(
                {_id: restaurateur.restaurant},
                {
                    $set: {
                        restaurateur: restaurateur._id
                    }
                }
            )
        }
    }
);