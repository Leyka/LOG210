// GET a list of meals
Router.route('/commands', {
    name: 'commands',
    waitOn: function () {
        return Meteor.subscribe("clientCommands", Meteor.userId());
    },
    action: function () {
        this.render('commands'); // Template name
        SEO.set({title: "Commands"});
    }
});

Router.route('/commands/add', {
    name: 'addCommand',
    waitOn: function () {
        return [Meteor.subscribe("restaurateurs"), Meteor.subscribe("restaurants")];
    },
    action: function () {
        this.render('addCommandRestaurants');
        SEO.set({title: "Add Command"});
    }
});

Router.route('/commands/add/:_id', {
    name: 'addCommandRestaurant',
    waitOn: function () {
        return [Meteor.subscribe("menu", this.params._id)];
    },
    action: function () {
        this.render('addCommandMenus');
        SEO.set({title: "Add Command"});
    }
});

Router.route('/commands/complete', {
    name: "completeCommand",
    waitOn: function () {
        return [Meteor.subscribe("restaurateurs")];
    },
    action: function () {
        this.render("completeCommand");
        SEO.set({title: "Complete Command"});
    }
});