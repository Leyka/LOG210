// GET a list of restaurants
Router.route('/restaurants', {

    name: 'restaurants',
    waitOn: function () {
        return [Meteor.subscribe("restaurateurs"), Meteor.subscribe("restaurants")];
    },
    action: function () {
        this.render('restaurants'); // Template name
        SEO.set({title: "Restaurants"});
    }
});

Router.route('/restaurants/add', {

    name: 'newRestaurant',
    waitOn: function () {
        return Meteor.subscribe("restaurateurs");
    },
    action: function () {
        this.render('addRestaurant');
        SEO.set({title: TAPi18n.__("NewRestaurantTitle")});
    }
});

Router.route('/restaurants/edit/:_id', {
    name: 'editRestaurant',
    waitOn: function () {
        return [Meteor.subscribe("restaurant", this.params._id), Meteor.subscribe("restaurateurs")];
    },
    action: function () {
        var id = this.params._id;
        this.render('editRestaurant', {
            data: {
                restaurant: function () {
                    return Restaurants.findOne({_id: id})
                }
            }
        });
        SEO.set({title: TAPi18n.__("EditRestaurantTitle")});
    }
});

Router.route('/restaurants/:_id', {
    name: 'showRestaurant',
    waitOn: function () {
        return [Meteor.subscribe("restaurant", this.params._id), Meteor.subscribe("restaurateurs")];
    },
    action: function () {
        var id = this.params._id;
        var restaurateurId = Restaurants.findOne({_id: id}).restaurateur;
        var restaurateurName = null;
        if (restaurateurId != null) {
            var restaurateur = Meteor.users.findOne({_id: restaurateurId});
            restaurateurName = restaurateur.profile.fullName;
        } else {
            restaurateurName = TAPi18n.__("NoRestaurateurAssigned");
        }
        this.render('showRestaurant', {
            data: {
                restaurant: function () {
                    return Restaurants.findOne({_id: id})
                },
                restaurateurName: restaurateurName
            }
        });
        SEO.set({title: TAPi18n.__("ShowRestaurantTitle")});
    }
});
