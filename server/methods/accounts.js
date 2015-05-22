Meteor.methods({
        editAccount: function (doc) {
            check(doc, Match.Any);
            var userId = Meteor.userId()
            if (doc.services != null) {
                Accounts.setPassword(userId, doc.services.password);
            }
            Meteor.users.update({_id: userId}, {
                $set: {
                    "profile.address": doc.profile.address,
                    "profile.phoneNumber": doc.profile.phoneNumber
                }
            });
        }
    }
);