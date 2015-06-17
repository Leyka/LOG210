Meteor.methods({
        removeMenu: function (id) {
            check(id, Match.Any);
            Menus.remove(id);
        }
    }
);
