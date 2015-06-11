Template.restaurants.helpers({
    restaurants: function(){
        return Restaurants.find();
    }
});

Template.restaurants.events({
    "click .delete": function () {
        Restaurants.remove(this._id);
    }
});