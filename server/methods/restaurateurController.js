Meteor.methods({
        addRestaurateur: function (doc) {
            check(doc, Match.Any);
            var id = Accounts.createUser(doc);
            if (doc.restaurant != null) {
                Meteor.call("assignRestaurateur", {restaurant: doc.restaurant, _id: id});
            }
            Roles.addUsersToRoles(id, "restaurateur");
        },
        editRestaurateur: function (doc) {
            check(doc, Match.Any);
            if (doc.password != null && doc.password != "") {
                Accounts.setPassword(doc._id, doc.password);
            }
            Meteor.users.update(
                {_id: doc._id},
                {
                    $set: {
                        "profile.fullName": doc.profile.fullName,
                        "profile.birthday": doc.profile.birthday,
                        "profile.addresses": doc.profile.addresses,
                        "profile.phoneNumber": doc.profile.phoneNumber
                    }
                }
            );
            if (doc.restaurant != null) {
                Meteor.call("assignRestaurateur", {restaurant: doc.restaurant, _id: doc._id});
            }
        },
        deleteRestaurateur: function (doc) {
            check(doc, Match.Any);
            Meteor.users.remove(doc);
        }
    }
);