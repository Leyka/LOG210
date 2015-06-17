Template.editMenu.helpers({});

Template.editRestaurant.events({
    "submit #editMenuForm": function () {
        var doc = AutoForm.getFormValues('editMenuForm').updateDoc;
    }
});