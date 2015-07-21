Template.addMenu.helpers({});

Template.addMenu.events({
    "submit #addMenuForm": function () {
        var doc = AutoForm.getFormValues('addMenu').insertDoc;
        var missingDescription = false;
        for (var i = 0; i != doc.meals.length; ++i) {
            if (doc.meals[i].description == null || doc.meals[i].description.length == 0) {
                missingDescription = true;
            }
        }
        if (missingDescription) {
            alert(TAPi18n.__("MealNoDescriptionAlert"));
        }
    }
});