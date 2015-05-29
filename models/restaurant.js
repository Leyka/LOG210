Restaurants = new Mongo.Collection('restaurant');

Restaurants.attachSchema(

    new SimpleSchema({

        name: {
         type: String,
         label: function() {
             return TAPi18n.__("RestaurantNameLabel");
         }
        }
    })
);
