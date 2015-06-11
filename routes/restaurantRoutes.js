// GET a list of restaurants
Router.route('/restaurants', {

    name: 'restaurants',
    waitOn: function(){
        return Meteor.subscribe("restaurants");
    },
    action: function(){
        this.render('restaurants'); // Template name
        SEO.set({title: "Restaurants"});
    }
});

Router.route('/restaurants/add', {

    name: 'newRestaurant',
    action: function(){
        this.render('addRestaurantForm');
        SEO.set({title: TAPi18n.__("NewRestaurantTitle")});
    }
});

