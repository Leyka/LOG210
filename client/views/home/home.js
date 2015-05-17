Template.home.helpers({
    userName: function () {
        return Meteor.user().profile.fullName;
    }
});

Template.home.events({});