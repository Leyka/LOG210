Template.addMenu.helpers({});

Template.addMenu.events({
    "submit #addMenuForm": function () {
        var doc = AutoForm.getFormValues('addMenu').insertDoc;
    }
});