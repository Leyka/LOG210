Meals = new Mongo.Collection('meals');
Schemas = {};
Schemas.Meals = new SimpleSchema({
    name: {
        type: String,
        label: function () {
            return TAPi18n.__("MealNameLabel");
        }
    },
    description: {
        type: String,
        label: function () {
            return TAPi18n.__("MealDescriptionLabel");
        }
    },
    price: {
        type: Number,
        decimal: true,
        min: 0.0,
        label: function () {
            return TAPi18n.__("MealPriceLabel");
        }
    }
});
Meals.attachSchema(Schemas.Meals);

// Allow Meals to CRUD in client
Meals.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});