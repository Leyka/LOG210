Restaurant = new Mongo.Collection('restaurant');

Restaurant.attachSchema(
    new SimpleSchema({

        name: {
         type: String,
         label: function() {
             return TAPi18n.__("RestaurantNameLabel");
         }
        }
    })
);