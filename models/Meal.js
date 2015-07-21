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
        optional: true,
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