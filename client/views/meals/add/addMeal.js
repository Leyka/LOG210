Template.addMeal.helpers({});

Template.addMeal.events({
    "submit #addMealForm": function () {
        var doc = AutoForm.getFormValues('addMeal').insertDoc;
    }
});