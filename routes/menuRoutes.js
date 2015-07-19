Router.route('/menus/:_resto_id/add', {
    name: 'newMenu',
    waitOn: function () {
        return [Meteor.subscribe("menu"), Meteor.subscribe("restaurants")];
    },
    action: function () {
        var restoId = this.params._resto_id;
        this.render('addMenu', {
            data: {
                restaurantId: restoId
            }
        });
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

Router.route('/menus/:_resto_id', {
    name: 'showMenu',
    waitOn: function () {
        return [Meteor.subscribe("menu", this.params._resto_id), Meteor.subscribe("restaurants")];
    },
    action: function () {
        var restoId = this.params._resto_id;
        this.render('showMenu', {
            data: {
                restaurantId: restoId
            }
        });
        SEO.set({title: TAPi18n.__("ShowMenuTitle")});
    }
});