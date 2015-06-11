Restaurants = new Mongo.Collection('restaurants');

Restaurants.attachSchema(
    new SimpleSchema({
        name: {
         type: String,
         label: function() {
             return TAPi18n.__("RestaurantNameLabel");
         }
        },
        address: {
            type: String,
            label: function() {
                return TAPi18n.__("RestaurantAddressLabel");
            }
        },
        restaurateur: {
            type: String,
            optional: true,
            label: function() {
                return TAPi18n.__("RestaurantRestaurateurLabel");
            }
        }
    })
);

// Allow Restaurants to CRUD in client
Restaurants.allow({
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    }
});