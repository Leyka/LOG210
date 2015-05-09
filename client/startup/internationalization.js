/**
 * Gets the current users language.
 * @returns {*} The users current language.
 */
GetUserLanguage = function () {
    var language = Session.get('language');

    if (language == null) {
        SetUserLanguage('fr');
        return Session.get('language');
    }
    return language;
};

/**
 * Sets the current users language to the specified language.
 * @param lang The users selected language.
 */
SetUserLanguage = function (lang) {
    localStorage.setItem('language', lang);
    Session.set('language', localStorage.getItem('language'));
    TAPi18n.setLanguage(GetUserLanguage());
};

Meteor.startup(function () {
    TAPi18n.setLanguage(GetUserLanguage());
});