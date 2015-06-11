Meteor.methods({
        addRestaurateur: function (doc) {
            check(doc, Match.Any);
            var id = Accounts.createUser(doc);
            Roles.addUsersToRoles(id, "restaurateur");
        },
        editRestaurateur: function (doc) {
            check(doc, Match.Any);
            if (doc.password != "") {
                Accounts.setPassword(doc._id, doc.password);
            }
            Meteor.users.update(
                {_id: doc._id},
                {
                    $set: {
                        "profile.fullName": doc.profile.fullName,
                        "profile.birthday": doc.profile.birthday,
                        "profile.address": doc.profile.address,
                        "profile.phoneNumber": doc.profile.phoneNumber,
                        "profile.restaurant": doc.profile.restaurant
                    }
                }
            )
        },
        deleteRestaurateur: function (doc) {
            check(doc, Match.Any);
            Meteor.users.remove(doc);
        }
    }
);