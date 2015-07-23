Commands = new Mongo.Collection('commands');

Commands.attachSchema(
    new SimpleSchema({
        client: {
            type: String
        },
        meals: {
            type: [Object],
            label: function () {
                return TAPi18n.__("MealDescriptionLabel");
            }
        },
        "meals.$.meal": {
            type: Schemas.Meals,
            label: function () {
                return TAPi18n.__("MealNameLabel");
            }
        },
        "meals.$.quantity": {
            type: Number,
            label: function () {
                return TAPi18n.__("MealQuantityLabel");
            }
        },
        dateTime: {
            type: Date,
            label: function () {
                //return TAPi18n.__("DateTimeLabel");
                return "Date et heure";
            },
            autoform: {
                afFieldInput: {
                    type: "bootstrap-datetimepicker"
                }
            }
        },
        deliveryAddress: {
            type: String,
            label: function () {
                //return TAPi18n.__("DeliveryAddressLabel");
                return "Adresse de livraison"
            }
        },
        restaurant: {
            type: String
        },
        paypalConfirmationNb: {
            type: String,
            optional: true
        },
        total: {
            type: Number,
            decimal: true
        },
        status: {
            type: String,
            allowedValues: ["Ready", "Not Ready", "In Process", "Accepted"],
            defaultValue: "Not Ready"
        }
    })
);

// Allow Commands to CRUD in client
Commands.allow({
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