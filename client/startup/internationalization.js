/**
 * Gets the current users language.
 * @returns {*} The users current language.
 */
GetUserLanguage = function () {
    var language = Session.get('language');
    if (language == null) {
        language = localStorage.getItem('language');
    }
    return language == null ? 'fr' : language;
};

/**
 * Sets the current users language to the specified language.
 * @param lang The users selected language.
 */
SetUserLanguage = function (lang) {
    localStorage.setItem('language', lang);
    Session.set('language', localStorage.getItem('language'));
    TAPi18n.setLanguage(lang);
    T9n.setLanguage(lang);
    GoogleMaps.load({
        'sensor': true, //optional
        'language': lang,  //optional
        'libraries': 'places,directions'
    });
};

Meteor.startup(function () {
    SetUserLanguage(GetUserLanguage());
});