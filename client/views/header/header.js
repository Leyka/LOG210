Template.header.helpers({
    languages: function () {
        return [
            {id: "en", value: "English", active: GetUserLanguage() == "en" ? "active" : ""},
            {id: "fr", value: "Français", active: GetUserLanguage() == "fr" ? "active" : ""}
        ]
    },
    currentLanguage: function () {
        return GetUserLanguage() == "en" ? "English" : "Français";
    },
    userName: function () {
        if (isNotEmpty(Meteor.user()) && isNotEmpty(Meteor.user().profile && isNotEmpty(Meteor.user().profile.fullName)))
            return Meteor.user().profile.fullName;
    }
});

Template.header.events({
    'click [data-action="SignOut"]': function () {
        Meteor.logout();
        Router.go('/');
    },
    'click .languageSelect': function (event) {
        SetUserLanguage(event.target.id);
    }
});

