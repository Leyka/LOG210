Template.restaurants.helpers({
    restaurants: function(){
        return Restaurants.find();
    },
    restaurateurs: function(){
        return Meteor.users.find();
    }
});


Template.restaurants.events({
    "click [data-action=AddRestaurant]": function () {
            alert('Ajout �ffectu�!\n' +
                'Aucun restaurateur choisit');
    }
});