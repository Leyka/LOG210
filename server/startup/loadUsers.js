/**
 * Function that loads the specified user into the system.
 * @param user The user to be loaded.
 */
loadUser = function (user) {
    var userAlreadyExists = typeof Meteor.users.findOne({username: user.username}) === 'object';

    if (!userAlreadyExists) {
        Accounts.createUser(user);
    }
};

Meteor.startup(function () {
    var users = YAML.eval(Assets.getText('users.yml'));

    for (var key in users) if (users.hasOwnProperty(key)) {
        loadUser(users[key]);
    }
});