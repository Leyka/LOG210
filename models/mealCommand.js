MealCommand = new Mongo.Collection('mealCommands');

MealCommand.attachSchema(
    new SimpleSchema({
        name: {
            type: String,
            label: function() {
                return TAPi18n.__("MealNameLabel");
            }
        },
        meal: {
            type: String
        },
        command: {
            type: String
        },
    })
);