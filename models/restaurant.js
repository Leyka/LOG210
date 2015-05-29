Restaurants = new Mongo.Collection('restaurants');

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