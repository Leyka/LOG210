Meteor.methods({
        editAccount: function (doc) {
            check(doc, Match.Any);
            if (doc.services != null) {
                Accounts.setPassword(doc.services.password);
            }
            Meteor.users.update({_id: Meteor.userId()}, {
                $set: {
                    "profile.address": doc.profile.address,
                    "profile.phoneNumber": doc.profile.phoneNumber
                }
            });
        }
    }
);