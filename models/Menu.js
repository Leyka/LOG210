Menus = new Mongo.Collection('menus');

Menus.attachSchema(
    new SimpleSchema({
        name: {
            type: String,
            label: function () {
                return TAPi18n.__("MenuNameLabel");
            }
        },
        restaurant: {
            type: String,
            autoform: {
                type: 'hidden'
            }
        },
        meals: {
            type: [Object]
        },
        "meals.$.name": {
            type: String,
            label: function () {
                return TAPi18n.__("MealNameLabel");
            }
        },
        "meals.$.description": {
            type: String,
            optional: true,
            label: function () {
                return TAPi18n.__("MealDescriptionLabel");
            }
        },
        "meals.$.price": {
            type: Number,
            decimal: true,
            min: 0.0,
            label: function () {
                return TAPi18n.__("MealPriceLabel");
            }
        }
    })
);

// Allow Menus to CRUD in client
Menus.allow({
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