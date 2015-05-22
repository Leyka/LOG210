// GET a list of restaurants
Router.route('/restaurants', {

    name: 'restaurants',
    data: {restaurants: function(){return Restaurant.find();}},
    waitOn: function(){return Meteor.subscribe("restaurants");},
    action: function(){
        this.render('restaurants'); // Template name
        SEO.set({title: "Restaurants"});
    }
});

