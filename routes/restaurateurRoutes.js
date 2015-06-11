Router.route('/restaurateurs', {
    name: 'restaurateurs',
    waitOn: function () {
        return [Meteor.subscribe("restaurateurs"),
            Meteor.subscribe("restaurants")];
    },
    action: function () {
        this.render('restaurateurs');
        SEO.set({title: "Restaurateurs"});
    }
});

Router.route('/addRestaurateurs', {
    name: 'addRestaurateurs',
    waitOn: function () {
        return Meteor.subscribe("restaurants");
    },
    action: function () {
        this.render('addRestaurateurs');
        SEO.set({title: "Add Restaurateurs"});
    }
});

Router.route('/modifyRestaurateur/:_id', {
    name: 'modifyRestaurateur',
    waitOn: function () {
        return [Meteor.subscribe("restaurateur", this.params._id), Meteor.subscribe("restaurants")];
    },
    action: function () {
        var id = this.params._id;
        this.render('modifyRestaurateur', {
            data: {
                restaurateur: function () {
                    return Meteor.users.findOne({_id: id})
                }
            }
        });
        SEO.set({title: "Modify Restaurateur"});
    }
});