Template.editMeal.helpers({});

Template.editMeal.events({
    "submit #editMealForm": function () {
        var doc = AutoForm.getFormValues('editMealForm').updateDoc;
    }
});