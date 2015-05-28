// GET a list of restaurants
Router.route('/restaurants', {

    name: 'restaurants',
    waitOn: function(){
        return Meteor.subscribe("restaurants");
    },
    data: {
        restaurants: function(){
            return Restaurant.find();
        }
    },
    action: function(){
        this.render('restaurants'); // Template name
        SEO.set({title: "Restaurants"});
    }
});

