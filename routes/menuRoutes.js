// GET a list of Menus
Router.route('/menus', {

    name: 'menus',
    waitOn: function () {
        return [Meteor.subscribe("menus"), Meteor.subscribe("restaurants")];
    },
    action: function () {
        this.render('menus'); // Template name
        SEO.set({title: "Menus"});
    }
});

Router.route('/menus/add', {

    name: 'newMenu',
    waitOn: function () {
        return [Meteor.subscribe("menu"), Meteor.subscribe("restaurants")];
    },
    action: function () {
        this.render('addMenu');
        SEO.set({title: TAPi18n.__("NewMenuTitle")});
    }
});

Router.route('/menus/edit/:_id', {
    name: 'editMenu',
    waitOn: function () {
        return [Meteor.subscribe("menu", this.params._id), Meteor.subscribe("restaurants")];
    },
    action: function () {
        var id = this.params._id;
        this.render('editMenu', {
            data: {
                menu: function () {
                    return Menu.findOne({_id: id})
                }
            }
        });
        SEO.set({title: TAPi18n.__("EditMenuTitle")});
    }
});

Router.route('/menus/:_id', {
    name: 'showMenu',
    waitOn: function () {
        return [Meteor.subscribe("menu", this.params._id), Meteor.subscribe("restaurants")];
    },
    action: function () {
        var id = this.params._id;
        this.render('showMenu', {
            data: {
                menu: function () {
                    return Menus.findOne({_id: id})
                }
            }
        });
        SEO.set({title: TAPi18n.__("ShowMenuTitle")});
    }
});
