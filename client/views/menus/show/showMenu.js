Template.showMenu.helpers({
    isEmpty: function () {
        return Menus.find().count() == 0;
    },
    meals: function () {
        var menu = Menus.findOne();
        return menu.meals;
    },
    mealName: function () {
        return Menus.findOne().name;
    }
});

Template.showMenu.events({});