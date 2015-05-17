Template.header.helpers({
    languages: function () {
        return [
            {id: "en", value: "English", selected: GetUserLanguage() == "en" ? "selected" : ""},
            {id: "fr", value: "Français", selected: GetUserLanguage() == "fr" ? "selected" : ""}
        ]
    }
});

Template.header.events({
    'click [data-action="SignOut"]': function () {
        Meteor.logout();
        Router.go('/');
    },
    'change #languageSelect': function (event) {
        SetUserLanguage(event.target.selectedOptions[0].id);
    }
});

