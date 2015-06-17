// GET a list of meals
Router.route('/meals', {

    name: 'meals',
    waitOn: function () {
        return [Meteor.subscribe("meals"), Meteor.subscribe("menus")];
    },
    action: function () {
        this.render('meals'); // Template name
        SEO.set({title: "Meals"});
    }
});

Router.route('/meals/add', {

    name: 'newMeal',
    waitOn: function () {
        return Meteor.subscribe("meals");
    },
    action: function () {
        this.render('addMeal');
        SEO.set({title: TAPi18n.__("NewMealTitle")});
    }
});

Router.route('/meals/edit/:_id', {
    name: 'editMeal',
    waitOn: function () {
        return [Meteor.subscribe("meal", this.params._id), Meteor.subscribe("menus")];
    },
    action: function () {
        var id = this.params._id;
        this.render('editMeal', {
            data: {
                meal: function () {
                    return Meals.findOne({_id: id})
                }
            }
        });
        SEO.set({title: TAPi18n.__("EditMealTitle")});
    }
});

Router.route('/meals/:_id', {
    name: 'showMeal',
    waitOn: function () {
        return [Meteor.subscribe("meal", this.params._id), Meteor.subscribe("menus")];
    },
    action: function () {
        var id = this.params._id;
        this.render('showMeal', {
            data: {
                meal: function () {
                    return Meals.findOne({_id: id})
                }
            }
        });
        SEO.set({title: TAPi18n.__("ShowMealTitle")});
    }
});
