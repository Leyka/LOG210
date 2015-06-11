Template.addRestaurantForm.helpers({
    restaurateurs: function(){
        return Meteor.users.find();
    }
});

Template.addRestaurantForm.events({

    "click [data-action=AddRestaurant]": function () {
        alert('Ajout éffectué!\n' +
        'Aucun restaurateur choisit');


    }
});