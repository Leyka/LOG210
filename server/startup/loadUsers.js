function loadUser(user) {
    var userAlreadyExists = Meteor.users.find({"emails.address": user.email}).count();

    if (userAlreadyExists == 0) {
        var id = Accounts.createUser(user);
        if (user.roles.length > 0) {
            Roles.addUsersToRoles(id, user.roles);
        }
    }
}

Meteor.startup(function () {
    var users = YAML.eval(Assets.getText('users.yml'));

    for (key in users) if (users.hasOwnProperty(key)) {
        loadUser(users[key]);
    }
});