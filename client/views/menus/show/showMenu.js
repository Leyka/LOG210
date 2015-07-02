Template.showMenu.helpers({
    isEmpty: function() {
        return Menus.find().count() == 0;
    }
});

Template.showMenu.events({});