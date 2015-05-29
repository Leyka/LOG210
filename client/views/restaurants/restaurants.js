Template.restaurants.helpers({
    restaurants: function(){
        return Restaurant.find();
    }
});

Template.restaurants.events({}); 