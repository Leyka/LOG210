Template.meals.helpers({
    meals: function(){
        return Meals.find();
    },
    isEmpty: function() {
        return Meals.find().count() == 0;
    }
});

Template.meals.events({
    "click .removeMeal": function () {
        var id = this._id;
        Meteor.call("removeMeal", id);
        alert(TAPi18n.__("MealDeletedMessage"));
    }
});