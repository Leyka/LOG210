Schema = {};

Schema.UserProfile = new SimpleSchema({
    fullName: {
        type: String,
        label: function () {
            return TAPi18n.__("FullNameLabel");
        }
    },
    birthday: {
        type: Date,
        label: function () {
            return TAPi18n.__("BirthdayLabel");
        }
    },
    address: {
        type: String,
        optional: true,
        label: function () {
            return TAPi18n.__("AddressLabel");
        }
    },
    addresses: {
        type: [String],
        minCount: 1,
        label: function () {
            return TAPi18n.__("AddressLabel");
        }
    },
    phoneNumber: {
        type: String,
        label: function () {
            return TAPi18n.__("PhoneNumberLabel");
        }
    }
});

Schema.User = new SimpleSchema({
    emails: {
        type: [Object]
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: function () {
            return TAPi18n.__("EmailAddressLabel");
        }
    },
    "emails.$.verified": {
        type: Boolean
    },
    createdAt: {
        type: Date,
        optional: true
    },
    profile: {
        type: Schema.UserProfile,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    "services.password": {
        type: String,
        optional: true,
        blackbox: true,
        label: function () {
            return TAPi18n.__("PasswordLabel");
        }
    },
    roles: {
        type: [String],
        optional: true,
        blackbox: true,
        allowedValues: ['entrepreneur', 'restaurateur', 'client', 'deliveryman'],
        defaultValue: ["client"]
    }
});

Meteor.users.attachSchema(Schema.User);