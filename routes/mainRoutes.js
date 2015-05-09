/**
 * The route for the main page.
 */
Router.route('/', {
    name: 'home',
    action: function () {
        this.render('home');
        SEO.set({title: 'Home - ' + TAPi18n.__("AppName")});
    }
});