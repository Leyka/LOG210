Template.addMenu.helpers({});

Template.addMenu.events({
    "submit #addMenuForm": function () {
        if(meals[0].description == null){
            alert("AYE");
        }
        var doc = AutoForm.getFormValues('addMenu').insertDoc;
        var missingDescription = false;
        for(var i=0;i != doc.meals; ++i){
            if(doc.meals[i].description == null || doc.meals[i].description.length == 0){
                missingDescription = true;
            }
        }
        if(missingDescription){
            alert("there is a meal without description");
        }
    }
});